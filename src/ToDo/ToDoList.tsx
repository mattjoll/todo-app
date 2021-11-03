import React, { FunctionComponent } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList: FunctionComponent = () => {
  return (
    <section>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </section>
  );
};

export default ToDoList;
