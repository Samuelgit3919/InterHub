# Simple Node.js Web Server

This is a simple Node.js web server built with Express.js that responds to three specific routes with static messages. This project serves as a great introduction to backend development.

## Routes

The server has the following routes:

1. **GET /name**
   - **Response**: Returns your full name as plain text.
   - **Example Response**: `Samuel Habtamu`

2. **GET /hobby**
   - **Response**: Returns your favorite hobby as a JSON object.
   - **Example Response**: 
     ```json
     {
       "hobby": "Coding and exploring new technologies"
     }
     ```

3. **GET /dream**
   - **Response**: Returns a motivational message about your dream or goal in life as plain text.
   - **Example Response**: `My dream is to become a full-stack developer and make a positive impact in the tech world.`

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## Setup and Usage

Follow these steps to set up and run the server locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Samuelgit3919/InterHub.git


Navigate into the project directory:

    cd InterHub
    
Install dependencies:

    npm install
    
Start the server:
    
    node index.js

    
Test the routes:
Open your browser or use a tool like Postman to test the following routes:

    http://localhost:3000/name
    http://localhost:3000/hobby
    http://localhost:3000/dream

    
Deployment
The server is also deployed online and can be accessed at the following link:

    https://inter-hub.vercel.app/
