import { writable } from "svelte/store";
import Pocketbase from "pocketbase";

export const pb = new Pocketbase("https://tickets.elegantwebcreations.com");

export const currentWebsite = writable(false);

export const website = writable({
  name: "",
  tickets: 0,
  remaining_tickets: 0,
  max_tickets: 0,
  hosting_plan: 0,
});
