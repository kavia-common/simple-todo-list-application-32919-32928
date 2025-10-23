import React from 'react';
import TodoItem from './TodoItem';

/**
 * Scrollable list of todos with empty state.
 */
// PUBLIC_INTERFACE
export default function TodoList({ todos, onToggle, onDelete }) {
  const hasItems = todos && todos.length > 0;

  return (
    <section className="todo-section">
      <div className="list" role="list">
        {hasItems ? (
          todos.map((t) => (
            <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
          ))
        ) : (
          <div className="empty">
            <p>No tasks yet. Add your first one above!</p>
          </div>
        )}
      </div>
    </section>
  );
}
