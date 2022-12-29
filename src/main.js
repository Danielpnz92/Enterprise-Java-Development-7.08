import { createApp } from 'vue'
import App from './App.vue'
import ProfileImage from './components/ProfileImage.vue';
import Message from './components/Message.vue';
import Actions from './components/Actions.vue';
import Timestamp from './components/Timestamp.vue';
import User from './components/User.vue';

const app = createApp(App);

app
    .component('Actions', Actions)
    .component('Message', Message)
    .component('ProfileImage', ProfileImage)
    .component('Timestamp', Timestamp)
    .component('User', User);

const mountedApp = app.mount('#app');
