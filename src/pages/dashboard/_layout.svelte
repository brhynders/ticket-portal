<script>
  import Header from "../../lib/header.svelte";
  import Footer from "../../lib/footer.svelte";
  import Navtabs from "../../lib/navtabs.svelte";

  import { BaseTransition } from "@roxi/routify/decorators";
  import { pb } from "../../stores";
  import { goto } from "@roxi/routify";
</script>

{#if pb.authStore.isValid}
  <div
    class="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen flex flex-col"
  >
    <Header />
    <div
      class="container w-full mx-auto pt-10 flex-grow  px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal"
    >
      <h5 class="p-3 font-bold text-2xl text-gray-600">
        Welcome {pb.authStore.model.name}
      </h5>
      <Navtabs />
      <div class="mt-2">
        <slot decorator={BaseTransition} />
      </div>
    </div>
    <Footer />
  </div>
{:else}
  {$goto("/")}
{/if}
