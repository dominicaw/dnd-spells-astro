<script lang="ts">
  import type { Spells } from '../../interfaces/spells'
  import SpellCard from '../SpellCard/SpellCard.svelte'
  export let spells: Spells[]
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
