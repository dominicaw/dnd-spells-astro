<script lang="ts">
  import type { Spell } from '../../interfaces/spells'
  export let currentSpell: Spell
</script>

<article>
  <a href="/{currentSpell?.index}">
    <div
      class="bg-white shadow-lg shadow-stone-200 p-5 rounded text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white hover:scale-105 duration-300"
    >
      <p>{currentSpell.name}</p>
      <p>Level {currentSpell.level} {currentSpell.school.name}</p>
    </div>
  </a>
</article>
