<script lang="ts">
	import Navbar from '../components/Navbar/Navbar.svelte';
	export let title: string = 'D&D - 5th Edition';
</script>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<title>{title}</title>
	</head>

	<body>
		<Navbar />
		<main class="xlg:px-0 mx-auto my-8 max-w-[1200px] px-4">
			<slot />
		</main>
	</body>
</html>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400;1,600&display=swap');

	html {
		font-family: 'Montserrat', Helvetica, system-ui, sans-serif;
		background-color: #f6f6f6;
	}
</style>
