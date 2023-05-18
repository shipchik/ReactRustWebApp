import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

import Logo from '../../Logo.png';


function Navigation() {
    return (
        <div className="container">
            <div className={style.NavBar}>

                <NavLink to='/'><img src={Logo} alt="" /></NavLink>

                <div className={style.Navigation}>

                    <NavLink to='/Team' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Our team</NavLink>
                    <NavLink to='/Training' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Training</NavLink>
                    <NavLink to='/About' className={({ isActive }) => (isActive ? style.active : 'inactive')}>About</NavLink>
                    <NavLink to='/Login' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Login</NavLink>
                    <NavLink to='/Profile' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Profile</NavLink>
                </div>
            </div>
        </div >
        
    );
}

export default Navigation;