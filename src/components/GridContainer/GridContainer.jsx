import React from 'react'
import styles from './GridContainer.module.css'

function GridContainer({ children}) {
  return (
    <div className={`${styles.gridContainer}`}>
      {children}
    </div>
  )
}

export default GridContainer;