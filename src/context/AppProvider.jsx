import React, { useState } from "react";

export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
      { id: '1', name: "đi học thêm", isImportant: false, isCompleted: true ,isDeleted: false,category: 'personal'},
      { id: '2', name: "đi học chính", isImportant: true, isCompleted: false ,isDeleted: false,category: 'company'},
      { id: '3', name: "đi học thêm", isImportant: false, isCompleted: false ,isDeleted: false,category: 'personal'},
      { id: '4', name: "đi học chính", isImportant: true, isCompleted: false ,isDeleted: false,category: 'company'},
    ]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [idState, setIdState] = useState(0);
  
  const [selectedFilterState, setSelectedFilterState] = useState("all");
  const [searchText, setSearchText] = useState("");

  return (
    <AppContext.Provider value={{ selectedCategoryId, setSelectedCategoryId,
      showSidebar, setShowSidebar, idState, setIdState,
      selectedFilterState, setSelectedFilterState, searchText, setSearchText,
      todoList, setTodoList
     }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
