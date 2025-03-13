import Footer from "../components/footer";

const About = ()=>{
    return(
        <>
        <div class="d-flex flex-column min-vh-100">
            <div class="container text-center my-5">
                <h2>About Us</h2>
                <hr/>
                <p style={{color: "#696969", lineHeight: 1.8}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas 
                    illo quis laboriosam a debitis minus, architecto ut voluptatem omnis,
                    maxime, molestias nostrum labore molestiae ratione! Magni, cum! Labore, rem dolores?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ab adipisci aspernatur
                    quam! Pariatur ratione, ipsum voluptates sequi excepturi tenetur! Provident inventore 
                    nobis quam odio esse officia quidem sequi tempora?sit amet consectetur adipisicing elit. Totam ab adipisci aspernatur
                    quam! Pariatur ratione, ipsum voluptates sequi excepturi tenetur! Provident inventore 
                    nobis quam odio esse officia quidem sequi tempora
                </p>
            </div>
            <div class="container text-center mb-5">
                <h2 class="mb-5">Our Products</h2>
                <div className="row gy-4">
                    {/* Card body */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div class="card text-center" style={{width: '18rem;'}}>
                            <div class="ratio ratio-4x3">
                                <img src="assets/mennss.jpg" class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Men's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    {/* Card body */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div class="card text-center" style={{width: '18rem;'}}>
                            <div class="ratio ratio-4x3">
                                <img src="assets/women's clothing.jpg" class="card-img-top" alt="..."/>
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    {/* Card body */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div class="card text-center" style={{width: '18rem;'}}>
                            <div class="ratio ratio-4x3">
                                <img src="assets/jewelry.jpg" class="card-img-top" alt="..."/>
                            </div>
                            
                            <div class="card-body">
                                <h5 class="card-title">Jewelry</h5>
                            </div>
                        </div>
                    </div>
                    {/* Card body */}
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div class="card text-center" style={{width: '18rem;'}}>
                            <div class=" ratio ratio-4x3">
                                <img src="assets/electro2.jpg" class="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Electronics</h5>
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

export default About;