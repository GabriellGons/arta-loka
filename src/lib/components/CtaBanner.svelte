<script lang="ts">
	interface Props {
		badge?: string;
		title?: string;
		description?: string;
		primaryText?: string;
		primaryHref?: string;
		onPrimaryClick?: () => void;
		onSecondaryClick?: () => void;
	}

	let {
		badge = 'STRATEGIC PARTNERSHIP',
		title = 'Have an asset, project or\nbusiness opportunity?',
		description = "Let's develop its value together. Diskusikan potensi aset Anda dengan tim pengembangan kami.",
		primaryText = 'BECOME OUR PARTNER',
		primaryHref = '/contact',
		onPrimaryClick,
		onSecondaryClick
	}: Props = $props();
</script>

<section class="cta-banner" aria-label="Strategic Partnership CTA">
	<!-- Ambient Background Glow & Subtle Grid Line -->
	<div class="cta-ambient-glow" aria-hidden="true"></div>
	<div class="cta-center-divider" aria-hidden="true"></div>

	<div class="cta-container">
		<!-- Left Side: Copywriting -->
		<div class="cta-content">
			<span class="cta-badge">{badge}</span>

			<h2 class="cta-title">
				{#if title.includes('\n')}
					{#each title.split('\n') as line, idx}
						{#if idx > 0}<br class="desktop-br" />{/if}{line}
					{/each}
				{:else}
					{title}
				{/if}
			</h2>

			<p class="cta-description">
				{description}
			</p>
		</div>

		<!-- Right Side: Action Buttons -->
		<div class="cta-actions">
			<a
				href={primaryHref}
				class="btn-gold"
				onclick={(e) => {
					if (onPrimaryClick) {
						e.preventDefault();
						onPrimaryClick();
					}
				}}
			>
				{primaryText}
			</a>
		</div>
	</div>
</section>

<style>
	.cta-banner {
		position: relative;
		width: 100%;
		background-color: #0c233c;
		background-image: 
			radial-gradient(circle at 75% 50%, rgba(28, 70, 112, 0.45) 0%, transparent 60%),
			linear-gradient(180deg, rgba(8, 20, 36, 0.6) 0%, rgba(12, 35, 60, 0.95) 50%, rgba(8, 20, 36, 0.6) 100%);
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		padding: clamp(60px, 7vw, 90px) clamp(24px, 5.5vw, 84px);
		overflow: hidden;
	}

	/* Subtle decorative vertical divider in middle background */
	.cta-center-divider {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		width: 1px;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.05) 30%,
			rgba(255, 255, 255, 0.05) 70%,
			rgba(255, 255, 255, 0) 100%
		);
		pointer-events: none;
	}

	.cta-ambient-glow {
		position: absolute;
		top: -30%;
		right: 15%;
		width: 450px;
		height: 350px;
		background: radial-gradient(circle, rgba(215, 159, 57, 0.08) 0%, transparent 70%);
		pointer-events: none;
	}

	.cta-container {
		position: relative;
		z-index: 2;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
	}

	/* Content Area */
	.cta-content {
		max-width: 640px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.cta-badge {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 11.5px;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-gold, #d79f39);
		margin-bottom: 16px;
		display: inline-block;
	}

	.cta-title {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: clamp(1.9rem, 3vw, 2.75rem);
		font-weight: 800;
		line-height: 1.18;
		letter-spacing: -0.015em;
		color: #ffffff;
		margin: 0 0 16px 0;
	}

	.cta-description {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: clamp(0.95rem, 1.1vw, 1.05rem);
		line-height: 1.65;
		color: #94a3b8;
		max-width: 520px;
		margin: 0;
		font-weight: 400;
	}

	/* Action Buttons Area */
	.cta-actions {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-shrink: 0;
	}

	.btn-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 16px 32px;
		background-color: var(--color-gold, #d79f39);
		color: #0d1e33;
		text-decoration: none;
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		white-space: nowrap;
		border-radius: 2px;
		transition: all 0.25s ease;
		box-shadow: 0 8px 24px rgba(215, 159, 57, 0.32);
		border: 1px solid transparent;
	}

	.btn-gold:hover {
		background-color: var(--color-gold-hover, #e5af4b);
		transform: translateY(-2px);
		box-shadow: 0 12px 28px rgba(215, 159, 57, 0.48);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 16px 32px;
		background-color: transparent;
		color: #ffffff;
		text-decoration: none;
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 12.5px;
		font-weight: 700;
		letter-spacing: 0.07em;
		text-transform: uppercase;
		white-space: nowrap;
		border-radius: 2px;
		border: 1px solid rgba(255, 255, 255, 0.24);
		transition: all 0.25s ease;
	}

	.btn-outline:hover {
		background-color: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.65);
		transform: translateY(-2px);
	}

	/* Responsive Breakpoint */
	@media (max-width: 960px) {
		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 32px;
		}

		.cta-actions {
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
		}

		.cta-center-divider {
			display: none;
		}
	}

	@media (max-width: 580px) {
		.cta-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-gold,
		.btn-outline {
			width: 100%;
		}
	}
</style>
