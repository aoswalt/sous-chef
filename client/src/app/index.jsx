import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './recipe/Recipe.jsx'

ReactDOM.render(
  <Recipe
    title='Tasty Sauce'
    servings={2}
    ingredients={[
        '1 Tbsp butter',
        '2 oz cream',
        '1/4 cup flour',
    ]}
    times={{
      total: 20,
      prep: 5,
      //wait: '',
      cook: 15,
    }}
    steps={[
        'Melt butter in pan.',
        'Whisk in flour.',
        'Add cream.',
    ]}
    tags={['sauce', 'simple']}
  />,
  document.querySelector('.main')
)

ReactDOM.render(
  (<div>
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
  </div>),
  document.querySelector('.sidebar')
)
