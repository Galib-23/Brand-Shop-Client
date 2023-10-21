import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar";
import bg from '../../assets/background.jpg';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
    const {signIn, setUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
            if(user){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', }}>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full p-0 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" 
                                name="email"
                                className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" 
                                name="password"
                                className="input input-bordered" required />
                                    <p className="mt-4">Do not have an account ? <Link className="font-bold text-blue-600 ml-2" to='/register'>Register</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center mb-2">
                            <h1>Or Sign in With Google</h1>
                        <button className="w-10 h-10 bg-yellow-100 text-orange-600 border border-black font-semibold ml-4 rounded-full" onClick={handleGoogleSignIn}>G</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;