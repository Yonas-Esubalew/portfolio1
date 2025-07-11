import React from "react"
import styles from "@styles/Bio.module.scss"
import Image from "next/image"
import avatar from "@assets/Yonas.png"

const Bio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={avatar}
          width={175}
          height={175}
          style={{
    borderRadius: '50%',
    objectFit: 'cover',
  }}
          alt="avatar"
          layout="fixed"
        />
      </div>
      <h1>
        Hi, my name is <span className={styles.name}>Yonas Esubalew.</span>
        <br />
        I’m a <span className={styles.developer}>
          Video Editor
        </span> & <span className={styles.designer}>Content Creator.</span>
      </h1>
    </div>
  )
}

export { Bio }
