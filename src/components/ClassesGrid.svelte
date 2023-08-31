<script lang="ts">
  import type { Class } from '../interfaces/class';
  import { classEmoji } from '../helpers/classEmoji';
  export let classes: Class[];
  
  type ClassIndex = keyof typeof classEmoji;
</script>

<section>
  <div class="grid gap-6 grid-cols-3">
    {#each classes as currentClass}
      <div class="bg-white shadow-lg shadow-stone-200 p-3 rounded">
        {#if currentClass.index in classEmoji}
          <div class="text-[40px]">{classEmoji[currentClass.index]}</div>
        {/if}
        <p>Name: {currentClass.name}</p>
        <p>Hit Dice: d{currentClass.hit_die}</p>
      </div>
    {/each}
  </div>
</section>

<style>
</style>
