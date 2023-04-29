import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// const routes = [
//     { path: '/', name: 'Home' },
//     { path: '/about', name: 'About' },
//     { path: '/contact', name: 'Contact' },
// ];

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            {/* <NavLink className='text-decoration-none me-2' to="/login">Login</NavLink> */}

            {
                categories.map(category => <p key={category.id}>
                    <Link className='nav-link' style={{color:'red'}} to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
            {/* <>
                {routes.map((route) => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        activeClassName="active"
                        isActive={(match, location) => {
                            if (!match) {
                                return false;
                            }
                            return match.path === location.pathname;
                        }}
                    >
                        {route.name}
                    </NavLink>
                ))}
            </> */}

        </div>
    );
};

export default LeftNav;