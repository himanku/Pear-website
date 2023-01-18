import React from 'react'
import styles from '../InputControl/InputControl.module.css'
export const InputControl = (props) => {
  return (
    <div className={styles.container}>
        {props.label && <label>{props.label}</label>}

        
        <input  {...props} />
    </div>
  )
}
