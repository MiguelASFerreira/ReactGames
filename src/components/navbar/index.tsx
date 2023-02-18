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
            <h3>
                <Link to="/">
                    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/45/8126884045_cd09e7ab-cb0d-4d1e-800b-58b7a9dd3e47.png?cb=1676141490" alt="Games" width={150} />
                </Link>
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