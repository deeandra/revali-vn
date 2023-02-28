<script>
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function dispatchNext() {
        dispatch('next', {
            isOption: false
        })
    }

    export let charName = "", dialogue = "";

</script>


{#if dialogue}
<div class="wrapper__textbox" id="outer-div"
    on:click={dispatchNext}>
    {#if charName}
        <p class="char-name">
            {charName}
        </p>
    {/if}
    <img class="textbox" src="/textBox.svg" alt="Text Box for Game Dialogue"/>
    <div class="wrapper__text">
        <p class="dialog-text">
            {@html dialogue}
        </p>
    </div>
    <img class="triangle" src="/triangle.svg" alt="up and down triangle animation"/>
</div>
{/if}



<style>

    .wrapper__textbox {
        width: 47.5%;
        height: 16%;
        min-height: 20px;
        max-width: 47.5%;
        max-height: 16%;
        position: absolute;
        font-family: "Roboto", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        top: 84%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .wrapper__text {
        position: absolute;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 0 15% 0 15%;
    }

    .char-name {
        color: white;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 0px 0px 2px black, 0px 0px 4px black, 0px 0px 6px black;
        margin-left: 10%;
        position: absolute;
        /* transform: translateY(50%); */
        top: -36px;
    }

    .dialog-text {
        color: white;
        font-size: 24px;
        font-weight: bold;
        max-width: 70%;
        max-height: 100%;
        margin: 0;
    }

    img.triangle {
        width: 5%;
        height: auto;
        position: absolute;
        bottom: -17%;
        left: 50%;
        animation: float 3.4s infinite;
    }


    @keyframes float {
    0% {
        transform: translate(-50%, 0px);
    }
    24% {
        transform: translate(-50%, -6.56px);
    }
    40% {
        transform: translate(-50%, 6.28px);
    }
    66% {
        transform: translate(-50%, -2.56px);
    }
    100% {
        transform: translateX(-50%);
    }
    }


</style>