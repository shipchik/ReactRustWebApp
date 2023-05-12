import style from './AboutUs.modules.css';
import AboutHeaderBacground from '../../img/AboutHeaderBacground.png';
import AboutMainBacground from '../../img/AboutMainBacground.png';

function About() {
    return (
        <div className='TeamPage'>
            <header className={style.AboutHeader} style={{
                backgroundImage: `url(${AboutHeaderBacground})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            }}>
                <div className='ContentBox'>
                    {/* <img src={AboutHeaderBacground} alt="AboutHeaderBacground" /> */}
                    <h1>We are your <p>motivation</p></h1>
                </div>
            </header>
            <main className={style.AboutMain} style={{
                backgroundImage: `url(${AboutMainBacground})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `right top`


            }}>
                <div className='ContentBox'></div>
            </main>
            <footer></footer>
        </div>

    );
}

export default About;
