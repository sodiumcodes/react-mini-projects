import React from 'react';

const Board = ({ todo, index }) => {
  return (
    <li className="task-card">
      <div className="task-content">
        <span className="task-priority">{todo.priority}</span>
        <span className="task-name">{todo.task}</span>
      </div>
    </li>
  );
};

export default Board;