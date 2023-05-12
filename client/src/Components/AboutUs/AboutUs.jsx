import style from './AboutUs.modules.css'

function About() {
    return (
        <div className='TeamPage'>
            <header className={style.AboutHeader}>
                <div className='ContentBox'>
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
