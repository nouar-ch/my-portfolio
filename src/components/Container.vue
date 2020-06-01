<template>
    <div class="container-root">
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enterAnimation"
            v-on:leave="leaveAnimation"
            mode="out-in"
            >
            <div key="home" ref="page" class="route" v-if="route == 'Home'" >
                <Home />
            </div>
            <div key="code" ref="page" class="route" v-else-if="route == 'Code'" >
                <Gallery />
            </div>
            <div key="about" ref="page" class="route" v-else-if="route == 'About'" >
                <About />
            </div>
            <div key="skills" ref="page" class="route" v-else-if="route == 'Skills'" >
                <Skills />
            </div>
        </transition>
    </div>
</template>

<script>
import Home from "./Home"
import Gallery from "./Gallery";
import About from "./About"
import Skills from './Skills'

import { TimelineMax } from "gsap";

export default {
    name: "Container",
    components: {
        Home,
        Gallery,
        About,
        Skills
    },
    props: {
        route: String
    },
    methods: {
        beforeEnter (el) {
            new TimelineMax()
            .to(
                el,
                0,
                {
                    translateY: "500%",
                },
                0
            )
        },
        enterAnimation (el, done) {
            console.log("enter animation", el)
            new TimelineMax({onComplete: done})
            .to(
                el,
                0.1,
                {
                    translateY: "0%"
                },
                0
            )
        },
        leaveAnimation (el, done) {
            console.log("leave animation", el)
            new TimelineMax({onComplete: done})
            .to(
                el,
                0.2,
                {
                    translateY: "-500%"
                },
                0
            )
        }
    }
}
</script>

<style scoped>

.container-root {
    position: relative;
    width: 100%;
    height: 100%;
}

.route {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transition: 500ms;
    height: 100%;
    overflow: hidden;
}

.show {
    transition: 500ms 500ms;
    opacity: 1;
    
    z-index: 1;
}

</style>