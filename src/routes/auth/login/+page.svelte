<script lang="ts">
	let password = '';
</script>

<div class="flex h-screen w-screen flex-row justify-between">
	<div class="m-5 w-[50%] rounded-lg border border-white/10">
		<div
			class="h-full rounded-lg"
			style="background: url(https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
		>
			<div
				class="flex h-full w-full flex-col items-center justify-between rounded-lg bg-black/60 backdrop-blur-md"
			>
				<div></div>
				<div>
					<h1 class="mb-5 max-w-[30vw] text-6xl font-semibold">
						Flip over a new page<span class="text-blue-500">.</span>
					</h1>
					<p class="max-w-[30vw] text-lg text-gray-400">
						Create a new account to start creating posts and interacting with out community!
					</p>
				</div>

				<p class="mb-5 w-[55%] text-center text-neutral-500">
					By logging in you agree to our
					<a href="/privacy-policy" class="text-blue-500">Privacy policy</a>
					and
					<a href="/tos" class="text-blue-500">Terms of Service</a>
				</p>
			</div>
		</div>
	</div>

	<div class="flex w-[50%] flex-col items-center justify-center">
		<form method="post" class="flex w-[60%] flex-col gap-5 p-5">
			<div class="flex flex-col gap-1">
				<label for="email">Email</label>
				<input
					name="email"
					type="email"
					placeholder="Account Email (ex: dev@example.com)"
					class="rounded-lg bg-neutral-900 px-5 py-2 text-white focus:border-blue-500 focus:outline-0 focus:ring-2"
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Your Account Password"
					class="rounded-lg bg-neutral-900 px-5 py-2 text-white focus:border-blue-500 focus:outline-0 focus:ring-2"
					bind:value={password}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<button
					type="submit"
					class="rounded-lg px-5 py-2 {password.length > 8
						? 'bg-blue-500'
						: 'cursor-not-allowed bg-gray-500'}"
					disabled={!password}>Submit</button
				>
				<a href="/auth/signup" class="m-0 p-0 text-left text-neutral-400">Or create to an account</a
				>
			</div>
		</form>
	</div>
</div>
