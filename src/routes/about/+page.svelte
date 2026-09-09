<script lang="ts">
	import strategyMeetingImg from '$lib/assets/strategy-meeting.jpg';
</script>

<svelte:head>
	<title>About Us — PT Arta Loka Wisala</title>
	<meta
		name="description"
		content="PT Arta Loka Wisala bergerak sebagai Strategy Development & Asset Management Partner bagi pemilik aset, perusahaan, investor, pemerintah, BUMN/BUMD, koperasi dan mitra strategis."
	/>
</svelte:head>

<!-- ============================================================
     Hero / Page Header
     ============================================================ -->
<section class="about-hero" aria-label="About Us Hero">
	<div class="about-hero-inner">
		<span class="hero-badge">ABOUT US</span>
		<div class="hero-badge-bar" aria-hidden="true"></div>
		<h1 class="hero-headline">
			More than an asset manager.<br />
			We are a strategic<br />
			development partner.
		</h1>
		<p class="hero-sub">
			PT Arta Loka Wisala bergerak sebagai Strategy Development &amp; Asset Management Partner bagi
			pemilik aset, perusahaan, investor, pemerintah, BUMN/BUMD, koperasi, komunitas dan mitra
			strategis.
		</p>
	</div>
</section>

<!-- ============================================================
     Company Overview — Corporate Positioning
     ============================================================ -->
