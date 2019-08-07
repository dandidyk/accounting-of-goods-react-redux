import React from 'react'
import { connect } from 'react-redux'
import { changeActiveCategory, deleteCategory } from '../../actions'
import './CategoriesItem.css'

const CategoriesItem = ({ name, changeActiveCategory, deleteCategory, id, activeCategory }) => {
  return (
    <div className='CategoriesItem'>
      {id !== 'withOut' ? (
        <div className='delete' onClick={() => deleteCategory(id)}>
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
  deleteCategory
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(CategoriesItem)
