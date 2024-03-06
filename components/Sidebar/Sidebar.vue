<script setup>
    import SidebarItem from './SidebarItem.vue';
    import MenuItems from '~/utils/menuItems';
</script>
<template>
        <div class="sidebar">
          <p>Sidebar</p>
          <SidebarItem v-for="(item,index) in MenuItems" :item="item" :indexKey="index"/>
        </div>
      </template>
<style lang="scss">
    .sidebar{
        color: red;
    }
</style>