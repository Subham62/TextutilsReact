import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Typewriter } from 'react-simple-typewriter';

const Dashboard = () => {
  return (
    // <TypeAnimation
    //   sequence={[
    //     // Same substring at the start will only be typed out once, initially
    //     'We produce food for Mice',
    //     1000, // wait 1s before replacing "Mice" with "Hamsters"
    //     'We produce food for Hamsters',
    //     1000,
    //     'We produce food for Guinea Pigs',
    //     1000,
    //     'We produce food for Chinchillas',
    //     1000
    //   ]}
    //   wrapper="span"
    //   speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
    //   repeat={Infinity}
    // />
    <h2 className="text-xl font-semibold text-center mt-4">
        <p>Welcome ...</p>
      <Typewriter
        words={[
          'Analyze Your Text Instantly...',
          'Convert to UPPERCASE or lowercase...',
          'Remove Unwanted Spaces with One Click!',
          'Fast. Free. Browser-Based.',
          'Write ✍️ • Format 🔧 • Optimize ⚡',
          'Simple Text Editing for Everyone !',
          'Your Smart Text Assistant !'
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>

  )
}

export default Dashboard

