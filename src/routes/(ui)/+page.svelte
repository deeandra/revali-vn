<script>
    export let data;

</script>

<div class="min-h-full bg-white flex items-center justify-center">
    <div class="hero-content text-center text-neutral flex-col justify-center pt-16">
        <img src="/revali_pfp.jpg" alt="" class="rounded-full max-w-[30%] pb-3">
        <div class="max-w-md px-10">
            <h1 class="mb-5 text-4xl md:text-5xl font-bold">Welcome to Revali's Domain</h1>
            <p class="mb-5 text-xl">A virtual shrine dedicated to my dear snoodledorp baby Revali &lt;3</p>
            <a href="/stories">
                <button class="btn btn-primary m-2">Explore Revali's Shrine</button>
            </a>
            {#if !data.session}
                <a href="/signup">
                    <button class="btn btn-secondary m-2">Join The Fan Club</button>
                </a>
            {/if}
        </div>
    </div>
</div>
