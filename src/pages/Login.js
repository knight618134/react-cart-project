import {Component} from 'react'
class Login extends Component {
  render() {
    return (
      <div className='login-wrapper'>
        <form className='box login-box'>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
              <input type='text' placeholder='Email' name='email' />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control'>
              <input type='password' placeholder='Password' name='password' />
            </div>
          </div>
          <div className='control'>
            <button className='button is-fullwidth is-primary'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
