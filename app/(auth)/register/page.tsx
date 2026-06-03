"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FaApple } from "react-icons/fa6";
import { SiGoogle } from "react-icons/si";

type Step = "email" | "password";

export default function RegisterPage() {
	const [step, setStep] = useState<Step>("email");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!email.trim()) {
			setError("Enter an email to continue.");
			return;
		}

		setError("");
		setStep("password");
	}

	function handlePasswordSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!password || !confirmPassword) {
			setError("Create and confirm your password to continue.");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		setError("");
		// Firebase Auth wiring will replace this submit handler.
	}

	function handleProviderSignIn(provider: "google" | "apple") {
		setError("");
		// Firebase Auth provider sign-in will be connected here.
		console.log(`Continue with ${provider}`);
	}

	return (
		<main className="hero-grid flex flex-1 items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
			<div className="surface-panel w-full max-w-5xl overflow-hidden rounded-4xl">
				<div className="grid lg:grid-cols-[0.95fr_1.05fr]">
					<section className="flex flex-col justify-between gap-8 bg-(--color-primary) px-6 py-8 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
						<div className="space-y-6">
							<Link href="/" className="inline-flex items-center gap-3 text-sm font-medium text-white/90">
								<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-base font-semibold">
									S
								</span>
								Shepherd
							</Link>

							<div className="space-y-4">
								<p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
									Create your account
								</p>
								<h1 className="max-w-md text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
									Start with your email, then set up your password.
								</h1>
								<p className="max-w-md text-base leading-7 text-white/80 sm:text-lg">
									Or use your Google account or Apple ID to get started faster and care for your church flock!
								</p>
							</div>
						</div>

						<div className="grid gap-3 sm:grid-cols-2">
							<button
								type="button"
								onClick={() => handleProviderSignIn("google")}
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
							>
								Start with Google
								<SiGoogle aria-hidden="true" className="ml-2 h-3 w-3 shrink-0" />
							</button>
							<button
								type="button"
								onClick={() => handleProviderSignIn("apple")}
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
							>
								Start with Apple
								<FaApple aria-hidden="true" className="ml-2 h-4 w-4 shrink-0" />
							</button>
						</div>
					</section>

					<section className="flex items-center justify-center bg-(--color-background) px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
						<div className="w-full max-w-md space-y-6 rounded-4xl border border-(--color-border) bg-white p-6 shadow-[0_20px_60px_rgba(55,65,81,0.08)] sm:p-8">
							<div className="space-y-2">
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(55,65,81,0.55)]">
									Step {step === "email" ? "1" : "2"} of 2
								</p>
								<h2 className="text-2xl font-semibold tracking-[-0.03em] text-(--color-text)">
									{step === "email" ? "Enter your email" : "Create your password"}
								</h2>
							</div>

							{error ? (
								<p className="rounded-2xl border border-[rgba(201,123,99,0.2)] bg-[rgba(201,123,99,0.08)] px-4 py-3 text-sm text-[rgba(55,65,81,0.84)]">
									{error}
								</p>
							) : null}

							{step === "email" ? (
								<form className="space-y-4" onSubmit={handleEmailSubmit}>
									<div className="space-y-2">
										<label htmlFor="email" className="text-sm font-medium text-[rgba(55,65,81,0.78)]">
											Email address
										</label>
										<input
											id="email"
											type="email"
											value={email}
											onChange={(event) => setEmail(event.target.value)}
											placeholder="you@example.com"
											className="w-full rounded-2xl border border-(--color-border) bg-(--color-background) px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-[rgba(55,65,81,0.45)] focus:border-(--color-primary)"
										/>
									</div>

									<button
										type="submit"
										className="inline-flex w-full items-center justify-center rounded-full bg-(--color-primary) px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
									>
										Continue
									</button>
								</form>
							) : (
								<form className="space-y-4" onSubmit={handlePasswordSubmit}>
									<div className="space-y-2">
										<label htmlFor="password" className="text-sm font-medium text-[rgba(55,65,81,0.78)]">
											Password
										</label>
										<input
											id="password"
											type="password"
											value={password}
											onChange={(event) => setPassword(event.target.value)}
											placeholder="Create a password"
											className="w-full rounded-2xl border border-(--color-border) bg-(--color-background) px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-[rgba(55,65,81,0.45)] focus:border-(--color-primary)"
										/>
									</div>

									<div className="space-y-2">
										<label htmlFor="confirmPassword" className="text-sm font-medium text-[rgba(55,65,81,0.78)]">
											Verify password
										</label>
										<input
											id="confirmPassword"
											type="password"
											value={confirmPassword}
											onChange={(event) => setConfirmPassword(event.target.value)}
											placeholder="Repeat your password"
											className="w-full rounded-2xl border border-(--color-border) bg-(--color-background) px-4 py-3 text-(--color-text) outline-none transition-colors placeholder:text-[rgba(55,65,81,0.45)] focus:border-(--color-primary)"
										/>
									</div>

									<div className="flex flex-col gap-3 sm:flex-row">
										<button
											type="button"
											onClick={() => {
												setError("");
												setStep("email");
											}}
											className="inline-flex items-center justify-center rounded-full border border-(--color-border) px-5 py-3 text-sm font-semibold text-(--color-text) transition-colors hover:bg-(--color-secondary)"
										>
											Back
										</button>
										<button
											type="submit"
											className="inline-flex items-center justify-center rounded-full bg-(--color-accent) px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
										>
											Create account
										</button>
									</div>
								</form>
							)}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
