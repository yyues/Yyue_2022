<template>
  <div class="h-screen w-full page">
    <div class="content">
      <canvas class="snow" id="snow"></canvas>
      <div class="main-text">
        <h1>
          It's So Sorry
          <br />
          That page has gone missing.
        </h1>
        <router-link class="home-link" to="/login">Hitch a ride back home.</router-link>
      </div>
      <div class="ground">
        <div class="mound">
          <div class="mound_text">404</div>
          <div class="mound_spade"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
onMounted(() => {
  ;(function () {
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn()
      } else {
        document.addEventListener('DOMContentLoaded', fn)
      }
    }

    function makeSnow(el) {
      var ctx = el.getContext('2d')
      var width = 0
      var height = 0
      var particles = []

      var Particle = function () {
        this.x = this.y = this.dx = this.dy = 0
        this.reset()
      }

      Particle.prototype.reset = function () {
        this.y = Math.random() * height
        this.x = Math.random() * width
        this.dx = Math.random() * 1 - 0.5
        this.dy = Math.random() * 0.5 + 0.5
      }

      function createParticles(count) {
        if (count != particles.length) {
          particles = []
          for (var i = 0; i < count; i++) {
            particles.push(new Particle())
          }
        }
      }

      function onResize() {
        width = window.innerWidth
        height = window.innerHeight
        el.width = width
        el.height = height

        createParticles((width * height) / 10000)
      }

      function updateParticles() {
        ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = '#f6f9fa'

        particles.forEach(function (particle) {
          particle.y += particle.dy
          particle.x += particle.dx

          if (particle.y > height) {
            particle.y = 0
          }

          if (particle.x > width) {
            particle.reset()
            particle.y = 0
          }

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false)
          ctx.fill()
        })

        window.requestAnimationFrame(updateParticles)
      }

      onResize()
      updateParticles()

      window.addEventListener('resize', onResize)
    }

    ready(function () {
      var canvas = document.getElementById('snow')
      makeSnow(canvas)
    })
  })()
})
</script>
<style lang="scss" scoped>
@import './404.scss'
</style>
