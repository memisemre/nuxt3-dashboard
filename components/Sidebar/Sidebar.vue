<script setup>
import { ref } from 'vue';

const MenuItems = ref(null);

const { data } = await useFetch('/api/menu');

MenuItems.value = data._rawValue.items;
</script>

<template>
    <div class="sidebar">
        <div class="wrapper">
            <Logo />
            <div class="menu">
                <SidebarItem v-if="MenuItems !== null" v-for="item in MenuItems" :item="item">
                    <template #icon>
                        <component :is="item.icon"/>
                    </template>
                </SidebarItem>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .sidebar{
        padding: 2rem;
        border-right: 2px solid red;
        height: 100vh;
        max-width: 280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .wrapper{
            display: flex;
            flex-direction: column;
            gap: 5rem;
        }

    }
</style>