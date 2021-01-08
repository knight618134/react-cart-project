import { Component } from "react"
class Login extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(e.target.value)
  }

  handleSubmit = (event) => {
    // 1. 阻⽌止表单默认⾏行行为
    event.preventDefault()
    // 2. 获取表单数据，
    // 3. 处理理登录逻辑
    // 4. 跳转到⾸首⻚页
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
