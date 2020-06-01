<template>
    <div ref="root" class="home-root">
        <div ref="image" class="deco">
            <img src="images/dev-img.png" alt="" srcset="">
        </div>
        <div ref="wrapper" class="info">
            <div>
                <div class="name">
                    <SplitText ref="name" text="Nouar Chabane" />
                </div>
                <h1 class="greeting">
                    <SplitText ref="intro" text="I'm a Software Engineer" />
                </h1>
                <p>
                    <small class="fields">
                        <SplitText ref="expertises" text="Fullstack Developer / Desktop / Mobile / Web / Freelancer." /> 
                    </small>
                </p>
            </div>
            <button ref="portfolio" class="portfolio-btn" @click="onWorkClicked">SEE MY WORK</button>
        </div>
    </div>
</template>

<script>

import {TimelineMax, Elastic, Power4} from 'gsap'
import SplitText from "./SplitText";

export default {
    name: "Home",
    components: {
        SplitText
    },
    data: function () {
        return {
        }
    },
    mounted () {
        this.animate()
    },
    methods: {
        onWorkClicked() {
            document.getElementsByClassName('nav-code')[0].click()
        },
        animate () {
            let tl = new TimelineMax()
            if (window.matchMedia("(max-width: 800px)").matches) {
                tl = tl.from(
                    this.$refs.image,
                    0.5,
                    {
                        translateY: '50%'
                    },
                    1
                )
            }else {
                tl = tl.from(
                    this.$refs.image,
                    0.5,
                    {
                        translateX: '50%'
                    },
                    1
                )
            }
            tl.from(
                this.$refs.wrapper,
                0.25,
                {
                    scaleY: 0
                },
                1.5
            ).from(
                this.$refs.name.chars,
                1.5,
                {
                    translateY: -100,
                    opacity: 0,
                    ease: Elastic.easeOut,
                    stagger: 0.1
                },
                2
            ).from(
                this.$refs.intro.chars,
                1,
                {
                    scaleY: 0,
                    ease: Elastic.easeOut,
                    stagger: 0.05
                },
                2.5
            ).from(
                this.$refs.expertises.words,
                1,
                {
                    translateY: 100,
                    opacity: 0,
                    ease: Power4.easeOut,
                    stagger: 0.15
                },
                2
            ).from(
                this.$refs.portfolio,
                0.5,
                {
                    scaleX: 0
                }
            )
        }
    }
}
</script>

<style scoped>

.home-root {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 0% 10%;
    color: floralwhite;
    text-align: left;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: fit-content;
    flex: 1;
    
    padding-left: 1.5em;
    border-left: floralwhite 1px solid;
}

.name {
    font-size: 20pt;
    font-weight: 200;
    line-height: 2em;
}

.greeting {
    font-size: 30pt;
    font-weight: 700;
    line-height: 1.2em;
    display: inline;
    text-shadow: #1d1d1d 0 0 0.1em;
}

.deco {
    flex: 1;
    width: 70%;
}

.deco > img {
    max-width: 100%;
    filter: drop-shadow(0 0 0.2em #1d1d1d);
}

.portfolio-btn {
    font-size: 11pt;
    align-self: start;
}

@media screen and (max-width: 800px) { 
    .portfolio-btn {
        align-self: center;
    }

    .deco {
        flex: 0;
    }

    .greeting {
        font-size: 24pt;
    }

    .name {
        font-size: 14pt;
    }

    .info {
        text-align: center;
        padding-left: 0;
        border-left: none;
        justify-content: space-evenly;
    }

    .home-root {
        flex-direction: column;
        justify-content: stretch;
    } 
}

</style>