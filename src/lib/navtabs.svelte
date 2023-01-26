<script>
  import { isActive } from "@roxi/routify";
</script>

<div class="p-3">
  <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
    <li class="mr-6 my-2 md:my-0">
      <a
        href="/dashboard"
        class={(window.location.pathname == "/dashboard"
          ? "border-blue-600 text-blue-600"
          : "text-gray-500") +
          " block py-1 md:py-3 pl-1 align-middle no-underline hover:text-gray-900 border-b-2 hover:border-blue-600"}
      >
        <i class="fas fa-tasks fa-fw mr-3" /><span class="pb-1 md:pb-0 text-sm"
          >Tickets</span
        >
      </a>
    </li>
    <li class="mr-6 my-2 md:my-0">
      <a
        class:border-blue-600={$isActive("/dashboard/new-ticket")}
        class:text-blue-600={$isActive("/dashboard/new-ticket")}
        href="/dashboard/new-ticket"
        class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-blue-600"
      >
        <i class="fas fa-tasks fa-fw mr-3" /><span class="pb-1 md:pb-0 text-sm"
          >New Ticket</span
        >
      </a>
    </li>
    <li class="mr-6 my-2 md:my-0">
      <a
        class:border-blue-600={$isActive("/dashboard/account")}
        class:text-blue-600={$isActive("/dashboard/account")}
        href="/dashboard/account"
        class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-blue-600"
      >
        <i class="fa fa-envelope fa-fw mr-3" /><span
          class="pb-1 md:pb-0 text-sm">Account</span
        >
      </a>
    </li>
    <li class="mr-6 my-2 md:my-0">
      <a
        class:border-blue-600={$isActive("dashboard/help")}
        class:text-blue-600={$isActive("/dashboard/help")}
        href="/dashboard/help"
        class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-blue-600"
      >
        <i class="fas fa-chart-area fa-fw mr-3" /><span
          class="pb-1 md:pb-0 text-sm">Help</span
        >
      </a>
    </li>
  </ul>
</div>
