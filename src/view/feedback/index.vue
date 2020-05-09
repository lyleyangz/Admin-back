<template>
  <div class="feedback-container">
    意见反馈管理
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Feedback",
  data() {
    return {
      currentRole: "feedback"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "feedback";
    }
  }
};
</script>
