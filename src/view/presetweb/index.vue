<template>
  <div class="presetweb-container">
    预设网站管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Presetweb",
  data() {
    return {
      currentRole: "presetweb"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "presetweb";
    }
  }
};
</script>
