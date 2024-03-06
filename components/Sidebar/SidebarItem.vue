<template>
    <div>
        <NuxtLink :to="item.url">
            {{ item.title }}
        </NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['item','indexKey']);
    const {item, indexKey} = props;
</script>
