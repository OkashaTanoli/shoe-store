import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from '../Home/index'
import Products from '../products/products'
import IndividualProduct from '../IndividualProduct/individualproduct';


function Redirect() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:key' element={<IndividualProduct />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Redirect