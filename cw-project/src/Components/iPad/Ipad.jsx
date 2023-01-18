import React from 'react';
import style from "./iPad.module.css"

const Ipad = () => {
  return (
    <div>
        <div className={style.ipad_love}>
            <div className={style.image}>
                
                <img src="https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_medium.jpg" alt="" />
            </div>
            <div className={style.text}>
                <h3>New</h3>
                <h1>N</h1>
                <p>From $449</p>
                

            </div>

        </div>
        <div className='ipad_pro'>
            <div>
                <img src="https://www.apple.com/v/ipad-10.9/b/images/overview/features/features__eycgjbkikqky_large.jpg" alt="" />
            </div>
            <div></div>

        </div>

    </div>
  )
}

export default Ipad