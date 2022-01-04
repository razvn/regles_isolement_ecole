<script>

    import {adulte, positif, vaccin} from "./stores";
    import ReponseMoins12Positif from "./ReponseMoins12Positif.svelte";
    import ReponseMoins12Contact from "./ReponseMoins12Contact.svelte";
    import ReponsePlus12VaccinPositif from "./ReponsePlus12VaccinPositif.svelte";
    import ReponsePlus12SansVaccinPositif from "./ReponsePlus12SansVaccinPositif.svelte";
    import ReponsePlus12VaccinContact from "./ReponsePlus12VaccinContact.svelte";
    import ReponsePlus12SansVaccinContact from "./ReponsePlus12SansVaccinContact.svelte";

    let adulte_value = null
    adulte.subscribe(value => adulte_value = value)
    let vaccin_value = null
    vaccin.subscribe(value => vaccin_value = value)
    let positif_value = null
    positif.subscribe(value => positif_value = value)

    $: resp = adulte_value !== null && ((adulte_value === false && positif_value !== null) || (adulte_value === true && vaccin_value !== null && positif_value !== null))
</script>

{#if resp === true}
    <hr/>
    <h3>Réponse</h3>
    <div class="response">
        {#if adulte_value === false}
            {#if positif_value === true}
                <ReponseMoins12Positif/>
            {:else if positif_value === false}
               <ReponseMoins12Contact/>
            {/if}
        {:else if adulte_value === true}
            {#if positif_value === true}
                {#if vaccin_value === true}
                    <ReponsePlus12VaccinPositif />
                {:else if vaccin_value === false}
                    <ReponsePlus12SansVaccinPositif />
                {/if}
            {:else if positif_value === false}
                {#if vaccin_value === true}
                    <ReponsePlus12VaccinContact />
                {:else if vaccin_value === false}
                    <ReponsePlus12SansVaccinContact />
                {/if}
            {/if}
        {/if}
    </div>

    <div>
        <hr>
        <small>(<a href="https://www.education.gouv.fr/covid19-mesures-pour-les-ecoles-colleges-et-lycees-modalites-pratiques-continuite-pedagogique-et-305467">source</a>)</small>
    </div>
{/if}
<style>
    .response {
        text-align: left;
        padding: 1em;
    }
    small {
        color: gray;
    }
</style>
