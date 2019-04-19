import { writable, derived } from 'svelte/store';

export const name = writable('мир');

export const greeting = derived(
	name,
	$name => `Привет, ${$name}!`
);