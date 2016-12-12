import React from 'react'

const Recipe = (props) =>
  (<div>
    <h1 className='recipe-title'>{props.title}</h1>

    <span className='servings'>{props.servings} Servings</span>

    <div className='ingredients'>
      <h2>Ingredients</h2>
      <ul className='ingredient-list'>
        {props.ingredients.map((ing, ind) => <li key={ind}>{ing}</li>)}
      </ul>
    </div>

    <div className='time'>
      <span className='total-time'>Total: {props.times.total} minutes</span>
      {props.times.prep? <span className='prep-time'>Prep: {props.times.prep} minutes</span> : ''}
      {props.times.wait? <span className='wait-time'>Wait: {props.times.wait} minutes</span> : ''}
      {props.times.cook? <span className='cook-time'>Cook: {props.times.cook} minutes</span> : ''}
    </div>

    <div className='steps'>
      <h2>Steps</h2>
      <ol className='step-list'>
        {props.steps.map((s, i) => <li className='step' key={i}>{s}</li>)}
      </ol>
    </div>

    {(props.tags) ?
      <div className='tags'>
        <h3>Tags</h3>
        <ul className='tag-list'>
          {props.tags.map((t) => <li className='tag' key={t}>{t}</li>)}
        </ul>
      </div>
    : ''}
  </div>)

Recipe.propTypes = {
  title: React.PropTypes.string.isRequired,
  servings: React.PropTypes.number.isRequired,
  ingredients: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  times: React.PropTypes.objectOf(React.PropTypes.number).isRequired,
  steps: React.PropTypes.arrayOf(React.PropTypes.string),
  tags: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default Recipe
