import React from "react"
import styles from "@styles/Projects.module.scss"
import { Heading } from "@components/Heading"
import { ProjectCard } from "@components/ProjectCard"

// Video Editing Project Images
import videoEdit1 from "@assets/coffee.png"
import videoEdit2 from "@assets/peter.png"
import videoEdit3 from "@assets/model.png"
import videoEdit4 from "@assets/messi1.png"
import podcast1 from "@assets/Podcast-1.jpg"
import podcast2 from "@assets/podcast-2.jpg"
import podcast3 from "@assets/podcast-3.jpg"
import podcast4 from "@assets/podcast-4.jpg"

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <Heading
        title="My Video Editing Projects"
        subtitle="Professional Video Editing Services 🎬"
      />
      <div className={styles.container}>
        {/* YouTube Video Editing Project 1 - Full Width */}
        <div className={styles.fullWidth}>
          <ProjectCard
            name="Podcast Video Editing"
            description=" Professional podcast video editing with engaging transitions, sound effects, color grading, and optimized content for maximum viewer retention. Perfect for YouTube and social media platforms."
            preview={podcast1}
            youtubeUrl="https://youtube.com/shorts/WouE2WrUKtA?si=8KETAFzw7PkdK9JO"
          />
        </div>

        <div className={styles.double}>
          {/* Instagram Reels Project */}
          <ProjectCard
            name="Podcast Video Editor"
            description="podcast video editing with engaging transitions, sound effects, color grading, and optimized content for maximum viewer retention. Perfect for YouTube and social media platforms."
            preview={podcast2}
            youtubeUrl="https://youtube.com/shorts/oTszU40Gid8?si=EY1DrXUxcbqIM-KK"
            type="double"
          />

          {/* TikTok Video Project */}
          <ProjectCard
            name="Podcast Video Creator"
            description="Professional podcast video editing with engaging transitions, sound effects, color grading, and optimized content for maximum viewer retention. Perfect for YouTube and social media platforms."
            preview={podcast3}
            youtubeUrl="https://youtube.com/shorts/_TAlVXy7bec?si=Fn65PUrSoFp_H0Ta"
            type="double"
          />
        </div>

       <div className={styles.fullWidth}>
          <ProjectCard
            name="Podcast Video Editing"
            description="Professional podcast video editing with engaging transitions, sound effects, color grading, and optimized content for maximum viewer retention. Perfect for YouTube and social media platforms."
            preview={podcast4}
            youtubeUrl="https://youtube.com/shorts/Pg4Ob5tuhq0?si=14OgCNyjRL6Im-Pc"
          />
        </div>

        <div className={styles.fullWidth}>
          <ProjectCard
            name="CGI ads animated visual editing"
            description="Professional CGI ads visual editing with engaging transitions, sound effects, color grading, and optimized content for maximum viewer retention. Perfect for Services and Product Advertising use only AI."
            preview={videoEdit1}
            youtubeUrl="https://youtube.com/shorts/YWKv2Le4uso?si=c1-p2bdMIv2RWHvJ"
          />
        </div>
        <div className={styles.double}>
          {/* Instagram Reels Project */}
          <ProjectCard
            name="Instagram Reels Editor"
            description="Trendy Instagram Reels with viral hooks, smooth transitions, and engaging effects. Optimized for Instagram's algorithm and maximum reach. best for brand promotion and audience engagement"
            preview={videoEdit2}
            youtubeUrl="https://youtube.com/shorts/AXHwOVQXrfY?si=2_ND7gqGYEL2WsU2"
            type="double"
          />

          {/* TikTok Video Project */}
          <ProjectCard
            name="TikTok Video Creator"
            description="Viral TikTok content with trending effects, perfect timing, and engaging storytelling. Designed for maximum engagement and follower growth. use trending music and effects to boost visibility and viral potential."
            preview={videoEdit3}
            youtubeUrl="https://youtube.com/shorts/psELRUJWPP0?si=KpGgkOTKuNePxpc6"
            type="double"
          />
        </div>

        {/* Corporate Video Project - Full Width */}
        <div className={styles.fullWidth}>
          <ProjectCard
            name="AI Youtube Automation Video Editor"
            description="video editing services for YouTube automation, including script optimization, engaging visuals, and audience retention strategies. by using AI tools to enhance video quality and engagement, we ensure your content stands out in the competitive YouTube landscape."
            preview={videoEdit4}
            youtubeUrl="https://youtube.com/shorts/AHBJIteLsmY?si=jYCjjGkutniogP5E"
          />
        </div>
      </div>
    </div>
  )
}

export { Projects }
