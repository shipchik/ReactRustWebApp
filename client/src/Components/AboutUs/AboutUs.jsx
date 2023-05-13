import style from './AboutUs.modules.css';
import AboutHeaderBacground from '../../img/AboutHeaderBacground.png';
import AboutMainBacground from '../../img/AboutMainBacground.png';

function About() {
    return (
        <div className={style.AboutUs}>
            <header style={{
                backgroundImage: `url(${AboutHeaderBacground})`,
                WebkitBackgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            }}>
                <div className='container'>
                    <div className='HeadLine'>
                        <h1>
                            We are your
                            <p>motivation</p>
                        </h1>
                    </div>
                </div>
            </header>


            <main style={{
                backgroundImage: `url(${AboutMainBacground}), `,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: ` right top`
            }}>
                <div className='container'>

                    <div className={style.AboutUsMainConent}>
                        <section className={style.StatisticSection}>

                        </section>
                    </div>
                </div>
            </main>


            <footer></footer>
        </div>

    );
}

export default About;



