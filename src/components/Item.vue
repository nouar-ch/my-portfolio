<template>
    <div class="item-container">
        <div class="item-present">
            <img class="item-thumbnail" />
            <div class="item-info">
                <h1>{{item.title}}</h1>
                <div class="item-btns">
                    <a :href="item.codeLink" target="_blank">
                        <small>
                            <fa-icon icon="code"/>
                        </small>
                        VIEW CODE
                    </a>
                    <a v-if="item.siteLink" :href="item.siteLink" target="_blank">
                        <fa-icon icon="chevron-right" />
                        TRY IT OUT
                    </a>
                </div>
            </div>
        </div>
        <hr class="item-sep">
        <div class="item-desc">
            <p>
                {{item.desc}}
            </p>
        </div>
        <div class="item-tags">
            <span v-for="(tag, i) in item.tags" :key="i">
                {{tag}}
            </span>
        </div>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faCode, faChevronRight)

export default {
    name: "Item",
    props: ["idx", "item"]

}
</script>

<style scoped>

.item-container {
    margin: auto;
    margin-bottom: 2em;
    width: calc(100% - 1em);
    background-color: rgb(32, 32, 32);
    box-shadow: rgb(32, 32, 32) 0 0 1em;
    border-radius: 5px;
    text-align: left;
    color: floralwhite;
    padding: 0.5em;
}

.item-present {
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: stretch;
}

.item-thumbnail {
    max-width: 200px;
    max-height: 200px;
    width: 20vw;
    height: 20vw;
}

.item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1em;
    flex-grow: 1;
}

.item-info a {
    padding: 0.4em;
    padding-right: 0.6em;
    padding-left: 0.6em;
    float: left;
    margin: 0.4em;
    background-color: firebrick;
    box-shadow: firebrick 0 0 0.5em;
    color: floralwhite;
    font-style: normal;
}

.item-info a:hover {
    text-shadow: floralwhite 0 0 0.8em;
}

.item-info a:active {
    background-color: floralwhite;
}

.item-tags > span {
    display: block;
    float: left;
    margin: 2px;
    font-size: 9pt;
    color: lightsteelblue;
    border-radius: 50px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: firebrick;
    box-shadow: rgb(32, 32, 32) 0 0 0.5em;
}

.item-tags {
    display: block;
    float: right;
}

.item-sep {
    border: none;
    border-bottom: 1px solid #333;
    color: #333;
    overflow: visible;
    height: 5px;
    margin-top: 1em;
}

hr:after {
    background-color: rgb(32, 32, 32);
    content: 'Description';
    padding: 0 4px;
    position: relative;
    top: -10px;
    left: 10px;
}

.item-desc {
    display: block;
    color: rgb(162, 162, 162);
}

@media only screen and (max-width: 650px) {
  /* For mobile phones: */
    .item-thumbnail {
        width: 30vw;
        height: 30vw;
    }
    .item-info a {
        width: 90%;
        text-align: center;
    }
}


</style>