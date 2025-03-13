import { NavLink } from "react-router-dom";
import React , { useState } from "react";
import Footer from "../components/footer";

const Cart = ()=>{
        const [HoveredButton , setHoveredButton] = useState(null)
    return(
        <>
            <div class="d-flex flex-column min-vh-100">
            <div class="container text-center my-5">
                <h2>Cart</h2>
                <hr/>
            </div>

                <div className="container flex-1" style={{flex: "1"}}>

                    <div class="row gap-4  d-flex justify-content-center ">
                        {/* item list */}
                    <div class="card col-12 col-md-8 p-0" style={{}}>
                        <p class="card-header fw-bold fs-5 p-3">
                            Item List
                        </p>
                        <div class="card m-2 border-0 pb-3 " style={{minWidth: "540px;"}}>
                            <div class="d-flex flex-wrap justify-content-sm-center justify-content-between  align-items-center p-3  ">
                                <img src="assets/laptopbag3.jpg" class="rounded me-2 mb-3" style={{width: "100px" , height:"100px", objectFit: "cover"}} alt="..."/>
                                <div class="ms-2 inline-block align-items-center flex-grow-1" style={{width: "fit-content"}}>
                                    <h5 class="me-2">Laptop backpack</h5>
                                </div>
                                <div class="d-flex justify-content-center align-items-center">
                                    <i class="fa-solid fa-minus p-2" style={{cursor: "pointer"}}></i>
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                    <span class="p-1"> 3</span>
                                    <span class="fw-bold">3 X $ 22.3 </span>
                                    </div>
                                    <i class="fa-solid fa-plus p-2" style={{cursor: "pointer"}}></i>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* order summary */}
                    <div class="card col-12 col-md-3 p-0 text-center align-self-start">
                        <div class="card-header fw-bold">
                            Order Summary
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between ">
                                <p>Products
                                    <span>(3)</span>
                                </p>
                                <span>$67</span>
                            </div>
                            <div class="d-flex justify-content-between ">
                                <p>Shipping
                                    <span>(3)</span>
                                </p>
                                <span>$30</span>
                            </div>
                            <div class="d-flex justify-content-between fw-bold">
                                <p>Total Amount
                                    <span>(3)</span>
                                </p>
                                <span>$67</span>
                            </div>
                            <NavLink to={"/Checkout"} className="btn btn-primary w-100 p-2 " style={{ textDecoration: 'none', 
                            backgroundColor: HoveredButton? "rgb(220, 220, 220) ": "rgb(54,55,56)" , 
                            color: HoveredButton? "#1d1d1d ": "white" , border:"2px solid rgb(54,55,56)"}}
                            onMouseEnter={()=> setHoveredButton(true)} 
                            onMouseLeave={()=> setHoveredButton(null)}>Go To Checkout</NavLink>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>

            
        </>
    )
}

export default Cart;