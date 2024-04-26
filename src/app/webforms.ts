import { config } from '../../config/';
import { joinCodes } from '../../types';

export function loadFeedbackScript(
  joinCode = joinCodes.ICEA.code
): Promise<void> {
  const container = document.getElementById('embedding');
  const isExistingScript = document.getElementById('feedback-script');
  if (isExistingScript) {
    window.removeEventListener('message', handlePostMessage);

    if (container) {
      container.innerHTML = '';
    }
    isExistingScript.remove();
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = config.production.url;
    script.async = true;
    script.id = 'feedback-script';

    script.onload = () => {
      const loadWebform = () => {
        if (container && (window as any).createWebform) {
          (window as any).createWebform(container, {
            joinCode,
          });

          window.addEventListener('message', handlePostMessage);
        }
      };

      loadWebform();
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };

    document.head.appendChild(script);
  });
}

function handlePostMessage(event: MessageEvent) {
  if (event.origin !== config.origin) {
    return;
  }
  if (
    event.data.message === 'webform loaded' ||
    event.data.message === 'Webform is valid'
  ) {
    window.postMessage({
      message: 'webform-initialization-successful',
    });
  }
}
