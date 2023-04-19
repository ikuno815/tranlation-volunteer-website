import React from 'react'
import { useNavigate } from 'react-router-dom';

function CategoriesMenu() {
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='categories-container'>Categories</h1>
        <button 
        className='category-button'
        onClick={() => navigate('/category')}
        >Restaurants/Shops
        </button>
        <button
         className='category-button'
         onClick={() => navigate('/category')}
         >Signboards/Posters
         </button>
        <button
         className='category-button'
         onClick={() => navigate('/category')}
         >Letters/Messages
         </button>
        <button
         className='category-button'
         onClick={() => navigate('/category')}
         >Others
         </button>
    </div>
  )
}

export default CategoriesMenu