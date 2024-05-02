# Welcome to Ajua Embedded Webforms!

This repository contains an Angular Example App, designed to demonstrate various features, including dynamically loading scripts for iframes and managing webforms within an application. 
Below you will find the setup instructions, usage details, and the API for interacting with the webforms via the global window object.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API References](#api-references)
- [Post Messages](#post-messages)



## Installation 
To get started with the Example App, clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/oscar-mugambi/webform-angular
cd webform-angular
npm install
```


## Usage
To interact with our webforms, you need to  load the necessary scripts to manage the iframe:
The script source is available at [this link](https://d3k3s4etbg1v25.cloudfront.net/embed/v1/embed.js).

1. **Embed the Container**: Make sure that your **root** HTML file contains a `div` element with the ID `embedding`. This `div` will serve as the host for the iframe. Insert the following HTML snippet at the **root index.html**

   ```html
   <div id="embedding"></div>

2. **Load the Script**: To load the script asynchronously, add a script tag to the `<head>` section of your root HTML file. This ensures the script is loaded without blocking the rest of your page content. Include the `async` attribute to enhance the performance of your webpage. Here's how to do it:

	```html
	<script src="https://d3k3s4etbg1v25.cloudfront.net/embed/v1/embed.js" async></script>
	```


## API References

**1. `createWebform(parent, config)`**: Initializes the webform inside the iframe.
- **Arguments**:
  - `parent` (HTMLElement): The container element where the webform will be embedded. This should be the element with the ID `embedding`, designated to host the iframe.
  - `config` (object): Configuration options for the webform.
    - `joinCode` (string): Code to join the webform session.
    - `height` (string): Height of the webform, default is 'auto'.
    - `width` (string): Width of the webform, default is '100%'.

**2. `openModal()`**: Opens the modal window containing the iframe.

**3. `closeModal()`**: Closes the modal window.

**4. `toggleModal()`**: Toggles the state of the modal window.


## Post Messages

To ensure the webform within the iframe has loaded successfully, you can listen for specific messages sent from the iframe to the parent window. This communication helps in confirming the initialization state of the webform. Below are the steps to set up and handle these messages:

### Setting Up the Message Listener

To listen for messages from the iframe, you need to register an event listener for `message` events on the window object. This is typically done in the main JavaScript file where you handle the rest of your web application's initialization logic.

Here's how to set up the event listener:

```javascript
window.addEventListener('message', handlePostMessage);

function handlePostMessage(event: MessageEvent) {
  if (event.origin !== config.origin) {
    return;
  }
  if (
    event.data.message === 'webform loaded' ||
    event.data.message === 'Webform is valid'
  ) {
  // If the condition in the above 'if' statement is met, it confirms
  // that the webform has loaded successfully.

  }
}
