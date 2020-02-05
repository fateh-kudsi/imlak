<template>
  <div class="bg-clie">
    <div class="bg-blue">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="3"
            lg="3"
            v-for="(item, index) in items"
            :key="index"
            data-aos="fade-right"
            data-aos-duration="1000"
            :data-aos-delay="item.dera"
          >
            <div class="m1-clie">
              <h1>{{ item.title }}</h1>
              <h2>{{ item.text }}</h2>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "200 اكثر من",
          text: "زبون لشركتنا",
          dera: "1000"
        },
        {
          title: "15 اكثر من",
          text: " سنة من الخبرة",
          dera: "1500"
        },
        {
          title: "500 اكثر من",
          text: " عقار جاهز للتسليم",
          dera: "2000"
        },
        {
          title: "5 اكثر من",
          text: " ولايات في تركيا",
          dera: "2500"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-clie {
  background: url("/images/3.jpg") center center/cover no-repeat;
  min-height: 50vh;
  width: 100%;
  position: relative;
}
.bg-blue {
  background: rgba(4, 128, 146, 0.37);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.m1-clie {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 70px;
}
.m1-clie h1 {
  font-size: 48px;
  color: #fff;
  cursor: default;
}
.m1-clie h2 {
  color: #252525;
  cursor: default;
}
@media (max-width: 959px) {
  .bg-clie {
    height: 900px;
  }
  .m1-clie h2 {
    color: #fff;
  }
}
</style>
