import React from 'react';

/**
 * Single todo row with checkbox-style toggle and delete button.
 */
// PUBLIC_INTERFACE
export default function TodoItem({ todo, onToggle, onDelete }) {
  const { id, text, completed } = todo;

  return (
    <div
      role="listitem"
      className={`item ${completed ? 'item-completed' : ''}`}
    >
      <label className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          aria-label={`Mark "${text}" as ${completed ? 'incomplete' : 'complete'}`}
        />
        <span className="checkmark" aria-hidden="true" />
      </label>
      <p className="item-text" title={text}>
        {text}
      </p>
      <button
        className="btn-danger"
        onClick={() => onDelete(id)}
        aria-label={`Delete "${text}"`}
        title="Delete"
      >
        ✕
      </button>
    </div>
  );
}
