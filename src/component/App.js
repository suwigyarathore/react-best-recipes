import Header from './Header.js'
import RecipeList from './RecipeList.js'
import RecipeDetail from './RecipeDetail.js'

fetch(process.env.API_URL + '/v1/recipes')
  .then(res => res.json())
  .then(res => console.log(res))

const App = (props) => (
  <div>
    <Header />
    <main style={{ display: 'flex' }}>
      <RecipeList style={{ flex: 3 }} />
      <RecipeDetail style={{ flex: 5 }} />
    </main>
  </div >
)

export default App
