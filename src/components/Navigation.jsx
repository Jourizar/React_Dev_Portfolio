import '../componentStyles/NavStyles.css';
import { useState } from 'react';


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
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                
            </nav>
        </>
    );
}

export default Navigation;