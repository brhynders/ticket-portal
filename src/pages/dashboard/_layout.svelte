<script>
  import Header from "../../lib/header.svelte";
  import Footer from "../../lib/footer.svelte";
  import Navtabs from "../../lib/navtabs.svelte";

  import { BaseTransition } from "@roxi/routify/decorators";
  import { pb } from "../../stores";
  import { goto } from "@roxi/routify";
  import Userbox from "$lib/userbox.svelte";
</script>

{#if pb.authStore.isValid}
  <div
    class="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen flex flex-col"
  >
    <Header />
    <!-- Content Container -->
    <div
      class="container w-full mx-auto pt-10 flex-grow  px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"
    >
      <Userbox />
      <!-- SLot Content-->
      <div class="mt-6">
        <slot decorator={BaseTransition} />
      </div>
      <!-- /Slot Content -->
    </div>
    <!-- /Content Container -->
    <Footer />
  </div>
{:else}
  {$goto("/")}
{/if}
