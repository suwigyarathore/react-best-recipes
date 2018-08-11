import { Component } from 'react'
import Header from './Header.js'
import RecipeList from './RecipeList.js'
import RecipeDetail from './RecipeDetail.js'

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recipes: [],
      currentRecipe: null
    }
  }

  componentDidMount () {
    fetch(`${ process.env.API_URL }/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }))
  }

  onRecipeClick = (id) => {
    fetch(`${ process.env.API_URL }/v1/recipes/${ id }`)
      .then(res => res.json())
      .then(currentRecipe => this.setState({ currentRecipe }))
  }

  render () {
    const { recipes, currentRecipe } = this.state
    return (<div>
      <Header />
      <main className="px4 flex">
        <RecipeList
          recipes={recipes}
          style={{ flex: 3 }}
          onClick={this.onRecipeClick}
        />
        <RecipeDetail
          className="ml4"
          recipe={currentRecipe}
          style={{ flex: 5 }} />
      </main>
    </div >)
  }
}

export default App
