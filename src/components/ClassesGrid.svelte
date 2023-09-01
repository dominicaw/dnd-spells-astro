<script lang="ts">
  import type { Class } from '../interfaces/class';
  import { classEmoji } from '../helpers/classEmoji';
  export let classes: Class[];
</script>

<section>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
    {#each classes as currentClass}
    <a href="/{currentClass?.index}">
      <div class="bg-white shadow-lg shadow-stone-200 p-3 rounded">
        {#if currentClass.index in classEmoji}
          <div class="text-[40px]">{classEmoji[currentClass.index]}</div>
        {/if}
        <p>{currentClass.name}</p>
      </div>
      </a>
    {/each}
  </div>
</section>

<style>
</style>
