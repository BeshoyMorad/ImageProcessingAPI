# Image Processing API

First Project of Udacity Scholarship Advanced Full-Stack Web Development

## 📙 About

- Simple api that can resize jpg images with specified width and height.

## 💻 Features

- You can put your image in a folder and send a request to the api with
  the name of the image, width, and height then you will get your processed image as a response.
- It can also cache the processed image to get it back if needed again.

## List of scripts

- npm start build
> used to compile the typescript files

- npm start lint
> used to see if there is any errors


- npm start lint:fix
> used to fix the errors if any

- npm start format
> used to format the code using prettier

- npm start test
> used to test the project using jasmine

- npm start dev
> used to run the server in development mode [typescript]

- npm start prod
> used to run the server in production mode [javascript]

## Endpoints

- '/'
> used to access the welcome page

- /api/resize?fileName={ image name }&width={ required width }&height={ required height }
> used to resize the image
