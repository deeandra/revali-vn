<script>
    export let charImg = "";
    let width;
</script>

{#if charImg}
<div class="wrapper__char-img">
    <img src={charImg} alt="character who's currently talking"/>
</div>
{/if}

<style>
    .wrapper__char-img {
        background: rgba(0, 0, 0, 0.5);
        height: 20%;
        width: 11.25%;
        border-radius:100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        bottom: 16%;
        left: 13%;
        outline: 2px solid rgba(255, 255, 255, 0.2);
        outline-offset: -4px;
        /* transform: translate(-50%, -50%); */
        /* outline: 2px solid #e2ded3; */
        /* border: 2px solid #e2ded377; */
        /* box-shadow: ; */
    }

    img {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        /* animation: glow 10s infinite; */
        
    }

    /* @keyframes glow {
        0% {
            -webkit-filter: drop-shadow(0px 0px 5px #838383);
            filter: drop-shadow(0px 0px 5px #7a7a7a);
        }
        24% {
            -webkit-filter: drop-shadow(0px 0px 9px #838383);
            filter: drop-shadow(0px 0px 9px #7a7a7a);
        }
        40% {
            -webkit-filter: drop-shadow(0px 0px 20px #838383);
            filter: drop-shadow(0px 0px 20px #7a7a7a);
        }
        66% {
            -webkit-filter: drop-shadow(0px 0px 10px #838383);
            filter: drop-shadow(0px 0px 10px #7a7a7a);
        }
        100% {
            -webkit-filter: drop-shadow(0px 0px 5px #838383);
            filter: drop-shadow(0px 0px 5px #7a7a7a);
        }
    } */

</style>