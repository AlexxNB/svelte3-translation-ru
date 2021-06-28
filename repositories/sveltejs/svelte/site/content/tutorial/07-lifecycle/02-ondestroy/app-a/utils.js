import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
    const interval = setInterval(callback, milliseconds);

    onDestroy(() => {
        // Исправьте утечку памяти здесь
    });
}