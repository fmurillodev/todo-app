import React, { useState } from "react";
import CardTodo from "../../components/CardToDo";
import Form from "../../components/Form";
import Header from "../../components/Header";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const addToDo = (value) => {
    const item = { id: Math.floor(Math.random() * 10000), value };
    if (!value || /^\s*$/.test(value)) {
      return;
    }
    const newToDo = [item, ...todos];
    setTodos(newToDo);
    setEdit(null);
  };

  const updateTodo = (value) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === edit.id) {
          return { ...edit, value };
        }
        return item;
      })
    );
    setEdit(null);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const removeTodo = (id) => {
    const removeToDo = (item) => item.id !== id;
    const removeArr = [...todos].filter(removeToDo);
    setTodos(removeArr);
  };

  return (
    <div className="app">
      <div className="todo-app">
        <Header title="What´s the Plant for Today ?" />
        <Form label="Add ToDo" classNameButton="add" onSubmit={addToDo} />
        {edit && (
          <Form
            label="update"
            classNameButton="update"
            onSubmit={updateTodo}
            edit={edit}
          />
        )}
        <div className="content-card">
          {todos.map((todo) => (
            <CardTodo
              key={todo.id}
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              label={todo.value}
              id={todo.id}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              setEdit={setEdit}
              isComplete={todo.isComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
