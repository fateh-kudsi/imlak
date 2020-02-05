<template>
  <div class="h-background">
    <div class="hb-background" data-aos="fade-up" data-aos-duration="1000">
      <h1 class="display-4 turkey">تركيا</h1>
      <h1 class="turkey-past">
        <span class="primary-color">ماض</span>
        <span>عريق</span>
      </h1>
      <h1 class="turkey-fut">
        <span class="primary-color">ومستقبل</span> مشرق
      </h1>
      <v-btn class="mt-4" x-large nuxt to="/property">انتقل للعيش في تركيا الان</v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.h-background {
  min-height: calc(100vh - -25px);
  background: url("/images/1.jpg") center center/cover no-repeat;
  background-position-x: 100%;
  background-position-y: 100%;
  position: relative;
}
.hb-background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(4, 128, 146, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.turkey {
  font-size: 100px !important;
}
.turkey,
.turkey-past {
  color: #fff;
  font-weight: 600;
  margin-left: 100px;
}
.turkey-past {
  margin-left: 0;
  letter-spacing: 0;
  font-size: 80px;
  font-weight: 400;
}
.turkey-fut {
  font-size: 80px;
  letter-spacing: 0;
  font-weight: 400;
  color: #fff;
}
.primary-color {
  color: #252525;
  font-weight: 600;
}
</style>
