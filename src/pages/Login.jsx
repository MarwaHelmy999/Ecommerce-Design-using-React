import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import { useState } from "react";

const Login = ()=>{
    const [Email , setEmail] = useState(null)
    const [Password , setPassword] = useState(null)
    const getEmail =JSON.parse(localStorage.getItem("Email")) 
    const getPassword =JSON.parse(localStorage.getItem("Password"))

    function handelLogin(e){
        e.preventDefault();
        if(!Email.trim() || !Password.trim()){
            alert("please fill data")
        }
        else{
            if(getEmail.trim()=== Email.trim()  && getPassword.trim() === Password.trim()){
                setTimeout(() => {
                    window.location = "/"
                }, 1500)
            }
            else{
                alert("Either Email or Password is wrong")
            }
        }
    }
    return(
        <>
        <div class="d-flex flex-column min-vh-100">
            <section class="vh-100 gradient-custom">
                <div class="container py-2 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style={{borderRadius: '1rem', backgroundColor: 'rgb(54 55 56)'}}>
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                            <p class="text-white-50 mb-5" >Please enter your login and password!</p>

                            <div data-mdb-input-init class="form-outline form-white mb-4">
                                <input type="email" 
                                onChange={(e)=>{setEmail(e.target.value)}}
                                value={Email}
                                id="typeEmailX" placeholder="Enter Your Email" class="form-control form-control-lg" />
                            </div>

                            <div data-mdb-input-init class="form-outline form-white mb-4">
                                <input type="password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                                value={Password}
                                id="typePasswordX" placeholder="Enter Your Password" class="form-control form-control-lg" />
                            </div>

                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit"
                            onClick={(e)=>{handelLogin(e)}}
                            >Login</button>
                            </div>

                            <div>
                            <p class="mb-0">Don't have an account? <NavLink to={"/Register"} className="text-white-50 fw-bold" style={{textDecoration: "none"}}>Sign Up</NavLink>
                            </p>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
           
            <Footer/>
        </div>
        

        </>
    )
}

export default Login;