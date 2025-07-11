import React, { FC } from "react"
import styles from "@styles/ProjectPreview.module.scss"
import Image, { StaticImageData } from "next/image"
import ima from "@assets/video2.jpg"
type Props = {
  preview: StaticImageData
    shadow?: boolean
}

const ProjectPreview: FC<Props> = ({ preview, shadow }) => {
  return (
    <div className={styles.preview} data-project-preview={true}>
      <div className={styles.image} data-project-preview-shadow={shadow}>
        {/* <Image
          src={ima}
          alt="preview"
          layout="fixed"
          width={700}
          height={370}
        /> */}
      </div>
    </div>
  )
}

export { ProjectPreview }
