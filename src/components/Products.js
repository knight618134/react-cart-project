import React, { Component } from "react"
import ToolBox from "components/Toolbox"
import Product from "components/Product"
import { fetchProducts } from "api/product"

export class Products extends Component {
  state = { products: [] }
  
  async componentDidMount() {
    await fetchProducts().then((resp) => {
      this.setState({
        products: resp,
      })
    })
  }

  render() {
    return (
      <div>
        <ToolBox />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.state.products.map((prod) => (
              <div className="column is-3" key={prod.id}>
                <Product product={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Products
