<script>
  import Card from "../../lib/card.svelte";
  import { website } from "../../stores";
  import BaseTransition from "@roxi/routify/runtime/decorators/BaseTransition.svelte";

  let bClosedTickets = false;
</script>


<div class="p-3">
  <h3 class="text-sm text-gray-600 font-bold">Open Tickets</h3>
</div>

<div class="flex flex-row flex-wrap items-stretch">
  {#if $website.tickets}
    {#each $website.tickets as ticket}
      {#if ticket.status !== 2}
      <Card time={ticket.created} id={ticket.id} name={ticket.ticket_name} open={ticket.status == 0 ? false : true} items={ticket.expand['ticket_items(ticket_id)']} />
      {/if}
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
    <div class="w-full md:w-1/3 p-3 h-full">
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

<div class="p-3 flex">
  <div on:click={() => bClosedTickets = !bClosedTickets} class="flex items-center gap-2 cursor-pointer">  
      <h3 class="text-sm text-gray-600 font-bold">Closed Tickets</h3>
      <BaseTransition>
      {#if bClosedTickets}
        <i class="fas fa-chevron-up text-md"></i>
      {:else}
         <i class="fas fa-chevron-down text-md"></i>
      {/if}
      </BaseTransition>
  </div>
</div>

{#if bClosedTickets}
<BaseTransition>
<div class="flex flex-row flex-wrap items-stretch">
  {#if $website.tickets}
    {#each $website.tickets as ticket}
      {#if ticket.status !== 2}
      <Card time= {ticket.created} id={ticket.id} name={ticket.ticket_name} open={ticket.status == 0 ? false : true} items={ticket.items} />
      {/if}
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
</div>
</BaseTransition>
{/if}