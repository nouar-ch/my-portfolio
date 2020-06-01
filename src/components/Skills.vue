<template>
    <transition
        appear
        v-on:enter="animate"
    >
    <div class="skills-root">
        <div class="section-title">SKILL SET</div>
        <div class="skill-list">
            <Skill icon="skills/javascript.svg" name="Javascript" :grade="90" />
            <Skill icon="skills/c++.svg" name="C/C++" :grade="75" />
            <Skill icon="skills/java.svg" name="Java" :grade="75" />
            <Skill icon="skills/kotlin.svg" name="Kotlin" :grade="65" />
            <Skill icon="skills/golang.svg" name="Golang" :grade="37" />
            <Skill icon="skills/python.svg" name="Python" :grade="80" />
            <Skill icon="skills/vue.svg" name="Vue" :grade="72" />
            <Skill icon="skills/react.svg" name="React" :grade="70" />
            <Skill icon="skills/react.svg" name="React Native" :grade="60" />
            <Skill icon="skills/php.svg" name="Php" :grade="76" />
            <Skill icon="skills/android_studio.svg" name="Android" :grade="75" />
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

.section-title {
    font-size: 18pt;
    font-weight: 900;
    line-height: 2em;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: auto;
    color: #2a2a2a;
}

.skill-list > * {
    width: 40%;
    height: fit-content;
    font-size: 15pt;
}

@media screen and (max-width: 800px) {
    .skill-list > * {
        width: 100%;
        height: fit-content;
        font-size: 12pt;
    }
}

</style>