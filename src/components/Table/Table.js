import React from 'react'
import { connect } from 'react-redux'
import './Table.css'

const Table = ({ goods, activeCategory }) => {

    console.log(goods.filter(({ cat }) => cat === activeCategory));
    
  return (
    <div className='table'>
      <div className='table_head table_row'>
        <div className='table_head_item'>ID</div>
        <div className='table_head_item'>Название товара</div>
        <div className='table_head_item'>Закупочная цена</div>
        <div className='table_head_item'>Цена</div>
        <div className='table_head_item' />
      </div>

      {goods
        .filter(({ cat }) => cat === activeCategory)
        .map(({ name, id, price, retailPrice }) => (
          <div className='table_row' key={id}>
            <div className='table_row_item'>{id}</div>
            <div className='table_row_item'>{name}</div>
            <div className='table_row_item'>{price}</div>
            <div className='table_row_item'>{retailPrice}</div>
            <div className='table_row_item'>
              <button className='table_btn'> Удалить </button>
              <button className='table_btn'> Изменить </button>
            </div>
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = ({ goods, activeCategory }) => ({ goods, activeCategory })

export default connect(mapStateToProps)(Table)
