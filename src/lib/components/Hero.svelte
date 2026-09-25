<script lang="ts">
	import heroBg from '$lib/assets/arta-loka-hero.jpg';

	interface Props {
		tagline?: string;
		titleLine1?: string;
		titleLine2?: string;
		titleHighlight?: string;
		description?: string;
		primaryCtaText?: string;
		primaryCtaHref?: string;
		secondaryCtaText?: string;
		secondaryCtaHref?: string;
		onPrimaryClick?: () => void;
		onSecondaryClick?: () => void;
	}

	let {
		tagline = 'STRATEGY DEVELOPMENT & ASSET MANAGEMENT PARTNER',
		titleLine1 = 'Developing Assets.',
		titleLine2 = 'Connecting Opportunities.',
		titleHighlight = 'Creating Sustainable Value.',
		description = 'Kami menghubungkan aset, strategi, teknologi, modal, jaringan, dan pasar untuk membangun proyek serta ekosistem bisnis yang produktif dan berkelanjutan.',
		primaryCtaText = 'EXPLORE OUR BUSINESS',
		primaryCtaHref = '/our-business',
		secondaryCtaText = 'BECOME OUR PARTNER',
		secondaryCtaHref = '/contact',
		onPrimaryClick,
		onSecondaryClick
	}: Props = $props();
</script>

<section class="hero-section" aria-label="Hero Section">
	<!-- Background Image with Cinematic Tint Overlays -->
	<div class="hero-bg-container">
		<img src={heroBg} alt="PT Arta Loka Wisala Industrial and Clean Energy Infrastructure" class="hero-bg-img" />
		<div class="hero-overlay-horizontal"></div>
		<div class="hero-overlay-vertical"></div>
		<div class="hero-overlay-radial"></div>
	</div>

	<!-- Content Container -->
	<div class="hero-container">
		<div class="hero-content">
			<!-- Tagline with gold accent rule -->
			<div class="hero-tagline">
				<span class="tagline-rule" aria-hidden="true"></span>
				<span class="tagline-text">{tagline}</span>
			</div>

			<!-- Main Editorial Headline -->
			<h1 class="hero-headline">
				<span class="headline-white">{titleLine1}</span>
				<span class="headline-white">{titleLine2}</span>
				<span class="headline-gold">{titleHighlight}</span>
			</h1>

			<!-- Subtitle / Description paragraph -->
			<p class="hero-description">
				{description}
			</p>

			<!-- Action Buttons -->
			<div class="hero-actions">
				<a
					href={primaryCtaHref}
					class="btn-primary"
					onclick={(e) => {
						if (onPrimaryClick) {
							e.preventDefault();
							onPrimaryClick();
						}
					}}
				>
					<span>{primaryCtaText}</span>
					<svg
						class="btn-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.3"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>

				<a
					href={secondaryCtaHref}
					class="btn-secondary"
					onclick={(e) => {
						if (onSecondaryClick) {
							e.preventDefault();
							onSecondaryClick();
						}
					}}
				>
					<span>{secondaryCtaText}</span>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		overflow: hidden;
		background-color: #071322;
		color: #ffffff;
		padding-top: clamp(100px, 14vh, 140px);
		padding-bottom: clamp(60px, 10vh, 110px);
	}

	/* Background and cinematic color grading overlays */
	.hero-bg-container {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}

	.hero-bg-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transform: scale(1.02);
	}

	/* Horizontal gradient: dark on left for high contrast reading, fades gently to reveal landscape */
	.hero-overlay-horizontal {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			90deg,
			rgba(7, 19, 34, 0.96) 0%,
			rgba(7, 19, 34, 0.88) 32%,
			rgba(7, 19, 34, 0.65) 58%,
			rgba(7, 19, 34, 0.3) 85%,
			rgba(7, 19, 34, 0.2) 100%
		);
	}

	/* Vertical gradient: blends top into navbar and bottom into page content */
	.hero-overlay-vertical {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(7, 19, 34, 0.82) 0%,
			rgba(7, 19, 34, 0.2) 30%,
			rgba(7, 19, 34, 0.25) 70%,
			rgba(7, 19, 34, 0.94) 100%
		);
	}

	/* Subtle rich cyan-blue ambient tint matching corporate palette */
	.hero-overlay-radial {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at 75% 35%,
			rgba(14, 52, 90, 0.25) 0%,
			rgba(7, 19, 34, 0.5) 100%
		);
		mix-blend-mode: multiply;
	}

	/* Container & Layout */
	.hero-container {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 clamp(24px, 5.5vw, 84px);
	}

	.hero-content {
		max-width: 1020px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	/* Tagline */
	.hero-tagline {
		display: inline-flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 22px;
	}

	.tagline-rule {
		display: inline-block;
		width: 38px;
		height: 2px;
		background-color: var(--color-gold, #d79f39);
		flex-shrink: 0;
	}

	.tagline-text {
		font-family: var(--font-main);
		font-size: clamp(11.5px, 1.1vw, 13.5px);
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-gold, #d79f39);
	}

	/* Editorial Serif Headline */
	.hero-headline {
		font-family: var(--font-main);
		font-size: clamp(2.6rem, 5.4vw, 4.85rem);
		font-weight: 700;
		line-height: 1.14;
		letter-spacing: -0.015em;
		margin: 0 0 24px 0;
		display: flex;
		flex-direction: column;
	}

	.headline-white {
		color: #ffffff;
		text-shadow: 0 2px 14px rgba(0, 0, 0, 0.35);
	}

	.headline-gold {
		color: var(--color-gold, #d79f39);
		text-shadow: 0 2px 16px rgba(215, 159, 57, 0.25);
	}

	/* Paragraph Description */
	.hero-description {
		font-family: var(--font-main);
		font-size: clamp(0.98rem, 1.22vw, 1.15rem);
		line-height: 1.7;
		color: #e2e8f0;
		max-width: 720px;
		margin: 0 0 38px 0;
		font-weight: 400;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
	}

	/* Action Buttons */
	.hero-actions {
		display: flex;
		align-items: center;
		gap: 18px;
		flex-wrap: wrap;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 16px 30px;
		background-color: var(--color-gold, #d79f39);
		color: #0b1523;
		text-decoration: none;
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		border-radius: 2px;
		transition: all 0.25s ease;
		box-shadow: 0 4px 18px rgba(215, 159, 57, 0.3);
		border: 1px solid transparent;
	}

	.btn-primary:hover {
		background-color: var(--color-gold-hover, #e5af4b);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(215, 159, 57, 0.45);
	}

	.btn-primary:hover .btn-icon {
		transform: translateX(4px);
	}

	.btn-icon {
		width: 17px;
		height: 17px;
		transition: transform 0.25s ease;
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 16px 30px;
		background-color: rgba(9, 23, 40, 0.65);
		color: #ffffff;
		text-decoration: none;
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		border-radius: 2px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		transition: all 0.25s ease;
	}

	.btn-secondary:hover {
		background-color: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.6);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-section {
			padding-top: 110px;
			padding-bottom: 60px;
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
			width: 100%;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
		}
	}
</style>
