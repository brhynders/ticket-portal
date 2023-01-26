<script>
  import { pb } from "../stores";
  import { onMount } from "svelte";
  import Navtabs from "./navtabs.svelte";
  import { website } from "../stores";
  import { goto } from "@roxi/routify";

  let websites;
  let _currentWebsite;

  $: {
    if (_currentWebsite) {
      website.set({
        tickets: _currentWebsite.expand["tickets(website)"],
        remaining_tickets:
          parseInt(_currentWebsite.expand.hosting_plan.tickets_per_month) -
          parseInt(_currentWebsite.submitted_tickets),
        max_tickets: _currentWebsite.expand.hosting_plan.tickets_per_month,
        name: _currentWebsite.name,
        hosting_plan: _currentWebsite.expand.hosting_plan,
      });
    }
  }

  onMount(async () => {
    const res = await pb
      .collection("websites")
      .getList(1, 20, {
        expand: "hosting_plan,tickets(website)",
      })
      .catch(err => console.log(err));

    if (res) {
      websites = res.items;
    }
  });
</script>

<div class="flex items-center justify-between px-3">
  <h5 class="py-3 font-bold text-2xl text-gray-600">
    Welcome {pb.authStore.model.name}
  </h5>
  <h5 class="text-md text-gray-600 font-bold">
    {#if _currentWebsite}
      {#if $website.remaining_tickets < 1}
        <span class="text-red-800 font-extrabold">0</span>
      {:else}
        {$website.remaining_tickets}
      {/if}
      of {$website.max_tickets} tickets remaining
    {:else}
      Loading...
    {/if}
  </h5>
</div>
<div class="flex items-center justify-between px-3">
  <Navtabs />
  {#if websites}
    <select
      on:change={() => $goto("/dashboard")}
      bind:value={_currentWebsite}
      class="block py-1 px-3 text-gray-700 bg-base-300 border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      name="websites"
      id="websites"
    >
      {#each websites as _website}
        <option value={_website}>{_website.domain}</option>
      {/each}
    </select>
  {:else}
    <h3>No websites found for your account.</h3>
  {/if}
</div>
