<template>
  <div class="tweet">
    <ProfileImage :image="user.image" />
    <!-- <img
      :src="tweet.user.image"
      class="profile"
      alt="profile"
    /> -->

    <div class="body">
      <div class="top">
        <User :userData="user" />
        <!-- <span class="user">
          <span class="name">{{tweet.user.name}}</span>
          <span class="handle">{{tweet.user.handle}}</span>
        </span>-->
        <Timestamp :time="timestamp" />
        <!-- <span class="timestamp">{{tweet.timestamp}}</span> -->
      </div>

      <Message message="message" />
      <!-- <p class="message">
        {{tweet.message}}
      </p> -->

      <Actions />
      <!-- <div class="actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
      </div> -->
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script>
  import ProfileImage from './ProfileImage.vue';
  import Message from './Message.vue';
  import Actions from './Actions.vue';
  import Timestamp from './Timestamp.vue';
  import User from './User.vue';

export default {
  props: {
    user:  Object,
    timestamp: String,
    message: String
    // tweet: {
    //   type: Object
    // }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
