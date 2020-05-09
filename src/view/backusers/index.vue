<template>
  <div class="backusers-container">
    后台用户管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Backusers",
  data() {
    return {
      currentRole: "backusers"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "backusers";
    }
  }
};
</script>
