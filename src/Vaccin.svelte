<script>

    import {vaccin} from "./stores";
    import {afterUpdate} from "svelte";

    let div
    let vaccin_value = null
    vaccin.subscribe(value => vaccin_value = value)

    function updateVaccin(newVaccin) {
        vaccin.set(newVaccin)
    }

    afterUpdate(() => {
        if (div) {
            console.log("Scrolling vaccin to", div.offsetTop)
            window.scrollTo(0, div.offsetTop)
        }
    })
</script>

<div bind:this={div}>
<hr/>
<h3>Votre statut vaccinal</h3>

<button class:selected="{vaccin_value === true}" on:click={() => updateVaccin(true)}>Vaccination complète</button>
<button class:selected="{vaccin_value === false}" on:click={() => updateVaccin(false)}>Vaccination incomplète</button>
</div>


<style>
</style>
