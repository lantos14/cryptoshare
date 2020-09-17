# Cryptoshare

## Setup

1. get the repo: `git clone https://github.com/lantos14/cryptoshare.git`
2. install dependencies: `npm i`

## How to start the app

1. `node server`

    This scripts starts a simple node server to handle interaction between multiple app instances

2. `npm start`

    this script starts the application at [http://localhost:3000](http://localhost:3000)

## How to use the app

- ### If you want to send an encrypted message

    1. Click on the 'Generate URL'
    2. Copy the URL generated and send it to the receiver user
    3. Start typing in the text area

- ### If you want to receive an encrypted message

    1. Ask the sender user to give you an URL
    2. Open the received URL and wait for the sender's input
    3. You will see the text message in the text area


- Small Notes

    - The receiver cannot edit the received text message
    - The receiver will only see the messages, which were sent after He/She started a session (opened the provided URL)

## What was used to make this app

- [create-react-app](https://github.com/facebook/create-react-app)

    It is a fast and convenient tool when it comes to put together a simple app for showcasing

- [socket.io](https://socket.io/)

    The application uses real time text sharing among multiple instances. With a simple nodejs server and socket.io,
    data streams can be shared via multiple app instances with ease.
  
- [crypto-js](https://github.com/brix/crypto-js)

    The application encrypts the data, before it sends out to the receiver client, and decrypts it at the receiver's end. The crypto-js library seemed very versatile with a lot of customization option, so I decided to use this library for encryption purposes.

## Considerations for future development

This application only handles the 'happy case', when the app is used as described above. Some things needs to be considered, if the app is developed further:

  - The app was tested only in local environment. It should be tested in deployment as well
  - The routing of the app and the folder structure sould be revised
  - Linter should be added to resolve general code formatting issues
  - Security vulnerabilites should be researched further relating the node server, and secret passphrase usage
  - Consider edge cases, possible error scenarios and update the code. Examples: 
      - more than 2 users are connecting to the app
      - wrong secret token is provided
      - sender creates a new session with new key but client stays in the old link with old key
