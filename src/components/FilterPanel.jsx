import React from "react";
import './FilterPanel.css'; 

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
const FilterPanel = ({selectedFilterState,setSelectedFilterState,todoList}) => {
    const countByFilter = todoList.reduce((acc, todo) => {
        const newAcc = { ...acc };
        if (todo.isDeleted) {
            newAcc.deleted += 1;
        } else if (todo.isCompleted) {
            newAcc.completed += 1;
        } else if (todo.isImportant) {
            newAcc.important += 1;
        } 
        return newAcc;
    },{ all: todoList.length,
        important: 0,
        completed: 0,
        deleted: 0
    });

    console.log(countByFilter);
    const filterItems = FILTER_ITEMS.map(i =>{
        return (
            <div key={i.id} className={`filter-item ${i.id === selectedFilterState ? 'selected' : ''}`}
            onClick={() =>{
                setSelectedFilterState(i.id);
            }}>
            <div className="filter-name">
                <img src= {i.icon} alt="ảnh" width='12px' height='12px' />
                <p>{i.label}</p>
            </div>
            <p>{countByFilter[i.id]}</p>
        </div>
        )
    })
  return (
    <div className="filter-panel">
      <input type="text" name="search-text" />
      <div className="filter-container">
        {filterItems}
      </div>
    </div>
  );
};

export default FilterPanel;
