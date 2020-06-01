<template>
    <transition
        appear
        v-on:enter="animate"
    >
    <div class="gallery-root">
        <h1>MY WORK</h1>
        <div class="gallery">
            <div
                ref="item"
                v-for="(item, index) in projects"
                :key="index"
            >
                <Item
                    :idx="index"
                    :item="item" />
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import Item from "./Item";
import { TimelineMax } from "gsap";
import myProjects from "../../public/projects.json";

export default {
    name: "Gallery",
    components: {
        Item
    },
    data: function() {
        return {
            projects: myProjects
        }
    },
    mounted () {
        this.animate()
    },
    methods: {
        animate (el, done) {
            new TimelineMax({onComplete: done})
            .fromTo(
                this.$refs.item,
                0.5,
                {
                    scale: 0
                },
                {
                    scale: 1,
                    ease: "elastic.out(1, 0.8)",
                    stagger: 0.09
                },
                1   
            )
        }
    }
}
</script>

<style>

.gallery-root {
    width: 100%;
    height: 100%;
    overflow: auto;
    color: floralwhite;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
}

.gallery > * {
    min-width: 300px;
    min-height: 300px;
    width: 45%;
    margin: 0.2em;
}

@media only screen and (max-width: 950px) {
  /* For mobile phones: */
    .gallery {
        width: 95%;
        margin: auto;
    }
}


</style>