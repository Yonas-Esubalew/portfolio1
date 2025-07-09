import React, { FC } from "react"
import styles from "@styles/SkillsItem.module.scss"

import Image , { StaticImageData } from "next/image"
import { useTheme } from "next-themes"

import { Icon } from "@custom-types/StackIcon.type"

type Props = {
  name: string
  icon: Icon
}

const SkillsItem: FC<Props> = ({ name, icon }) => {
  const { resolvedTheme: theme } = useTheme()

  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <Image
          src={theme === "dark" ? icon[0] : icon[1]}
          alt={name}
          layout="fixed"
          height={200}
          width={200}
          style={{
            objectFit: "cover",
            justifyContent: "center",
          }}
        />
      </span>
      <p>{name}</p>
    </div>
  )
}

export { SkillsItem }
