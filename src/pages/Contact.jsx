
import { NavLink } from "react-router-dom";
import React , { useState } from "react";
const Contact = ()=>{
        const [HoveredButton , setHoveredButton] = useState(null)
    return(
        <>
            <div class="container text-center my-5">
                <h2>Contact Us</h2>
                <hr/>
            </div>
            <div class="container d-flex justify-content-center align-items-center ">
                <form style={{width: "26rem"}}>
                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="form4Example1">Name</label>
                            <input type="text" id="form4Example1" class="form-control" />
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="form4Example2">Email address</label>
                            <input type="email" id="form4Example2" class="form-control" />
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                            <label class="form-label" for="form4Example3">Message</label>
                            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                        </div>
                        <div class="text-center">
                            <NavLink to={"/Checkout"} className="btn btn-primary w-100 p-2 " style={{ textDecoration: 'none', 
                                backgroundColor: HoveredButton? "rgb(220, 220, 220) ": "rgb(54,55,56)" , 
                                color: HoveredButton? "#1d1d1d ": "white" , border:"2px solid rgb(54,55,56)"}}
                                onMouseEnter={()=> setHoveredButton(true)} 
                                onMouseLeave={()=> setHoveredButton(null)}>Continue To Checkout
                            </NavLink>
                        </div>
                        
                </form>
            </div>
        </>
    )
}

export default Contact;