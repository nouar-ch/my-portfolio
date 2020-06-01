<template>
    <transition
        appear
        v-on:enter="animate"
    >
    <div class="skills-root">
        <div class="section languages">
            <div class="section-title">Programming Languages</div>
            <div class="skill-list">
                <Skill icon="skills/javascript.svg" name="Javascript" />
                <Skill icon="skills/c++.svg" name="C/C++" />
                <Skill icon="skills/java.svg" name="Java" />
                <Skill icon="skills/kotlin.svg" name="Kotlin" />
                <Skill icon="skills/golang.svg" name="Golang" />
                <Skill icon="skills/python.svg" name="Python" />
            </div>
        </div>
        <div class="section frameworks">
            <div class="section-title">Frameworks & Libraries</div>
            <div class="skill-list">
                <Skill icon="skills/vue.svg" name="Vue" />
                <Skill icon="skills/react.svg" name="React" />
                <Skill icon="skills/react.svg" name="React Native" />
                <Skill icon="skills/android_studio.svg" name="Android" />
                <Skill icon="skills/django.svg" name="Django" />
            </div>
        </div>
    </div>
    </transition>
</template>

<script>

import Skill from './Skill'

import { TimelineLite } from "gsap";

export default {
    name: 'Skills',
    components: {
        Skill
    },
    methods: {
        animate (el, done) {
            new TimelineLite()
            .from(
                el,
                0.5,
                {
                    scale: 0.75,
                    onComplete: done
                },
                1
            )
        }
    }
}
</script>

<style>

.skills-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: floralwhite;
    box-shadow: 0 0 1em #0a0a0a;
    overflow: auto;
}

.section {
    flex: 1;
}

.section-title {
    font-size: 18pt;
    font-weight: 900;
    line-height: 2em;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    color: #2a2a2a;
}

.skill-list > * {
    width: fit-content;
    height: fit-content;
    font-size: 15pt;
}

@media screen and (max-width: 800px) {
    
    .skill-list {
        width: 100%;
    }
}

</style>