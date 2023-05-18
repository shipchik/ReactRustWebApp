import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img01 from '../../../img/SliderImg1.png'
import Img02 from '../../../img/SliderImg2.png'
import Img03 from '../../../img/SliderImg3.png'
import style from "./Slider.module.css";


export default function Slider() {
    return (

        <div className={style.SliderBox}>
            <Fade>
                <div className={style.EachFade}>
                    <div className={style.Headline} style={{
                        backgroundImage: `url(${Img01})`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: ` center`,
                        height: `100%`

                    }}
                    >
                        <h1>Be<i> fit</i>,
                            <p><i> be</i> alive</p></h1>
                        <p> Сhange yourself for the better with us</p>
                    </div>

                </div>
                <div className={style.EachFade}>
                    <div className={style.Headline} style={{
                        backgroundImage: `url(${Img02})`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: ` center`,
                        height: `100%`

                    }}
                    >
                        <h1>Be<i> fit</i>,
                            <p><i> be</i> alive</p></h1>

                        <p> Сhange yourself for the better with us</p>
                    </div>

                </div>
                <div className={style.EachFade}>
                    <div className={style.Headline} style={{
                        backgroundImage: `url(${Img03})`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`,
                        backgroundPosition: ` center`,
                        height: `100%`

                    }}
                    >
                        <h1>Be<i> fit</i>,
                            <p><i> be</i> alive</p></h1>
                        <p> Сhange yourself for the better with us</p>
                    </div>

                </div>
            </Fade>
        </div >

    );
}
