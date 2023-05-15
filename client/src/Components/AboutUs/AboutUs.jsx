import style from './AboutUs.module.css';

import AboutHeaderBacground from '../../img/AboutHeaderBacground.png';
import AboutMainBacground1 from '../../img/AboutMainBacground1.png';
import AboutMainBacground2 from '../../img/AboutMainBacground2.png';
import AboutMainBacground3 from '../../img/AboutMainBacground3.png';
import AboutFooterBacground from '../../img/AboutFooterBacground.png'

import { NavLink } from 'react-router-dom';

function About() {
    console.log(style)
    return (
        <div className={style.AboutUs}>
            <header style={{
                backgroundImage: `url(${AboutHeaderBacground})`,
                WebkitBackgroundSize: `cover`,
                backgroundRepeat: `auto auto`
            }}>
                <div className='container'>
                    <div className={style.HeadLine}>
                        <h1 className={style.HeadLineText}>
                            We are your
                            <p className='AlarmText'>motivation</p>
                        </h1>
                    </div>
                </div>
            </header>


            <main className={style.AboutUsMain} style={{
                backgroundImage: `url(${AboutMainBacground1}) `,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: ` right top`,
            }}>

                {/* Statistics */}
                <section>
                    <div className='container'>
                        <div className={style.AboutUsMainSectionContent}>
                            <h3>Statistics</h3>
                            <p className={style.AboutUsMainSectionContentP1}>Field<i className='AlarmText'>Fitness</i> has been helping people stay healthy for over 30 years. More than 500 people are engaged in our hall.</p>
                        </div>
                    </div>
                </section>

                {/* Our story */}
                <section style={{
                    backgroundImage: `url(${AboutMainBacground2})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: ` left`
                }}>
                    <div className="container">
                        <div className={`${style.AboutUsMainSectionContent} ${style.AboutUsMainSectionContentPos}`}>
                            <h3>Our story</h3>
                            <p className={style.AboutUsMainSectionContentP2}>Our company was founded in 1993. And since then we have not ceased to take care of you. We’re committed to improving individuals' health, fitness, and well-being by supporting global and local charities, local sports teams, and events.</p>
                        </div>
                    </div>
                </section>

                {/* Our culture */}
                <section>
                    <div className="container">
                        <div className={style.AboutUsMainSectionContent}>
                            <h3>Our culture</h3>
                            <p className={style.AboutUsMainSectionContentP3}>We know that creating a positive mindset is incredibly important. We believe in encouragement, support, challenge, learning and growth to be the best! Our flexible work solutions, gym discounts and training opportunities create a positive work-life balance for all of our employees.</p>
                        </div>
                    </div>
                </section>

                {/* Button */}
                <section style={{
                    backgroundImage: `url(${AboutMainBacground3})`,
                    backgroundRepeat: `no-repeat`,
                    backgroundPosition: ` left bottom`,
                    height: `500px`,
                }}>
                    <div className={style.AboutUsMainSectionContentPosBtn}>
                        <NavLink >
                            <div className={style.CastomBtn_1}>GET IN TOUCH</div>
                        </NavLink>
                    </div>

                </section>

            </main>


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
                        <div className={style.LoginForm}>
                            <div className={style.LoginFormInput}>
                                <input placeholder='Username' type="text" />
                                <input placeholder='E-mail' type="email" />
                                <input placeholder='Password' type="password" />
                            </div>
                            <button className={style.CastomBtn_2}>Login</button>
                        </div>

                        {/* Social Links */}
                        <div className={style.OurLinks}>
                            <a href="" className={style.OureLinks_Links}>
                                <img src="" alt="" />
                                @Field.Fitness
                            </a>
                            <a href="" className={style.OureLinks_Links}>
                                <img src="" alt="" />
                                @fieldfitness
                            </a>
                            <a href="" className={style.OureLinks_Links}>
                                <img src="" alt="" />
                                https://vk.com/field_fitness
                            </a>
                            <a href="" className={style.OureLinks_Links}>
                                <img src="" alt="" />
                                @gymfieldfitness
                            </a>
                        </div>
                    </div>
                </div>
            </footer >
        </div>

    );
}

export default About;



