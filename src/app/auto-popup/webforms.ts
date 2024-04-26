export function loadFeedbackScript(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://s3.us-west-2.amazonaws.com/feedback.ajua.com/embed/v1/embed.js';
    script.async = true;

    script.onload = () => {
      const loadWebform = () => {
        const container = document.getElementById('embedding');
        if (container && (window as any).createWebform) {
          (window as any).createWebform(container, {
            joinCode: 'I2SSQB',
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
    (window as any).openModal();
  }
}
