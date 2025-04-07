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

<div class="container flex flex-col items-center justify-center">
    
    <main class="content flex flex-col items-center justify-center ">
        <img src="/VortexWolf.png" alt="wolf" class="wolf" />
        <h1 class="title">{translations.home?.title || 'Loading...'}</h1>
        <p class="text">{translations.home?.description || 'Loading...'}</p>
        
        <section class="projects">
            <h2 class="text2 font-bold">{translations.home?.projects?.description || 'Loading...'}</h2>
            <div class="project-grid">
                <a href="/buckit" class="project-card">
                    <h2>Buckit</h2>
                </a>
                <!-- Add more project cards here -->
            </div>
        </section>
    </main>

    <footer class="flex flex-col">
        <p style="padding-bottom: 1rem; padding-top: 1rem;">{translations.footer?.description || 'Loading...'}</p>
        <p>{translations.footer?.software || 'Loading...'}</p>
    </footer>
</div>

<style>
    .wolf{
        margin-top: 2rem;
    }
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    .content {
        max-width: 800px;
        text-align: center;
        margin: 2rem 0;
    }

    .wolf {
        width: 200px;
        height: auto;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .description {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 3rem;
    }

    .projects {
        margin-top: 3rem;
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .project-card {
        padding: 1.5rem;
        border: 1px solid var(--color-white);
        background-color: var(--color-primary-background);
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    footer {
        margin-top: auto;
        text-align: center;
        padding: 2rem;
        color: var(--color-primary-light);
    }
</style>
