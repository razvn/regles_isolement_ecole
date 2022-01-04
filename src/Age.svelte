<script>

    import {adulte} from "./stores";

    let adulte_value = null
    adulte.subscribe(value => adulte_value = value)

    function updateAdulte(newAdulte) {
        adulte.set(newAdulte)
    }
</script>

<hr/>
<h3>Votre age</h3>

<button class:selected="{adulte_value === true}" on:click="{() => updateAdulte(true)}">Plus de 12 ans</button>
<button class:selected="{adulte_value === false}" on:click="{() => updateAdulte(false)}">Moins de 12 ans</button>

<style>
</style>
