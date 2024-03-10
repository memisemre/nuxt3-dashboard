import menuItems from '~/data/menu.json';

export default defineEventHandler((event) => {
  return {
    items: menuItems
  }
});
