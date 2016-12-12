import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './recipe/Recipe.jsx'

ReactDOM.render(
  <Recipe />,
  document.querySelector('.main')
)

ReactDOM.render(
  (<div>
      <div className="title-pane">
        <h1>Sous Chef</h1>
      </div>

      <ul className="menu">
        <li>Recipe Box</li>
        <li className="separator"></li>
        <li>Add To List</li>
        <li>Generate List</li>
        <li className="separator"></li>
        <li>Find Recipes</li>
      </ul>
  </div>),
  document.querySelector('.sidebar')
)
