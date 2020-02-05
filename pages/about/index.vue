<template>
  <div>
    <pageTitle title="حول شركتنا" />
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <img src="/images/2.jpg" alt="turkey imasya" class="about-img" />
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="about-bg">
              <h1>نبذه عن شركتنا</h1>
              <p>نحن شركة متخصصة في الاستثمار العقاري تاسسات في سنة 2010 في مدينة اسطنبول التركية وكانت عبارة عن مكتب صغير يحوي 5 موظفين واليوم تعتبر شركتنا واحدة من اكبر وانجح الشركات العقارية في تركيا</p>
              <h1>سر نجاح شركتنا</h1>
              <p>نجاح شركتنا يكمن بتحديد اولوياتنا واهدافنا لخدمة عملائنا ورضاهم</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import pageTitle from "~/components/pageTitle.vue";
export default {
  data() {
    return {};
  },
  components: {
    pageTitle
  }
};
</script>

<style scoped>
.about-img {
  width: 100%;
}
.about-bg {
  background: rgba(4, 128, 146, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.about-bg h1 {
  text-align: center;
  cursor: default;
  color: #252525;
}
.about-bg p {
  color: #fff;
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

  padding-right: 20px;
  padding-left: 20px;
  text-align: center;
}
</style>
