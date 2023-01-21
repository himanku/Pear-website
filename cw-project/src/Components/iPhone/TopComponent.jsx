import React from 'react'
import style from "./TopComponent.module.css"

export const TopComponent = ({src,title}) => {
  return (
    <div className={style.component}>
    <img src={src} alt="" />
    <br />
    <div><p>{title}</p></div>


    </div>
  )
}
