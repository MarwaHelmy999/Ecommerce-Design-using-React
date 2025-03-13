import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { useMeasure } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const [product, SetProduct] = useState([]);
    const [containerWidth, SetcontainerWidth] = useState(0);
    const [CardWidth, SetCardWidth] = useState(320);
    const xTranslation = useMotionValue(0);
    const [hoveredButton, setHoveredButton] = useState(null);
    const navigate = useNavigate();
    const handelBuyNow = ()=> {
        
    }
    const handelAddToCart = ()=>{
        
    }

    useEffect(() => {
        // Fetch products
        fetch(`https://fakestoreapi.com/products/`)
            .then((response) => response.json())
            .then((Pdata) => SetProduct(Pdata))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (product.length > 0) {
            const gap = 12;
            const totalWidth = product.length * (CardWidth + gap);
            SetcontainerWidth(totalWidth);
        }
    }, [product, CardWidth]);

    const [ref, { width }] = useMeasure();

    useEffect(() => {
        let controls;
        if (containerWidth > 0 && width > 0) {
            const finalPosition = -containerWidth + width; // Adjust final position
            controls = animate(xTranslation, finalPosition, {
                ease: "linear",
                duration: 120,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }
        return () => controls && controls.stop();
    }, [xTranslation, containerWidth, width]);

    return (
        <>
            <div className="my-5 position-relative">
                <h2 className="mb-4">You may also Like</h2>
                <motion.div
                    className="d-flex gap-3"
                    ref={ref}
                    style={{ x: xTranslation, flexWrap: "nowrap" }}
                >
                    {product.map((item, idx) => (
                        <div className="mb-5" key={idx}>
                            <div className="card text-center" style={{ width: "20rem" }}>
                                <div className="ratio ratio-4x3">
                                    <img src={item.image} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {item.title.length > 25 ? item.title.slice(0, 25) : item.title}
                                    </h5>
                                </div>
                                <div className="card-body d-flex gap-2 justify-content-center">
                                <button
                                    type="button"
                                    className="btn px-2 fs-6"
                                    style={{
                                        border: hoveredButton === `BuyNow-${idx}` ? "2px solid black" : "2px solid rgb(220, 220, 220)",
                                        backgroundColor: hoveredButton === `BuyNow-${idx}` ? "rgb(220, 220, 220)" : "rgb(54,55,56)",
                                        color: hoveredButton === `BuyNow-${idx}` ? "#1d1d1d" : "white",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={() => setHoveredButton(`BuyNow-${idx}`)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    onClick={()=> {
                                        navigate (`/Product/${item.id}`) // where should buy now in slider go ??
                                    }}
                                >
                                    Buy Now
                                </button>
                                <button
                                    type="button"
                                    className="btn px-2 fs-6"
                                    style={{
                                        border: hoveredButton === `AddToCart-${idx}` ? "2px solid black" : "2px solid rgb(220, 220, 220)",
                                        backgroundColor: hoveredButton === `AddToCart-${idx}` ? "rgb(220, 220, 220)" : "rgb(54,55,56)",
                                        color: hoveredButton === `AddToCart-${idx}` ? "#1d1d1d" : "white",
                                        transition: "all 0.3s ease"
                                    }}
                                    onMouseEnter={() => setHoveredButton(`AddToCart-${idx}`)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    onClick={handelAddToCart}
                                >
                                    Add To Cart
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Products;
