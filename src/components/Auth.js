import classes from './Auth.module.css';
import { authActions } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';


const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  function handleLogin(event) {
    event.preventDefault();
    dispatch(authActions.login())
  }

  return (
     <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value='test@test.com' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value='pass'/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
