<script lang="ts">
  import type { Class } from '../../interfaces/class'
  import ClassCard from '../ClassCard/ClassCard.svelte'
  export let classes: Class[]
</script>

<section>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-3">
    {#each classes as currentClass}
      <ClassCard {currentClass} />
    {/each}
  </div>
</section>

<style>
</style>
