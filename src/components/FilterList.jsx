import React from 'react'

const FilterList = ({filterList,selectedFilterState,setSelectedFilterState,countByFilter}) => {
  return (
    <div className="filter-container">
            {filterList.map( (i) =>{
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
            })}
        </div>
  )
}

export default FilterList