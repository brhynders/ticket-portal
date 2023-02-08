<script>
  import {onMount} from "svelte";
  export let open;
  export let name;
  export let items;
  export let id;
  export let time;

  onMount(() => {
    console.log(items)
  })
  
</script>

<div class="w-full md:w-1/3 p-3">
  <div class="bg-white border rounded shadow h-full">
    <div class="border-b p-3 flex items-center justify-between">
      <h5 class="font-bold uppercase text-gray-600">{name}</h5>
      <div class="flex items-center gap-3">
      <!-- Timestamp -->
      <h3 class="px-3 rounded-lg bg-violet-400 text-white text-sm">{time.split(' ')[0]}</h3>
      <!--Item Count-->
      <h3 class="px-3 rounded-lg bg-blue-500 text-white text-sm">{items.length} Items</h3>
      <!--Ticket Status -->
      {#if open}
        <h3 class="px-3 rounded-lg bg-green-500 text-white text-sm">Open</h3>
      {:else}
        <h3 class="px-3 rounded-lg bg-yellow-500 text-sm text-white">Submitted</h3>
      {/if}
      </div>
    </div>
    <!-- Card content -->
    <div class="px-3 py-5">
      <ul class="list-decimal list-inside">
      {#each items as item}
         <li class="px-3 py-1 rounded-lg bg-gray-100 mb-3">{item.description}</li>
      {/each}
      </ul>
      <a href={`/dashboard/ticket-${id}`}
      class="mt-4 bg-blue-600 inline-block px-3 flex items-center justify-center py-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
      type="button"
      >View Ticket</a>
    </div>
  </div>
</div>
