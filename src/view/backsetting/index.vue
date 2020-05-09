<template>
  <div class="backsetting-container">
    后台配置管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Backsetting",
  data() {
    return {
      currentRole: "backsetting"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "backsetting";
    }
  }
};
</script>
