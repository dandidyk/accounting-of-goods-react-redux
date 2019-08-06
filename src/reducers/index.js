import { ADD_CATEGORY, CHANGE_ACTIVE_CATEGORY } from '../constants/action-types'

const initialState = {
  categories: [
    { name: 'Category1', id: 'cat1' },
    { name: 'Category2', id: 'cat2' },
    { name: 'Category3', id: 'cat3' },
    { name: 'Category4', id: 'cat4' },
    { name: 'WithOut Cat', id: 'withOut' }
  ],
  activeCategory: 'cat1',
  goods: [
    { name: 'Product1', id: '1', cat: 'cat1', price: 2000, retailPrice: 5000 },
    { name: 'Product2', id: '2', cat: 'cat2', price: 2000, retailPrice: 5000 },
    { name: 'Product3', id: '3', cat: 'cat3', price: 2000, retailPrice: 5000 },
    { name: 'Product4', id: '4', cat: 'cat4', price: 2000, retailPrice: 5000 },
    { name: 'Product5', id: '5', cat: 'cat1', price: 2000, retailPrice: 5000 },
    { name: 'Product6', id: '6', cat: 'withOut', price: 2000, retailPrice: 5000 },
    { name: 'Product7', id: '7', cat: 'cat2', price: 2000, retailPrice: 5000 },
    { name: 'Product8', id: '8', cat: 'cat3', price: 2000, retailPrice: 5000 },
    { name: 'Product9', id: '9', cat: 'cat4', price: 2000, retailPrice: 5000 },
    { name: 'Product10', id: '10', cat: 'cat1', price: 2000, retailPrice: 5000 },
    { name: 'Product12', id: '11', cat: 'withOut', price: 2000, retailPrice: 5000 },
    { name: 'Product13', id: '12', cat: 'cat2', price: 2000, retailPrice: 5000 },
    { name: 'Product14', id: '13', cat: 'cat3', price: 2000, retailPrice: 5000 },
    { name: 'Product15', id: '14', cat: 'cat4', price: 2000, retailPrice: 5000 },
    { name: 'Product16', id: '15', cat: 'cat1', price: 2000, retailPrice: 5000 }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      }
    case CHANGE_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
