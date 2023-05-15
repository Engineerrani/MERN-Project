import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
   const auth = localStorage.getItem('user')
   const navigate = useNavigate();
   const logout = () => {
    localStorage.clear();
    navigate('/signup')
   }
    return (
        <div>
        <img 
        alt='logo'
        className='logo'
        src='https://www.kanektify.com/wp-content/uploads/2018/04/FullStack-924x560-1.jpg' />
            { auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout {JSON.parse(auth).name}</Link></li>
                </ul>
                :
                 
                 <ul className='nav-ul nav-right'>
                 <li><Link to="/signup">Sign UP</Link></li>
                 <li><Link to="/login">login page</Link></li>
                </ul>

                 }
                
        </div>
    )
}
export default Nav;