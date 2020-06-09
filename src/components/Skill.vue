<template>
    <div ref="skillRoot" @mouseenter="enterAnimation" @mouseleave="leaveAnimation" class="skill-root">
        <div ref="icon" class="skill-icon">
            <img :src="icon" alt="" srcset="">
        </div>
        <div class="skill-info">
            <div class="skill-name">{{name}}</div>
        </div>
    </div>
</template>

<script>

import { TimelineMax } from "gsap";

export default {
    name: "Skill",
    props: {
        icon: String,
        name: String
    },
    data () {
        return {
        }
    },
    methods: {
        enterAnimation () {
            new TimelineMax()
            .to(
                this.$refs.skillRoot,
                0.5,
                {
                    scale: 1.5
                },
                0
            )
            .to(
                this.$refs.icon,
                0.5,
                {
                    rotateZ: "360deg"
                },
                0
            )
        },
        leaveAnimation () {
            new TimelineMax()
            .to(
                this.$refs.skillRoot,
                0.5,
                {
                    scale: 1
                }
            )
            .to(
                this.$refs.icon,
                0.5,
                {
                    rotateZ: "-360deg"
                },
                0
            )
        }
    }

}
</script>

<style scoped>

.skill-root {
    padding: 1em;
    display: flex;
    text-align: left;
    align-items: center;
    cursor: default;
}

.skill-icon {
    float: left;
    width: 5vh;
    height: 5vh;
    min-width: 20px;
    min-height: 20px;
}
.skill-icon > img {
    width: 100%;
    height: 100%;
}

.skill-info {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    width: 100%;
}

/* .skill-progressbar {
    font-size: 10pt;
    height: 0.5vw;
    margin-top: 1em;
    border-radius: 1em;
    background-color: floralwhite;
    box-shadow: rgba(32, 32, 32, 0.5) 0 0.2em 0.8em;
    border-width: 0;
}

.skill-progress {
    height: 100%;
    transition: 500ms;
    border-radius: 1em;
    background-image: linear-gradient(
        60deg, #abecd6 0%, #fbed96 100%);
    margin-left: -1px;
} */

.skill-name {
    float: left;
    letter-spacing: 0.3em;
    font-weight: 600;
}

/* .skill-grade {
    font-weight: 800;
    letter-spacing: 0.1em;
    font-size: 12pt;
    align-self: flex-end;
    padding: 0.5em;
} */

@media only screen and (max-width: 800px) {
    .skill-name {
        letter-spacing: 0.1em;
        font-size: 9pt;
    }
    /* .skill-grade {
        font-size: 10pt;
    } */
}

</style>