import router from './config/router';
import menu from './config/menu';
import settings from './config/settings';
import store from './store';
import task from './bg';

export default {
	name: settings.slug,
	router,
	menu,
	settings,
	store,
	task
};
