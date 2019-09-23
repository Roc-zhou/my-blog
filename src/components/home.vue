<template>
  <div class="home justify-center">
    <!-- <p class="animates" data-animation="fadeInUp">this is home</p> -->

    <div class="home_bg">
      <div class="home_con_a justify-center flex-column items-center">
        <p class="animates" data-animation="fadeInLeft">@AB+</p>
        <p class="animates" data-animation="fadeInRight">周海鹏的个人博客</p>
        <p class="animates" data-animation="fadeInUp">每天收获小进步，积累起来就是大进步；每天收获小幸福，积攒起来便成大幸福。</p>
      </div>
      <div class="canvas_bg" id="canvas_bg" style="overflow: hidden;"></div>
    </div>
  </div>
</template>

<script>
// const THREE = require("three");
import THREE from "../assets/public/js/three.min.js";
let SEPARATION = 100,
  AMOUNTX = 50,
  AMOUNTY = 50;
let container;
let camera, scene, renderer;
let particles,
  particle,
  count = 0;
let mouseX = -660,
  mouseY = -510;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 1;
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "home",
  data() {
    return {
      menu: 1
    };
  },
  mounted() {
    this.$isScroll.init(".animates");
    // this.init();
    // this.animate();
  },
  methods: {
    init() {
      container = document.createElement("div");
      container.id = "banner-canvas";
      // document.body.appendChild( container );
      document.getElementById("canvas_bg").appendChild(container);
      document.getElementById("canvas_bg").style.height = "100%";
      camera = new THREE.THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.z = 1000;
      scene = new THREE.THREE.Scene();
      particles = new Array();

      let PI2 = Math.PI * 2;
      let material = new THREE.THREE.ParticleCanvasMaterial({
        // color: '#16a085',
        color: "#fff",
        program: function(context) {
          context.beginPath();
          context.arc(0, 0, 1, 0, PI2, true);
          context.fill();
        }
      });

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.THREE.Particle(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
        }
      }

      renderer = new THREE.THREE.CanvasRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener("mousemove", this.onDocumentMouseMove, false);
      // document.addEventListener( 'touchstart', onDocumentTouchStart, false );
      // document.addEventListener( 'touchmove', onDocumentTouchMove, false );
      //
      window.addEventListener("resize", this.onWindowResize, false);
    },
    onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    },
    onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    },
    onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },
    render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 2 +
            (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }
      renderer.render(scene, camera);
      count += 0.08;
    }
  }
};
</script>
<style scoped>
@media screen and (max-width: 800px) {
}
@media screen and (min-width: 800px) {
  .home_bg {
    width: 100%;
    height: calc(100vh - 70px);
    /* background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url(http://wx4.sinaimg.cn/large/006qOGxWgy1fwoy2d5smgj312w0pxmzw.jpg); */
    background-color: #222;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    background-size: 100% 100%;
    position: relative;
  }
  .home_con_a {
    position: absolute;
    left: 50%;
    top: 50%;
    color: #fff;
    transform: translateX(-50%);
    z-index: 2;
  }
  .home_con_a p {
    font-size: 20px;
    flex-wrap: nowrap;
    white-space: nowrap;
    margin-bottom: 20px;
  }
  .home_con_a p:first-child {
    font-size: 25px;
    font-weight: bold;
  }
  #canvas_bg >>> #banner-canvas canvas {
    width: 100% !important;
    height: calc(100vh -70px) !important;
  }
}
</style>