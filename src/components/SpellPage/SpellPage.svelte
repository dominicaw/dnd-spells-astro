<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { Spell } from '../../interfaces/spells';
	import SpellComponent from './SpellComponent/SpellComponent.svelte';
	export let spell: Spell;
</script>

<header>
	<h1 class="pb-4 text-2xl">{spell.name}</h1>
	<hr />
	<div
		class="my-4 grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
	>
		<SpellComponent>
			{#if spell.spell_level == 0}
				<p>{spell.school} cantrip</p>
			{:else}
				<p>Level {spell.spell_level} {spell.school}</p>
			{/if}
		</SpellComponent>
		<SpellComponent>
			<p>{spell.casting_time}</p>
		</SpellComponent>
		<SpellComponent>
			<p>{spell.range}</p>
		</SpellComponent>
		<SpellComponent>
			<p>
				{#if spell.concentration}
					Concentration,
				{/if}
				<span class="lowercase">{spell.duration}</span>
			</p>
		</SpellComponent>
		{#if spell.dc}
			<SpellComponent>
				<p>{spell.dc.type.full_name} saving throw</p>
			</SpellComponent>
		{/if}
		{#if spell.damage?.length > 0}
			<SpellComponent>
				<p>
					{spell.damage?.damage_at_slot_level[0]?.damage} (Level {spell.damage
						?.damage_at_slot_level[0]?.level})
				</p>
			</SpellComponent>
		{/if}
		{#if spell.area_of_effect}
			<SpellComponent>
				<p>{spell.area_of_effect?.size}ft</p>
				<p class="ml-1 lowercase">{spell.area_of_effect?.type}</p>
			</SpellComponent>
		{/if}
	</div>
</header>
<article>
	{spell.desc}
</article>

<style>
</style>
