<script lang="ts">
	import type { Class } from '../../interfaces/class';
	import { classEmoji, classEmojiSorter } from '../../helpers/classEmoji';
	export let currentClass: Class;
</script>

<a href="/{currentClass?.slug}">
	<div
		class="rounded bg-white p-5 text-center shadow-lg shadow-stone-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:text-white"
	>
		<div class="text-[40px]">
			{classEmojiSorter(currentClass?.slug, classEmoji)}
		</div>

		<p>{currentClass?.name}</p>
	</div>
</a>

<style>
</style>
