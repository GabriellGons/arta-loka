<script lang="ts">
	import { Hero } from '$lib';
</script>

<svelte:head>
	<title>PT Arta Loka Wisala — Strategy Development & Asset Management Partner</title>
	<meta
		name="description"
		content="PT Arta Loka Wisala menghubungkan aset, strategi, teknologi, modal, jaringan, dan pasar untuk membangun proyek serta ekosistem bisnis yang produktif dan berkelanjutan."
	/>
</svelte:head>

<!-- Hero Section with arta-loka-hero.jpg -->
<Hero />

<!-- Subsequent Sections corresponding to Navbar Links -->
<section id="about-us" class="section-container">
	<div class="section-content">
		<div class="section-header">
			<span class="section-badge">ABOUT US</span>
			<h2 class="section-title">Committed to Visionary Excellence</h2>
			<div class="section-divider"></div>
		</div>
		<p class="section-desc">
			PT Arta Loka Wisala adalah mitra strategis dalam pengembangan aset dan investasi terintegrasi di Indonesia. Berakar pada keunggulan operasional, kepatuhan hukum yang solid, dan prinsip keberlanjutan (ESG), kami berdedikasi menciptakan nilai jangka panjang bagi para pemegang saham, mitra industri, dan masyarakat.
		</p>
	</div>
</section>

<section id="our-business" class="section-container section-darker">
	<div class="section-content">
		<div class="section-header">
			<span class="section-badge">OUR BUSINESS</span>
			<h2 class="section-title">Strategic Pillars & Capabilities</h2>
			<div class="section-divider"></div>
		</div>
		<div class="grid-cards">
			<div class="card">
				<div class="card-icon">⚡</div>
				<h3 class="card-title">Clean Energy & Utilities</h3>
				<p class="card-text">
					Pengembangan fasilitas tenaga surya, infrastruktur energi terbarukan, dan efisiensi utilitas industri.
				</p>
			</div>
			<div class="card">
				<div class="card-icon">⚓</div>
				<h3 class="card-title">Port & Logistics Asset</h3>
				<p class="card-text">
					Pengelolaan pelabuhan strategis, pergudangan modern, dan rantai pasok maritim terintegrasi.
				</p>
			</div>
			<div class="card">
				<div class="card-icon">🏢</div>
				<h3 class="card-title">Industrial Infrastructure</h3>
				<p class="card-text">
					Kawasan industri terpadu dengan konektivitas prima, fasilitas berstandar internasional, dan ekosistem hijau.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.section-container {
		padding: 100px 24px;
		background-color: #071322;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.section-darker {
		background-color: #050d18;
	}

	.section-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 48px;
	}

	.section-badge {
		display: inline-block;
		font-family: var(--font-main);
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.14em;
		color: var(--color-gold, #d79f39);
		margin-bottom: 12px;
		text-transform: uppercase;
	}

	.section-title {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 3.5vw, 2.8rem);
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 18px;
	}

	.section-divider {
		width: 50px;
		height: 3px;
		background-color: var(--color-gold, #d79f39);
		margin: 0 auto;
	}

	.section-desc {
		font-family: var(--font-main);
		font-size: 1.12rem;
		line-height: 1.8;
		color: #94a3b8;
		max-width: 820px;
		margin: 0 auto;
		text-align: center;
	}

	.grid-cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 28px;
		margin-top: 40px;
	}

	.card {
		background: rgba(14, 28, 46, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 4px;
		padding: 36px 28px;
		transition: all 0.3s ease;
	}

	.card:hover {
		border-color: rgba(215, 159, 57, 0.4);
		transform: translateY(-4px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
	}

	.card-icon {
		font-size: 2.2rem;
		margin-bottom: 18px;
	}

	.card-title {
		font-family: var(--font-main);
		font-size: 1.25rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 12px;
	}

	.card-text {
		font-family: var(--font-main);
		font-size: 0.95rem;
		line-height: 1.65;
		color: #94a3b8;
	}
</style>
