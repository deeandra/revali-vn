import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        /* eslint-disable no-unused-vars */
        const { data, error:err } = await locals.sb.auth.signUp({
            email: body.email,
            password: body.password,
            options: {
                data: {
                    username: body.username,
                }
            }
        })

        

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid email or password'
                })
            }
            return fail(500, {
                error: 'Server error. Please try again later.'
            })
        }
        // alert('Check yout email for the login link!')
        throw redirect(303, "/")
    }
};