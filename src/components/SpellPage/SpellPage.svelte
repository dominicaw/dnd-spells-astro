<script lang="ts">
	import type { Spell } from '../../interfaces/spells';
	export let spell: Spell;
</script>

<article>
	<h1 class="pb-4 text-2xl">{spell.name}</h1>
	<hr />
	<div class="grid grid-cols-4 gap-4">
		<div class="rounded bg-stone-300 p-4 text-center text-sm">
			{#if spell.level == 0}
				<p>{spell.school.name} cantrip</p>
			{:else}
				<p>Level {spell.level} {spell.school.name}</p>
			{/if}
		</div>
	</div>
	<p>{spell.desc}</p>
</article>

<style>
</style>
