<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app class="hidden-md-and-up">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="link-active"
          :nuxt="true"
          color="success"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="line grey lighten-1"></div>
      <p class="text-uppercase d-block text-center my-4 mx-2">تابعونا على مواقع التواصل الاجتماعي</p>

      <a v-for="(item, i) in soItems" :href="item.link" target="_blank" :key="i">
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </a>
    </v-navigation-drawer>
    <v-app-bar max-height="60" fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up" />
      <v-spacer class="hidden-md-and-up" />
      <v-toolbar-title class="ml-5">
        <nuxt-link to="/" style="fontSize:1.5rem;">املاك</nuxt-link>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(link, index) in routerLinks"
          :key="index"
          :to="link.to"
          active-class="link-active"
          :nuxt="true"
        >{{ link.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <nuxt />

    <footer class="app-footer">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="4">
            <h1 class="text-uppercase title text-center">اخر العقارات المضافة</h1>
            <div class="flex-12">
              <div
                class="new-pro mt-4"
                v-for="(prop) in loaddedPro"
                :key="prop.id"
                @click="setSinglePro(prop)"
              >
                <div class="flex-123">
                  <div class="new-pro-img">
                    <img :src="prop.images" alt />
                  </div>
                  <div class="new-pro-body">
                    <div class="new-pro-text">{{prop.name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <h1 class="text-uppercase title text-center mb-4">اشترك في القائمة البريدية</h1>

            <h1 class="subtitle-1 p-footer">ادخل بريدك الالكتروني ليصلك تقرير عن اسعار العقارات</h1>

            <!-- input filed -->
            <div class="my-4">
              <h1 class="text-uppercase title news">البريد الالكتروني</h1>

              <v-text-field
                placeholder="Email "
                outlined
                class="pt-4 pb-0"
                background-color="#fff"
                type="email"
              ></v-text-field>
            </div>
            <!-- end -->
            <!-- submit button -->
            <v-btn color="primary">ارسال</v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4" class="about-smart">
            <h1 class="text-uppercase title text-center">تواصل معنا</h1>
            <v-list color="#252525 ">
              <v-list-item v-for="(item, i) in footerItems" :key="i" color="success">
                <v-list-item-action>
                  <v-icon color="primary">{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title" style="color:#fff" />
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <div class="my-4">
              <a :href="item.link" v-for="(item, i) in soItems" :key="i" target="_blank">
                <v-btn class="mx-2" fab small>
                  <v-icon light>{{ item.icon }}</v-icon>
                </v-btn>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </footer>
    <div class="sub-footer">
      <p class="copy">
        &copy; جميع الحقوق محوفظة -
        <span>{{ new Date().getFullYear() }}</span>
      </p>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "الرئيسية",
          to: "/"
        },
        {
          icon: "mdi-buffer",
          title: "عقارات تركيا",
          to: "/property"
        },
        {
          icon: "mdi-information",
          title: "حول شركتنا",
          to: "/about"
        },

        {
          icon: "mdi-contact-mail",
          title: "اتصل بنا",
          to: "/contact"
        }
      ],
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
      ],
      soItems: [
        {
          icon: "mdi-facebook",
          title: "Facebook",
          link: "https://www.facebook.com/",
          color: "#3b5998"
        },
        {
          icon: "mdi-twitter",
          title: "Twitter",
          link: "https://www.twitter.com/",
          color: "#00acee"
        },
        {
          icon: "mdi-instagram",
          title: "Instagram",
          link: "https://www.instagram.com/",
          color: " #e1306c"
        },
        {
          icon: "mdi-linkedin",
          title: "Linkedin",
          link: "https://www.linkedin.com/",
          color: "#0e76a8"
        }
      ],
      routerLinks: [
        { title: "الرئيسية", to: "/", active: "link-active" },
        { title: "عقارات تركيا", to: "/property" },
        { title: "حول شركتنا", to: "/about" },
        { title: "اتصل بنا", to: "/contact" }
      ],
      loaddedPro: []
    };
  },
  created() {
    let res = this.$store.state.loadedPro.filter(list => {
      return list.new === true;
    });
    this.loaddedPro = res;
  },
  methods: {
    setSinglePro(el) {
      this.$store.dispatch("setSinglePro", el);
      this.$router.push(`/property/${el.name}`);
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.link-active {
  background-color: #048092 !important;
}
.link-active span,
.link-active div {
  color: #fff !important;
}
.v-btn__content {
  font-size: 1rem;
  letter-spacing: 0;
}
.app-footer {
  background: #252525;
  color: #fff !important;
}
.sub-footer {
  background: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.copy {
  line-height: 22px;
  margin-top: 10px;
}
.flex-12,
.flex-123 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.flex-12 {
  flex-direction: column;
  margin: 20px;
}
.flex-123 {
  justify-content: space-between;
  max-width: 100%;
  min-width: 100%;
}
.new-pro {
  display: inline-flex;
  align-items: center;
  transition: background 0.3s ease-out;
}
.new-pro:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.new-pro-img {
  min-width: 80px;
  max-width: 80px;
  cursor: pointer;
}
.new-pro-img img {
  width: 110px;
  height: 100px;
}
.new-pro-body {
  margin-left: 40px;
}
.new-pro-text {
  letter-spacing: 0.075em;
  line-height: 1.2;
  color: #fff;
}
.list-contact {
  text-align: center;
}
</style>
