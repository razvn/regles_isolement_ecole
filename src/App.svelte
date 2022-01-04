<script>
	import Cas from "./Cas.svelte";
	import Age from "./Age.svelte";
	import {adulte, positif, vaccin} from "./stores";
	import Vaccin from "./Vaccin.svelte";
    import Reponse from "./Reponse.svelte";

    let adulte_value = null
    adulte.subscribe(value => adulte_value = value)
    let vaccin_value = null
    vaccin.subscribe(value => vaccin_value = value)
    let positif_value = null
    positif.subscribe(value => positif_value = value)

</script>

<main>
    <h1>École - Règles d'isolement élèves et personnels</h1>
    <h2>(à partir le 3 janvier 2022)</h2>
    <Cas/>
    {#if positif_value != null}
        <Age/>
		{#if adulte_value === true}
			<Vaccin/>
		{/if}
    {/if}

    <Reponse/>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
