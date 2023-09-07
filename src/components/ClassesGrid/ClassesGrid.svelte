<script lang="ts">
	import type { Class } from '../../interfaces/class';
	import ClassCard from '../ClassCard/ClassCard.svelte';
	export let classes: Class[];
</script>

<section>
	<!-- this is a grid smile -->
	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each classes as currentClass}
			<ClassCard {currentClass} />
		{/each}
	</div>
</section>

<style>
</style>
