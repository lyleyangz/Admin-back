<template>
  <div class="commpanies-container">
    交易商名单管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Commpanies",
  data() {
    return {
      currentRole: "commpanies"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "commpanies";
    }
  }
};
</script>
