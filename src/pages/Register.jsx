import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import { useState } from "react";

const Register = ()=>{
    const [Fname , setFname] = useState(null)
    const [Lname , setLname] = useState(null)
    const [Email , setEmail] = useState(null)
    const [Password , setPassword] = useState(null)

    function handelsubmit(e){
        e.preventDefault();
        console.log(Fname)
        console.log(Lname)
        console.log(Email)
        console.log(Password)

        if (!Fname || !Lname || !Email || !Password){
            alert("Please fill data")
        }
        else{
            localStorage.setItem("FirstName" ,JSON.stringify( Fname));
            localStorage.setItem("LastName" , JSON.stringify( Lname));
            localStorage.setItem("Email" , JSON.stringify( Email));
            localStorage.setItem("Password" , JSON.stringify( Password));
            setTimeout(() => {
                window.location = "Login"
            }, 1500)
        }
    }
    return(
        <>
        <div class="d-flex flex-column min-vh-100">
            {/* <!-- Section: Design Block --> */}
            <section class="text-center" >
            {/* <!-- Background image --> */}
            <div class="p-5 bg-image" style={{
                    backgroundImage: "url('assets/home.jpg')",
                    height: '250px', backgroundRepeat: 'no-repeat' , backgroundSize:'cover'}}
                    ></div>
            {/* <!-- Background image --> */}

            <div class="card mx-5 mx-md-5 shadow-5-strong" style={{
                    backdropFilter: 'blur(30px)', 
                    backgroundColor: 'rgb(54 55 56)',
                    color: 'white', 
                    marginBottom: ' 60px',
                    marginTop: ' -60px',
            }}>
                <div class="card-body py-5 px-md-5">

                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                    <h2 class="fw-bold mb-5">Sign up now</h2>
                    <form>
                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                        <div class="row">
                        <div class="col-md-6 mb-4">
                            <div data-mdb-input-init class="form-outline">
                            <input type="text" onChange={(e)=> setFname(e.target.value)} 
                            value={Fname}
                            id="firstname" class="form-control" placeholder="Enter Your First name" />
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div data-mdb-input-init class="form-outline">
                            <input type="text"
                            onChange={(e)=> setLname(e.target.value)} 
                            value={Lname}
                            id="lastname" class="form-control"placeholder="Enter Your Last  name" />
                            </div>
                        </div>
                        </div>

                        {/* <!-- Email input --> */}
                        <div data-mdb-input-init class="form-outline mb-4">
                        <input type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={Email}
                        id="Email" class="form-control" placeholder="Enter Your Email"/></div>

                        {/* <!-- Password input --> */}
                        <div data-mdb-input-init class="form-outline mb-4">
                        <input type="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        value={Password}
                        id="Password" class="form-control" placeholder="Enter Your Password" />
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" id="RegisterBtn"
                         data-mdb-button-init data-mdb-ripple-init class="btn btn-block fw-bold " 
                         style={{backgroundColor: '#eee', color:'black'}}
                         onClick={(e)=> handelsubmit(e)}>
                        Sign up
                        </button>
                        <div>
                            <p class="mb-0">Already have an account? <NavLink to={"/Login"} className="text-white-50 fw-bold" style={{textDecoration: "none"}}>Login</NavLink>
                            </p>
                        </div>
                    </form>
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
export default Register;