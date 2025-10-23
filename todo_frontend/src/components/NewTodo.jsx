import React, { useState } from 'react';

/**
 * Input area for creating a new todo.
 * Supports Enter key and button click to add.
 */
// PUBLIC_INTERFACE
export default function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form className="newtodo" onSubmit={handleSubmit} aria-label="Add new todo">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task and press Enter..."
        aria-label="Todo text"
      />
      <button className="btn-primary" type="submit" aria-label="Add todo">
        Add
      </button>
    </form>
  );
}
