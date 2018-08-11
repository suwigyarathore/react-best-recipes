import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = id => {
    fetch(`${process.env.API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(currentRecipe => this.setState({ currentRecipe }));
  };

  render() {
    const { recipes, favorites } = this.props;
    const { currentRecipe } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggeleFavorite}
            />
          </div>
          <RecipeDetail
            className="ml4"
            recipe={currentRecipe}
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  toggeleFavorite: PropTypes.func,
  recipes: PropTypes.array,
  favorites: PropTypes.array,
};

export default Home;
