<script lang="ts">
  import type { Spell } from '../../interfaces/spells'
  import SpellCard from '../SpellCard/SpellCard.svelte'
  export let spells: Spell[]
</script>

<section>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-4">
    {#each spells as currentSpell}
      <SpellCard {currentSpell} />
    {/each}
  </div>
</section>

<style>
</style>
