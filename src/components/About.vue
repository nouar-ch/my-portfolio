<template>
    <div class="about-root">
        <div ref="image" class="about-deco">
            <img src="images/dev-img-about.png" alt="" srcset="">
        </div>
        <div ref="about" class="about-intro">
            <div class="section-title">
                <SplitText
                    ref="title" 
                    text="ABOUT ME" />
            </div>
            <p>
                <SplitText
                    ref="p1"
                    text="Passion for creation and innovation, solid academic background in computer science and artifial intelligence techniques, a variaty of skills in frontend and backend development, adabtability, fast learning of new technologies, team player, prefer remote jobs if possible."
                />
            </p>
            <p>
                <SplitText
                    ref="p2"
                    text="Interested in software development from backend to frontend, mainly web and mobile development." 
                />
            </p>
            <button @click="serveCV" ref="resume">CHECKOUT MY RESUME</button>
        </div>
    </div>
</template>

<script>
import { TimelineMax, Elastic, Power3 } from 'gsap';
import SplitText from "./SplitText";

export default {
    name: "About",
    components: {
        SplitText
    },
    mounted () {
        this.animate()
    },
    methods: {
        animate () {

            const tl = new TimelineMax()

            tl.from(
                this.$refs.title.chars,
                1.5,
                {
                    translateY: -100,
                    opacity: 0,
                    ease: Elastic.easeOut,
                    stagger: 0.01
                },
                2
            ).from(
                this.$refs.resume,
                1.5,
                {
                    scaleX: 0,
                    ease: Power3.easeOut
                },
                2
            ).from(
                [
                    this.$refs.p1.words,
                    this.$refs.p2.words
                ],
                0.5,
                {
                    translateX: 1000,
                    opacity: 0,
                    ease: Power3.easeOut,
                    stagger: 0.01
                },
                2.5
            ).from(
                this.$refs.image,
                0.5,
                {
                    translateX: "50%"    
                },
                1
            ).from(
                this.$refs.about,
                0.5,
                {
                    scaleY: 0
                },
                1.5
            )
        },
        serveCV () {
            window.open('/Nouar-EN.pdf', '_blank')
        }
    }
}
</script>

<style scoped>

.about-root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0 10% 0 10%;
}

.about-intro {
    text-align: left;
    color: floralwhite;
    flex: 1;

    padding-left: 1.5em;
    border-left: floralwhite 1px solid;
}

.section-title {
    font-size: 18pt;
    font-weight: 900;
    line-height: 2em;
}

.about-deco {
    flex: 1;
    width: 70%;
}

.about-deco > img {
    max-width: 100%;
    filter: drop-shadow(0 0 0.2em #1d1d1d);
}

@media only screen and (max-width: 800px) {
  /* For mobile phones: */
    .about-root {
        flex-direction: column;
        width: 90%;
        padding: 0 5%;
        overflow: auto;
    }

    .about-intro {
        text-align: center;
        font-size: 10pt;
        flex: 0;

        padding-left: 0;
        border-left: none;
    }

    .section-title {
        font-size: 14pt;
    }

    .about-deco {
        display: none;
    }
}

</style>