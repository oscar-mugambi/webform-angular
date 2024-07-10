import { config } from '../../config/';
import { joinCodes } from '../../types';

export function loadFeedbackScript(
  joinCode = joinCodes.ICEA.code
): Promise<void> {
  const container = document.getElementById('embedding');
  const existingScript = document.getElementById('feedback-script');

  if (existingScript) {
    console.log('Feedback script already exists, initializing webform.');
    return initializeWebform(container, joinCode);
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = config.production.url;
    script.async = true;
    script.id = 'feedback-script';
    script.onload = () => {
      initializeWebform(container, joinCode).then(resolve).catch(reject);
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.head.appendChild(script);
  });
}

function initializeWebform(
  container: HTMLElement | null,
  joinCode: string
): Promise<void> {
  return new Promise<void>((resolve) => {
    const loadWebform = () => {
      if (container && (window as any).createWebform) {
        (window as any).createWebform(container, { joinCode });
        window.addEventListener('message', handlePostMessage);
        resolve();
      } else {
        setTimeout(loadWebform, 100);
      }
    };
    loadWebform();
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
    // dynamically add a participants email
    event!.source!.postMessage(
      {
        type: 'webform:participant:add', // This type must specified exactly as is
        message: 'test13@icea.com', // This should be the participant's email address or phone number
        code: 'ADD_PARTICIPANT', // This code must be passed exactly as is
      },
      (window as any).embedUrl // Ensure you specify the target of your message to be the Ajua domain, otherwise we won't intercept it
    );
  }
}
