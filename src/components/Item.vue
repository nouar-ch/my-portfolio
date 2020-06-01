<template>
    <div class="item-container">
        <img class="item-thumbnail" :src="item.img" alt="" srcset="">
        <div class="tag-list">
            <div class="tag" v-for="(tag, index) in item.tags" :key="index">
                {{tag}}
            </div>
        </div>
        <div class="item-desc">
            <h3 class="item-title">{{item.title}}</h3>
            <p class="item-info">
                {{item.desc}}
            </p>
            <div class="controls">
                <a v-if="item.codeLink" target="_blank" :href="item.codeLink">VIEW CODE</a>
                <a v-if="item.demoLink" target="_blank" :href="item.demoLink">TRY OUT</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Item",
    props: ["idx", "item"],

}
</script>

<style scoped>

.item-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    text-align: left;
    overflow: hidden;
    box-shadow: #1d1d1d 0 0 0.3em;
    border-radius: 0.5em;
}

.item-thumbnail {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    object-fit: cover;
}

.item-desc {
    display: flex;
    flex-direction: column;
    background: rgba(46, 45, 45, 0.95);
    padding: 0.5em;
    font-size: 9pt;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(150%);
    transition: 500ms;
}

.item-container:hover .item-desc {
    transform: translateY(0%);
}

.item-title {
    padding: 0;
    margin: 0;
}

.item-info {
    color: rgb(212, 212, 212);
}

.controls {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

a {
    font-size: 10pt;
    font-weight: 400;
    padding: 0em 1em;
    border: var(--primary-color) solid 1px;
    border-radius: 2em;
    /* background: var(--primary-color); */
    color: var(--primary-color);
    flex: 1;
    margin: 0 0.2em;
    text-align: center;
}

.tag-list {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    padding: 1em;
    opacity: 0;
    transform: translateY(-100);
    transition: 500ms;
}

.item-container:hover .tag-list {
    transform: translateY(0);
    opacity: 1;
}

.tag {
    font-size: 7pt;
    color: var(--primary-color);
    background: #1d1d1d;
    text-shadow: #1d1d1d 0 0 0.3em;
    box-shadow: #1d1d1d 0 0 0.3em;
    border-radius: 2em;
    padding: 0em 1em;
    margin: 0.2em 0.2em;
}

@media screen and (max-width: 950px) {
    .item-container {
        padding-bottom: 0;
        height: fit-content;
    }

    .item-thumbnail {
        position: relative;
        width: 100%;
        max-height: 25vh;
    }

    .item-desc {
        position: relative;
        transform: none;
        background: #1d1d1d;
    }

    .tag-list {
        transform: none;
        opacity: 1;
    }
}

</style>