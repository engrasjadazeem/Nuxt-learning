<template>
  <section class="mr-2 ml-2">
    <div>
      <!-- Line 1 -->
      <Tile
        width-col="col-xl-8 col-lg-8"
        height-col="height-50"/>
      <Tile
        width-col="col-xl-4 col-lg-4"
        height-col="height-50"/>

      <!-- Line 2 -->
      <Tile
        width-col="col-xl-2 col-lg-2"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-2 col-lg-2"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-4 col-lg-4"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-4 col-lg-4"
        height-col="height-25"/>

      <!-- Line 3 -->
      <Tile
        width-col="col-xl-4 col-lg-4"
        height-col="height-50"/>
      <Tile
        width-col="col-xl-2 col-lg-2"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-2 col-lg-2"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-2 col-lg-2"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-2 col-lg-2"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-4 col-lg-4"
        height-col="height-25"/>
      <Tile
        width-col="col-xl-4 col-lg-4"
        height-col="height-25"/>
    </div>
  </section>
</template>

<script>
import Tile from '~/components/tile.vue';

export default {
  components: {
    Tile,
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
