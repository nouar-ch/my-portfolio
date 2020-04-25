<template>
    <div class="gallery-root">
        <div class="gallery">
            <Item 
                v-for="(item, index) in projects"
                :key="index"
                :idx="index"
                :item="item" />
        </div>
    </div>
</template>

<script>
import Item from "./Item";

export default {
    name: "Gallery",
    components: {
        Item
    },
    data: function() {
        return {
            projects: [
                {
                    title: "project 1",
                    desc: "some project I'm proud to have finished. fhaljl vömv vkmvm svmv pmkvxm mvölv mvmvkn vvlm övllm",
                    codeLink: "link to code",
                    siteLink: "link to site if available",
                    tags: [
                        "Go",
                        "SDL",
                        "A*"
                    ]
                },
                {
                    title: "project 1",
                    desc: "some project I'm proud to have finished. fha ljlvö mvvkm vmsv mvpmkvx m mv öl vmvmvkn vvlmö vllm",
                    codeLink: "link to code",
                    tags: [
                        "Go",
                        "SDL",
                        "A*"
                    ]
                }
            ]
        }
    }
}
</script>

<style>

.gallery-root {
    width: 100%;
}

.gallery {
    width: 70%;
    padding-top: 1em;
    margin: auto;
}

@media only screen and (max-width: 910px) {
  /* For mobile phones: */
    .gallery-root {
        margin-left: 0.5em;
        margin-right: 0.5em;
        width: calc(100% - 1em);
    }
}


</style>