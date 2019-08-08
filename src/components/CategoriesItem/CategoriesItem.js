import React from 'react'
import { connect } from 'react-redux'
import { changeActiveCategory, deleteCategory, showPopup } from '../../actions'
import './CategoriesItem.css'

const CategoriesItem = ({ name, changeActiveCategory, deleteCategory, id, activeCategory, showPopup }) => {
  return (
    <div className='CategoriesItem'>
      {id !== 'withOut' ? (
        <div className='delete' onClick={() => showPopup(['deleteCategory', id])}>
          <span>x</span>
        </div>
      ) : null}
      <div className={activeCategory === id ? 'active' : null} onClick={() => changeActiveCategory(id)}>
        {name}
      </div>
    </div>
  )
}

const mapStateToProps = ({ activeCategory }) => ({ activeCategory })

const mapDispatchtoProps = {
  changeActiveCategory,
  deleteCategory,
  showPopup
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CategoriesItem)
