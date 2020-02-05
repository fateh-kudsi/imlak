<template>
  <div class="fet">
    <div class="fet-header">
      <h1 class="display-3 text-center mt-4 fet-h1">عقارات مميزة</h1>
      <div class="fet-line"></div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="4" v-for="el in test" :key="el.id">
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

                <v-btn color text class="btn-pro" nuxt to="/property">المزيد من الخيارات</v-btn>
              </v-card-actions>
            </v-card>
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
      test: []
    };
  },
  created() {
    let res = this.$store.state.loadedPro.filter(list => {
      return list.fet === true;
    });
    this.test = res;
    console.log(this.test);
  },
  methods: {
    setSinglePro(el) {
      this.$store.dispatch("setSinglePro", el);
      this.$router.push(`/property/${el.name}`);
    }
  }
};
</script>


<style  scoped>
.fet {
  min-height: 50vh;
  background: rgba(4, 128, 146, 0.1);
}
.fet-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.fet-header .fet-h1 {
  color: #252525;
  margin-bottom: 25px;
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