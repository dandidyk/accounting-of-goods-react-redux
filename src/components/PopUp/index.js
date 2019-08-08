import React from 'react'
import { connect } from 'react-redux'
import { hidePopup, deleteCategory } from '../../actions'
import './PopUp.css'

const PopUp = ({ showPopup, popupContent, hidePopup, deleteCategory }) => {
  let content

  if (!showPopup) return null

  switch (popupContent[0]) {
    case 'deleteCategory':
      content = (
        <>
          <div className='PopUp_title'>Хотите удалить категорию?</div>
          <div className='PopUp__text'> Все товары в этой категории будут помечены как "WithOut Cat" </div>
          <button
            className='PopUp__btn'
            onClick={() => {
              deleteCategory(popupContent[1])
              hidePopup()
            }}
          >
            Да
          </button>
          <button className='PopUp__btn' onClick={hidePopup}>
            Нет
          </button>
        </>
      )
      break
    default:
      content = null
  }

  return (
    <div className='PopUp' onClick={e => (e.target.className === 'PopUp' ? hidePopup() : null)}>
      <div className='PopUp_content'>{content}</div>
    </div>
  )
}

const mapStateToProps = ({ showPopup, popupContent }) => ({ showPopup, popupContent })

const mapDispatchToProps = { hidePopup, deleteCategory }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUp)
