<template>
  <div class="tet">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img :src="`${singlePro.images}`" class="propimg"></v-img>
        </v-col>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="dispro">
              <h1 class="text-right">وصف العقار</h1>
              <p class="prodis">{{singlePro.dis}}</p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <h1 class="text-right">موصفات العقار</h1>
            <table class="protabel">
              <tbody class="all1">
                <tr>
                  <td>{{singlePro.city}}</td>
                  <th>المدينة</th>
                </tr>
                <tr>
                  <td>{{singlePro.propType}}</td>
                  <th>نوع العقار</th>
                </tr>
                <tr>
                  <td>{{singlePro.space}}</td>
                  <th>المساحة</th>
                </tr>
                <tr>
                  <td>{{singlePro.rooms}}</td>
                  <th>عدد الغرف</th>
                </tr>
                <tr>
                  <td>{{singlePro.bahtrooms}}</td>
                  <th>عدد الحمامات</th>
                </tr>
                <tr>
                  <td>{{singlePro.propNum}}</td>
                  <th>رقم العقار</th>
                </tr>
                <tr>
                  <td>{{singlePro.price}}</td>
                  <th>سعر العقار</th>
                </tr>
              </tbody>
            </table>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    singlePro() {
      return this.$store.state.singlePro;
    }
  },
  created() {
    console.log(this.singlePro);
  }
};
</script>
<style  scoped>
.tet {
  width: 100%;
  min-height: 75vh;
  margin-top: 100px;
}
.propimg {
  max-width: 80%;
  margin: 0 auto !important;
}
.prodis {
  text-align: right;
  margin-top: 18px;
  margin-bottom: 18px;
  line-height: 1.5;
  color: #434345;
  max-width: 100%;
}
.protabel {
  width: 100%;
  max-width: 100%;
  text-align: right;
  margin-top: 18px;
  line-height: 1.5;
  color: #434345;
  font-size: 16px;
}
.protabel tbody th,
.protabel tbody td {
  border-top: 2px solid #ddd;
}
</style>