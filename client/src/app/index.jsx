import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  (<div>
    <h1 class="recipe-title">Recipe Title</h1>

    <span class="servings">2 Servings</span>

    <div class="ingredients">
      <h2>Ingredients</h2>
      <ul class="ingredient-list">
        <li>1 Tbsp butter</li>
        <li>2 oz cream</li>
        <li>1/4 cup flour</li>
      </ul>
    </div>

    <div class="time">
      <span class="total-time">20 minutes</span>
      <span class="prep-time">5 minutes</span>
      <span class="wait-time">0 minutes</span>
      <span class="cook-time">15 minutes</span>
    </div>

    <div class="steps">
      <h2>Steps</h2>
      <ol class="step-list">
        <li>Melt butter in pan.</li>
        <li>Whisk in flour.</li>
        <li>Add cream.</li>
      </ol>
    </div>

    <div class="tags">
      <h3>Tags</h3>
      <ul class="tag-list">
        <li class="tag">base</li>
        <li class="tag">sauce</li>
        <li class="tag">simple</li>
      </ul>
    </div>
  </div>),
  document.querySelector('.main')
)

ReactDOM.render(
  (<div>
      <div class="title-pane">
        <h1>Sous Chef</h1>
      </div>

      <ul class="menu">
        <li>Recipe Box</li>
        <li class="separator"></li>
        <li>Add To List</li>
        <li>Generate List</li>
        <li class="separator"></li>
        <li>Find Recipes</li>
      </ul>
  </div>),
  document.querySelector('.sidebar')
)
