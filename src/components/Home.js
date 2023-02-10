import React from 'react'
import Products from './Products';
import Navbar from './Navbar';
import Footer from './Footer';


const Home = () => {
    return (
        <>
        <Navbar/>
            <div className="container px-0" style={{ marginTop: "66px" }}>
                <div id="FakeShopCarouselInterval" className="carousel slide" data-bs-ride="carousel">
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#FakeShopCarouselInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#FakeShopCarouselInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <Products />

            </div>
            <Footer/>
        </>
    )
}

export default Home;