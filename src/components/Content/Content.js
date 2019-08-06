import React from 'react'
import CategoriesList from '../CategoriesList/CategoriesList'
import Table from '../Table/Table'
import './Content.css'

const Content = ({categories}) => {

    return (
        <div className='content'>
            <CategoriesList categories={categories} />
            <Table />
        </div>
    )
}

export default Content