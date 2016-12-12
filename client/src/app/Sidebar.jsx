import React from 'react'

const Sidebar = () => (
  <div>
    <div className='title-pane'>
      <h1>Sous Chef</h1>
    </div>

    <ul className='menu'>
      <li>Recipe Box</li>
      <li className='separator'></li>
      <li>Add To List</li>
      <li>Generate List</li>
      <li className='separator'></li>
      <li>Find Recipes</li>
    </ul>
  </div>
)

export default Sidebar
