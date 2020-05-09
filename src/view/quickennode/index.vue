<template>
  <div class="quickennode-container">
    加速节点管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Quickennode",
  data() {
    return {
      currentRole: "quickennode"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "quickennode";
    }
  }
};
</script>
