import React , { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [IsHoveredLogin , setIsHoveredLogin] = useState(false)
    const [IsHoveredReg , setIsHoveredReg] = useState(false)
    const [IsHoveredCart , setIsHoveredCart] = useState(false)
    // const state = useSelector(state => state.handelCart)
  return (
    <>
      <nav className=" navbar navbar-light navbar-expand-md py-3 " style={{ backgroundColor: 'rgb(220 220 220)' }}>
        <div className="container">
          <NavLink to={"/"} className="navbar-brand fw-bold fs-4">E-Commerce</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="navbar-nav mx-auto">
              <NavLink to={"/"} className="nav-link me-2" style={({ isActive }) => ({
                fontWeight: "bold",
                fontSize: "17px",
                color: isActive ? "black" : "#4e4a4a",
              })}
              >Home</NavLink>
              <NavLink to={"/product"} className="nav-link me-2" style={({ isActive }) => ({
                fontWeight: "bold",
                fontSize: "17px",
                color: isActive ? "black" : "#4e4a4a",
              })}
              >Products</NavLink>
              <NavLink to={"/about"} className="nav-link me-2" 
              style={({ isActive }) => ({
                fontWeight: "bold",
                fontSize: "17px",
                color: isActive ? "black" : "#4e4a4a",
              })}
              >About</NavLink>
              <NavLink to={"/contact"} className="nav-link " 
              style={({ isActive }) => ({
                fontWeight: "bold",
                fontSize: "17px",
                color: isActive ? "black" : "#4e4a4a",
              })}
              >Contact</NavLink>
            </div>
            <div className=" d-flex flex-wrap justify-content-center align-items-center gap-2">
                <NavLink to={"/login"} className={"px-2 py-1 rounded"}
                  style={{ textDecoration: 'none', fontSize: '17px', border: '2px solid black' , 
                  backgroundColor: IsHoveredLogin ? "rgb(54,55,56)" : "rgb(220, 220, 220)" , 
                  color: IsHoveredLogin ? "white" : "#1d1d1d",
                  transition: "all 0.3s ease"
                }} onMouseEnter={()=> setIsHoveredLogin(true)} 
                onMouseLeave={()=> setIsHoveredLogin(false)}
                >
                <i className="fa-solid fa-right-to-bracket pe-2"></i>
                Login
                </NavLink>
                <NavLink to={"/register"} className={"px-2 py-1 rounded"} style={{ textDecoration: 'none', fontSize: '17px' , border: '2px solid black', 
                  backgroundColor: IsHoveredReg ? "rgb(54,55,56)" : "rgb(220, 220, 220)" , 
                  color: IsHoveredReg ? "white" : "#1d1d1d", transition: "all 0.3s ease"
                  }} onMouseEnter={()=> setIsHoveredReg(true)} onMouseLeave={()=> setIsHoveredReg(false)}>
                <i className="fa-solid fa-user-plus pe-2"></i>
                Register
                </NavLink>
                <NavLink to={"/cart"} className={"px-2 py-1 rounded"} style={{ textDecoration: 'none', fontSize: '17px',  border: '2px solid black'
                  ,backgroundColor: IsHoveredCart ? "rgb(54,55,56)" : "rgb(220, 220, 220)" , 
                  color: IsHoveredCart ? "white" : "#1d1d1d", transition: "all 0.3s ease"
                 }} onMouseEnter={()=> setIsHoveredCart(true)} onMouseLeave={()=> setIsHoveredCart(false)}>
                <i className="fa-solid fa-cart-shopping pe-2"></i>
                Cart
                <span className="ms-1"> (0)</span>
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
