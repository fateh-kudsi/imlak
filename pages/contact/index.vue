<template>
  <div>
    <pageTitle title="اتصل بنا" />
    <contactInfo />
  </div>
</template>

<script>
import pageTitle from "~/components/pageTitle.vue";
import contactInfo from "~/components/contactInfo.vue";
export default {
  data() {
    return {};
  },
  components: {
    pageTitle,
    contactInfo
  }
};
</script>

<style scoped></style>
