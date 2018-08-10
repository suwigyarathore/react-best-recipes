const RecipeDetail = (props) => {
  return (
    <div style={props.style}>
      <h2>Gulab Jamun</h2>
      <img src="https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg"></img>
      <div>
        <span>Dessert</span>
        <span>1200 cal</span>
      </div>
      <h3>Ingrediends</h3>
      <ul>
        <li>Sugar</li>
        <li>Dough</li>
      </ul>
      <h3>Steps</h3>
      <ol>
        <li>Mix it well</li>
        <li>Cook</li>
      </ol>
    </div>
  );
}

export default RecipeDetail;
