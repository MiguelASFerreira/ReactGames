import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { BiSearchAlt2 } from "react-icons/bi";

import "./style.css"

function Navbar() {
    const [search , setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("");
    }


    return (
        <div className='navbar'>
            <h3 className='navbar-text'>
                <Link to="/">Home</Link>
            </h3>

            <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Buscar Games" 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search}/>
                    <button type="submit" >
                        <BiSearchAlt2 />
                    </button>
                </form>
                
            <nav className='navbar-text'>
                <h3>
                    <Link to="/games">Games</Link>
                </h3>
            </nav>
        </div>
    )
}

export default Navbar