
const Main = ()=>{
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide mx-2 " data-bs-ride="carousel">
                <div class="carousel-inner rounded">
                    <div class="carousel-item active" height={274}>
                        <img src="assets/homeee1.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-md-block text-center top-50 translate-middle-y" style={{color:'white'}}>
                            <h5 style={{fontSize:'30px'}}>Welcome To Our Store</h5>
                            <p style={{fontSize:'18px'}}>
                            Welcome to our store! Discover a wide range  of high-quality products at competitive prices, all in one place. Enjoy a seamless shopping experience with fast delivery and exclusive deals.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item" height={274}>
                        <img src="assets/homeee2.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-md-block text-center top-50 translate-middle-y" style={{color:'white'}}>
                            <h5 class="fs-3" style={{fontSize:'30px'}}>Welcome To Our Store</h5>
                            <p style={{fontSize:'18px'}}>
                            Welcome to our store! Discover a wide range of high-quality products at competitive prices, all in one place. Enjoy a seamless shopping experience with fast delivery and exclusive deals.
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
}
export default Main;