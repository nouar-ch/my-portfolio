<template>
    <div class="container-root">
        <div class="route" :class="{'show': route == 'Home'}">
            <Home />
        </div>
        <div class="route" :class="{'show': route == 'Code'}">
            <Gallery />
        </div>
        <div class="route" :class="{'show': route == 'About'}">
            <About />
        </div>
        
    </div>
</template>

<script>
import Home from "./Home"
import Gallery from "./Gallery";
import About from "./About"

export default {
    name: "Container",
    components: {
        Home,
        Gallery,
        About
    },
    props: {
        route: String
    }
}
</script>

<style scoped>

.container-root {
    position: relative;
    width: 100%;
    overflow: auto;
}

.route {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: 500ms;
    opacity: 0;
    height: 0;
    overflow: hidden;
}

.show {
    transition: 500ms 500ms;
    opacity: 1;
    height: fit-content;
    z-index: 1;
}

</style>