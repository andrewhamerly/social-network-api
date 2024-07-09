# Social Network API MongoDB
This repository contains the implementation of a social network API built with MongoDB, Express.js, and Mongoose ODM. This API allows users to share their thoughts, react to friends' thoughts, and create a friend list, providing a backend foundation for a social network web application.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Features

- **User Management**: Create, update, and delete users.
- **Thought Management**: Create, update, and delete thoughts posted by users.
- **Reaction Management**: Add and remove reactions to thoughts.
- **Friend Management**: Add and remove friends from a user's friend list.
- **NoSQL Database**: Uses MongoDB for handling large amounts of unstructured data efficiently.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/andrewhamerly/social-network-api.git
   ```

2. **Navigate to the project directory:**
    ```bash
    cd social-network-api
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Start the application:**
    ```bash
    npm start
    ```

2. **Testing the API routes:**
    Use Insomnia or a similar API client to test the following routes:
    ### Users
    - GET `/api/users` Get all users.
    - POST `/api/users` Create a new user.
    - PUT `/api/users/:userId` Update a user by ID.
    - DELETE `/api/users/:userId` Delete a user by ID.
    - POST `/api/users/:userId/friends/:friendId` Add a friend to a user's friend list.
    - DELETE `/api/users/:userId/friends/:friendId` Remove a friend from a user's friend list.
    ### Thoughts
    - GET `/api/thoughts` Get all thoughts.
    - POST `/api/thoughts` Create a new thought.
    - PUT `/api/thoughts/:thoughtId` Update a thought by ID.
    - DELETE `/api/thoughts/:thoughtId` Delete a thought by ID.
    ### Reactions
    - POST `/api/thoughts/:thoughtId/reactions` Add a reaction to a thought.
    - DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` Remove a reaction from a thought.

## Walkthrough Video

[Click here to watch the walkthrough video](https://drive.google.com/file/d/1wtbHc_2JTjLM4eJ-wUGBa--nY75Z_LA8/view?usp=sharing)

## Technologies Used

- **Express.js**: For building the API routes and handling requests.
- **MongoDB**: A NoSQL database chosen for its flexibility and performance with large datasets.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to define schemas and interact with the database.
- **Insomnia**: Used for testing the API endpoints.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## Questions

If you have any questions about the project, please feel free to contact me via email at [contact@andrewhamerly.com](mailto:contact@andrewhamerly.com). You can also find more of my work on [GitHub](https://github.com/andrewhamerly).