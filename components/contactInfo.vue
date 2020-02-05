<template>
  <div class="base">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <div class="contact-title">
            <h2>اتصل بنا</h2>
            <p>
              اذا كان لديكم اي استفساراملأ خانات الاتصال الاتية وسوف يقوم احد
              اعضاء فريقنا بلتواصل معكم باسراع وقت ممكن
            </p>
          </div>
          <div class="my-4">
            <v-text-field outlined append-icon="mdi-account" placeholder="الاسم"></v-text-field>
            <v-text-field outlined append-icon="mdi-email" placeholder="البريد الالكتروني"></v-text-field>
            <v-textarea outlined name="input-7-4" placeholder="الرسالة" append-icon="mdi-message"></v-textarea>
            <v-btn color="primary" large>ارسال</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <div class="contact-title">
            <h2>معلومات الاتصال</h2>
            <p>نتشرف بزيارتكم في فرعنا الرئيسي في اسطنبول</p>
          </div>
          <div class="my-4">
            <v-container>
              <v-list>
                <v-list-item v-for="(item, i) in footerItems" :key="i" class="con-list">
                  <v-list-item-action>
                    <v-icon color="primary" class="icon-con">{{ item.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.title"
                      style="color:#252525; fontSize:26px;"
                      class="con-info"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-container>
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
      footerItems: [
        {
          icon: "mdi-phone",
          title: "+90 (539-357-3160)"
        },
        {
          icon: "mdi-email",
          title: "imlak@info.com"
        },
        {
          icon: "mdi-map-marker",
          title: "أسطنبول تركيا"
        }
      ]
    };
  }
};
</script>

<style scoped>
.base {
  width: 100%;
  min-height: 80vh;
}
.contact-title h2 {
  font-size: 2rem;
  color: #252525;
  text-align: center;
}
.contact-title p {
  color: #252525;
  text-align: center;
  margin-top: 20px;
}
.icon-con {
  font-size: 36px;
}
.con-list {
  padding-left: 120px;
  padding-bottom: 35px;
}
@media (max-width: 500px) {
  .con-list {
    padding-left: 40px;
  }
}
</style>
