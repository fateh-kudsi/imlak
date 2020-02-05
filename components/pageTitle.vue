<template>
  <div class="bg-image">
    <div class="bg-blue" data-aos="fade-right" data-aos-duration="1000">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bg-image {
  background: url("/images/4.jpeg") center center/cover no-repeat;
  min-height: 50vh;
  width: 100%;
  position: relative;
}
.bg-blue {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 128, 146, 0.37);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bg-blue h1 {
  font-size: 72px;
  color: #fff;
  font-weight: 400;
}
</style>
