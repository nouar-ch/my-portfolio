<template>
    <div class="nav-bar">
        <div class="logo">
            <span>NC</span><br>
            <small>Nouar</small>
        </div>
        <nav>
            <div :class="{'selected': route === 'Home'}" @click="onHome">
                <big><fa-icon icon="home" /></big>
            </div>
            <div :class="{'selected': route === 'Code'}" @click="onCode">
                <big><fa-icon icon="code" /></big>
            </div>
            <div :class="{'selected': route === 'About'}" @click="onAbout">
                <big><fa-icon icon="envelope" /></big>
            </div>
        </nav>
        <div class="contact">
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
import { faHome, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(
    faHome, faCode, faEnvelope,
    faFacebook, faLinkedin, faInstagram, faGit)

export default {
    name: "Navbar",
    props: {
        onRoute: Function
    },
    data: function() {
        return {
            route: "Home"
        }
    },
    methods: {
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
}

nav {
    display: flex;
    flex-direction: column;
}

nav > div, .contact > div {
    padding-left: 0.8em;
    padding-right: 0.8em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    transition: 500ms;
}

nav > div:hover, .contact > div:hover {
    background-color: rgb(32, 32, 32);
    box-shadow: rgb(32, 32, 32) 0 0 0.2em;
}

nav > div.selected, .contact > div.selected {
    background-color: firebrick;
    box-shadow: firebrick 0 0 0.2em;
}

.logo {
    width: 100%;
    padding-top: 1.01em;
    padding-bottom: 1.01em;
    background-color: #1d1d1d;
}

</style>>
