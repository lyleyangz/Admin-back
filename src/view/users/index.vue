<template>
  <div class="dashboard-container">
    用户管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Users",
  data() {
    return {
      currentRole: "users"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "users";
    }
  }
};
</script>
