<script lang="ts">
	// Hero page preview
</script>

<svelte:head>
	<meta name="description" content="PT Arta Loka Wisala - Official Corporate Portal" />
</svelte:head>

<section class="hero">
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<span class="hero-tag">WELCOME TO PT ARTA LOKA WISALA</span>
		<h1 class="hero-title">Building Excellence, Creating Value</h1>
		<p class="hero-desc">
			Leading integrated property development, infrastructure, and sustainable investments in Indonesia.
		</p>
		<div class="hero-actions">
			<a href="#about-us" class="btn-primary">Explore Our Business</a>
			<a href="#partner" class="btn-secondary">Partner With Us</a>
		</div>
	</div>
</section>

<section id="about-us" class="content-section">
	<div class="section-container">
		<div class="section-header">
			<span class="section-badge">ABOUT US</span>
			<h2>Committed to Visionary Excellence</h2>
			<div class="divider"></div>
		</div>
		<p class="section-text">
			PT Arta Loka Wisala is a forward-thinking enterprise committed to elevating business standards across property, commerce, and strategic investment. With an unyielding focus on integrity, quality, and sustainable growth, we foster partnerships that shape the future.
		</p>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 85vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: radial-gradient(circle at 50% 30%, #1e3a5f 0%, #0d1e33 45%, #08101c 100%);
		background-size: cover;
		background-position: center;
		padding: 60px 24px;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background: 
			radial-gradient(ellipse 80% 50% at 50% -20%, rgba(215, 159, 57, 0.15), transparent),
			radial-gradient(circle at 20% 80%, rgba(30, 58, 95, 0.4), transparent 50%);
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 860px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.hero-tag {
		display: inline-block;
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.16em;
		color: #d79f39;
		background: rgba(215, 159, 57, 0.12);
		border: 1px solid rgba(215, 159, 57, 0.35);
		padding: 6px 16px;
		border-radius: 999px;
	}

	.hero-title {
		font-size: clamp(2.4rem, 5vw, 4.2rem);
		font-weight: 800;
		line-height: 1.15;
		color: #ffffff;
		letter-spacing: -0.02em;
	}

	.hero-desc {
		font-size: clamp(1rem, 2vw, 1.25rem);
		line-height: 1.6;
		color: #94a3b8;
		max-width: 680px;
	}

	.hero-actions {
		display: flex;
		gap: 16px;
		margin-top: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.btn-primary {
		background-color: #d79f39;
		color: #0b1320;
		font-weight: 800;
		font-size: 13px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 14px 28px;
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.25s ease;
	}

	.btn-primary:hover {
		background-color: #e5af4b;
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(215, 159, 57, 0.3);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.05);
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.2);
		font-weight: 700;
		font-size: 13px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 14px 28px;
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.25s ease;
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.4);
		transform: translateY(-2px);
	}

	.content-section {
		padding: 100px 24px;
		background: #09111c;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.section-container {
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	.section-badge {
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.14em;
		color: #d79f39;
		margin-bottom: 8px;
		display: inline-block;
	}

	.section-header h2 {
		font-size: 2.2rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 16px;
	}

	.divider {
		width: 50px;
		height: 3px;
		background: #d79f39;
		margin: 0 auto 24px;
	}

	.section-text {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #94a3b8;
	}
</style>
