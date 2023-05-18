import Login from '../Login/Login';
import style from './Sport.module.css'

import Slider from './Slider/Slider';

import Bg11 from '../../img/sport/Line1.png'
import Bg22 from '../../img/sport/Main2.png'
import Bg12 from '../../img/sport/Main1.png'
import Bg21 from '../../img/sport/Line2.png'
import Bg3 from '../../img/sport/Main3.png'

import Img01 from '../../img/Team/O12.png'
import Img02 from '../../img/Team/O11.png'
import Img03 from '../../img/Team/O1.png'


function Sport() {
    return (
        <div className={style.Sport}>
            <Slider />
            <div>
                <div className={style.MainSport} style={{
                    backgroundImage: `url(${Bg11})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`
                }}
                >

                    <div className={style.ContentBox}>

                        <div className={style.Content}>
                            <img src={Bg12} alt="" />
                            <div className={style.TextBox}>
                                <h3>Why FieldFitness?</h3>
                                <p>Our gym is the perfect place for those who are committed to taking care of their health and physical fitness. We provide all the necessary equipment for effective and varied workouts, along with highly qualified trainers and an excellent environment that inspires motivation towards achieving your fitness goals. We offer a wide range of workout programs, including yoga, Pilates, group training sessions and much more. You can work out solo or in a group, attend different training sessions and competitions. We guarantee that you will be satisfied with the results of your workouts and will enjoy the process of fitness training with us.
                                </p>
                            </div>

                        </div>


                        <div className={style.ContentRevers}>
                            <img src={Bg3} alt="" />
                            <div className={style.TextBox}>

                                <h3>Coach-led Personal + Group Fitness Training</h3>
                                <p>This program is suitable for individuals of all fitness levels, from beginners to advanced athletes. The coach-led Personal and Group Fitness Training helps individuals reach their goals faster, while having fun and enjoying a supportive community. With personalized training and group fitness classes, this program provides a well-rounded approach to fitness, helping individuals become the best version of themselves.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
                <div className={style.ContentBox} style={{
                    backgroundImage: `url(${Bg21})`,
                    backgroundSize: `cover`,
                    backgroundRepeat: `no-repeat`
                }}
                >

                    <div className={style.Content}>
                        <img src={Bg22} alt="" />
                        <div className={style.TextBox}>
                            <h3>Why FieldFitness?</h3>
                            <p>Our gym is the perfect place for those who are committed to taking care of their health and physical fitness. We provide all the necessary equipment for effective and varied workouts, along with highly qualified trainers and an excellent environment that inspires motivation towards achieving your fitness goals. We offer a wide range of workout programs, including yoga, Pilates, group training sessions and much more. You can work out solo or in a group, attend different training sessions and competitions. We guarantee that you will be satisfied with the results of your workouts and will enjoy the process of fitness training with us.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.Team} style={{
                    background: `#394159`,
                }}>
                    <div className="container">
                        <div className={style.TeamBox}>
                            <h4>Our team</h4>
                            <div className={style.TeamContent}>
                                <div className={style.TeamItem}>
                                    <img src={Img01} alt="" />
                                    <h4>Ophilia Diaz</h4>
                                    <p><i>Fitness Instructor, Group Aerobics Instructor, Yoga Coach</i></p>
                                </div>

                                <div className={style.TeamItem}>
                                    <img src={Img02} alt="" />
                                    <h4>Roy Gonzales</h4>
                                    <p>Personal Trainer, Gym Manager, CrossFit Coach</p>
                                </div>
                                <div className={style.TeamItem}>
                                    <img src={Img03} alt="" />
                                    <h4>Valentino Sanders</h4>
                                    <p>Bodybuilding Trainer, Personal Trainer, Muay Thai Trainer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Login />

        </div>
    );
}

export default Sport;