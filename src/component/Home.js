import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  onRecipeClick = id => {
    fetch(`${process.env.API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(currentRecipe => this.setState({ currentRecipe }));
  };

  toggeleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);

      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(fid => fid !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    });
  };

  render() {
    const { recipes, favorites, currentRecipe } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            favorites={favorites}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
            onFavorited={this.toggeleFavorite}
          />
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

export default Home;
