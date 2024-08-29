<script>
	export let data;
	$: ({ user } = data);
</script>

<h1>Welcome to Supabase!</h1>
{#if user}
	<p class="text-white">{user.email}</p>
{/if}
