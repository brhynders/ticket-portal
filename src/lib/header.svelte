<script>
  import { goto } from "@roxi/routify";
  import { pb } from "../stores";
  const logout = () => {
    pb.authStore.clear();
    $goto("/");
  };
</script>

<header id="header" class="bg-white w-full shadow p-3">
  <div
    class="w-full container mx-auto flex flex-wrap items-center justify-between"
  >
    <span class="text-slate-900 text-base font-bold">
      <img
        wdith="75"
        src="https://elegantwebcreations.com/wp-content/uploads/2021/03/logo-1.png"
        class="inline w-32 h-auto mr-4"
      />Ticket Portal
    </span>
    <button
      on:click={logout}
      class="bg-blue-600 inline-block px-6 flex items-center justify-center py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light">Logout</button
    >
  </div>
</header>
