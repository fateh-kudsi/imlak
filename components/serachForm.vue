<template>
  <div class="search-bg">
    <v-container>
      <div>
        <h1 class="ser-title display-3 text-center">ابحث عن العقار المناسب</h1>
      </div>
      <v-row class="my-4">
        <v-col cols="12" sm="12" md="3" lg="3">
          <div class="form-group">
            <h1 class="label-type">المدينة</h1>
            <v-select
              :items="typesCity"
              placeholder="اختر المدينة"
              outlined
              @change="filterPro({name:'changeCity',value:$event})"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <div class="form-group">
            <h1 class="label-type">نوع العقار</h1>
            <v-select
              :items="typesPro"
              placeholder="حدد نوع العقار "
              outlined
              @change="filterPro({name:'changeType',value:$event})"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <div class="form-group">
            <h1 class="label-type">مساحة العقار</h1>
            <v-select
              :items="typesSize"
              placeholder="حدد مساحة العقار "
              outlined
              @change="filterPro({name:'changeSpace',value:$event})"
            ></v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <div class="form-group">
            <h1 class="label-type">سعر العقار</h1>
            <v-select
              :items="typesPrice"
              placeholder="حدد سعر العقار "
              outlined
              @change="filterPro({name:'changePrice',value:$event})"
            ></v-select>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" v-if="propF.length  <= 0">
          <h1 class="text-center">عذراً لا يتوفر لدينا عقار بهذة الموصفات حالياً</h1>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          v-for="el in propF"
          :key="el.id"
          data-aos="fade-right"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="el.images"></v-img>

            <v-card-subtitle class="font-size-card">{{el.name}}</v-card-subtitle>

            <v-card-text class="text--primary font-size-card-info">
              <div class="mb-4">المدينة : {{el.city}}</div>

              <div class="mb-4">$ السعر : {{`${el.price } `}}</div>

              <div>المساحة : {{el.space}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color text class="btn-pro" @click="setSinglePro(el)">المزيد من التفاصيل</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typesCity: [],
      typesPro: [],
      typesSize: [],
      typesPrice: [],
      loadedPosts: []
    };
  },
  computed: {
    propF() {
      // create dis Array
      return this.$store.state.finlePro;
    }
  },
  methods: {
    filterPro(payload) {
      this.$store.dispatch("filterPro", payload);
    },

    setSinglePro(el) {
      this.$store.dispatch("setSinglePro", el);
      this.$router.push(`/property/${el.name}`);
    }
  },
  created() {
    this.loadedPosts = this.$store.state.loadedPro;
    // Get unique value for the type
    const getUnique = (items, value) => {
      return [...new Set(items.map(item => item[value]))];
    };

    // city
    let types1 = getUnique(this.loadedPosts, "city");
    types1 = ["الجميع", ...types1];
    this.typesCity = types1;

    // prop type
    let types = getUnique(this.loadedPosts, "propType");
    types = ["الجميع", ...types];
    this.typesPro = types;

    // prop space
    let types2 = getUnique(this.loadedPosts, "space");
    // sort space from lowest to heighest
    let types2s = types2.sort((a, b) => b - a);

    this.typesSize = types2s;

    // prop price
    let types3 = getUnique(this.loadedPosts, "price");
    // sort price from lowest to heighest
    let types3s = types3.sort((a, b) => b - a);

    this.typesPrice = types3s;
  },
  beforeDestroy() {
    this.$store.dispatch("resetForm");
  }
};
</script>
<style scoped>
* {
  user-select: none;
}
.search-bg {
  min-height: 50vh;
}
.ser-title {
  font-size: 20px;
  margin-top: 70px;
  margin-bottom: 30px;
}
.label-type {
  font-size: 24px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px !important;
}
.fet-header .fet-h1 {
  color: #252525;
}
.font-size-card {
  font-size: 20px;
}
.font-size-card-info {
  font-size: 16px;
}
.btn-pro {
  transition: all 0.3s ease-out;
}
.btn-pro:hover {
  background-color: #048092;
  color: #fff;
}
</style>
