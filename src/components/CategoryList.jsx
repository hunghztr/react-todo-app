import React, { useContext } from 'react'
import './CategoryList.css'
import {CATEGORY_ITEMS} from './constants'
import { AppContext } from '../context/AppProvider'

const CategoryList = () => {
    const {selectedCategoryId, setSelectedCategoryId} = useContext(AppContext)
    const {todoList} = useContext(AppContext)
    const countByCategory = todoList.reduce((acc,cur) =>{
        const newAcc = {...acc}
        if(cur.category === 'personal') {
            newAcc.personal += 1;
        }
        if(cur.category === 'company') {
            newAcc.company += 1;
        }
        if(cur.category === 'travel') {
            newAcc.travel += 1;
        }
        if(cur.category === 'idea') {
            newAcc.idea += 1;
        }
        return newAcc
    },{personal:0,company:0,travel:0,idea:0})
  return (
    <div>
        <p>Categories</p>
        {CATEGORY_ITEMS.map( i =>{
            return(
                <div key={i.id} className={`category-item ${i.id === selectedCategoryId ? 'selected':''}`} onClick={() =>{
                    setSelectedCategoryId(i.id)
                }}>
                    <p className='category-name'>{i.label}</p>
                    <p>{countByCategory[i.id]}</p>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryList