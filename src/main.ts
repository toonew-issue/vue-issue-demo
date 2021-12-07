import ElementPlus from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { createApp } from 'vue';

import App from './App.vue';

import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus, { size: 'small', locale: zhCn });

app.mount('#app');
