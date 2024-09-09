import { useState } from "react";
import { Todo } from "./Todo";
import { FaCheck, FaExchangeAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListBar: React.FC<props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(true);
  const [ediTodo, setEdiTodo] = useState<string>(todo.todo);

  const HandleeChange = (id: number) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const HandleEdit = () => {
    if (todo.isDone) {
      HandleEditComp(todo.id)
    }
    setEdit(!edit);
    
  };
  const HandleEditComp = (id:number) => {

    setTodos(todos.map((todo)=>id===todo.id ? {...todo,todo:ediTodo }:todo  ))

  

  };

  const HandleRevome = (id: number) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  return (
    <div className={todo.isDone ? "listBar" : " listBar listBarChect "}>
    <form onSubmit={()=>HandleEditComp(todo.id)}>
    {edit ? (
        <p className={todo.isDone ? "ListBarP" : "ListBarP ListBarPText "}>
          {todo.todo}
        </p>
      ) : (
        <input className="inputs" type="text" value={ediTodo}  onChange={(e)=>setEdiTodo(e.target.value)} />
      )}




    </form>
      <div className="listBarBtn">
        <button
          className={todo.isDone ? "listBarBtnButton " : "listBarBtnButton btn"}
          onClick={() =>edit&& HandleeChange(todo.id)}
        >
          {<FaCheck />}
        </button>
        <button
          className={todo.isDone ? "listBarBtnButton " : "listBarBtnButton btn"}
          onClick={() =>todo.isDone&&  HandleEdit()}
         
        >
          {<FaExchangeAlt />}
        </button>
        <button
          className={todo.isDone ? "listBarBtnButton " : "listBarBtnButton btn"}
          onClick={() =>  HandleRevome(todo.id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListBar;
