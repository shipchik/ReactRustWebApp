import style from './NavBar.module.css';
import {NavLink}  from 'react-router-dom';

function NavBar (){
    return(
      <div className={style.LogoNav}>
        <img src="" alt="" />
        <nav>
            <NavLink to>Our team</NavLink>
            <NavLink to>Our team</NavLink>
            <NavLink to>Our team</NavLink>
            <NavLink to>Our team</NavLink>
        </nav>
      </div>
    );
}

export default NavBar;