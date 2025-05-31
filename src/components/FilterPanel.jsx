import React, { useMemo } from "react";
import './FilterPanel.css'; 
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";

const FILTER_ITEMS = [
    {
        id:'all',
        label:"All",
        icon:'./inbox.png',
    },
    {
        id:'important',
        label:"Important",
        icon:'./flag.png',
    },
    {
        id:'completed',
        label:"Completed",
        icon:'./check.png',
    },
    {
        id:'deleted',
        label:"Deleted",
        icon:'./deleted.png',
    },
]
const FilterPanel = ({selectedFilterState,setSelectedFilterState,todoList,searchText,setSearchText}) => {
    console.log(searchText,setSearchText);
    const countByFilter = useMemo( () =>{
        return todoList.reduce((acc, todo) => {
        const newAcc = { ...acc };
        if (todo.isDeleted) {
            newAcc.deleted += 1;
        } 
         if (todo.isCompleted) {
            newAcc.completed += 1;
        } 
         if (todo.isImportant) {
            newAcc.important += 1;
        } 
        return newAcc;
    },{ all: todoList.length,
        important: 0,
        completed: 0,
        deleted: 0
    })
    },[todoList])

   
  return (
    <div className="filter-panel">
      <input type="text" name="search-text" onKeyDown={(e) =>{
        if(e.key === 'Enter'){
            setSearchText(e.target.value);
        }
      }}/>
      <FilterList filterList={FILTER_ITEMS} selectedFilterState={selectedFilterState} 
      setSelectedFilterState={setSelectedFilterState} countByFilter={countByFilter} />
      <CategoryList />
    </div>
  );
};

export default FilterPanel;
