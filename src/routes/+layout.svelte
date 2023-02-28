<script>
    import { supabaseClient } from '$lib/supabaseClient'
    import { invalidateAll } from '$app/navigation'
    import { onMount } from 'svelte'

    onMount(() => {
        const {
            data: { subscription },
        } = supabaseClient.auth.onAuthStateChange(() => {
            invalidateAll()
        })

        return () => {
            subscription.unsubscribe()
        }
    })
</script>

<slot/>