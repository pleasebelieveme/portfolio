import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '/public/home-animation.json'

export default function HomeAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}