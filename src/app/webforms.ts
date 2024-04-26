import { config } from '../../config/';

export function loadFeedbackScript(joinCode = 'IVA3BXOP'): Promise<void> {
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
  if (event.origin !== 'https://d3k3s4etbg1v25.cloudfront.net') {
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
