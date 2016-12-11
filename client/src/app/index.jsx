import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  (<div>
    <h1 className="recipe-title">Recipe Title</h1>

    <span className="servings">2 Servings</span>

    <div className="ingredients">
      <h2>Ingredients</h2>
      <ul className="ingredient-list">
        <li>1 Tbsp butter</li>
        <li>2 oz cream</li>
        <li>1/4 cup flour</li>
      </ul>
    </div>

    <div className="time">
      <span className="total-time">20 minutes</span>
      <span className="prep-time">5 minutes</span>
      <span className="wait-time">0 minutes</span>
      <span className="cook-time">15 minutes</span>
    </div>

    <div className="steps">
      <h2>Steps</h2>
      <ol className="step-list">
        <li>Melt butter in pan.</li>
        <li>Whisk in flour.</li>
        <li>Add cream.</li>
      </ol>
    </div>

    <div className="tags">
      <h3>Tags</h3>
      <ul className="tag-list">
        <li className="tag">base</li>
        <li className="tag">sauce</li>
        <li className="tag">simple</li>
      </ul>
    </div>
  </div>),
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
