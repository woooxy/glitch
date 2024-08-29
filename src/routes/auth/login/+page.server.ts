import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.supabase.auth.getSession();
	if (session.data.session) {
		redirect(302, '/');
	}
};

export const actions = {
	default: async ({ request, locals }) => {
		const { email, password } = Object.fromEntries(await request.formData());
		try {
			await locals.supabase.auth
				.signInWithPassword({
					email: email.toString(),
					password: password.toString()
				})
				.then((data) => console.log(data));
		} catch (err) {
			console.log(err);
			return {
				error: 'An error has occurred while logging into your account, please try again later.'
			};
		}

		redirect(302, '/');
	}
};
