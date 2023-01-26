<script>
  import { pb } from "../stores";
  import LoginForm from "../lib/loginform.svelte";
  import { goto } from "@roxi/routify";
  let email, password, errors;

  const login = async () => {
    errors = false;
    const res = await pb
      .collection("users")
      .authWithPassword(email, password)
      .catch(err => {
        errors = true;
      });
    if (res) $goto("/dashboard");
  };
</script>

{#if pb.authStore.isValid}
  {$goto("/dashboard")}
{:else}
  <section class="h-full gradient-form bg-gray-200 md:h-screen">
    <div class="container py-12 px-6 h-full mx-auto">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
      >
        <div class="xl:w-10/12">
          <div class="block bg-white shadow-lg rounded-lg">
            <div class="lg:flex lg:flex-wrap g-0">
              <div class="lg:w-6/12 px-4 md:px-0">
                <div class="md:p-12 md:mx-6">
                  <div class="text-center">
                    <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                      Elegant Web Creations Ticket Portal
                    </h4>
                  </div>
                  <LoginForm />
                </div>
              </div>
              <div
                class="lg:w-6/12 flex justify-center items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-blue-600"
              >
                <img
                  width="350"
                  src="https://elegantwebcreations.com/wp-content/uploads/2021/03/ewc-logo-white.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}
