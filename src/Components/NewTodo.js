import React, { useState } from "react";

import style from "./newtodo.module.css";
export default function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { title, description } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", description: "" });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlForm="title">Todo:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlForm="title">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add ToDo</button>
    </form>
  );
}
