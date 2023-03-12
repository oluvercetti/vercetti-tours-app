<template>
    <div>
        <AppNavigation />
        <HeroSection />
        <main>
            <AboutSection />
            <FeaturesSection />
            <ToursSection />
            <StoriesSection />
            <BookSection />
        </main>
        <AppFooter />
        <BookTourModal />
    </div>
</template>

<script>
export default {
    layout: "home",
};
</script>