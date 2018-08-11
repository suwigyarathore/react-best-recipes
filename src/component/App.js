import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

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
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home {...this.state} toggeleFavorite={this.toggeleFavorite} />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  {...this.state}
                  toggeleFavorite={this.toggeleFavorite}
                />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
