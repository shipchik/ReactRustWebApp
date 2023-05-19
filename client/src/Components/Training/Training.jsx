import Login from '../Login/Login';
import style from './Training.module.css';

import Background_1 from '../../img/Trainings/Background_1.png';
import Background_2 from '../../img/Trainings/Background_2.png';
import img1 from '../../img/Trainings/training11.png'
import img2 from '../../img/Trainings/training21.png'
import img3 from '../../img/Trainings/training21-1.png'
import img4 from '../../img/Trainings/training21-2.png'
import img5 from '../../img/Trainings/training21-3.png'
import img6 from '../../img/Trainings/training21-4.png'

function Training() {
    return (
        <div className={style.Training}>

            <div className={style.FirstPart} style={{
                background: `url(${Background_1})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
            }}>
                <div className="container">
                    <div className={style.FirstPart}>

                        <section className={style.Content}>
                            <img src={img1} alt="" />
                            <div className={style.text}>
                                <p>Gym workouts typically involve a variety of exercises designed to improve different aspects of fitness, such as strength, endurance, flexibility, balance, and coordination. </p>

                                <p>
                                    <b>
                                        Some of the most common exercises include:
                                    </b>
                                </p>
                            </div>
                        </section>

                        <section className={style.ContentRevers}>
                            
                            <div className={style.TextBox}>
                                <h5>Resistance training:</h5>
                                <p>Using weights, resistance bands, or machines to challenge specific muscle groups, with progressive overload to stimulate muscle growth and toning. Examples of resistance exercises include bench press, shoulder press, bicep curls, tricep extensions, squats, lunges, deadlifts, leg presses, and calf raises.</p>
                            </div>
                        </section>

                        <section className={style.Content}>
                            <img src={img3} alt="" />
                            <div className={style.TextBox}>
                                <h5>Cardiovascular training:</h5>
                                <p>Engaging in repetitive motion exercises that increase heart rate, breathing rate, and blood flow to improve cardiovascular health, burn calories, and reduce stress. Examples of cardio activities include running on a treadmill, cycling on a stationary bike, rowing on a machine, using an elliptical trainer, or doing a group fitness class that involves dancing, jumping, or kicking.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className={style.SecondPart} style={{
                background: `url(${Background_2})`,
                backgroundRepeat: `no-repeat`,
                
                backgroundPosition: `left bottom`,
            }}>
                <div className="container">
                    <section className={style.ContentRevers}>
                        <img src={img4} alt="" />
                        <div className={style.TextBox}>
                            <h5>Plyometric training:</h5>
                            <p> Using explosive movements that involve rapid stretching and contracting of muscles to enhance power, agility, and speed. Examples of plyometric exercises include jumping jacks, jump squats, box jumps, burpees, and power cleans.</p>
                        </div>
                    </section>

                    <section className={style.Content}>
                       
                        <div className={style.TextBox}>
                            <h5>Core training:</h5>
                            <p>Targeting the muscles of the abdominals, lower back, hips, and pelvis to stabilize and support the spine, improve posture, and enhance athletic performance. Examples of core exercises include planks, sit-ups, Russian twists, leg lifts, and back extensions.</p>
                        </div>
                    </section>

                    <section className={style.ContentRevers}>
                        <img src={img6} alt="" />
                        <div className={style.TextBox}>
                            <h5>Stretching and mobility work:</h5>
                            <p>Incorporating gentle movements and stretches that increase joint range of motion, reduce muscle tension, and prevent injury. Examples of stretching exercises include yoga poses, foam rolling, dynamic stretching, and static stretching.</p>
                        </div>
                    </section>

                    <section className={style.TextSection}>
                        <p>Depending on your goals, fitness level, and preferences, you can choose to combine these exercises in different ways, such as doing a full-body workout, a split routine targeting different muscles on different days, or a circuit training program that alternates between strength and cardio stations. You can also adjust the intensity, volume, and frequency of your workouts to challenge yourself and avoid plateaus. With the guidance of a qualified trainer or coach, you can create a gym workout that fits your needs and helps you reach your desired results.</p>

                        <button className={style.Btn}>Ask about training</button>
                    </section>
                </div>
            </div>

            <Login />
        </div>
    );
}

export default Training;