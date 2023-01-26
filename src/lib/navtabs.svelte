<script>
  let current = "tickets";
</script>

<div>
  <ul class="list-reset lg:flex flex-1 items-center">
    <li class="mr-6 my-2 md:my-0">
      <a
        on:click={() => (current = "tickets")}
        href="/dashboard"
        class="{current == 'tickets'
          ? 'border-blue-600 text-blue-600'
          : 'text-gray-500 hover:text-gray-900'} block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 hover:border-blue-600 flex items-center"
      >
        <i class="fa fa-solid fa-ticket mr-3 fa-fw" /><span
          class="pb-1 md:pb-0 text-sm">Tickets</span
        >
      </a>
    </li>
    <li class="mr-6 my-2 md:my-0">
      <a
        on:click={() => (current = "new ticket")}
        href="/dashboard/new-ticket"
        class="{current == 'new ticket'
          ? 'border-blue-600 text-blue-600'
          : 'text-gray-500 hover:text-gray-900'} block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-white hover:border-blue-600 flex items-center"
      >
        <i class="fas fa-plus-circle fa-fw mr-3" /><span
          class="pb-1 md:pb-0 text-sm">New Ticket</span
        >
      </a>
    </li>
    <li class="mr-6 my-2 md:my-0">
      <a
        on:click={() => (current = "account")}
        href="/dashboard/account"
        class="{current == 'account'
          ? 'border-blue-600 text-blue-600'
          : 'text-gray-500 hover:text-gray-900'} block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-white hover:border-blue-600 flex items-center"
      >
        <i class="fas fa-user-circle fa-fw mr-3" /><span
          class="pb-1 md:pb-0 text-sm">Account</span
        >
      </a>
    </li>
    <li class="mr-6 my-2 md:my-0">
      <a
        on:click={() => (current = "help")}
        href="/dashboard/help"
        class="{current == 'help'
          ? 'border-blue-600 text-blue-600'
          : 'text-gray-500 hover:text-gray-900'} block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 border-white hover:border-blue-600 flex items-center"
      >
        <i class="fas fa-info-circle fa-fw mr-3" /><span
          class="pb-1 md:pb-0 text-sm">Help</span
        >
      </a>
    </li>
  </ul>
</div>
