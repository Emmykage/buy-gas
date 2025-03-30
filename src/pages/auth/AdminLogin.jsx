import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminLogin } from '../../redux/actions/auth';
import { SET_LOADING } from '../../redux/app';



const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  // const [seePassword, setSeePassword] = useState(false);
  // const location = useLocation();

  // const [show, setShow] = useState(true);

  // const navigation = useNavigate();

  // const handleRedirect = () => {
  //   localStorage.setItem('meli_auth', '');
  //   navigate('/auth/login');
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(SET_LOADING(true))
    const data = new FormData(event.currentTarget);
    const formInput = {
      admin: {
        email: data.get('email'),
        password: data.get('password'),
      },
    };
    dispatch(adminLogin(formInput)).then(result => {
      if(adminLogin.fulfilled.match(result)){
        navigate("/admin/home")
        dispatch(SET_LOADING(false))

      }else{
        dispatch(SET_LOADING(false))

      }
    }); 
  };
 
    return (
      <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NavLink to={"/"} className='text-3xl text-theme font-semibold p-1 md:text-alt'>
            Gas <span className='text-primary'>Waka</span>
            </NavLink>  
            
          
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your Admin Dashboard
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-alt cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
      
      </>
    );
  }


export default AdminLogin;
