import React from 'react'
import Telegram from '../../svg/Telegram'
import Viber from '../../svg/Viber'
import WhatsApp from '../../svg/WhatsApp'

const SocialLinks = () => {
  return (
    <div className="social-links">
        <div className="social-links_item">
          <Telegram/>
        </div>
        <div className="social-links_item">
          <Viber/>
        </div>
        <div className="social-links_item">
          <WhatsApp/>
        </div>
      </div>
  )
}

export default SocialLinks