<template>
    <div class="skill-root">
        <div class="skill-icon">
            <img :src="icon" alt="" srcset="">
        </div>
        <div class="skill-info">
            <div>
                <div class="skill-name">{{name}}</div>
                <div class="skill-grade">{{grade}}%</div>
            </div>
            <div class="skill-progressbar">
                <div 
                    class="skill-progress"
                    :style="progress"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skill",
    props: {
        icon: String,
        name: String,
        grade: {
            type: Number,
            validator: grade => {
                return (grade >= 0 && grade <= 100) 
            },
            default: 0
        }
    },
    data () {
        return {
            progress: {
                width: `${this.grade}%`
            }
        }
    }

}
</script>

<style scoped>

.skill-root {
    padding: 1em;
    font-size: 18pt;
    display: flex;
    text-align: left;
}

.skill-icon {
    float: left;
    font-size: 11pt;
    width: 4.6em;
    height: 4.6em;
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

.skill-progressbar {
    width: 100%;
    font-size: 10pt;
    height: 1em;
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
        to right, firebrick 80%, seagreen);
    margin-left: -1px;
}

.skill-name {
    float: left;
    letter-spacing: 0.3em;
    font-weight: 600;
    color: #2a2a2a;
}

.skill-grade {
    float: right;
    font-size: 18pt;
    font-weight: 800;
    letter-spacing: 0.1em;
}

</style>