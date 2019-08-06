import React from 'react'
import { connect } from 'react-redux'
import CategoriesItem from '../CategoriesItem/CategoriesItem'
import './CategoriesList.css'

const CategoriesList = ({categories}) => {

    console.log(categories);
    
    return (
        <div className='CategoriesList'>
            {categories.map( ({name, id}) => (
                <CategoriesItem key={id} name={name} id={id} />
            ))}
        </div>
    )
}

const mapStateToProps = ({ categories }) => ({categories})

export default connect(mapStateToProps)(CategoriesList)