<template>
  <div :class="tileCss">
    <div class="p-1">
      <img
        :class="imgCss"
        src="/img/Image-01.jpg">
      <div class="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    widthCol: {
      type: String,
      default: 'col-lg-3 col-md-6 col-sm-12',
    },
    heightCol: {
      type: String,
      default: 'height-25',
    },
  },
  computed: {
    tileCss: function() {
      return `${this.widthCol} ${this.heightCol} float-left overlay-container p-0`;
    },
    imgCss: function() {
      return `img-fluid ${this.heightCol}`;
    },
  },
};
</script>

<style>
.overlay {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0;
  transition: .5s ease;
  background-image: linear-gradient(to bottom, transparent 60%, #000000);
  border-radius: 1rem !important;
}

.overlay-container {
  overflow: hidden;
  border-radius: 1rem !important;
}

.overlay-container:hover .overlay {
  opacity: 1;
}

img {
  object-fit: cover;
  border-radius: 1rem !important;
  width: 100% !important;
}

.overlay-container:hover img {
  border-radius: 0.375rem !important;
  transform: scale(1.1);
  transition: all .5s;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.height-25 {
  height: 300px !important;
}

.height-50 {
  height:600px !important;
}
</style>
