import React from 'react';

/**
 * Header component for the Todo App.
 * Displays the app title and a brief subtitle with modern/retro aesthetic.
 */
// PUBLIC_INTERFACE
export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-badge" aria-hidden="true">☑</div>
          <h1 className="title">Ocean Tasks</h1>
        </div>
        <p className="subtitle">Focus your day. One task at a time.</p>
      </div>
    </header>
  );
}
