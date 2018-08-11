import classNames from 'classnames'

const RecipeDetail = (props) => {
  return props.recipe ? (
    <div style={props.style} className={classNames(`p2 bg-white ${ props.className }`)}>
      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image}></img>
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>Ingrediends</h3>
      <ul>
        {props.recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {props.recipe.steps.map((step, i) => (
          <li key={i}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  ) :
    (<p style={props.style} className={classNames(`h3 p2 bg-white italic center ${ props.className }`)}>
      Please select recipe to see detail
  </p>);
}

export default RecipeDetail;
