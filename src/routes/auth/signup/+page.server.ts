import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.supabase.auth.getSession();
	if (session.data.session) {
		redirect(302, '/');
	}
};

export const actions = {
	default: async ({ request, locals }) => {
		const { name, email, password } = Object.fromEntries(await request.formData());
		try {
			await locals.supabase.auth.signUp({
				email: email.toString(),
				password: password.toString(),
				options: {
					data: {
						name: name.toString()
					}
				}
			});
		} catch (err) {
			console.log(err);
			return {
				error: 'An error has occurred while creating your account, please try again later.',
				data: null
			};
		}

		redirect(302, "/")
	}
};
