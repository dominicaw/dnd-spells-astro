<script lang="ts">
  import type { Spell } from '../../interfaces/spells'
  export let currentSpell: Spell
</script>

<a href="/{currentSpell?.index}">
  <div
    class="bg-white shadow-lg shadow-stone-200 p-5 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white hover:scale-105 duration-300 h-full"
  >
    <p class="uppercase">{currentSpell.name}</p>
    <hr class="mt-1 mb-3" />
    {#if currentSpell.level == 0}
      <p>{currentSpell.school.name} cantrip</p>
    {:else}
      <p>Level {currentSpell.level} {currentSpell.school.name}</p>
    {/if}
    <p><strong>Casting time: </strong>{currentSpell.casting_time}</p>
    <p><strong>Range: </strong>{currentSpell.range}</p>
    <p><strong>Components: </strong>{currentSpell.components}</p>
    <p>
      <strong>Duration: </strong>
      {#if currentSpell.concentration}
        Concentration,
      {/if}{currentSpell.duration}
    </p>
    {#if currentSpell.dc}
      <p><strong>Saving throw:</strong> {currentSpell.dc.type.full_name}</p>
    {/if}
    <p />
  </div>
</a>
