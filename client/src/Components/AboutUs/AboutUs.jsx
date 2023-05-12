import style from './AboutUs.modules.css';
import AboutHeaderBacground from './AboutHeaderBacground.png';

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
            <main>
                <div className='ContentBox'></div>
            </main>
            <footer></footer>
        </div>

    );
}

export default About;
