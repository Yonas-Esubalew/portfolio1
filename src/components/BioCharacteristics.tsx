import React from "react"
import styles from "@styles/BioCharacteristics.module.scss"

import { BioItem } from "@components/BioItem"

const BioCharacteristics = () => {
  return (
    <div className={styles.characteristics}>
      <BioItem name="Age" value="23 years old" />
      <BioItem name="Location" value="Ethiopia, Addis Ababa" />
      <BioItem
        name="Education"
        value="Adama Science and Technology University, Computer Science and Engineering"
      /><br></br>
      <BioItem name="Additional Education" value="Coursera Online Platform From Meta and IBM Professional Certificates 2024" />
      <BioItem
        name="Started Date"
        value="May 2022"
      />
      <BioItem
        name="Graduate Expected Date"
        value="June 2026"
      />
      <BioItem
        name="Program"
        value="Bachlor's Degree"
        isLast={true}
      />
      <BioItem name="Total Experience On Video Editing" value="2.5+ years" />
      
    </div>
  )
}

export { BioCharacteristics }
