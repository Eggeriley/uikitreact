window.
onload
  = function () {
    Particles.
      init
      ({
        selector: '.background',
        
        color: ['#DA0463', '#404B69', '#DBEDF3'],
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768
            ,
            options: {
              maxParticles:
                200
              ,
              connectParticles:
                false
            }
          }, {
            breakpoint:
              425
            ,
            options: {
              maxParticles:
                100
              ,
              connectParticles:
                false
            }
          }, {
            breakpoint:
              320
            ,
            options: {
              maxParticles:
                50,
              connectParticles:
                false

              // disables particles.js
            }
          }
        ]
      }
      );
  };
