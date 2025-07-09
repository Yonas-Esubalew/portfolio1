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
      <Heading title="Hard Skills" />
      <div className={styles.container}>
        {/* Programming */}
        <div className={styles.row}>
          <SkillsGroup
            technologies={[
              { name: "Capcut", icon: [capcut, capcut] },
              { name: "Davinci Resolve", icon: [davinci, davinci] },
              { name: "Adobe Premiere Pro", icon: [adobe, adobe] },
            ]}
          />
        </div>

        <hr />

        <Heading subtitle="Major Services Provide for Our Clients" />
        <div className={styles.container}>
        <div className={styles.row}>
          {/* Frontend */}
          <SkillsGroup
            technologies={[
              { name: "Youtube Long and Shorts Editor", icon: [youtube, youtube] },
              { name: "Instagram reels Editor", icon: [instagram, instagram] },
              { name: "Tiktok Video Editor", icon: [tiktok, tiktok] },
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
              { name: "Footage Cutting", icon: [cut, cut] },
              { name: "Audio Editing", icon: [audio, audio] },
              { name: "Color Grading", icon: [color, color] },
              { name: "Add Transition", icon: [transition, transition] },
              { name: "Video Trimming", icon: [trim, trim] },
              { name: "Add Sound Effects", icon: [sound, sound] },
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
              { name: "Provide Quality Product", icon: [qua, qua] },
              { name: "Have Better Communication", icon: [com, com] },
              { name: "Provide Services on Time", icon: [time, time] },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export { HardSkills }
