import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: '#000000'
        },
        particles: {
          number: { value: 50 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1.5 },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 150,
            opacity: 0.8,
            width: 1
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
