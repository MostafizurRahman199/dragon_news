import React from 'react'

import SocialLogin from '../components/SocialLogin'
import SocialFollow from '../components/SocialFollow'
import QueueZone from '../components/QueueZone'
const RightSidebar = () => {
  return (
   <div>
    <SocialLogin/>
    <SocialFollow/>
    <QueueZone/>
   </div>
  )
}

export default RightSidebar