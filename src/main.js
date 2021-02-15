import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Eric',
		lastName: 'Gomez'
	}
});

export default app;