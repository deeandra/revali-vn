import '$lib/supabaseClient'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    const { session, supabaseClient } = await getSupabase(event)

    event.locals.sb = supabaseClient
    event.locals.session = session

    return resolve(event)
}