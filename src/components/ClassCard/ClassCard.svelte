<script lang="ts">
  import type { Class } from '../../interfaces/class'
  import { classEmoji } from '../../helpers/classEmoji'
  export let currentClass: Class
</script>

<a href="/{currentClass?.index}">
  <div
    class="bg-white shadow-lg shadow-stone-200 p-5 rounded text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white hover:scale-105 duration-300"
  >
    {#if currentClass.index in classEmoji}
      <div class="text-[40px]">{classEmoji[currentClass.index]}</div>
    {/if}
    <p>{currentClass.name}</p>
  </div>
</a>

<style>
</style>
