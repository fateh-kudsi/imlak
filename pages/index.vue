<template>
  <div>
    <hero />
    <serves />
    <fet/>
    <clie />
  </div>
</template>

<script>
import hero from "~/components/hero.vue";
import serves from "~/components/serves.vue";
import clie from "~/components/clie.vue";
import fet from "~/components/fet.vue";

export default {
  components: {
    hero,
    serves,
    clie,
    fet
  }
};
</script>
