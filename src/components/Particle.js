import React from 'react';
import Particles from 'react-particles-js';

function Particle() {
  return (
    <Particles
      params={{
        fullScreen: {
          zIndex: 1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: '#ff0000',
          },
          links: {
            color: {
              value: '#ffffff',
            },
            distance: 150,
            enable: true,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 5,
            },
            animation: {
              enable: true,
              speed: 20,
              minimumValue: 0.1,
            },
          },
          twinkle: {
            lines: {
              enable: true,
              frequency: 0.005,
              color: {
                value: '#ff0000',
              },
            },
            particles: {
              enable: true,
              color: {
                value: '#ffff00',
              },
            },
          },
        },
      }}
    />
  );
}

export default Particle;
