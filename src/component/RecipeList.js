import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, recipes, favorites, ...props }) => (
  <div style={style}>
    <h2 className="h2">RecipeList</h2>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <RecipeListItem
          recipe={recipe}
          favorited={favorites.includes(recipe.id)}
          {...props}
        />
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  style: PropTypes.object,
  favorites: PropTypes.array,
};

export default RecipeList;
