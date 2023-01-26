<script>
  import { pb } from "../stores";
  import { goto } from "@roxi/routify";

  let email, password, errors, loading;

  const login = async e => {
    loading = true;
    errors = false;
    try {
      const res = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (res) $goto("/dashboard");
    } catch (err) {
      errors = true;
    }
    loading = false;
    username = "";
    password = "";
  };
</script>

<form on:submit|preventDefault={login}>
  <p class="mb-4">Please login to your account</p>
  <div class="relative flex items-center mt-2">
    <span class="absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </span>

    <input
      bind:value={email}
      type="email"
      class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Email address"
    />
  </div>

  <div class="relative flex items-center mt-2">
    <span class="absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    </span>

    <input
      bind:value={password}
      type="password"
      class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Password"
    />
  </div>
  <div class="text-center mt-2 mb-3">
    <button
      disabled={loading}
      class="bg-blue-600 inline-block px-6 flex items-center justify-center py-2.5 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
      type="submit"
    >
      {#if loading}
        <div
          class="mr-4 w-4 h-4 rounded-full animate-spin
                    border-2 border-solid border-white border-t-transparent shadow-md"
        />
      {/if}
      LOGIN
    </button>

    <p class="pt-6 text-red-800 font-bold text-md">
      {#if errors}
        Invalid Login Credentials
      {/if}
    </p>
  </div>
</form>
