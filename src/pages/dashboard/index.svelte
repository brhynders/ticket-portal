<script>
  import Card from "../../lib/card.svelte";
  import { website } from "../../stores";
</script>

<div class="flex flex-row flex-wrap items-stretch">
  {#if $website.tickets}
    {#each $website.tickets as ticket}
      <Card name={ticket.ticket_name} />
    {/each}
  {:else}
    <div class="p-3">
      No open tickets for the currently selected website: <span
        class="font-bold ml-1"
      >
        {$website.name}</span
      >
    </div>
  {/if}
  {#if $website.remaining_tickets > 1}
    <div class="w-full md:w-1/3 p-3">
      <div class="bg-blue-600 border rounded shadow">
        <a
          href="/dashboard/new-ticket"
          class="p-20 flex flex-col items-center justify-between text-white"
        >
          <i class="fas fa-plus-circle text-xl mb-4 animate-bounce" />
          <h5 class="font-bold uppercase">Create A New Ticket</h5>
        </a>
      </div>
    </div>
  {/if}
</div>
