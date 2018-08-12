import React from 'react';
import PropTypes from 'prop-types';

function RecipeListItem({ recipe, favorited, onClick, onFavorited }) {
  return (
    <li
      className="py2 border-bottom border-bottom-dashed pointer"
      key={recipe.id}
      onClick={() => onClick(recipe.id)}
    >
      <span
        role="presentation"
        aria-label="favorite"
        className="mx1"
        onClick={e => {
          e.stopPropagation();
          onFavorited(recipe.id);
        }}
      >
        {favorited ? '✅' : '⬜️'}
      </span>
      <span>{recipe.name}</span>
      <span>{recipe.category}</span>
    </li>
  );
}

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  favorited: PropTypes.bool,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
};

RecipeListItem.defaultProps = {
  recipe: {},
};

export default RecipeListItem;
