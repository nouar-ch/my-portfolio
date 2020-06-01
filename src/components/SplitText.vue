<template>
    <span class="st-root">
        <span
            ref="words"
            v-for="(w, i) in split()"
            :key="i" class="text-word">
            <span
                ref="chars"
                v-for="(c, i) in w"
                :key="i" class="text-char"
                >
                {{c}}
            </span>
        </span>
    </span>
</template>

<script>
export default {
    name: 'SplitText',
    props: {
        text: String
    },
    data: () => {
        return {
            chars: [],
            words: []
        }
    },
    mounted () {
        this.words = this.$refs.words
        this.chars = this.$refs.chars
    },
    methods: {
        split () {
            return this.text.split(' ').map(word => {
                return word.split("")
            })
        }
    }
}
</script>

<style scoped>

.st-root {
    margin-left: -0.2em;
}

span {
    display: inline-block;
    position: relative;
}

.text-word {
    margin: 0 0.1em;
}
</style>