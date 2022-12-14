import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

  const {login} = useContext(AuthContext)

  useTitle('Login')

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value   

    login(email, password)
    .then(result =>{
      const user = result.user
      console.log(user);
      form.reset()
    })
    .then(error => console.log(error))
  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
    <h1 className="text-5xl font-bold text-center">Login now</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
          
        </div>
      </form>
       <p className='text-center'>New to Doctor Home <Link className='text-pink-800 font-bold' to="/signup">Sign Up</Link></p>
    </div>
  </div>
</div>
  );
};

export default Login;