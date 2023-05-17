import Login from '../Login/Login';
import style from './Team.module.css';

import Background_1 from '../../img/Trainings/Background_1.png';
import Background_2 from '../../img/Trainings/Background_2.png';

import Img1 from '../../img/Team/O11.png';
import Img2 from '../../img/Team/O22.png';
import Img3 from '../../img/Team/O1.png';
import Img4 from '../../img/Team/O2.png';
import Img5 from '../../img/Team/O12.png';
import Img6 from '../../img/Team/O21.png';


function Team() {
    return (
        <div className={style.Team}>

            {/* Ophilia Diaz*/}
            <div className={style.Coach} style={{
                backgroundImage: `url(${Background_1})`,
                backgroundRepeat:`no-repeat`,
                backgroundSize: `cover`,
                paddingTop:`100px`,
                height:`1589px`
            }}>
                <div className="container">
                    <div className={style.CoachInfo}>
                        <section className={style.Information}>
                            <img src={Img5} alt="" />
                            <div className={style.TextBox}>
                                <h3>Ophilia Diaz</h3>
                                <p className={style.PreInfo}><i className='AlarmText'>Fitness Instructor, Group Aerobics Instructor, Yoga Coach</i></p>
                                <p>Ophilia grew up playing sports, competing in track and field, and dancing. After she graduated from college with a degree in sports science, she started working as a personal trainer at a local gym. It wasn't long before she discovered her passion for teaching group fitness classes. Over the next few years, Ophilia became certified as a group aerobics instructor and began teaching classes like kickboxing, step aerobics, and dance fitness. Ophilia took classes, completed a yoga teacher training program, and began teaching yoga classes at her gym. It was a perfect complement to her more intense aerobics classes. Over time, Ophilia became known as a total wellness coach, teaching classes that blended aerobics, yoga, and strength training.</p>
                            </div>
                        </section>

                        <section className={style.Reviews}>
                            <img src={Img2} alt="" />
                            <div className={style.TextBox}>
                                <h3>Reviews for Ophilia Diaz</h3>

                                <p>
                                    "I can't say enough positive things about my fitness instructor. She is always so enthusiastic and motivating during our workouts. She pushes us to reach our goals and encourages us every step of the way." - Vail Gonzales
                                </p>

                                <p>
                                    "Our group aerobics instructor always has such a great energy during our classes. Her ability to lead a class and provide modifications for different fitness levels shows her expertise in the field." - Kian Sanchez
                                </p>


                                <p>
                                    "I am so grateful for my yoga coach. She has not only helped me improve my physical flexibility and strength, but also taught me valuable mindfulness techniques that have improved my mental health." - Selena Morris
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Roy Gonzales */}
            <div className={style.Coach}>
                <div className="container">
                    <div className={style.CoachInfo}>
                        <section className={style.Information}>
                            <img src={Img1} alt="" />
                            <div className={style.TextBox}>
                                <h3>Roy Gonzales</h3>
                                <p className={style.PreInfo}><i className='AlarmText'>Personal Trainer, Gym Manager, CrossFit Coach</i></p>
                                <p>As a young boy, Roy was fascinated by fitness, health, and athletics. He spent many afternoons running, playing sports, and pushing his body to the limit. By the time he entered college, he was hooked on the gym and realized he wanted to make it his life.

                                    Roy started by bagging weights and cleaning equipment at a local gym. But he worked hard to make connections and gain experience, all while planning his own gym in his head. Eventually, Roy was promoted to gym manager, which gave him the experience he needed to open his gym.

                                    Over time, Roy became a popular CrossFit coach and personal trainer, quickly earning a name for himself in the fitness industry. </p>
                            </div>
                        </section>

                        <section className={style.Reviews}>
                            <img src={Img6} alt="" />
                            <div className={style.TextBox}>
                                <h3>Reviews for Roy Gonzales</h3>

                                <p>
                                    "Roy is incredibly knowledgeable about fitness and create personalized plans for each of their clients. His passion for fitness is contagious and inspires everyone around them to push themselves harder." - Watson Hayes
                                </p>

                                <p>
                                    "He is great motivators and always know how to encourage their clients to reach their goals. Roy is professional, reliable, and always show up prepared and ready to help their clients achieve their best." - Jaliyah Morris
                                </p>

                                "I am so grateful for my yoga coach. She has not only helped me improve my physical flexibility and strength, but also taught me valuable mindfulness techniques that have improved my mental health." - Selena Morris

                                <p>
                                    "As a gym manager, Roy keeps the facility clean and well-maintained, and ensure that everyone feels welcome and comfortable. As a CrossFit coach, Roy leads challenging and fun workouts that leave their clients feeling accomplished and energized." - Reina Stewart                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Valentino Sanders */}
            <div className={style.Coach} style={{
                background: `url(${Background_2})`,
                backgroundRepeat: `no-repeat`,
                marginBottom: `-200px`,
                backgroundPosition: `left bottom`,
                height:`1508px`
            }}>
                <div className="container">
                    <div className={style.CoachInfo}>
                        <section className={style.Information}>
                            <img src={Img3} alt="" />
                            <div className={style.TextBox}>
                                <h3>Valentino Sanders</h3>
                                <p className={style.PreInfo}><i className='AlarmText'>Bodybuilding Trainer, Personal Trainer, Muay Thai Trainer</i></p>
                                <p>After graduating high school, Valentino pursued his passion for fitness, and he enrolled in a fitness trainer course. He trained hard and gained a lot of knowledge and experience in bodybuilding, personal training, and martial arts.

                                    Soon after completing his course, Valentino started working as a personal trainer in a gym. He quickly made a name for himself as an excellent trainer who produced results. He knew how to motivate his clients and get them to achieve their fitness goals.

                                    As Valentino's reputation grew, he expanded his services into bodybuilding and Muay Thai training. Valentino's career continued to flourish, and he began to train top-level athletes in bodybuilding and Muay Thai, including professional fighters.

                                    Today, Valentino is a well-known and respected fitness trainer in the sporting world.</p>
                            </div>
                        </section>

                        <section className={style.Reviews}>
                            <img src={Img4} alt="" />
                            <div className={style.TextBox}>
                                <h3>Reviews for Valentino Sanders</h3>

                                <p>
                                    "Valentino is absolutely fantastic! He pushes you to your limits while staying positive and encouraging. I always leave their sessions feeling accomplished and energized." - Tori Price
                                </p>

                                <p>
                                    "I've been working with Valentino  for a few months now and have seen such a huge improvement in my strength and overall fitness level. He truly knows how to customize a workout routine that works for your specific goals and abilities." - Dulce Williams
                                </p>


                                <p>
                                "If you're looking for a trainer who is knowledgeable, dedicated, and fun to work with, look no further than Valentino . He has a great sense of humor and make every session enjoyable, while still pushing you to achieve your best." - Xavion Gonzales                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Login />
        </div>
    );
}

export default Team;