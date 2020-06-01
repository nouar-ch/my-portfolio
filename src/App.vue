<template>
  <div id="app">
    <Navbar :onRoute="onRoute" />
    <Container :route="route" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Container from "./components/Container"

import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin)

export default {
  name: 'App',
  components: {
    Navbar,
    Container
  },
  mounted () {
    this.onRoute.bind(this)
  },
  data () {
    return {
      route: "Home"
    }
  },
  methods: {
    onRoute(r) {
      this.route = r
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;

  --primary-color: #43e97b;

}

#app {
  display: flex;
  font-family: Spartan, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  background-blend-mode: multiply;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/** a element styles */
a {
  color: var(--primary-color);
  text-decoration-line: none;
  font-style: oblique;
  transition: 500ms;
}

a:hover {
  text-shadow: var(--primary-color) 0 0 0.5em;
}

a:active {
  color: floralwhite;
  text-shadow: floralwhite 0 0 0.5em;
}

a:focus {
  outline: none;
}

button {
  background: transparent;
  outline: solid 1px var(--primary-color);
  border: none;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:hover {
  text-shadow: 0 0 0.2em var(--primary-color);
  box-shadow: 0 0 .2em var(--primary-color);
}

@media only screen and (max-width: 512px) {
  #app {
    flex-direction: column;
  }
}
</style>
