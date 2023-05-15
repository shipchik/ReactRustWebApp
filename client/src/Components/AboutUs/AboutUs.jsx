import style from './AboutUs.module.css';
import AboutHeaderBacground from '../../img/AboutHeaderBacground.png';
import AboutMainBacground1 from '../../img/AboutMainBacground1.png';
import AboutMainBacground2 from '../../img/AboutMainBacground2.png';


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


            <main style={{
                backgroundImage: `url(${AboutMainBacground1}) `,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: ` right top`,
            }}>

                <div className='container'>
                    <div className={style.AboutUsMainConent}>

                        {/* Statistics */}
                        <section className={style.AboutMainSection}>

                            <h3 className={style.AboutMainSectionNameTag}>
                                Statistics
                            </h3>
                            <p className={style.AboutMainSectionFirstParagraf}>Field<i className='AlarmText'>Fitness</i> has been helping people stay healthy for over 30 years. More than 500 people are engaged in our hall.</p>

                        </section>

                        {/* Our culture*/}
                        <section className={style.AboutMainSection}>
                            <h3 className={style.AboutMainSectionNameTag}>
                            Our culture
                            </h3>
                            <p className={style.AboutMainSectionThirdParagraf}>We know that creating a positive mindset is incredibly important. We believe in encouragement, support, challenge, learning and growth to be the best! Our flexible work solutions, gym discounts and training opportunities create a positive work-life balance for all of our employees.</p>
                        </section>



                    </div>
                </div>
            </main>


            <footer>
                
            </footer>
        </div>

    );
}

export default About;



