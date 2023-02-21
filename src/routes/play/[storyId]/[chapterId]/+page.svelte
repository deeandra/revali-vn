<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import DialogueBoxBotw from "$lib/components/DialogueBoxBotw.svelte";
	import CharacterImgBox from "$lib/components/CharacterImgBox.svelte";
	import OptionsBotw from "$lib/components/OptionsBotw.svelte";

    let windowHeight, windowWidth, height, width;
    let aspectRatio = 16/9;

    $: if(windowWidth >= aspectRatio*windowHeight){
        width = aspectRatio*0.9*windowHeight + "px";
        height = 0.9*windowHeight + "px";
    }else{
        width = 0.9*windowWidth + "px";
        height = (1/aspectRatio)*0.9*windowWidth + "px";
    }

    let chapter = {
        title: "Revali's Flap",
        nodes: [
            {
                id: 1,
                dialogue: "This is a story about a bird.",
                charName: "",
                charImg: "",
                options: [],
                nextId: 2
            },
            {
                id: 2,
                dialogue: `Greetings! I'm <span style="color: #3de2c8;">The Rito Champion</span>, Revali.`,
                charName: "Revali",
                charImg: "/revali_smiling.png",
                options: [],
                nextId: 3
            },
            {
                id: 3,
                dialogue: "Can I help you with anything?",
                charName: "Revali",
                charImg: "/revali_smiling.png",
                options: [
                    {
                        id: 1,
                        text: "yes",
                        nextId: 4
                    },
                    {
                        id: 2,
                        text: "no",
                        nextId: 5
                    },
                    {
                        id: 3,
                        text: "maybe",
                        nextId: 6
                    },
                ]
            },
            {
                id: 4,
                dialogue: "You chose 'yes'.",
                charName: "",
                charImg: "",
                options: [],
                nextId: 1
            },
            {
                id: 5,
                dialogue: "You chose 'no'.",
                charName: "",
                charImg: "",
                options: [],
                nextId: 1
            },
            {
                id: 6,
                dialogue: "You chose 'maybe'.",
                charName: "",
                charImg: "",
                options: [],
                nextId: 1
            }
        ]
    }



    let dialogue = "", charName = "", charImg = "", options = [];

    let currentId = 1;
    let currentNode = chapter.nodes.find((node) => node.id == currentId);
    
    $: {
        dialogue = currentNode.dialogue;
        charName = currentNode.charName;
        charImg = currentNode.charImg;
        options = currentNode.options;
    }
    

    function handleNext(event) {
        if(event.detail.isOption) {
            currentNode = chapter.nodes.find((node) => node.id == event.detail.nextId);
        } else {
            if(currentNode.options.length == 0 || !currentNode.options) {
                currentNode = chapter.nodes.find((node) => node.id == currentNode.nextId);
            }
        }
    }


</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth}/>

<div id="game-border">
    <div id="game-container"
        style:width
        style:height
    >

        <CharacterImgBox {charImg} />

        <DialogueBoxBotw on:next={handleNext} {charName} {dialogue}/>

        <OptionsBotw on:next={handleNext} {options}/>

    </div>
</div>


<style>

* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#game-border {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100%;
    background-color: white;
}

#game-container {
    cursor: pointer;
    border-radius: 40px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 12, 82, 0.2), 0 6px 20px 0 rgba(0, 12, 80, 0.19);
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://i.redd.it/maba2cp1tro61.jpg");

}


</style>
