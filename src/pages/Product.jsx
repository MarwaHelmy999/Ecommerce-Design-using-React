import React , { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Products from "./Products";

const Product = ()=>{
    const {id} = useParams()
    const [product , SetProduct] = useState(null)
    const [HoveredButton , setHoveredButton] = useState(null)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response)=> response.json())
        .then((data)=>SetProduct(data))
        .catch((err)=> console.log(err))
    }, [id])
    
    if(!product){
        return <div style={{fontSize: '25px', color: 'rgb(54,55,56)'}} className= "text-center mt-3">Loading...</div>
    }
    return(
        <>
        <div class="container">
            <div class="card my-5 border-0" style={{maxWidth: '540px;' }}>
                    < div class="row g-0">
                        {/* <!-- Image Section --> */}
                        <div class="col-12 col-md-4 ">
                            <img src={product.image} class="img-fluid rounded-start w-100" style={{maxHeight: '300px'}} alt="..."/>
                        </div>
                        {/* <!-- Content Section --> */}
                        <div class="col-12 col-md-8 mt-3 mt-md-0">
                            <div class="card-body">
                                <h4 class="text-center text-md-start">{product.category}</h4>
                                <p class="fs-5 fw-light text-center text-md-start">
                                    {product.title}
                                </p>
                                <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                                    <span class="me-1 fs-5">{product.rating.rate}</span>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="fs-4 my-3 fw-light text-center text-md-start">{product.price}</p>
                                <p class="card-text text-center text-md-start">
                                    {product.description}
                                </p>
                                {/* <!-- Buttons Section --> */}
                                <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                                    <NavLink type="button" 
                                        className="btn px-3 fs-6" 
                                        style={{ 
                                            border: HoveredButton === "AddToCart" ? "2px solid black" : "2px solid black", 
                                            backgroundColor: HoveredButton === "AddToCart" ? "rgb(54,55,56)" : "rgb(220, 220, 220)", 
                                            color: HoveredButton === "AddToCart" ? "white" : "#1d1d1d", 
                                            transition: "all 0.3s ease" 
                                        }}
                                        onMouseEnter={() => { setHoveredButton("AddToCart") }}
                                        onMouseLeave={() => { setHoveredButton(null) }}>
                                        Add To Cart
                                    </NavLink>

                                    <NavLink to={"/cart"} 
                                        type="button" 
                                        className="btn px-3 fs-6" 
                                        style={{ 
                                            border: HoveredButton === "GoToCart" ? "2px solid black" : "2px solid black", 
                                            backgroundColor: HoveredButton === "GoToCart" ? "rgb(220, 220, 220)" : "rgb(54,55,56)", 
                                            color: HoveredButton === "GoToCart" ? "#1d1d1d" : "white", 
                                            transition: "all 0.3s ease" 
                                        }}
                                        onMouseEnter={() => { setHoveredButton("GoToCart") }}
                                        onMouseLeave={() => { setHoveredButton(null) }}>
                                        Go To Cart
                                    </NavLink>
                                </div>
                                </div>
                        </div>
                    </div>
            </div>
            <hr/>
            <Products/>
        </div>

        </>
    )
}

export default Product;