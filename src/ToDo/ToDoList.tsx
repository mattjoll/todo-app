import React, { FunctionComponent, useState } from 'react';
import { IToDoItem } from './interfaces/i-to-do-item';
import ToDoItem from './ToDoItem';

const ToDoList: FunctionComponent = () => {
  const [toDoItems, setToDoItems] = useState<IToDoItem[]>([]);
  const addToDoItem = () =>
    setToDoItems([
      ...toDoItems,
      { date: Date.now().toString(), title: 'Todo' },
    ]);

  const toDoItemElements = toDoItems.map((item: IToDoItem) => (
    <ToDoItem key={item.date} toDoItem={item} />
  ));

  return (
    <section>
      {toDoItemElements}
      <button onClick={addToDoItem}>Add</button>
    </section>
  );
};

export default ToDoList;
