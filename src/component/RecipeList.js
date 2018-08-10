const RecipeList = (props) => {
  return (
    <div style={props.style}>
      <h2>RecipeList</h2>
      <ul>
        <li>
          <span>Gulab Jamun</span>
          <span>Dessert</span>
        </li>
        <li>
          <span>Jalebi</span>
          <span>Dessert</span>
        </li>
        <li>
          <span>Barfi</span>
          <span>Dessert</span>
        </li>
        <li>
          <span>Balushahi</span>
          <span>Dessert</span>
        </li>
      </ul>
    </div>
  );
}

export default RecipeList;
