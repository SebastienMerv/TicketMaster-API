<script setup>
// On fetch l'api de ticketmaste

import { onMounted } from 'vue';
import CardEvent from '@/components/Events/Card.vue';
import { ref } from 'vue'

const events = ref([])

// On mounted
onMounted(async () => {
    const listResponse = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=w29VyMulQDk9ymD7usmh3DJFJkRbzbch&page=2')
    const listData = await listResponse.json()
    console.log(listData)

    events.value = listData._embedded.events
})
</script>

<template>
    <section class="items">
        <h1>Yop ! Voici la page d'accueil des tickets disponibles sur ticketmaster</h1>
        <div class="grid">
            <CardEvent v-for="event in events" :event="event" />
        </div>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    /* Tant qu'on peux en mettre on en mets */
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    width: 80%;
}

.items {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>