import React from "react"
import styles from "@styles/Projects.module.scss"
import { Heading } from "@components/Heading"
import { ProjectCard } from "@components/ProjectCard"
import uncosPreview from "@assets/projects/uncos-preview.png"
import uncosBlur from "@assets/projects/uncos-blur.png"

/** Pizza **/
import pizzaLogoDark from "@assets/projects/pizza-logo-dark.svg"
import pizzaLogoLight from "@assets/projects/pizza-logo-light.svg"
import pizzaPreview from "@assets/projects/pizza-preview.png"
import pizzaBlur from "@assets/projects/pizza-blur.png"

/** Xanity **/
import xanityLogoDark from "@assets/projects/xanity-logo-dark.svg"
import xanityLogoLight from "@assets/projects/xanity-logo-light.svg"
import xanityPreview from "@assets/projects/xanity-preview.png"
import xanityBlur from "@assets/projects/xanity-blur.png"
import schedulePreview from "@assets/projects/schedule-preview.png"
import scheduleBlur from "@assets/projects/schedule-blur.png"

/** Studify **/
import studifyLogoDark from "@assets/projects/studify-logo-dark.svg"
import studifyLogoLight from "@assets/projects/studify-logo-light.svg"
import studifyPreview from "@assets/projects/studify-preview.png"
import studifyBlur from "@assets/projects/studify-blur.png"

/** DocStorage */
import docstorageLogoDark from "@assets/projects/docstorage-logo-dark.svg"
import docstorageLogoLight from "@assets/projects/docstorage-logo-light.svg"
import docstoragePreview from "@assets/projects/docstorage-preview.png"
import docstorageBlur from "@assets/projects/docstorage-blur.png"

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <Heading title="My Projects" subtitle="Made with ❤️ and passion" />
      <div className={styles.container}>
        {/* Uncos */}
        <ProjectCard
          name="Uncos"
          logoDark={uncosPreview.src}
          logoLight={uncosPreview.src}
          stack={[[uncosPreview.src, uncosPreview.src]]}
          description="News Agency Website with admin dashboard. Made with React.js, Java Spring and PostgreSQL."
          url="https://uncos.saizaax.dev"
          github="https://github.com/saizaax/uncos"
          preview={uncosPreview}
          blur={uncosBlur}
        />

        <div className={styles.double}>
          {/* Next Pizza */}
          <ProjectCard
            name="Next Pizza"
            logoDark={pizzaLogoDark.src}
            logoLight={pizzaLogoLight.src}
            stack={[[pizzaLogoDark.src, pizzaLogoLight.src]]}
            description="Next Pizza Website. Made with Next.js, Redux, TypeScript, Prisma and PlanetScale."
            url="https://pizza.saizaax.dev"
            github="https://github.com/saizaax/next-pizza"
            preview={pizzaPreview}
            blur={pizzaBlur}
            type="double"
          />
          
          {/* Xanity */}
          <ProjectCard
            name="Xanity"
            logoDark={xanityLogoDark.src}
            logoLight={xanityLogoLight.src}
            stack={[[xanityLogoDark.src, xanityLogoLight.src]]}
            description="Xanity — Hardware Store Website. Made with React.js, TypeScript, Nest.js, MongoDB."
            url="https://xanity.saizaax.dev"
            github="https://github.com/saizaax/xanity"
            preview={xanityPreview}
            blur={xanityBlur}
            type="double"
          />
        </div>

        {/* DocStorage */}
        <ProjectCard
          name="DocStorage"
          logoDark={docstorageLogoDark.src}
          logoLight={docstorageLogoLight.src}
          stack={[[docstorageLogoDark.src, docstorageLogoLight.src]]}
          description="DocStorage — cloud service for uploading, editing and translating text documents."
          url="https://docstorage.saizaax.dev"
          github="https://github.com/saizaax/doc-storage"
          preview={docstoragePreview}
          blur={docstorageBlur}
          previewShadow={true}
        />

        {/* Yet Another Schedule App */}
        <ProjectCard
          name="Yet Another Schedule App"
          logoDark={xanityLogoDark.src}
          logoLight={xanityLogoLight.src}
          stack={[[xanityLogoDark.src, xanityLogoLight.src]]}
          description="Yet Another Schedule App — web schedule application for RTU MIREA university. Made with React.js, Express and PostgreSQL."
          url="https://schedule.saizaax.dev"
          github="https://github.com/saizaax/yet-another-schedule-app"
          preview={schedulePreview}
          blur={scheduleBlur}
          previewShadow={true}
        />

        {/* Studify */}
        <ProjectCard
          name="Schedule Native"
          logoDark={studifyLogoDark.src}
          logoLight={studifyLogoLight.src}
          stack={[[studifyLogoDark.src, studifyLogoLight.src]]}
          description="Schedule Native — mobile schedule-app for RTU MIREA university. Made with React Native and TypeScript."
          github="https://github.com/saizaax/schedule-native"
          preview={studifyPreview}
          blur={studifyBlur}
          previewShadow={true}
        />
      </div>
    </div>
  )
}

export { Projects }
