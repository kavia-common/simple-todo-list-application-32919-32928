# Ocean Tasks — React Todo List

A modern, retro-inspired Todo List built with React. Add, complete, and delete tasks with localStorage persistence. Styled using the Ocean Professional theme.

## Features

- Add todos using input + Enter or the Add button
- Toggle completion with a checkbox (completed items are visually distinct)
- Delete todos
- Persistent storage with `localStorage`
- Smooth transitions, subtle gradients, rounded corners, and minimalist design

## Run the app

- `npm start` — starts the app at http://localhost:3000
- `npm run build` — production build

## Project structure

- `src/App.jsx` (logic in App.js) bootstraps the app shell and state
- `src/components/` contains:
  - `Header.jsx`
  - `NewTodo.jsx`
  - `TodoList.jsx`
  - `TodoItem.jsx`
- `src/styles/`
  - `theme.css` — Ocean Professional theme variables and components
  - `global.css` — resets and base typography

## Theme

Ocean Professional
- primary: #2563EB
- secondary/success: #F59E0B
- error: #EF4444
- gradient: from-blue-500/10 to-gray-50
- background: #f9fafb
- surface: #ffffff
- text: #111827

No backend is required; all data lives in the browser.
