<script lang="ts">
	import type { Spell } from '../../interfaces/spells';
	export let currentSpell: Spell;
</script>

<a href="/{currentSpell?.slug}">
	<article
		class="h-full rounded bg-white p-5 shadow-lg shadow-stone-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:text-white"
	>
		<p class="uppercase">{currentSpell.name}</p>
		<hr class="mb-3 mt-1" />
		{#if currentSpell.level_int == 0}
			<p>{currentSpell.school} cantrip</p>
		{:else}
			<p>Level {currentSpell.level_int} {currentSpell.school}</p>
		{/if}
		<p><strong>Casting time: </strong>{currentSpell.casting_time}</p>
		<p><strong>Range: </strong>{currentSpell.range}</p>
		<p><strong>Components: </strong>{currentSpell.components}</p>
		<p>
			<strong>Duration: </strong>
			{#if currentSpell.requires_concentration}
				Concentration,
			{/if}
			{currentSpell.duration}
		</p>
		<p />
	</article>
</a>
