import React from 'react'
import ReactDOM from 'react-dom'

import Recipe from './recipe/Recipe.jsx'
import Sidebar from './Sidebar.jsx'

const recipeData = {
  title: 'Tasty Sauce',
  servings: 2,
  ingredients: [
      '1 Tbsp butter',
      '2 oz cream',
      '1/4 cup flour',
  ],
  times: {
    total: 20,
    prep: 5,
    //wait: '',
    cook: 15,
  },
  steps: [
      'Melt butter in pan.',
      'Whisk in flour.',
      'Add cream.',
  ],
  tags: ['sauce', 'simple'],
}

ReactDOM.render(
  <Recipe
    title={recipeData.title}
    servings={recipeData.servings}
    ingredients={recipeData.ingredients}
    times={recipeData.times}
    steps={recipeData.steps}
    tags={recipeData.tags}
  />,
  document.querySelector('.main')
)

ReactDOM.render(
  <Sidebar />,
  document.querySelector('.sidebar')
)
