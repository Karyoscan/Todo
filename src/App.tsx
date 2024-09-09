import React, { useState } from "react";
import "./App.css";
import InputFeild from "./component/InputFeild";
import { Todo } from "./component/Todo";
import ListBar from "./component/ListBar";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

 
  const HandleButton = (e: React.FormEvent) => {
    e.preventDefault();

    if (todos) {
      setTodos([...todos, { id: Date.now(), todo, isDone: true }]);
    }

    setTodo("");
 
  };

  const todor = () => {
    return todos.map((todo) => {
      return <ListBar key={todo.id} todos={todos}  todo ={todo} setTodos={setTodos}  />;
    });
  };

  return (
    <div className="App">
      <h1 className="header">Yapilacaklar</h1>

      <InputFeild todo={todo} setTodo={setTodo} HandleButton={HandleButton} />
      <div className="flex">{todos && todor()}</div>
    </div>
  );
};

export default App;
