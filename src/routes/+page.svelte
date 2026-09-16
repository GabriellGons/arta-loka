<script lang="ts">
	import { Hero } from '$lib';
	import strategyMeetingImg from '$lib/assets/strategy-meeting.jpg';

	let hoveredPillarIndex = $state<number | null>(null);

	const pillars = [
		{
			number: '01',
			title: 'Asset',
			description: 'Identifikasi potensi dan optimalisasi nilai aset secara terukur.'
		},
		{
			number: '02',
			title: 'Strategy',
			description: 'Penyusunan peta jalan strategis berdaya saing tinggi.'
		},
		{
			number: '03',
			title: 'Partnership',
			description: 'Kolaborasi sinergis antar pemangku kepentingan dan mitra industri.'
		},
		{
			number: '04',
			title: 'Development',
			description: 'Transformasi aset menjadi pusat pertumbuhan ekonomi produktif.'
		},
		{
			number: '05',
			title: 'Sustainable Value',
			description: 'Menjaga nilai ekonomi dan keberlanjutan jangka panjang.'
		}
	];

	const businessSectors = [
		{
			number: '01',
			title: 'Strategy Development',
			desc: 'Menyusun arah, model bisnis, dan roadmap pengembangan yang terukur.',
			icon: 'strategy'
		},
		{
			number: '02',
			title: 'Asset Management',
			desc: 'Mengoptimalkan aset fisik, bisnis, sumber daya, dan akses pasar.',
			icon: 'asset'
		},
		{
			number: '03',
			title: 'Energy & Sustainability',
			desc: 'PLTS, BESS, efisiensi energi, dan sistem energi berkelanjutan.',
			icon: 'energy'
		},
		{
			number: '04',
			title: 'Digital & Security',
			desc: 'Infrastruktur digital, AI surveillance, IoT, dan command center.',
			icon: 'digital'
		},
		{
			number: '05',
			title: 'Maritime Development',
			desc: 'Ekosistem pesisir, cold chain, logistik, dan elektrifikasi pulau.',
			icon: 'maritime'
		},
		{
			number: '06',
			title: 'Agriculture & Food',
			desc: 'Supply chain, pengolahan, distribusi, dan perluasan pasar pangan.',
			icon: 'agriculture'
		},
		{
			number: '07',
			title: 'Industry & Environment',
			desc: 'Optimalisasi industri, pengolahan air, limbah, dan utilitas.',
			icon: 'industry'
		},
		{
			number: '08',
			title: 'Property & Regional',
			desc: 'Masterplan, investasi, operasi, dan aktivasi pasar kawasan.',
			icon: 'property'
		}
	];

	const developmentCycles = [
		{
			number: '01',
			title: 'Identify',
			desc: 'Mengenali potensi, karakter dan persoalan pada aset atau peluang yang ada.'
		},
		{
			number: '02',
			title: 'Analyze',
			desc: 'Menganalisis kelayakan, risiko, dan peluang secara teknis, finansial, dan regulatif.'
		},
		{
			number: '03',
			title: 'Design',
			desc: 'Merancang model bisnis, konsep pengembangan, dan roadmap implementasi yang terukur.'
		},
		{
			number: '04',
			title: 'Connect',
			desc: 'Membangun kemitraan strategis, ekosistem pendukung, dan jaringan pemangku kepentingan.'
		},
		{
			number: '05',
			title: 'Develop',
			desc: 'Mengeksekusi rencana pengembangan aset dan bisnis secara terstruktur dan bertahap.'
		},
		{
			number: '06',
			title: 'Manage',
			desc: 'Mengelola operasional, kinerja, dan tata kelola aset yang sedang berjalan.'
		},
		{
			number: '07',
			title: 'Scale',
			desc: 'Memperluas skala bisnis, replikasi model, dan ekspansi ke pasar yang lebih luas.'
		}
	];

	let openCycleIndex = $state<number | null>(null);
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

