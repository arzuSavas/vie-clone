import React from 'react'
import Particles from "react-tsparticles";
const Particle=()=> {
	
  return (
	<Particles
	id="tsparticles"
	
	options={{
	  "interactivity": {
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
		},
		"modes": {
			"bubble": {
				"distance": 250,
				"duration": 2,
				"size": 0,
				"opacity": 0
			},

		  "repulse": {
			"distance": 400,
			"duration": 1
		},
		},
	  },
	  particles: {
		collisions: {
		  enable: true,
		},
		move: {
		  direction: "none",
		  enable: true,
		  outMode: "bounce",
		  random: false,
		  speed: 1,
		  straight: false,
		},

		opacity: {
		  value: 0.4,
		},
		shape: {
		  type: "circle",
		},
		size: {
		  random: true,
		  value: 1,

		},
	  },
	  detectRetina: true,
	}}
  />
  )
}

export default Particle