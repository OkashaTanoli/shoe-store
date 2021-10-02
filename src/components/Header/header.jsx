import React from 'react'
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './header.css'
import { GiRunningShoe } from 'react-icons/gi'
import { IoMdCart } from 'react-icons/io'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='adidas-logo'>
                Adidas Shoes
                <GiRunningShoe className='shoeIcon' style={{ marginLeft: '20px', color: 'white', fontSize: '40px' }} size={45} />
            </div>
            <div className='navUl'>
                <Link className='navUlSubDiv' to='/' style={{ textDecoration: 'none' }} >Home</Link>
                <Link className='navUlSubDiv' to='/products' style={{ textDecoration: 'none' }}>Products</Link>
            </div>
            <div className="cartDiv">
                <input type="text" placeholder='search' className='searchInput' />
                <MdSearch className='searchIcon' size={30} />
                <IoMdCart className='cartIcon' size={30} />
            </div>
            <div className='extraDiv'>
                <Link className='extraDivNav' to='/' style={{ textDecoration: 'none' }} >Home</Link>
                <div className='cartResponsiveIcon'>
                    <IoMdCart style={{ color: 'white', fontSize: '40px' }} size={45} />
                </div>
                <Link className='extraDivNav' to='/products' style={{ textDecoration: 'none' }}>Products</Link>
            </div>
        </div>
    )
}

export default Header