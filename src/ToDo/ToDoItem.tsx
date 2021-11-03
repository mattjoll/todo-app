import React, { FunctionComponent } from 'react';
import { IToDoItem } from './interfaces/i-to-do-item';

type ToDoItemProps = {
  toDoItem: IToDoItem;
};

const ToDoItem: FunctionComponent<ToDoItemProps> = ({
  toDoItem,
}: ToDoItemProps) => {
  return (
    <div>
      <h3>{toDoItem.title}</h3>
      <p>{toDoItem.date}</p>
    </div>
  );
};

export default ToDoItem;
