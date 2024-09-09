interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  HandleButton: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<props> = ({ todo, setTodo, HandleButton }) => {
  return (
    <div className="app">
      <div className="a">
        <input
          type="input"
          className="inputYap "
          value={todo}
          placeholder="Bu gün Neler yapilacak"
          onChange={(e) => setTodo(e.target.value)}
        />
        {todo ? (
          <button onClick={HandleButton} className="inputBtn ">
            YAP
          </button>
        ) : (
          <button className="inputBtn ">YAP</button>
        )}
      </div>
    </div>
  );
};

export default InputFeild;
