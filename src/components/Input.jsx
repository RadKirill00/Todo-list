const Input = (props) => {
  return (
    <div className="container-input">
      <input
        type="text"
        onChange={(e) => props.setTodo(e.target.value)}
        value={props.todo}
        className="input1"
        placeholder="Введите задачу"
      />
      <br />
      <button onClick={() => props.addTask()} className="button1">
        Добавить
      </button>
    </div>
  );
};

export default Input;