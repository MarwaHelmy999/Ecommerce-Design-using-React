import { React, useState, useEffect } from "react";
import Card from "../pages";

// FetchData to get product's data from API and filter them based on category
function FetchData({category}) {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        let url = "https://fakestoreapi.com/products/"
        if(category !== "All") {
            const categorySlug = category.toLowerCase()
            url += `category/${categorySlug}`
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRecords(data))
            .catch((err) => console.log(err));
    }, [category]);
    if(records.length === 0){
        return <div style={{fontSize: '25px', color: 'rgb(54,55,56)'}} className= "text-center">Loading...</div>
    }
    return (
        <div className="row gy-4">
            {records.map((list, id) => (
                <Card key={id} list={list} />
            ))}
        </div>
    );
}

const Products = ()=>{
    const [HoveredButton , setHoveredButton] = useState(null)
    const [selectedCategory , SetSelectedCategory] = useState("All")
    const HandleCategoryChange = (category)=>{
        SetSelectedCategory(category)
    }
    fetch("https://fakestoreapi.com/products/")
        .then(response => response.json())
        .then(data =>console.log(data))
        .catch(err => console.log(err))
    
    return( 
    <>
            <div className="container my-5 text-center gy-2">
                {/* adding latest products */}
                <h5 className="fs-2">Latest Products</h5>
                <hr className="mb-5" />
                {/* latest products buttons */}
                <div className="d-flex  flex-wrap align-items-center justify-content-center gap-2">
                    {["All", "Men's Clothing", "Women's Clothing", "jewelery", "Electronics"].map((category)=>(
                            <button className="btn px-2 fs-6" type="button" 
                            key={category}
                            style={{ border: '2px solid black', 
                            backgroundColor: selectedCategory === category || HoveredButton === category ? "rgb(54,55,56)" : "rgb(220, 220, 220)",
                            color: selectedCategory === category || HoveredButton === category ? "white" : "#1d1d1d",
                            transition: "all 0.3s ease" 
                            }} 
                            onMouseEnter={() => {setHoveredButton(category)}}
                            onMouseLeave={()=> {setHoveredButton(null)}}
                            onClick={() => HandleCategoryChange(category)}
                            >{category}</button>
                    ))}
                </div>
            </div>

            <div className="container my-5">
                {/* adding latest products */}
                <div className="row gy-4  justify-content-center">
                    {/* Card body card for each product*/}
                    <FetchData category= {selectedCategory}/>
                </div>
            </div>
    </>
    )
}

export default Products;