<template>
    <img
      :src="image"
      class="profile"
      alt="profile"
    />
</template>

<script>

export default {
  props: {
    image: {
      type: String
    }
  }
}
</script>

<style>
</style>