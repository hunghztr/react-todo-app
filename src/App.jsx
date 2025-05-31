import { useContext, useMemo, useRef } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import Sidebar from "./components/Sidebar";
import FilterPanel from "./components/FilterPanel";
import { AppContext } from "./context/AppProvider";

function App() {
  const inputRef = useRef(null);
  const { todoList, setTodoList } = useContext(AppContext);
  const {showSidebar, setShowSidebar, idState, setIdState, selectedFilterState,
     setSelectedFilterState, searchText, setSearchText,selectedCategoryId} = useContext(AppContext);
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

  const todos = useMemo(() =>{
    return todoList.filter(i =>{
    if(!i.name.includes(searchText)){
      return false;
    }
    if(!i.category.includes(selectedCategoryId)){
      return false;
    }
    if(selectedFilterState === 'all') return true;
    if(selectedFilterState === 'important') return i.isImportant;
    if(selectedFilterState === 'completed') return i.isCompleted;
    if(selectedFilterState === 'deleted') return i.isDeleted;
    return true;
  })
  },[todoList,selectedFilterState,searchText,selectedCategoryId])
  .map((todo) => {
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
      <FilterPanel searchText={searchText} setSearchText={setSearchText}
       todoList={todoList} selectedFilterState={selectedFilterState}  setSelectedFilterState={setSelectedFilterState}/>
    <div className="main-content">
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
                category: 'personal',
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
    </div>
  );
}

export default App;
