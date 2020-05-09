<template>
  <div class="hotwords-container">
    搜索热词管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Hotwords",
  data() {
    return {
      currentRole: "hotwords"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "hotwords";
    }
  }
};
</script>
