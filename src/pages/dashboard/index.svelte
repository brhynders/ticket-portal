<script>
  import Card from "../../lib/card.svelte";
  import { onMount } from "svelte";
  import { pb } from "../../stores";

  let tickets = [];

  onMount(async () => {
    const res = await pb
      .collection("tickets")
      .getList()
      .catch(err => console.log(`App error: ${err}`));
    if (res) tickets = res.items;
  });
</script>

<div class="flex flex-row flex-wrap">
  {#each tickets as ticket}
    <Card name={ticket.ticket_name} />
  {/each}
</div>
