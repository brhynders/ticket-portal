<script>
  import Card from "../../lib/card.svelte";
  import { website } from "../../stores";
</script>

{#if $website.tickets}
  <div class="flex flex-row flex-wrap">
    {#each $website.tickets as ticket}
      <Card name={ticket.ticket_name} />
    {/each}
  </div>
{:else}
  <div class="p-3">No tickets for the current selected website.</div>
{/if}
