import React from "react"
import styles from "@styles/HardSkills.module.scss"

import { Heading } from "@components/Heading"
import { SkillsGroup } from "@components/SkillsGroup"

import tiktok from "@assets/tiktok.png"
import instagram from "@assets/instagram.png"
import youtube from "@assets/youtube.png"

import adobe from "@assets/adobe.png"
import capcut from "@assets/capcut.png"
import davinci from "@assets/davinci.png"

import cut from "@assets/cut.png"
import color from "@assets/color.png"
import sound from "@assets/sound.png"
import trim from "@assets/trim.png"
import audio from "@assets/audio.png"
import transition from "@assets/transition.png"


import time from "@assets/time.png"
import com from "@assets/com.png"
import qua from "@assets/qua.png"
const HardSkills = () => {
  return (
    <div className={styles.skills} id="skills">
      <Heading title="Hard Skills"  subtitle="Few words about me 🤓"/>
      <div className={styles.container}>
        {/* Programming */}
        <div className={styles.row}>
          <SkillsGroup
            technologies={[
              { name: "Capcut", icon: [capcut.src, capcut.src] },
              { name: "Davinci Resolve", icon: [davinci.src, davinci.src] },
              { name: "Adobe Premiere Pro", icon: [adobe.src, adobe.src] },
            ]}
          />
        </div>
        <hr />

        <Heading title="Major Services Provide for Our Clients" subtitle="Major Services Provide for Our Clients" />
        <div className={styles.container}>
        <div className={styles.row}>
          {/* Frontend */}
          <SkillsGroup
            technologies={[
              { name: "Youtube Long and Shorts Editor", icon: [youtube.src, youtube.src] },
              { name: "Instagram reels Editor", icon: [instagram.src, instagram.src] },
              { name: "Tiktok Video Editor", icon: [tiktok.src, tiktok.src] },
            ]}
          />
        </div>
        </div>
        {/* Frontend / Libraries */}
<hr />
        {/* Design */}
        <div className={styles.row}>
          {/* Design */}
          <SkillsGroup
            title="Major Video Editing Skills"
            technologies={[
              { name: "Footage Cutting", icon: [cut.src, cut.src] },
              { name: "Audio Editing", icon: [audio.src, audio.src] },
              { name: "Color Grading", icon: [color.src, color.src] },
              { name: "Add Transition", icon: [transition.src, transition.src] },
              { name: "Video Trimming", icon: [trim.src, trim.src] },
              { name: "Add Sound Effects", icon: [sound.src, sound.src] },
            ]}
          />
        </div>
<hr />
        {/* Design */}
        <div className={styles.row}>
          {/* Design */}
          <SkillsGroup
            title="Our Major Soft Skills"
            technologies={[
              { name: "Provide Quality Product", icon: [qua.src, qua.src] },
              { name: "Have Better Communication", icon: [com.src, com.src] },
              { name: "Provide Services on Time", icon: [time.src, time.src] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
export { HardSkills }
