<script>
    export let options = [];

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function dispatchNext(nextId) {
        dispatch('next', {
            isOption: true,
            nextId: nextId
        })
    }

    let refHeight, fontSize;

    let windowHeight, windowWidth;
    let aspectRatio = 16/9;

    $: if(windowWidth >= aspectRatio*windowHeight){
        refHeight = 0.9*windowHeight*0.16;
    }else{
        refHeight = (1/aspectRatio)*0.9*windowWidth*0.16;
    }

    $: fontSize = refHeight/5.2;

</script>


{#if (options.length != 0)}
<div class="wrapper__options">
    {#each options as option (option.id)}
        <div class="option" 
        style:font-size="{fontSize}px"
        on:click={dispatchNext(option.nextId)}>
            {option.text}
        </div>
    {/each}
</div>
{/if}


<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}/>

<style>
    .wrapper__options {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        bottom: 16%;
        left: 35%;
        
    }

    .option {
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 300px;
        height: 6.4%;
        width: 18%;
        max-width: 18%;
        position: relative;
        font-family: "Roboto", sans-serif;
        /* font-weight: 600; */
        font-size: 14px;
        color: white;
        margin: 0.7% 0 0 0;
        padding: 0 2% 0 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        transform: translateY(50%);
        border: 0.1px solid rgb(255, 255, 255);
        outline: 2px outset rgba(0, 0, 0, 0.5);
        outline-offset: 0px;
        box-shadow: inset 0 0 4px 0 #ffffff,
              0 0 4px 0 #ffffff;
    }


</style>
