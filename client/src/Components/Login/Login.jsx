import style from './Login.module.css';

import Instagram from '../../img/Instagram_Negative.png';
import Vk from '../../img/VK_Negative.png';
import TikTok from '../../img/TikTok_Negative.png';
import Tg from '../../img/Tg.png';

import AboutFooterBacground from '../../img/AboutFooterBacground.png';

function Login() {
    return(
        <footer style={{
            backgroundImage: `url(${AboutFooterBacground})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: ` center`,
            height: `100vh`,
        }}>
            <div className="container">
                <div className={style.AboutUsFooter}>

                    {/* Login Form */}

                    {/* Сделать через finalform */}
                    <div className={style.LoginForm}>
                        <div className={style.LoginFormInput}>
                            <input className={style.Input} placeholder='Username' type="text" />
                            <input className={style.Input} placeholder='E-mail' type="email" />
                            <input className={style.Input} placeholder='Password' type="password" />
                        </div>
                        <button className={style.CastomBtn_2}>Login</button>
                    </div>

                    {/* Social Links */}
                    <div className={style.OurLinks}>
                        <a href="#" className={style.OureLinks_Links}>
                            <img src={Instagram} alt="" />
                            @Field.Fitness
                        </a>
                        <a href="#" className={style.OureLinks_Links}>
                            <img src={Tg} alt="" />
                            @fieldfitness
                        </a>
                        <a href="#" className={style.OureLinks_Links}>
                            <img src={Vk} alt="" />
                            https://vk.com/field_fitness
                        </a>
                        <a href="#" className={style.OureLinks_Links}>
                            <img src={TikTok} alt="" />
                            @gymfieldfitness
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Login;