<template>
  <div class="home">
    <Tomato_clock />
  </div>
</template>

<script>
// @ is an alias to /src
import Tomato_clock from "@/components/Tomato_clock.vue";

export default {
  name: "home",
  components: {
    Tomato_clock
  }
};
</script>
