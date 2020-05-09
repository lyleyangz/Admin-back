<template>
  <div class="guidesort-container">
    导航分类管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Guidesort",
  data() {
    return {
      currentRole: "guidesort"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "guidesort";
    }
  }
};
</script>
