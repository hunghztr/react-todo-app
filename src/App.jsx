import { useRef, useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import Sidebar from "./components/Sidebar";

function App() {
  const inputRef = useRef(null);
  const [todoList, setTodoList] = useState([
    { id: 1, name: "đi học thêm", isImportant: false, isCompleted: true },
    { id: 2, name: "đi học chính", isImportant: true, isCompleted: false },
    { id: 3, name: "đi học thêm", isImportant: false, isCompleted: false },
    { id: 4, name: "đi học chính", isImportant: true, isCompleted: false },
  ]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [idState, setIdState] = useState(0);
  const activeTodo = todoList.find((t) => t.id === idState);

  const handleCancelSidebar = () => {
    setShowSidebar(false);
  };
  const handleChangeTodo = (todo) =>{
    const newTodoList = todoList.map((item) => {
      if(item.id === todo.id){
        return todo;
      }
      return item;
    })
    setTodoList(newTodoList);
    setShowSidebar(false);
  }

  const handleCompleteCheckBox = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleClickSidebar = (id) => {
    setIdState(id);
    setShowSidebar(true);
  };

  const todos = todoList.map((todo) => {
    return (
      <ToDoItem
        id={todo.id}
        handleClickSidebar={handleClickSidebar}
        handleCompleteCheckBox={handleCompleteCheckBox}
        name={todo.name}
        isImportant={todo.isImportant}
        isCompleted={todo.isCompleted}
        key={todo.id}
      />
    );
  });
  return (
    <div className="container">
      <input
        ref={inputRef}
        type="text"
        name="add-new-task"
        placeholder="add new task"
        className="task-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTodoList([
              ...todoList,
              {
                id: crypto.randomUUID(),
                name: e.target.value,
                isImportant: false,
                isCompleted: false,
              },
            ]);
            inputRef.current.value = "";
          }
        }}
      />
      <div>{todos}</div>
      {showSidebar && <Sidebar key={idState} handleChangeTodo={handleChangeTodo}
       handleCancelSidebar={handleCancelSidebar} todoItem={activeTodo} />}
    </div>
  );
}

export default App;
