<template>
    <div class="nav-bar">
        <div class="logo">
            <span>NC</span><br>
            <small>Nouar</small>
        </div>
        <div class="menu-btn" :class="{'x-icon': showMenu}" @click="onMenu()">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
        </div>
        <nav :class="{'shown': showMenu}">
            <div class="nav-home" :class="{'selected': route === 'Home'}" @click="onHome">
                <big>
                    <fa-icon icon="home" />
                </big>
                <div>
                    <small>HOME</small>
                </div>
            </div>
            <div class="nav-about" :class="{'selected': route === 'About'}" @click="onAbout">
                <big>
                    <fa-icon icon="user" />
                </big>
                <div>
                    <small>ABOUT</small>
                </div>
            </div>
            <div class="nav-code" :class="{'selected': route === 'Code'}" @click="onCode">
                <big>
                    <fa-icon icon="code" />
                </big>
                <div>
                    <small>PORTFOLIO</small>
                </div>
            </div>
            <div class="nav-skills" :class="{'selected': route === 'Skills'}" @click="onSkills">
                <big>
                    <fa-icon icon="tools" />
                </big>
                <div>
                    <small>SKILLS</small>
                </div>
            </div>
        </nav>
        <div class="contact" :class="{'shown': showMenu}">
            <div>
                <big>
                    <fa-icon :icon="['fab', 'facebook']" />
                </big>
            </div>
            <div>
                <big>
                    <fa-icon :icon="['fab', 'instagram']" />
                </big>
            </div>
            <div>
                <big>
                    <fa-icon :icon="['fab', 'linkedin']" />
                </big>
            </div>
            <div>
                <big>
                    <fa-icon :icon="['fab', 'git']" />
                </big>
            </div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGit, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHome, faCode, faEnvelope, faUser, faTools } from '@fortawesome/free-solid-svg-icons'

library.add(
    faHome, faCode, faEnvelope, faUser, faTools,
    faFacebook, faLinkedin, faInstagram, faGit)

export default {
    name: "Navbar",
    props: {
        onRoute: Function
    },
    data: function() {
        return {
            route: "Home",
            showMenu: false
        }
    },
    methods: {
        onMenu () {
            this.showMenu = !this.showMenu
        },
        onHome () {
            this.route = "Home"
            this.onRoute(this.route)
        },
        onCode () {
            this.route = "Code"
            this.onRoute(this.route)
        },
        onAbout () {
            this.route = "About"
            this.onRoute(this.route)
        },
        onSkills () {
            this.route = "Skills"
            this.onRoute(this.route)
        }
    }
}
</script>

<style scoped>

.nav-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background-color: #2a2a2a;
    box-shadow: #2a2a2a 0 0 0.5em;
    color: white;
    font-size: 10pt;
    z-index: 10;
}

nav {
    display: flex;
    flex-direction: column;
    position: relative;
}

nav > div, .contact > div {
    padding: 0.8em 0.1em;
    transition: 500ms;
    position: relative;
    cursor: pointer;
}

nav > div > div {
    font-size: 90%;
    opacity: 0;
    transition: 500ms;
}

nav > div > big {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    transition: 500ms;
}

nav > div:hover, .contact > div:hover {
    color: var(--primary-color);
}

nav > div.selected > big {
    opacity: 0;
}

nav > div.selected > div {
    opacity: 1;
    color: var(--primary-color);
}

.logo {
    width: 100%;
    padding-top: 1.01em;
    padding-bottom: 1.01em;
    background-color: #1d1d1d;
}

@media only screen and (max-width: 512px) {
    .nav-bar {
        flex-direction: row;
        width: 100%;
        height: fit-content;
    }

    .logo {
        display: block;
        font-size: 13pt;
        width: fit-content;
        height: fit-content;
        padding: 0.8em 0.8em;
    }

    .logo > small {
        display: none;
    }

    .menu-btn {
        display: flex;
        flex-direction: column;
        font-size: 13pt;
        align-items: center;
        justify-content: space-evenly;
        height: fit-content;
        width: 2em;
        padding: 0.4em 0.4em;
    }

    .line {
        width: 100%;
        height: 0.2em;
        margin: 0.2em 0;
        border-radius: 100px;
        background: var(--primary-color);
        transition: 500ms;
    }

    .x-icon .line-1 {
        transform: translateY(0.6em) rotate(45deg) scaleY(0.5);
    }

    .x-icon .line-3 {
        transform: translateY(-0.6em) rotate(-45deg) scaleY(0.5);
    }

    .x-icon .line-2 {
        transform: translateX(-100%);
        width: 0;
    }

    nav {
        font-size: 13pt;
        flex-direction: row;
        position: fixed;
        top: 2.8em;
        left: -100%;
        opacity: 0;
        z-index: 10;
        background: #2a2a2a;
        width: 100%;
        transition: 500ms;
    }

    nav > div {
        flex: 1;
    }

    nav.shown {
        left: 0;
        opacity: 1;
    }

    .contact {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 800%;
        z-index: 10;
        opacity: 0;
        transform: translateX(100%);
        transition: 
            transform 500ms cubic-bezier(0.7, 0, 0.84, 0),
            width 500ms,
            opacity 500ms;
    }

    .contact > * {
        flex: 1;
    }

    .contact.shown {
        transition:
            transform 500ms cubic-bezier(0,0.7,0,0.84),
            width 500ms,
            opacity 300ms 300ms;
        transform: translateX(0%);
        width: 100%;
        opacity: 1;
    }

}

</style>>
