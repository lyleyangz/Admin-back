<template>
  <div class="appeal-container">
    误报申诉管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Appeal",
  data() {
    return {
      currentRole: "appeal"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "appeal";
    }
  }
};
</script>
