import React from "react";

function Header({ title }) {
  return (
    <header className="todo-header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
