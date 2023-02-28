export async function load({ params, locals }) {
     /* eslint-disable no-unused-vars */
    const { data } = await locals.sb.from('users').select('plays').eq('id', locals.session.user.id).limit(1).single();

    let { plays } = data
    let play = plays.find((play) => play.storyId===params.storyId)

    if (!play) {
        play = {
            storyId: params.storyId,
            lastChp: 1,
            lastNode: 0,
            states: {}
        }

        plays.push(play)

        const { error:err } = await locals.sb.from('users').update({plays}).eq('id', locals.session.user.id)
    }
}