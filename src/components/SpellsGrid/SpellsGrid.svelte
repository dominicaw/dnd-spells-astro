<script lang="ts">
  import type { Spell } from '../../interfaces/spells'
  import SpellCard from '../SpellCard/SpellCard.svelte'
  export let spells: Spell[]
</script>

<section>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    {#if Object.keys(spells).length === 0}
      <p>Sorry, no spells 🤷‍♀️</p>
    {:else}
      {#each spells as currentSpell}
        <SpellCard {currentSpell} />
      {/each}
    {/if}
  </div>
</section>

<style>
</style>
