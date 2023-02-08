import React from 'react'

const Navbar = ({setToken}) => {
    const logott = () => {
        setToken("");
        localStorage.clear();
    };
    return (
        <div>


            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    
                    <img src="/FakeShop.png" alt="logo" style={{ height: "50px" }} />
                    
                    <button className="navbar-toggler" type="button" onClick={()=>logott()}>Log out
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                           
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar;