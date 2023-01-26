import { writable } from "svelte/store";
import Pocketbase from "pocketbase";

export const pb = new Pocketbase("https://tickets.elegantwebcreations.com");
