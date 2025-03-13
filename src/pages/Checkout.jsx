
import { NavLink } from "react-router-dom";
import React , { useState } from "react";
import Footer from "../components/footer";


const Checkout = ()=>{
        const [HoveredButton , setHoveredButton] = useState(null)
    return(
        <>
            <div class="d-flex flex-column min-vh-100">
                <div className="container mb-4">
                    <div class="row gap-4 my-5 d-flex flex-wrap justify-content-center ">
                        {/* item list */}
                    <div class="card col-12 col-md-8 p-0" style={{}}>
                        <p class="card-header fw-bold fs-5 p-3">
                            Billing address
                        </p>
                        {/* address form */}
                        <form  class="p-2">
                            <div class="d-flex p-2 gap-3">
                                <div class="flex-grow-1">
                                    <label for="inputEmail4">First Name</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div class="flex-grow-1">
                                    <label for="inputEmail4">Last Name</label>
                                    <input type="text" class="form-control"/>
                                </div>
                            </div>

                            <form class="p-2">
                                <div class="form-row mb-2">
                                    <div class="form-group ">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="you@example.com"/>
                                    </div>
                                    
                                </div>
                                <div class="form-group mb-2">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>
                                <div class="form-group mb-2">
                                    <label for="inputAddress2">Address 2</label> <span class="" style={{color: "gray"}}>(Optional)</span>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment or Suite"/>
                                </div>
                                <div className="row g-2 mb-4">
                                    <div className=" col-8 col-md-4" style={{ flexGrow: 4, flexBasis: "0%" }}>
                                        <label htmlFor="inputCity">Country</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="col-12 col-md-2" style={{ flexGrow: 3, flexBasis: "0%" }}>
                                        <label htmlFor="inputState">State</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-2" style={{ flexGrow: 1, flexBasis: "0%" }}>
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <hr/>
                                <h4 class="py-2">Payment</h4>
                                <div class="d-flex  gap-3 mb-2">
                                    <div class="flex-grow-1">
                                        <label for="inputEmail4">Name on card</label>
                                        <input type="text" class="form-control"/>
                                        <span class="" style={{fontSize:"14px" , color:"gray"}}>Full name as displayed on card</span>
                                    </div>
                                    <div class="flex-grow-1">
                                        <label for="inputEmail4">Credit card number</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col-md-6">
                                        <label for="inputEmail4">Expiration</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4">CVV</label>
                                        <input type="text" class="form-control"/>
                                    </div>
                                    
                                </div>
                                <hr/>
                                
                                <NavLink to={"/Checkout"} className="btn btn-primary w-100 p-2 " style={{ textDecoration: 'none', 
                            backgroundColor: HoveredButton? "rgb(220, 220, 220) ": "rgb(54,55,56)" , 
                            color: HoveredButton? "#1d1d1d ": "white" , border:"2px solid rgb(54,55,56)"}}
                            onMouseEnter={()=> setHoveredButton(true)} 
                            onMouseLeave={()=> setHoveredButton(null)}>Continue To Checkout</NavLink>
                            </form>

                        </form>
                    </div>
                    {/* order summary */}
                    <div class="card col-12 col-md-3 p-0 text-center align-self-start">
                        <div class="card-header fw-bold">
                            Order Summary
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between flex-wrap">
                                <p>Products
                                    <span>(3)</span>
                                </p>
                                <span>$67</span>
                            </div>
                            <div class="d-flex justify-content-between flex-wrap">
                                <p>Shipping
                                    <span>(3)</span>
                                </p>
                                <span>$30</span>
                            </div>
                            <div class="d-flex justify-content-between fw-bold flex-wrap">
                                <p>Total Amount
                                    <span>(3)</span>
                                </p>
                                <span>$67</span>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Checkout;