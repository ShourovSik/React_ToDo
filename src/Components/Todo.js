import React from "react";

import style from "./todo.module.css";

const Todo = (props) => {
  const { title, description } = props.todo;
  const { id } = props;
  const handleClicked = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <articlce className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClicked(id);
          }}
        >
          <i class="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </articlce>
  );
};

export default Todo;
