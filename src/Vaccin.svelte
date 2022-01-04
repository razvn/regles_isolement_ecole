<script>

    import {vaccin} from "./stores";

    let vaccin_value = null
    vaccin.subscribe(value => vaccin_value = value)

    function updateVaccin(newVaccin) {
        vaccin.set(newVaccin)
    }
</script>

<hr/>
<h3>Votre statut vaccinal</h3>

<button class:selected="{vaccin_value === true}" on:click={() => updateVaccin(true)}>Vaccination complète</button>
<button class:selected="{vaccin_value === false}" on:click={() => updateVaccin(false)}>Vaccination incomplète</button>

<style>
</style>
