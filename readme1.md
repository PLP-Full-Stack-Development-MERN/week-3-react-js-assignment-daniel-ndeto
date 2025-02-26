# React Assignment: Week 3 - React.js Fundamentals

## Project Overview
This project is an assignment for Week 3 of the React.js Fundamentals module. It demonstrates the creation and usage of functional components in React, along with state management using hooks. Additionally, the project integrates Tailwind CSS for styling and adheres to best practices in project organization.

## Features
- **Header Component:** Renders a header with the project title.
- **Profile Component:** Displays user details (name and email) passed as props.
- **Counter Component:** Uses React's `useState` hook to manage a counter with an increment button.
- **Responsive Design:** Styled with Tailwind CSS to ensure a modern, responsive UI.

## Project Structure

```
react-assignment/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Profile.js
│   │   └── Counter.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/PLP-Full-Stack-Development-MERN/week-3-react-js-assignment-daniel-ndeto.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd react-assignment
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Configure Tailwind CSS:**
   - Ensure `tailwind.config.js` is configured to scan your source files:
     ```js
     module.exports = {
       content: ["./src/**/*.{js,jsx,ts,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
   - Add Tailwind's directives to your main CSS file (`src/index.css`):
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

## Running the Project

To run the project in development mode:
```bash
npm start
```
This command starts the development server and opens the application in your default browser at [http://localhost:3000](http://localhost:3000).

## Components Overview

### Header Component
- **Location:** `src/components/Header.js`
- **Description:** Renders the header with a title using Tailwind CSS for styling.

### Profile Component
- **Location:** `src/components/Profile.js`
- **Description:** Accepts `name` and `email` as props and displays them in a styled card.

### Counter Component
- **Location:** `src/components/Counter.js`
- **Description:** Implements a counter using React's `useState` hook. It displays the current count and provides a button to increment the value.

## Technologies Used
- **React.js:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Create React App:** A toolchain for setting up a React project with zero configuration.
- **Node.js & NPM:** Runtime and package manager for running and managing project dependencies.

## Testing
- **Functionality:** Ensure that all components render correctly. Test the counter by clicking the increment button.
- **Debugging:** Open the browser console to check for errors or warnings and resolve them accordingly.

## Deployment
To create a production build of the project:
```bash
npm run build
```
This command generates a `build/` directory with the optimized production files.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- Special thanks to the PLP Full Stack Development MERN team for the project guidelines.
- This project is inspired by best practices in modern React development.

![image](https://github.com/user-attachments/assets/ead45475-9b3d-46bb-8d00-7c30f62a677e)

![image](https://github.com/user-attachments/assets/f7174ead-0301-4570-9d18-62628bef2d2b)

