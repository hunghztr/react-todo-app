
const ToDoItem = (props) => {
  return (
    <div className="todo-item" onClick={() => props.handleClickSidebar(props.id)}>
      <div style={{ display: "flex", gap: "4px" }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onClick={(e) => e.stopPropagation()}
          onChange={() => {
            props.handleCompleteCheckBox(props.id);
          }}
        />
        <p
          className="todo-item-text"
          onClick={() => {
            alert(`You clicked on: ${props.name}`);
          }}
        >
          {props.name}
        </p>
      </div>
      {props.isImportant && <p>⭐</p>}
    </div>
  );
};

export default ToDoItem;
