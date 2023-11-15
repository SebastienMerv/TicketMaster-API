<script setup>
import { onMounted } from 'vue';

defineProps({
    event: Object
})
</script>
<template>
    <div class="event">
        <!-- On rend l'afiche dans une balise img -->
        <img :src="event.images[0].url" alt="Affiche de l'événement" />
        <h1>{{ event.name }}</h1>
        <a :href="event.url" target="_blank">Voir l'événement</a>
    </div>
</template>

<style scoped>
.event {
    background-color: #2980b9;
    padding: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.event a {
    color: white;
    text-decoration: none;
    margin-top: 1rem;

}

.event img {
    width: 25%;
}
</style>