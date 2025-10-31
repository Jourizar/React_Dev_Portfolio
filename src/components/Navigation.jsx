import '../componentStyles/NavStyles.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'


function Navigation(){
    // toggle menu
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    return(
        <>
            <nav>
                <span onClick={toggleMenu}>✖</span>
                <ul className={isOpen ? 'open' : ''}>
                    <li> <Link to='/About'>About</Link> </li>
                <li> <Link to='/Projects'> Projects</Link> </li>
                     <li> <Link to='/Blog'>Blog</Link></li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navigation;