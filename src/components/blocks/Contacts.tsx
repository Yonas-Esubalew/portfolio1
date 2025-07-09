import React, { FC } from "react"
import styles from "@styles/Contacts.module.scss"

import { Heading } from "@components/Heading"
import { ContactLink } from "@components/ContactLink"

import telegram from "@icons/telegram.svg"
import email from "@icons/email.svg"
import you from "@assets/you.png"
const Contacts: FC = () => {
  return (
    <div className={styles.contacts} id="contacts">
      <Heading title="Contacts" subtitle="Feel free to contact me 😉" />
      <div className={styles.container}>
        
        <ContactLink
          icon={email}
          title="Email"
          value="yonasatwork999@gmail.com"
          url="yonasatwork999@gmail.com"
        />
        <ContactLink
          icon={you.src}
          title="Youtube Automation Channel"
          value="Famegenix"
          url="https://youtube.com/@famegenix9?si=UCxORbRxGaLm6ytV"
        />
        <ContactLink
          icon={telegram}
          title="Telegram"
          value="Yonas"
          url="https://t.me/q999qw"
        />
        <ContactLink
          icon={telegram}
          title="Telegram Channel"
          value="Yon Editing"
          url="https://t.me/yonediting"
        />
      </div>
    </div>
  )
}

export { Contacts }
