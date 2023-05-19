import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

import Logo from '../../Logo.png';


function Navigation() {
    return (
        <div className="container">
            <div className={style.NavBar}>

                <NavLink to='/'>Здесь могла быть ваша реклама</NavLink>

                <div className={style.Navigation}>

                    <NavLink to='/Team' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Кто</NavLink>
                    <NavLink to='/Training' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Знает</NavLink>
                    <NavLink to='/About' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Куда</NavLink>
                    <NavLink to='/Login' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Ведёт</NavLink>
                    {/* <NavLink to='/Profile' className={({ isActive }) => (isActive ? style.active : 'inactive')}>Profile</NavLink> */}
                </div>
            </div>
        </div >
        
    );
}

export default Navigation;