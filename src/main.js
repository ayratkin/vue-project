import { createApp } from 'vue';
import App from '@/App';
import components from '@/components/UI'
import Router from '@/router/Router'

const app = createApp(App)
components.forEach((component) => {
	app.component(component.name, component)
})

app.use(Router);
app.mount('#app');


