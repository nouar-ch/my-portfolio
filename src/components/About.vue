<template>
    <div class="about-root">
        <div class="about-intro">
            <div class="section section-left">
                <div class="section-title">ABOUT ME</div>
                <p>
                    Hi, I'm a software engineer from Algeria,
                    and I couldn't love what I do more.
                    I was born on July 10th, 1995, in the state
                    of Annaba where I grew up. When I was 18, I
                    moved to Algiers, the capitale of Algeria
                    to study Computer Science, and from there
                    began my academic journey.  
                </p>
            </div>
            <div class="section section-right">
                <div class="section-title">ACADEMIC JOURNEY</div>
                <p>
                    <span>Bachelor's degree (2014-2017) : </span>
                    I got my bachelor's degree in computer
                    science from the university of science &
                    technology Houari Boumediene.
                </p>
                <p>
                    <span>Master's degree (2017-2019) : </span>
                    I finished my master's in artificial
                    intelligence in the same university.
                </p>
                <p>
                    In 2019, I finished my academic journey and
                    started my first job, marking the begining of
                    my professional journey.
                </p>
            </div>
            <div class="section section-left">
                <div class="section-title">PROFESSIONAL EXPERIENCE</div>
                <p>
                    <span>May 2019 - Present Day : </span>
                    I started working as a devops engineer at
                    INNOVIA in partnership with Intersec.
                    I work with mutlinational team of
                    developers to create cloud solutions for
                    telecommunication companies in the middle
                    east and Africa.
                </p>
            </div>
        </div>
        <div class="about-skills">
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
        <div class="about-contact">
            <div>n0uar.cha3bane@gmail.com</div>
        </div>
    </div>
</template>

<script>
import Skill from "./Skill"

export default {
    name: "About",
    components: {
        Skill
    }

}
</script>

<style scoped>

.about-root {
    width: 100%;
    background-image: linear-gradient(
        to bottom, #1d1d1d 99.5vh, floralwhite 100.5vh, floralwhite 199.5vh, transparent 200.5vh);
}

.about-intro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    color: floralwhite;
    width: calc(100% - 20%);
    padding: 1em;
    padding-right: 10%;
    padding-left: 10%;
    height: calc(100vh - 2em);
}

.section-title {
    text-align: center;
    font-size: 24pt;
    font-weight: 900;
}

.section {
    width: 50%;
    text-align: justify;
}

.section-left {
    align-self: flex-start;
}

.section-right {
    align-self: flex-end;
}

.about-skills {
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;
    height: calc(100vh - 2em);
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: space-evenly;
}

.about-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 25vh;

}

</style>