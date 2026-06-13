import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        fpsLimit: 60,

        particles: {
          number: {
            value: 70,
          },

          color: {
            value: "#60a5fa",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#60a5fa",
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 2,
          },

          opacity: {
            value: 0.5,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;