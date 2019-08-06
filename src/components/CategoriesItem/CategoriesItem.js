import React from 'react'
import { connect } from 'react-redux'
import { changeActiveCategory } from '../../actions'
import './CategoriesItem.css'

const CategoriesItem = ({ name, changeActiveCategory,id }) => {

  return (
    <div className='CategoriesItem' onClick={() => changeActiveCategory(id)}>
      {name}
    </div>
  )
}

const mapDispatchtoProps = {
  changeActiveCategory
}

export default connect(
  null,
  mapDispatchtoProps
)(CategoriesItem)