<section class="overview-section" aria-label="Company Overview">
	<div class="overview-container">
		<!-- Badge & Heading -->
		<div class="overview-intro">
			<span class="overview-badge">COMPANY OVERVIEW</span>
			<div class="overview-badge-bar" aria-hidden="true"></div>
			<h2 class="overview-title">Corporate positioning</h2>
			<p class="overview-lead">
				Perusahaan membantu <strong>mengidentifikasi potensi</strong>, merancang strategi,
				menghubungkan sumber daya serta mengembangkan aset menjadi kegiatan usaha yang produktif dan
				berkelanjutan.
			</p>
		</div>

		<!-- 3-Column Positioning Cards -->
		<div class="positioning-grid">
			<div class="pos-card">
				<h3 class="pos-title">Strategic Development Partner</h3>
				<p class="pos-desc">Menyusun arah dan model pengembangan.</p>
			</div>
			<div class="pos-card">
				<h3 class="pos-title">Asset Management Partner</h3>
				<p class="pos-desc">Mengoptimalkan nilai ekonomi aset.</p>
			</div>
			<div class="pos-card">
				<h3 class="pos-title">Business Integrator</h3>
				<p class="pos-desc">
					Menghubungkan pemilik aset, investor, teknologi, pemerintah dan pasar.
				</p>
			</div>
		</div>

		<!-- Keyword Tags -->
		<div class="keyword-strip" aria-label="Key Focus Areas">
			{#each ['ASSET', 'STRATEGY', 'NETWORK', 'TECHNOLOGY', 'CAPITAL', 'MARKET'] as tag}
				<span class="keyword-tag">{tag}</span>
			{/each}
		</div>
	</div>
</section>

<!-- ============================================================
     Vision & Mission
     ============================================================ -->
<section class="vm-section" aria-label="Vision and Mission">
	<div class="vm-container">
		<div class="vm-grid">
			<div class="vm-card">
				<span class="vm-badge">VISI</span>
				<div class="vm-badge-bar" aria-hidden="true"></div>
				<p class="vm-text">
					Menjadi mitra strategis terpercaya dalam pengembangan aset dan bisnis yang memberikan nilai
					berkelanjutan bagi bangsa dan pemangku kepentingan.
				</p>
			</div>
			<div class="vm-card">
				<span class="vm-badge">MISI</span>
				<div class="vm-badge-bar" aria-hidden="true"></div>
				<ul class="vm-list">
					<li>Mengidentifikasi dan mengoptimalkan potensi aset secara strategis.</li>
					<li>Menghubungkan ekosistem bisnis, modal, dan teknologi secara produktif.</li>
					<li>Membangun kemitraan yang saling menguntungkan dan berkelanjutan.</li>
					<li>Mendorong pertumbuhan ekonomi berbasis aset lokal yang berdaya saing.</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- ============================================================
     Corporate Journey Timeline
     ============================================================ -->
<section class="journey-section" aria-label="Corporate Journey">
	<div class="journey-container">
		<div class="journey-intro">
			<span class="journey-badge">CORPORATE JOURNEY</span>
			<div class="journey-badge-bar" aria-hidden="true"></div>
			<h2 class="journey-title">2020 — 2026</h2>
			<p class="journey-lead">
				Perjalanan membangun platform pengembangan aset yang terintegrasi dan berkelanjutan.
			</p>
		</div>

		<div class="timeline">
			{#each [
				{ year: '2020', label: 'Pendirian', desc: 'PT Arta Loka Wisala didirikan dengan fokus pada konsultansi strategis aset dan pengembangan bisnis.' },
				{ year: '2021', label: 'Ekspansi Portofolio', desc: 'Memperluas layanan ke sektor energi, maritim, dan infrastruktur dengan mitra strategis pertama.' },
				{ year: '2022', label: 'Kemitraan BUMN', desc: 'Membangun kolaborasi resmi dengan entitas BUMN dan pemerintah daerah untuk kawasan industri.' },
				{ year: '2023', label: 'Platform Terintegrasi', desc: 'Mengembangkan platform manajemen aset yang menghubungkan investor, teknologi, dan pasar.' },
				{ year: '2024', label: 'ESG Integration', desc: 'Mengintegrasikan prinsip ESG dalam seluruh lini pengembangan dan pengelolaan aset.' },
				{ year: '2025', label: 'Pertumbuhan Regional', desc: 'Ekspansi ke 5 kawasan strategis Indonesia dengan model pengembangan multisektoral.' },
				{ year: '2026', label: 'Target Nasional', desc: 'Menjadi platform pengembangan aset terkemuka dengan dampak ekonomi terukur skala nasional.' }
			] as milestone, i}
				<div class="timeline-item" class:last={i === 6}>
					<div class="timeline-dot">
						<span class="dot-year">{milestone.year}</span>
					</div>
					<div class="timeline-content">
						<h3 class="milestone-label">{milestone.label}</h3>
						<p class="milestone-desc">{milestone.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ===========================================================
	   Shared Utilities
	   =========================================================== */
	.about-hero,
	.overview-section,
	.vm-section,
	.journey-section{
		width: 100%;
	}

	/* ===========================================================
	   Hero / Page Header (Dark Navy)
	   =========================================================== */
	.about-hero {
		background: linear-gradient(160deg, #071b38 0%, #0d2a4d 60%, #0a1e36 100%);
		color: #ffffff;
		padding: clamp(120px, 14vw, 180px) 0 clamp(80px, 10vw, 120px) 0;
		position: relative;
		overflow: hidden;
	}

	.about-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at 70% 50%, rgba(215, 159, 57, 0.07) 0%, transparent 65%);
		pointer-events: none;
	}

	.about-hero-inner {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.hero-badge {
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-gold, #d79f39);
		display: block;
		margin-bottom: 10px;
	}

	.hero-badge-bar {
		width: 44px;
		height: 3px;
		background-color: var(--color-gold, #d79f39);
		border-radius: 1px;
		margin-bottom: 32px;
	}

	.hero-headline {
		font-family: var(--font-main);
		font-size: clamp(2.4rem, 4.5vw, 4.2rem);
		font-weight: 800;
		line-height: 1.15;
		letter-spacing: -0.03em;
		color: #ffffff;
		margin: 0 0 28px 0;
		max-width: 880px;
	}

	.hero-sub {
		font-family: var(--font-main);
		font-size: clamp(0.97rem, 1.15vw, 1.1rem);
		line-height: 1.78;
		color: #9ab2cb;
		max-width: 560px;
		margin: 0;
	}

	/* ===========================================================
	   Company Overview (White)
	   =========================================================== */
	.overview-section {
		background-color: #ffffff;
		padding: clamp(72px, 9vw, 110px) 0 clamp(60px, 8vw, 96px) 0;
		border-top: 1px solid rgba(0, 0, 0, 0.05);
	}

	.overview-container {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.overview-badge,
	.vm-badge,
	.journey-badge,
	.team-badge {
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-gold, #d79f39);
		display: block;
		margin-bottom: 10px;
	}

	.overview-badge-bar,
	.vm-badge-bar,
	.journey-badge-bar,
	.team-badge-bar {
		width: 44px;
		height: 3px;
		background-color: var(--color-gold, #d79f39);
		border-radius: 1px;
		margin-bottom: 28px;
	}

	.overview-intro {
		margin-bottom: 52px;
	}

	.overview-title {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 3.2vw, 3rem);
		font-weight: 700;
		color: #0d1e34;
		margin: 0 0 22px 0;
		letter-spacing: -0.02em;
		line-height: 1.2;
	}

	.overview-lead {
		font-family: var(--font-main);
		font-size: clamp(0.97rem, 1.1vw, 1.08rem);
		line-height: 1.76;
		color: #0d1e34;
		max-width: 640px;
		margin: 0;
	}

	.overview-lead strong {
		font-weight: 700;
	}

	/* 3-Column Grid */
	.positioning-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border: 1px solid #e2e7ee;
		margin-bottom: 40px;
	}

	.pos-card {
		padding: 36px 32px 40px 32px;
		border-right: 1px solid #e2e7ee;
	}

	.pos-card:last-child {
		border-right: none;
	}

	.pos-title {
		font-family: var(--font-main);
		font-size: 1.08rem;
		font-weight: 800;
		color: #0d1e34;
		margin: 0 0 14px 0;
		line-height: 1.3;
		letter-spacing: -0.01em;
	}

	.pos-desc {
		font-family: var(--font-main);
		font-size: 0.93rem;
		line-height: 1.65;
		color: #0d1e34;
		margin: 0;
	}

	/* Keyword Tags */
	.keyword-strip {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 12px;
	}

	.keyword-tag {
		display: inline-block;
		font-family: var(--font-main);
		font-size: 11.5px;
		font-weight: 800;
		letter-spacing: 0.12em;
		color: #3c5268;
		border: 1px solid #cdd5df;
		border-radius: 2px;
		padding: 7px 14px;
		text-transform: uppercase;
		transition: all 0.2s ease;
	}

	.keyword-tag:hover {
		border-color: var(--color-gold, #d79f39);
		color: var(--color-gold, #d79f39);
	}

	/* ===========================================================
	   Vision & Mission (Light Gray)
	   =========================================================== */
	.vm-section {
		background-color: #06182c;
		padding: clamp(72px, 9vw, 110px) 0;
		border-top: 1px solid #e2e7ee;
	}

	.vm-container {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.vm-grid {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: clamp(36px, 5vw, 64px);
		align-items: flex-start;
	}

	.vm-card {
		display: flex;
		flex-direction: column;
	}

	.vm-text {
		font-family: var(--font-serif);
		font-size: clamp(1.15rem, 1.4vw, 1.4rem);
		line-height: 1.65;
		color: #f3f5f8;
		margin: 0;
		font-style: italic;
	}

	.vm-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.vm-list li {
		font-family: var(--font-main);
		font-size: 0.97rem;
		line-height: 1.7;
		color: #f3f5f8;
		padding-left: 20px;
		position: relative;
	}

	.vm-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 10px;
		width: 6px;
		height: 2px;
		background-color: var(--color-gold, #d79f39);
	}

	/* ===========================================================
	   Corporate Journey Timeline (Dark Navy)
	   =========================================================== */
	.journey-section {
		background: #ffffff;
		padding: clamp(72px, 9vw, 110px) 0;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.journey-container {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.journey-intro {
		margin-bottom: 56px;
	}

	.journey-title {
		font-family: var(--font-main);
		font-size: clamp(2rem, 3vw, 2.8rem);
		font-weight: 800;
		color: #0d1e34;
		margin: 0 0 14px 0;
		letter-spacing: -0.02em;
	}

	.journey-lead {
		font-family: var(--font-main);
		font-size: 1rem;
		line-height: 1.7;
		color: #516277;
		max-width: 500px;
		margin: 0;
	}

	/* Horizontal Timeline */
	.timeline {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0;
		border: 1px solid rgba(215, 159, 57, 0.35);
	}

	.timeline-item {
		padding: 28px 22px 32px 22px;
		border-right: 1px solid rgba(215, 159, 57, 0.35);
		display: flex;
		flex-direction: column;
		gap: 16px;
		transition: background-color 0.25s ease;
	}

	.timeline-item:hover {
		background-color: rgba(255, 255, 255, 0.04);
	}

	.timeline-item.last {
		border-right: none;
	}

	.timeline-dot {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.dot-year {
		font-family: var(--font-main);
		font-size: 13px;
		font-weight: 900;
		letter-spacing: 0.08em;
		color: var(--color-gold, #d79f39);
	}

	.milestone-label {
		font-family: var(--font-main);
		font-size: 0.96rem;
		font-weight: 900;
		color: #516277;
		margin: 0 0 8px 0;
		line-height: 1.3;
	}

	.milestone-desc {
		font-family: var(--font-main);
		font-size: 0.83rem;
		line-height: 1.62;
		color: #0d1e34;
		margin: 0;
	}

	/* ===========================================================
	   Responsive Breakpoints
	   =========================================================== */
	@media (max-width: 1080px) {
		.positioning-grid {
			grid-template-columns: 1fr;
		}

		.pos-card {
			border-right: none;
			border-bottom: 1px solid #e2e7ee;
		}

		.pos-card:last-child {
			border-bottom: none;
		}

		.timeline {
			grid-template-columns: repeat(4, 1fr);
		}

		.timeline-item:nth-child(4) {
			border-right: none;
		}

		.timeline-item:nth-child(n + 5) {
			border-top: 1px solid rgba(255, 255, 255, 0.1);
		}

		.timeline-item.last {
			border-right: 1px solid rgba(255, 255, 255, 0.1);
		}
	}

	@media (max-width: 900px) {
		.vm-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.team-container {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.timeline {
			grid-template-columns: repeat(2, 1fr);
		}

		.timeline-item:nth-child(2n) {
			border-right: none;
		}

		.timeline-item:nth-child(n + 3) {
			border-top: 1px solid rgba(255, 255, 255, 0.1);
		}

		.timeline-item.last {
			border-right: none;
		}
	}

	@media (max-width: 640px) {
		.timeline {
			grid-template-columns: 1fr;
		}

		.timeline-item {
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}

		.timeline-item.last {
			border-bottom: none;
			border-right: none;
		}
	}
</style>
