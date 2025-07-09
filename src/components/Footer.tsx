import React, { FC } from "react"
import styles from "@styles/Footer.module.scss"

import { Socials } from "@components/Socials"

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>
          Copyright © 2025 Yonas Esubalew.
          <br /> All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export { Footer }
