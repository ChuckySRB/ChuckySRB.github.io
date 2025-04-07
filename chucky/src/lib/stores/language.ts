import { writable } from 'svelte/store';

export const language = writable('en');

export async function loadTranslations(lang: string) {
    try {
        const response = await fetch(`/lang/${lang}.json`);
        if (!response.ok) throw new Error('Failed to load translations');
        return await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
        return {};
    }
} 