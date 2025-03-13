import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// Card component to handle individual card and hover states
// card for home page
function Card({ list }) {
    const [hoveredButton, setHoveredButton] = useState(null);
    const navigate = useNavigate();
    const handelBuyNow = ()=> {
        navigate (`/Product/${list.id}`)
    }
    const handelAddToCart = ()=>{
    }
    return (
        <div className="col col-lg-4 col-md-6 col-12">
            <div className="card text-center">
                <div className="ratio ratio-4x3">
                    <img src={list.image} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {list.title.length > 35 ? list.title.slice(0, 35) + "..." : list.title}
                    </h5>
                    <p className="card-text">
                        {list.description.length > 80
                            ? list.description.slice(0, 80) + "..."
                            : list.description}
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">${list.price}</li>
                </ul>
                <div className="card-body d-flex gap-2 justify-content-center">
                    <button
                        type="button"
                        className="btn px-2 fs-6"
                        style={{
                            border: hoveredButton === "BuyNow" ? "2px solid black" : "2px solid rgb(220, 220, 220)",
                            backgroundColor: hoveredButton === "BuyNow" ? "rgb(220, 220, 220)" : "rgb(54,55,56)",
                            color: hoveredButton === "BuyNow" ? "#1d1d1d" : "white",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={() => setHoveredButton("BuyNow")}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={handelBuyNow}
                    >
                        Buy Now
                    </button>
                    <button
                        type="button"
                        className="btn px-2 fs-6"
                        style={{
                            border: hoveredButton === "AddToCart" ? "2px solid black" : "2px solid rgb(220, 220, 220)",
                            backgroundColor: hoveredButton === "AddToCart" ? "rgb(220, 220, 220)" : "rgb(54,55,56)",
                            color: hoveredButton === "AddToCart" ? "#1d1d1d" : "white",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={() => setHoveredButton("AddToCart")}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={handelAddToCart}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Card;
//////////////////////////////////////////////////////////////////////////////////

