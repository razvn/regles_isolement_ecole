<script>

    import {adulte, vaccin} from "./stores";
    import {afterUpdate} from "svelte";

    let div
    let adulte_value = null
    adulte.subscribe(value => {
        adulte_value = value
        vaccin.set(null)
    })

    function updateAdulte(newAdulte) {
        adulte.set(newAdulte)
    }

    afterUpdate(() => {
        if (div) {
            console.log("Scrolling age to", div.offsetTop)
            window.scrollTo(0, div.offsetTop)
        }
    })
</script>

<div bind:this={div}>
<hr/>
<h3>Votre age</h3>

<button class:selected="{adulte_value === true}" on:click="{() => updateAdulte(true)}">Plus de 12 ans</button>
<button class:selected="{adulte_value === false}" on:click="{() => updateAdulte(false)}">Moins de 12 ans</button>
</div>
<style>
</style>
