# Flylist - A Simple Todo Application

Flylist is a straightforward todo application built using React and Redux. It allows users to manage their tasks efficiently with features such as listing todos, changing todo states, and adding new todos. This README provides an overview of the application's functionality, setup instructions, and technical details.

## Features

1. **List Todos**: Users can view their current todos, with each todo displaying its title and state. The application initializes with some hardcoded todos to demonstrate functionality.

2. **Change Todo State**: Users can mark a todo as done by checking a box. When a todo is completed, it moves to the bottom of the list and appears crossed out.

3. **Add New Todo**: Users can add new todos to their list. The title of the todo is required, while the description is optional. Newly created todos are displayed at the top of the list.

## Installation

To run Flylist locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/doniaskima/TodoList-Interview-Challenge
   ```

2. Navigate to the project directory:
   ```
   cd TodoList-Interview-Challenge
   ```

3. Install dependencies using Yarn or npm:
   ```
   yarn install
   ```
   or
   ```
   npm install
   ```

4. Start the development server:
   ```
   yarn start
   ```
   or
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:5175` to view the application.

## Technical Details

Flylist is built using React and Redux, adhering to the following technical recommendations:

- **React and Redux**: The application utilizes React for building the user interface and Redux for managing state.
  
- **Mock Data**: Simple mock data is used to demonstrate the functionality of the application. This ensures a smooth user experience during testing and development.

- **Simple UI**: The user interface is kept simple and intuitive, focusing on usability and clarity.

- **Code Quality**: Emphasis is placed on maintaining high code quality, including readability, maintainability, and adherence to best practices.

## Feedback and Contributions

If you have any feedback or suggestions for improving Flylist, feel free to open an issue or submit a pull request on GitHub. Contributions are welcome and appreciated!

Thank you for considering Flylist for your todo management needs. Happy task organizing!

---
*This project was developed as part of a technical test for the position of React and Redux Developer at Lobium.*