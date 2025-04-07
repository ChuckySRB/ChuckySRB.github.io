<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { language, loadTranslations } from '$lib/stores/language';
 
    let translations: any = {};

    onMount(async () => {
        const lang = $page.params.lang || 'en';
        language.set(lang);
        translations = await loadTranslations(lang);
    });

    $: if ($page.params.lang) {
        loadTranslations($page.params.lang).then(t => translations = t);
    }
</script>

<div class="container">

    <main class="content">
        <h1 class="title text-2xl font-bold">{translations.buckit?.title || 'Buckit'}</h1>
        <p class="text">{translations.buckit?.description || 'Loading...'}</p>
        <div class="buttons">
            <a href="https://github.com/ChuckySRB/Buckit" class="button" target="_blank">github</a>
            <a href="buckit/privacy-policy" class="button" target="_blank">privacy policy</a>
        </div>
        
    </main>

    <footer>
        <p>{translations.footer?.description || 'Loading...'}</p>
        <p>{translations.footer?.software || 'Loading...'}</p>
    </footer>
</div>

<style>
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    }

    .content {
        max-width: 800px;
        margin: 2rem 0;
    }

    .title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .project-details, .technologies {
        margin: 3rem 0;
    }

    .project-details ul {
        list-style-type: disc;
        margin-left: 2rem;
        margin-top: 1rem;
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .tech-card {
        padding: 1rem;
        background: #f5f5f5;
        border-radius: 8px;
        text-align: center;
    }

    .cta {
        margin: 3rem 0;
        text-align: center;
    }

    .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
    }

    .button {
        padding: 0.5rem 1rem;
        border: 0px solid var(--color-primary-light);
        border-radius: 15px;
        background: var(--color-primary-background);
        cursor: pointer;
        transition: all 0.2s;
        text-align: center;
        align-items: center;
    }

    .button.active {
        background: var(--color-primary);
    }

    .button:hover {
        background: var(--color-primary-light);
    }

    footer {
        margin-top: auto;
        text-align: center;
        padding: 2rem;
        color: var(--color-primary-light);
    }
</style> 