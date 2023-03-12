<template>
    <section class="section-book">
        <div class="row">
            <div class="book">
                <div class="book__form">
                    <form action="#" class="form">
                        <div class="u-margin-bottom-medium">
                            <h2 class="heading-secondary">
                                Start booking now
                            </h2>
                        </div>
                        <div class="form__group">
                            <input id="name" type="text" class="form__input" placeholder="Full Name" required>
                            <label for="name" class="form__label">Full Name</label>
                        </div>
                        <div class="form__group">
                            <input id="email" type="email" class="form__input" placeholder="Email address" required>
                            <label for="email" class="form__label">Email Address</label>
                        </div>
                        <div class="form__group u-margin-bottom-medium">
                            <div class="form__radio-group">
                                <input id="small" type="radio" class="form__radio-input" name="size">
                                <label for="small" class="form__radio-label">
                                    <span class="form__radio-button" />
                                    Small tour group</label>
                            </div>
                            <div class="form__radio-group">
                                <input id="large" type="radio" class="form__radio-input" name="size">
                                <label for="large" class="form__radio-label">
                                    <span class="form__radio-button" />
                                    Large tour group</label>
                            </div>
                        </div>

                        <div class="form__group">
                            <button class="btn btn--green">
                                Next Step &rarr;
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>