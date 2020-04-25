<template>
    <div class="home-root">
        <div class="home-card">
            <div><img src="icon.jpeg" class="photo" /></div>
            <div class="name">NOUAR CHABANE</div>
            <div class="title">Software engineer at <a href="#" class="company-link">INNOVIA</a></div>
            <hr class="line-sep">
            <div class="scroll-btn" @click="() => onShowDesc()">
                <fa-icon :icon="chevron"/>
            </div>
            <div class="desc" :class="{'desc-show': show, 'desc-hide': !show}">
                <div class="section">
                    <span class="section-title">ABOUT ME</span>
                    <p class="section-paragraph">
                        I graduated in 2019 with a master's degree in Computer Science & Artificial Intelligence from
                        the <a href="#">university of science and technology Houari Boumediene</a>.
                        Ever since, I have been at my current position as a devops engineer. I worked with mutlinational
                        team of developers to create cloud solutions for telecommunication companies in the middle east
                        and Africa. I love to learn new technologies, solve complicated problems, and dive into new
                        territories. I'm looking to improve my skills, get a senior role, and gain experience in project
                        management. 
                    </p>
                </div>
                <div class="section">
                    <span class="section-title">SKILLS</span>
                    <p class="section-paragraph">
                        My professional experience has mostly focused on Python, and Python based technologies
                        (Django, Flask, Numpy, ...). I have also worked with javascript based technologies for personal
                        and school projects (Vue, React, ...). Languages I worked with also include : C/C++, Java/Kotlin,
                        and Golang. I have experience relational and non relational data bases (Mysql, Oracle, Mongo).
                        I'm also familiar with tools such as Git and Ansible, and my main os is linux. 
                    </p>
                </div>
                <div class="section">
                    <span class="section-title">INTERESTS</span>
                    <p class="section-paragraph">
                        My interests include :<br>
                        <span>Professionally :</span>
                        I'm currently invested in web based solutions and web development, especially when put
                        together with A.I techniques, there seems to be no limit to we can accomplish. 
                        <br><br>
                        <span>Personnally :</span>
                        I like to go to the gym, not for the training but rather for the fun with my friends.
                        I also like binge watching tv shows, listening to meaningful music, and swimming.
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

library.add(faChevronDown, faChevronUp)

export default {
    name: "Home",
    data: function () {
        return {
            show: false,
            chevron: "chevron-down"
        }
    },
    methods: {
        onShowDesc: function () {
            this.show = !this.show
            if (this.show) {
                this.chevron = "chevron-up"
            } else {
                this.chevron = "chevron-down"
            }
        }
    }
}
</script>

<style scoped>

.home-root {
    position: relative;
    width: 100%;
    height: 100vh;
}

.home-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: max-content;
    width: 90%;
    margin: auto;
    position: relative;
    top: 20%;
    min-height: 60%;
    border-radius: 20px;
    box-shadow: rgb(32, 32, 32) 0 0 1em;
    color: floralwhite;
    background-color: rgb(32, 32, 32);
}

.photo {
    max-width: 200px;
    max-height: 200px;
    width: 20vw;
    height: 20vw;
    transform: translate(0%, -50%);
    border-radius: 50%;
    box-shadow: rgb(32, 32, 32) 0px 0px 0.5em;  
}

.name {
    color: floralwhite;
    font-weight: bolder;
    text-shadow: floralwhite 0px 0px 0.2em;
    font-size: 24pt;
}

.title {
    font-weight: bold;
    color: silver;
}

.desc {
    display: grid;
    grid-template-columns: auto auto auto;
    padding-left: 30px;
    padding-right: 30px;
    overflow: hidden;
    transition: 
        max-height 700ms ease-in-out,
        opacity 300ms 700ms;
    -webkit-transition:
        max-height 700ms ease,
        opacity 300ms;
    -moz-transition:
        max-height 700ms ease,
        opacity 300ms 300ms;
    -o-transition:
        max-height 700ms ease,
        opacity 300ms;
}

.desc-hide {
    max-height: 0px;
    opacity: 0;
}

.desc-show {
    max-height: 1000vh;
    opacity: 1;
}

.section {
    padding: 20px;
}

.section-title {
    font-style: oblique;
}

.section-paragraph {
    text-align: justify;
    color: silver;
}

.line-sep {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
}

.scroll-btn {
    padding: 1.2em;
    align-self: center;
}

/** Media queries  */

@media only screen and (max-width: 910px) {
  /* For mobile phones: */
  .desc {
    display: flex;
    flex-direction: column;
  }
}

</style>