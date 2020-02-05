<template>
  <div class="hello">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          data-aos="fade-right"
          data-aos-duration="1500"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="card-se">
            <div class="box-top">
              <v-icon class="icon-1">{{ item.icon }}</v-icon>
            </div>
            <div class="box-header">
              <h5>{{ item.title }}</h5>
            </div>
            <div class="box-body">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-airplane-landing",
          title: "خطوة بي خطوة",
          text: "نحن بجانبك من لحظة وصولكم الى المطار حتى تجد العقار المناسب"
        },
        {
          icon: "mdi-hiking",
          title: "بجانبكم دائماً",
          text: "موظفينا يعملون على ايجادأفضل عرض لكم بافضل سعر"
        },

        {
          icon: "mdi-domain",
          title: "الاكثر انتشاراً",
          text:
            "نحن نعمل مع مجموعة كبيرة من شركة الانشاء لنقدم  مجموعة واسعة من الخيارات"
        }
      ]
    };
  }
};
</script>

<style scoped>
.hello {
  width: 100%;
  background: rgba(4, 128, 146, 0.1);
}
.card-se {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  position: relative;
  background: #fff;
  border-radius: 5px;
  border-bottom: 3px solid #048092;
  transition: all 0.33s ease;
}

.box-top {
  position: relative;
  will-change: transform;
  transition: 0.33s all ease;
  text-align: center;
  cursor: default;
  font-size: 14px;
  line-height: 1.71429;
}
.box-header {
  margin-top: 22px;
  display: block;
}
.box-header h5 {
  transition: 0.33s all ease;
  margin-right: 0.25em;
  touch-action: manipulation;
  text-rendering: optimizeLegibility;
  font-size: 25px;
  color: #252525;
  cursor: default;
}
.box-body {
  margin-top: 12px;
  position: relative;
  transition: 0.33s all ease;
  display: block;
  cursor: default;
}
.box-body p {
  color: #9f9f9f;
  letter-spacing: 0.05em;
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  cursor: default;
  font-size: 18px;
  line-height: 1.71429;
  text-rendering: optimizeLegibility;
}
.icon-1 {
  font-size: 75px;
  margin-top: 20px;
  color: #048092;
}
.card-se:hover {
  background-color: #048092;
}
.card-se:hover .icon-1 {
  color: #fff;
}
.card-se:hover .box-header h5 {
  color: #fff;
}
.card-se:hover .box-body p {
  color: #fff;
}
</style>
