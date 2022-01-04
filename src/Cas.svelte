<script>

    import {positif} from "./stores";

    let positif_value = null
    positif.subscribe(value => positif_value = value)

    function updateStatus(newStatus) {
        positif.set(newStatus)
    }
</script>

<hr>
<h3>Statut COVID</h3>

<button class:selected="{positif_value === true}" class="red" on:click={() => updateStatus(true)}>POSITIF</button>
<button class:selected="{positif_value === false}" class="orange" on:click={() => updateStatus(false)}>CAS CONTACT</button>

<style>
</style>
