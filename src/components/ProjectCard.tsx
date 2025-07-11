import React, { FC } from "react"
import styles from "@styles/ProjectCard.module.scss"

import { StaticImageData } from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Props = {
  name: string
  description: string
  preview: StaticImageData
  youtubeUrl: string
  type?: "double"
}

const animations = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.15, 0.55, 0.55, 1],
    },
  },
}

const ProjectCard: FC<Props> = ({
  name,
  description,
  preview,
  youtubeUrl,
  type,
}) => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
  })

  React.useEffect(() => {
    if (inView) controls.start("visible")
  }, [controls, inView])

  return (
    <motion.div
      className={`${styles.card} ${type ? styles.double : ""}`}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animations}
    >
      <div className={styles.imageContainer}>
        <Image
          src={preview}
          alt={name}
          width={400}
          height={300}
          className={styles.previewImage}
        />
        <div className={styles.overlay}>
          <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <div className={styles.youtubeButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Watch on YouTube</span>
            </div>
          </Link>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  )
}

export { ProjectCard }
