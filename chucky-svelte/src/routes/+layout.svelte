<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<slot />

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		line-height: 1.5;
	}
</style>
