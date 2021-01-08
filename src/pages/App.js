import { Component } from "react"
import Header from "components/Header"
import Products from "components/Products"
class App extends Component {
  render() {
    return (
      <div className="main">
        <Header nickname="" age={28} marry={true} />
        <Products />
      </div>
    )
  }
}

export default App
