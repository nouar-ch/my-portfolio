<template>
  <div id="app">
    <Navbar :onRoute="onRoute" />
    <Container :route="route" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Container from "./components/Container"

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

@font-face {
  font-family: "Futura";
  src: url("./assets/futura1/FuturaTMed.ttf");
}

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

#app {
  display: flex;
  font-family: Futura, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: firebrick;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/** a element styles */
a {
  color: firebrick;
  text-decoration-line: none;
  font-style: oblique;
  transition: 500ms;
}

a:hover {
  text-shadow: firebrick 0 0 0.5em;
}

a:active {
  color: floralwhite;
  text-shadow: floralwhite 0 0 0.5em;
}

a:focus {
  outline: none;
}
</style>
