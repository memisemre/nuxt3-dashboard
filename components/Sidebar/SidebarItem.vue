<template>
    <div class="menu-items-wrapper">
        <div class="sidebar-link">
            <NuxtLink :to="url">
                <slot name="icon"></slot>
                <p>
                    {{ title }}
                </p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['item']);
    const {title,url} = props.item;
</script>

<style lang="scss">
    .menu-items-wrapper{
        display: flex;
        flex-direction: column;
        gap: 16px;

        .sidebar-link{
            padding: 8px 0 8px 12px;
            width: 100%;

            a{
                width: 100%;
                display: flex;
                align-items: center;
                gap: 12px;
                border-radius: 8px;
                padding: 8px 0 8px 12px;
                color: $gray;
                font-size: 14px;
                font-weight: bold; 

                p{
                    margin-bottom: 0;
                    color: $gray;
                }

                svg{
                    path{
                        stroke: #C7C7C7;
                    }
                }

                &.router-link-exact-active{
                    background-color: $active-bg-color;

                    p{
                        color: $active-color;
                    }

                    svg{
                        rect{
                            fill: $active-bg-color !important;
                        }
                        path{
                            stroke: $active-color;
                        }
                    }
                }
                
            }
            
        }

    }
</style>
