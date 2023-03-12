<template>
    <div>
        An error occurred
        <button>
            Go Home
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push("/");
        },
    },

};
</script>

<style lang="scss" scoped>

</style>