<!-- About Us / Who We Are Section -->
<section id="about-us" class="about-section" aria-label="About PT Arta Loka Wisala">
	<div class="about-container">
		<!-- Top Row: Editorial Content & Strategy Meeting Image -->
		<div class="about-main-grid">
			<!-- Left Column: Copywriting -->
			<div class="about-content">
				<div class="tagline-wrapper">
					<span class="about-tagline">WHO WE ARE</span>
					<span class="tagline-bar" aria-hidden="true"></span>
				</div>

				<h2 class="about-headline">
					More than an<br />
					asset manager.<br />
					We are a strategic<br />
					development partner.
				</h2>

				<p class="about-description">
					PT Arta Loka Wisala membantu pemilik aset, perusahaan, investor, pemerintah, BUMN/BUMD, koperasi dan mitra strategis dalam mengidentifikasi potensi, menyusun strategi, membangun kemitraan serta mengembangkan aset menjadi kegiatan ekonomi produktif.
				</p>

				<div class="about-cta-wrapper">
					<a href="#about-us" class="btn-about">
						<span>ABOUT US</span>
						<svg
							class="arrow-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</a>
				</div>
			</div>

			<!-- Right Column: Image only -->
			<div class="about-media">
				<div class="image-frame">
					<img
						src={strategyMeetingImg}
						alt="PT Arta Loka Wisala Strategy & Asset Development Team"
						class="meeting-image"
						loading="lazy"
					/>
				</div>
			</div>
		</div>

		<!-- Bottom Row: 5 Strategic Pillars Strip -->
		<div
			class="pillars-container"
			role="region"
			aria-label="Strategic Pillars"
			onmouseleave={() => (hoveredPillarIndex = null)}
		>
			<div class="pillars-grid">
				{#each pillars as pillar, index}
					{@const isHovered = hoveredPillarIndex === index}
					<div
						class="pillar-item"
						class:active={isHovered}
						onmouseenter={() => (hoveredPillarIndex = index)}
						onmouseleave={() => (hoveredPillarIndex = null)}
						onfocus={() => (hoveredPillarIndex = index)}
						onblur={() => (hoveredPillarIndex = null)}
						onclick={() => (hoveredPillarIndex = hoveredPillarIndex === index ? null : index)}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								hoveredPillarIndex = hoveredPillarIndex === index ? null : index;
							}
						}}
						role="button"
						tabindex="0"
						aria-pressed={isHovered}
					>
						<div class="pillar-inner">
							<span class="pillar-number">{pillar.number}</span>
							<h3 class="pillar-title">{pillar.title}</h3>
							<div class="pillar-accent-line" aria-hidden="true"></div>
							<p class="pillar-desc" class:visible={isHovered}>
								{pillar.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Our Business / Multi-Sector Development Section -->
<section id="our-business" class="business-section" aria-label="Our Business Sectors">
	<div class="business-container">
		<!-- Header Row: Two columns on desktop -->
		<div class="business-header">
			<div class="header-left">
				<span class="business-badge">02 — OUR BUSINESS SECTORS</span>
				<h2 class="business-title">
					Integrated multi-sector<br />development.
				</h2>
			</div>
			<div class="header-right">
				<p class="business-lead">
					Kompetensi lintas sektor untuk mengubah peluang menjadi model bisnis yang siap bergerak.
				</p>
			</div>
		</div>

		<!-- 8-Card Grid -->
		<div class="business-grid">
			{#each businessSectors as sector}
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<div class="business-card" tabindex="0">
					<span class="sector-number">{sector.number}</span>

					<div class="sector-icon-wrapper" aria-hidden="true">
						{#if sector.icon === 'strategy'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<line x1="18" y1="20" x2="18" y2="10"></line>
								<line x1="12" y1="20" x2="12" y2="4"></line>
								<line x1="6" y1="20" x2="6" y2="14"></line>
								<line x1="2" y1="20" x2="22" y2="20"></line>
							</svg>
						{:else if sector.icon === 'asset'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="5" y="3" width="14" height="18" rx="1.5"></rect>
								<line x1="9" y1="8" x2="10" y2="8"></line>
								<line x1="14" y1="8" x2="15" y2="8"></line>
								<line x1="9" y1="12" x2="10" y2="12"></line>
								<line x1="14" y1="12" x2="15" y2="12"></line>
								<path d="M10 21v-4h4v4"></path>
							</svg>
						{:else if sector.icon === 'energy'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="3.5"></circle>
								<line x1="12" y1="2" x2="12" y2="4.5"></line>
								<line x1="12" y1="19.5" x2="12" y2="22"></line>
								<line x1="4.93" y1="4.93" x2="6.7" y2="6.7"></line>
								<line x1="17.3" y1="17.3" x2="19.07" y2="19.07"></line>
								<line x1="2" y1="12" x2="4.5" y2="12"></line>
								<line x1="19.5" y1="12" x2="22" y2="12"></line>
								<line x1="4.93" y1="19.07" x2="6.7" y2="17.3"></line>
								<line x1="17.3" y1="6.7" x2="19.07" y2="4.93"></line>
							</svg>
						{:else if sector.icon === 'digital'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M4 11a9 9 0 0 1 9-9"></path>
								<path d="M8 15a9 9 0 0 1 9-9"></path>
								<path d="M3 21l8-8"></path>
								<path d="M12 20l7-7-3-3-7 7 3 3z"></path>
							</svg>
						{:else if sector.icon === 'maritime'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0"></path>
								<path d="M3.5 16.5L5.5 10h13l2 6.5"></path>
								<path d="M9 10V6h6v4"></path>
								<line x1="12" y1="3" x2="12" y2="6"></line>
							</svg>
						{:else if sector.icon === 'agriculture'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M11 20A7 7 0 0 1 4 13c0-7 7-9 7-9s7 2 7 9a7 7 0 0 1-7 7z"></path>
								<path d="M11 4v16"></path>
							</svg>
						{:else if sector.icon === 'industry'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<path d="M2 20h20"></path>
								<path d="M2 20V10l5 3V10l5 3V5h8v15"></path>
							</svg>
						{:else if sector.icon === 'property'}
							<svg class="sector-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
								<rect x="9" y="3" width="6" height="6" rx="1"></rect>
								<rect x="3" y="15" width="6" height="6" rx="1"></rect>
								<rect x="15" y="15" width="6" height="6" rx="1"></rect>
								<path d="M12 9v3m-6 3v-3h12v3"></path>
							</svg>
						{/if}
					</div>

					<h3 class="sector-title">{sector.title}</h3>
					<p class="sector-desc">{sector.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Bottom CTA Button -->
		<div class="business-action">
			<a href="#services" class="btn-services">
				<span>LIHAT DETAIL LAYANAN</span>
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
		</div>
	</div>
</section>

<!-- Development Cycle Section -->
<section id="development-cycle" class="cycle-section" aria-label="Development Cycle">
	<div class="cycle-container">
		<!-- Header Row -->
		<div class="cycle-header">
			<div class="cycle-header-left">
				<span class="cycle-badge">03 — DEVELOPMENT CYCLE</span>
				<h2 class="cycle-title">
					From potential to<br />sustainable business.
				</h2>
			</div>
			<div class="cycle-header-right">
				<p class="cycle-lead">
					Metodologi sistematis untuk mengawal peluang dari identifikasi hingga ekspansi.
				</p>
			</div>
		</div>

		<!-- Accordion Steps Grid -->
		<div class="cycle-grid">
			{#each developmentCycles as step, index}
				{@const isOpen = openCycleIndex === index}
				<button
					class="cycle-step"
					class:open={isOpen}
					onclick={() => (openCycleIndex = isOpen ? null : index)}
					aria-expanded={isOpen}
				>
					<div class="step-top">
						<span class="step-number">{step.number}</span>
						<span class="step-toggle" aria-hidden="true">{isOpen ? '×' : '+'}</span>
					</div>
					<div class="step-body">
						<p class="step-desc" class:step-desc-visible={isOpen}>{step.desc}</p>
						<h3 class="step-title">{step.title}</h3>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	/* ==========================================================================
	   About Us / Who We Are (Light Luxury Theme)
	   ========================================================================== */
	.about-section {
		background-color: #ffffff;
		color: #0b1523;
		padding: clamp(64px, 8vw, 100px) 0 clamp(60px, 7vw, 90px) 0;
		position: relative;
		overflow: hidden;
		border-top: 1px solid rgba(0, 0, 0, 0.05);
	}

	.about-container {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.about-main-grid {
		display: grid;
		grid-template-columns: 1.05fr 1fr;
		gap: clamp(36px, 5.5vw, 72px);
		align-items: center;
		margin-bottom: clamp(56px, 7vw, 92px);
	}

	.about-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	.tagline-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 22px;
	}

	.about-tagline {
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-gold, #d79f39);
		display: block;
	}

	.tagline-bar {
		display: block;
		width: 44px;
		height: 3px;
		background-color: var(--color-gold, #d79f39);
		margin-top: 8px;
		border-radius: 1px;
	}

	.about-headline {
		font-family: var(--font-main);
		font-size: clamp(2rem, 3.2vw, 3.15rem);
		font-weight: 800;
		line-height: 1.18;
		letter-spacing: -0.025em;
		color: #0d1e34;
		margin: 0 0 24px 0;
	}

	.about-description {
		font-family: var(--font-main);
		font-size: clamp(0.96rem, 1.08vw, 1.05rem);
		line-height: 1.76;
		color: #516277;
		max-width: 540px;
		margin: 0 0 34px 0;
		font-weight: 400;
	}

	.about-cta-wrapper {
		display: flex;
	}

	.btn-about {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 14px 28px;
		background-color: #ffffff;
		color: #0d1e34;
		border: 1px solid #d3dae4;
		border-radius: 2px;
		font-family: var(--font-main);
		font-size: 12px;
		font-weight: 800;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		text-decoration: none;
		transition: all 0.25s ease;
		box-shadow: 0 2px 8px rgba(13, 30, 52, 0.04);
	}

	.btn-about:hover {
		border-color: #0d1e34;
		background-color: #0d1e34;
		color: #ffffff;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(13, 30, 52, 0.12);
	}

	.btn-about:hover .arrow-icon {
		transform: translateX(4px);
	}

	.arrow-icon {
		width: 16px;
		height: 16px;
		transition: transform 0.25s ease;
	}

	.about-media {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.image-frame {
		width: 100%;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 0 16px 40px rgba(13, 30, 52, 0.09);
		border: 1px solid rgba(0, 0, 0, 0.04);
		aspect-ratio: 16 / 10;
		background-color: #071322;
	}

	.meeting-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.image-frame:hover .meeting-image {
		transform: scale(1.025);
	}

	.pillars-container {
		width: 100%;
		border-top: 1px solid #edf0f5;
		padding-top: 48px;
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0;
	}

	.pillar-item {
		position: relative;
		cursor: pointer;
		outline: none;
		border-right: 1px solid #e8ecf2;
		transition: all 0.3s ease;
		background: transparent;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.pillar-item:last-child {
		border-right: none;
	}

	.pillar-inner {
		padding: 24px 22px 28px 22px;
		height: 100%;
		min-height: 205px;
		border-radius: 4px;
		transition: background-color 0.25s ease, box-shadow 0.25s ease;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	.pillar-item.active .pillar-inner,
	.pillar-item:hover .pillar-inner {
		background-color: #f5f7fa;
		box-shadow: 0 6px 20px rgba(13, 30, 52, 0.04);
	}

	.pillar-number {
		font-family: var(--font-main);
		font-size: 13.5px;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--color-gold, #d79f39);
		margin-bottom: 12px;
		display: inline-block;
	}

	.pillar-title {
		font-family: var(--font-main);
		font-size: clamp(1.05rem, 1.25vw, 1.25rem);
		font-weight: 800;
		color: #0d1e34;
		margin: 0 0 12px 0;
		line-height: 1.25;
		letter-spacing: -0.015em;
		min-height: 3.1rem;
		display: flex;
		align-items: flex-start;
	}

	.pillar-accent-line {
		width: 32px;
		height: 2.5px;
		background-color: var(--color-gold, #d79f39);
		border-radius: 1px;
		margin-bottom: 16px;
		transition: width 0.3s ease;
	}

	.pillar-item.active .pillar-accent-line,
	.pillar-item:hover .pillar-accent-line {
		width: 44px;
	}

	.pillar-desc {
		font-family: var(--font-main);
		font-size: 0.88rem;
		line-height: 1.6;
		color: #55667c;
		margin: 0;
		opacity: 0;
		visibility: hidden;
		transform: translateY(4px);
		transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
		pointer-events: none;
	}

	.pillar-desc.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
		pointer-events: auto;
	}

	/* ==========================================================================
	   Our Business Section (Dark Luxury Corporate Theme)
	   ========================================================================== */
	.business-section {
		background-color: #0d2a4d;
		color: #ffffff;
		padding: clamp(80px, 9vw, 120px) 0 clamp(72px, 8vw, 110px) 0;
		position: relative;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	.business-container {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.business-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: clamp(48px, 6vw, 68px);
		gap: 36px;
	}

	.header-left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.business-badge {
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.14em;
		color: var(--color-gold, #d79f39);
		margin-bottom: 18px;
		text-transform: uppercase;
		display: block;
	}

	.business-title {
		font-family: var(--font-serif);
		font-size: clamp(2.3rem, 3.8vw, 3.4rem);
		font-weight: 700;
		color: #ffffff;
		line-height: 1.15;
		letter-spacing: -0.015em;
		margin: 0;
	}

	.header-right {
		max-width: 440px;
	}

	.business-lead {
		font-family: var(--font-main);
		font-size: clamp(0.96rem, 1.1vw, 1.06rem);
		line-height: 1.75;
		color: #8fa2bb;
		margin: 0;
		font-weight: 400;
	}

	/* 8-Card Grid Layout with Subtle Dividers */
	.business-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border: 1px solid rgba(255, 255, 255, 0.08);
		background-color: transparent;
	}

	.business-card {
		position: relative;
		padding: 40px 32px 42px 32px;
		min-height: 280px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		background-color: transparent;
		border-right: 1px solid rgba(255, 255, 255, 0.08);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		transition: background-color 0.28s ease, box-shadow 0.28s ease;
		outline: none;
	}

	/* Remove outer right border on column 4 */
	.business-card:nth-child(4n) {
		border-right: none;
	}

	/* Remove bottom border on the last row */
	.business-card:nth-child(n + 5) {
		border-bottom: none;
	}

	/* Hover State matching reference */
	.business-card:hover,
	.business-card:focus-visible {
		background-color: rgba(14, 38, 70, 0.55);
		box-shadow: inset 0 0 0 1px rgba(215, 159, 57, 0.35), 0 12px 32px rgba(0, 0, 0, 0.28);
		z-index: 1;
	}

	.sector-number {
		font-family: var(--font-main);
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--color-gold, #d79f39);
		margin-bottom: 24px;
		display: inline-block;
	}

	.sector-icon-wrapper {
		display: flex;
		align-items: center;
		margin-bottom: 24px;
		color: var(--color-gold, #d79f39);
	}

	.sector-icon {
		width: 32px;
		height: 32px;
		transition: transform 0.3s ease;
	}

	.business-card:hover .sector-icon {
		transform: scale(1.08);
	}

	.sector-title {
		font-family: var(--font-serif);
		font-size: clamp(1.22rem, 1.4vw, 1.42rem);
		font-weight: 700;
		color: #ffffff;
		line-height: 1.3;
		margin: 0 0 14px 0;
		letter-spacing: -0.01em;
	}

	.sector-desc {
		font-family: var(--font-main);
		font-size: 0.92rem;
		line-height: 1.68;
		color: #8da1b9;
		margin: 0;
		font-weight: 400;
	}

	/* Bottom CTA Button */
	.business-action {
		margin-top: clamp(40px, 5vw, 56px);
		display: flex;
		justify-content: flex-start;
	}

	.btn-services {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 16px 32px;
		background-color: var(--color-gold, #d79f39);
		color: #06182c;
		text-decoration: none;
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		border-radius: 2px;
		transition: all 0.25s ease;
		box-shadow: 0 4px 18px rgba(215, 159, 57, 0.25);
		border: 1px solid transparent;
	}

	.btn-services:hover {
		background-color: var(--color-gold-hover, #e5af4b);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(215, 159, 57, 0.4);
	}

	.btn-services:hover .btn-icon {
		transform: translateX(4px);
	}

	.btn-icon {
		width: 17px;
		height: 17px;
		transition: transform 0.25s ease;
	}

	/* ==========================================================================
	   Responsive Breakpoints
	   ========================================================================== */
	@media (max-width: 1080px) {
		.pillars-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 16px;
		}

		.pillar-item {
			border-right: none;
			border-bottom: 1px solid #e8ecf2;
		}

		.pillar-item:last-child {
			border-bottom: none;
		}

		.pillar-inner {
			min-height: 180px;
		}

		.business-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}

		.business-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.business-card:nth-child(4n) {
			border-right: 1px solid rgba(255, 255, 255, 0.08);
		}

		.business-card:nth-child(2n) {
			border-right: none;
		}

		.business-card:nth-child(n + 5) {
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		.business-card:nth-child(n + 7) {
			border-bottom: none;
		}
	}

	@media (max-width: 900px) {
		.about-main-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.about-headline {
			font-size: 2.2rem;
		}

		.image-frame {
			max-height: 420px;
		}
	}

	@media (max-width: 640px) {
		.pillars-grid {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.pillar-inner {
			min-height: auto;
			padding: 20px 16px;
			background-color: #fafbfc;
		}

		.pillar-title {
			min-height: auto;
		}

		.pillar-desc {
			opacity: 0;
			visibility: hidden;
			transform: translateY(4px);
			transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
		}

		.pillar-desc.visible {
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
			margin-top: 4px;
		}

		.btn-about {
			width: 100%;
			justify-content: center;
		}

		.business-grid {
			grid-template-columns: 1fr;
		}

		.business-card {
			border-right: none !important;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
			padding: 28px 20px;
			min-height: auto;
		}

		.business-card:last-child {
			border-bottom: none !important;
		}

		.btn-services {
			width: 100%;
			justify-content: center;
		}
	}

	/* ==========================================================================
	   Development Cycle Section (Light Gray Theme)
	   ========================================================================== */
	.cycle-section {
		background-color: #f0f2f5;
		color: #0d1e34;
		padding: clamp(72px, 9vw, 110px) 0 clamp(72px, 8vw, 100px) 0;
		border-top: 1px solid #e2e7ee;
	}

	.cycle-container {
		width: 100%;
		max-width: 1360px;
		margin: 0 auto;
		padding: 0 clamp(20px, 4vw, 56px);
	}

	.cycle-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: clamp(40px, 5.5vw, 64px);
		gap: 36px;
	}

	.cycle-header-left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.cycle-badge {
		font-family: var(--font-main);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.14em;
		color: var(--color-gold, #d79f39);
		text-transform: uppercase;
		margin-bottom: 18px;
		display: block;
	}

	.cycle-title {
		font-family: var(--font-serif);
		font-size: clamp(2.1rem, 3.5vw, 3.1rem);
		font-weight: 700;
		color: #0d1e34;
		line-height: 1.18;
		letter-spacing: -0.018em;
		margin: 0;
	}

	.cycle-header-right {
		max-width: 400px;
	}

	.cycle-lead {
		font-family: var(--font-main);
		font-size: clamp(0.94rem, 1.05vw, 1.04rem);
		line-height: 1.72;
		color: #6a7d92;
		margin: 0;
		font-weight: 400;
	}

	/* 7-Column Accordion Grid */
	.cycle-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		border: 1px solid #dde2ea;
		background-color: transparent;
	}

	.cycle-step {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 200px;
		padding: 24px 20px 28px 20px;
		background-color: #ffffff;
		border: none;
		border-right: 1px solid #dde2ea;
		cursor: pointer;
		text-align: left;
		transition: background-color 0.22s ease, box-shadow 0.22s ease;
		outline: none;
	}

	.cycle-step:last-child {
		border-right: none;
	}

	.cycle-step.open,
	.cycle-step:hover {
		background-color: #f7f9fb;
	}

	.cycle-step.open {
		border-left: 2px solid var(--color-gold, #d79f39);
		box-shadow: inset 0 0 0 1px rgba(215, 159, 57, 0.25);
	}

	.step-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 16px;
	}

	.step-number {
		font-family: var(--font-main);
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--color-gold, #d79f39);
	}

	.step-toggle {
		font-size: 18px;
		font-weight: 300;
		color: #9aabb9;
		line-height: 1;
		transition: color 0.2s ease, transform 0.2s ease;
	}

	.cycle-step.open .step-toggle {
		color: var(--color-gold, #d79f39);
	}

	.step-body {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: flex-end;
	}

	.step-desc {
		font-family: var(--font-main);
		font-size: 0.83rem;
		line-height: 1.6;
		color: var(--color-gold, #d79f39);
		margin: 0 0 16px 0;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-6px);
		transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
		pointer-events: none;
	}

	.step-desc-visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
		pointer-events: auto;
	}

	.step-title {
		font-family: var(--font-serif);
		font-size: clamp(1.1rem, 1.2vw, 1.28rem);
		font-weight: 700;
		color: #0d1e34;
		margin: 0;
		line-height: 1.25;
		letter-spacing: -0.01em;
	}

	/* Responsive for cycle section */
	@media (max-width: 1080px) {
		.cycle-grid {
			grid-template-columns: repeat(4, 1fr);
		}

		.cycle-step:nth-child(4n) {
			border-right: none;
		}

		.cycle-step:nth-child(n + 5) {
			border-top: 1px solid #dde2ea;
		}

		.cycle-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}
	}

	@media (max-width: 640px) {
		.cycle-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.cycle-step {
			border-right: 1px solid #dde2ea;
			border-bottom: 1px solid #dde2ea;
			min-height: 160px;
		}

		.cycle-step:nth-child(2n) {
			border-right: none;
		}
	}
</style>
