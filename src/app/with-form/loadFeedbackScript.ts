import { TJoinCode, joinCodes } from '../../../types';
import { config } from '../../../config';

let scriptLoaded = false;
let scriptIsValid = false;

export function loadFeedbackScript(joinCode: TJoinCode): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = config.production.url;
    script.async = true;

    script.onload = () => {
      scriptLoaded = true;
      const loadWebform = () => {
        const container = document.getElementById('embedding');
        if (container && (window as any).createWebform) {
          (window as any).createWebform(container, {
            joinCode: joinCode || joinCodes.ICEA.code,
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
    scriptIsValid = true;
    window.postMessage({
      message: 'webform-initialization-successful',
    });
  }
}
