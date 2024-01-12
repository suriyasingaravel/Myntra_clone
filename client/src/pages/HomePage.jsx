import React from 'react'
import Slider from '../Components/Slider'
import Hero from '../Components/Hero'
import Hero2 from '../Components/Hero2'

const HomePage = () => {
  return (
    <div>
        <Slider/>
        <Hero p={"MEDAL WORTHY BRANDS TO BAG"}/>
        <Hero2 p={"GRAND GLOBAL BRANDS"}/>
    </div>
  )
}

export default HomePage