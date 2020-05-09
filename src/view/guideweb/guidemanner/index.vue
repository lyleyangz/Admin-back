<template>
  <div class="guidemanner-container">
    网址导航管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Guidemanner",
  data() {
    return {
      currentRole: "guidemanner"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "guidemanner";
    }
  }
};
</script>
