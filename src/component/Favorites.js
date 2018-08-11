import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

function Favorites({ recipes, favorites, toggeleFavorite }) {
  return (
    <div className="px4">
      <h2 className="h2">Favorites</h2>
      <RecipeList
        recipes={recipes.filter(r => favorites.includes(r.id))}
        favorites={favorites}
        onFavorited={toggeleFavorite}
      />
    </div>
  );
}

Favorites.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  toggeleFavorite: PropTypes.func,
};

export default Favorites;
