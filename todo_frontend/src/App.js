import React, { useEffect, useState } from 'react';
import './styles/global.css';
import './styles/theme.css';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

// PUBLIC_INTERFACE
export default function App() {
  /**
   * Minimal Todo App with localStorage persistence.
   * Applies Ocean Professional theme styles via CSS.
   */
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos:v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('todos:v1', JSON.stringify(todos));
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [todos]);

  // PUBLIC_INTERFACE
  const addTodo = (text) => {
    /** Add a new todo with given text. */
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = {
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  // PUBLIC_INTERFACE
  const toggleTodo = (id) => {
    /** Toggle a todo's completion state by id. */
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    /** Delete a todo by id. */
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app-shell">
      <div className="backdrop-gradient" aria-hidden="true" />
      <Header />
      <main className="container">
        <section className="panel">
          <NewTodo onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </section>
      </main>
      <footer className="footer">
        <span>Made with care • Ocean Professional</span>
      </footer>
    </div>
  );
}
