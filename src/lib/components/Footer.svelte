<script lang="ts">
	import favicon from '$lib/assets/favicon.png';

	interface Props {
		companyName?: string;
		subtitle?: string;
		description?: string;
		copyrightYear?: number | string;
	}

	let {
		companyName = 'PT ARTA LOKA WISALA',
		subtitle = 'STRATEGY & ASSET DEVELOPMENT',
		description = 'Strategy Development & Asset Management Partner. Kami menghubungkan aset, strategi, teknologi, kapital, jaringan dan pasar untuk membangun ekosistem bisnis yang produktif serta berkelanjutan.',
		copyrightYear = 2026
	}: Props = $props();

	const navCol1 = [
		{ label: 'Home', href: '/' },
		{ label: 'Our Business', href: '#our-business' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'ESG', href: '#esg' },
		{ label: 'News', href: '#news' }
	];

	const navCol2 = [
		{ label: 'About Us', href: '#about-us' },
		{ label: 'Services', href: '#services' },
		{ label: 'Partnership', href: '#partnership' },
		{ label: 'Legality', href: '#legality' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<footer class="footer-wrapper" aria-label="Site Footer">
	<div class="footer-container">
		<!-- Top Section: 3 Columns -->
		<div class="footer-main-grid">
			<!-- Column 1: Brand & Profile -->
			<div class="footer-brand-col">
				<div class="brand-header">
					<img src={favicon} alt="Logo {companyName}" class="footer-logo" />
					<div class="brand-titles">
						<h3 class="brand-name">{companyName}</h3>
						<span class="brand-subtitle">{subtitle}</span>
					</div>
				</div>

				<p class="brand-desc">
					{description}
				</p>

				<div class="brand-rule" aria-hidden="true"></div>
			</div>

			<!-- Column 2: Navigation Links (2 Sub-columns) -->
			<div class="footer-nav-col">
				<h4 class="col-title">NAVIGATION</h4>
				<div class="nav-subgrid">
					<ul class="nav-list">
						{#each navCol1 as item (item.label)}
							<li>
								<a href={item.href} class="nav-link">{item.label}</a>
							</li>
						{/each}
					</ul>
					<ul class="nav-list">
						{#each navCol2 as item (item.label)}
							<li>
								<a href={item.href} class="nav-link">{item.label}</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Column 3: Head Office & Contact -->
			<div class="footer-contact-col">
				<h4 class="col-title">HEAD OFFICE</h4>
				<ul class="contact-list">
					<!-- Address -->
					<li class="contact-item">
						<svg
							class="contact-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<span class="contact-text">
							Jl. Wisma Pagesangan II No. 29, Kel. Pagesangan,<br />
							Kec. Jambangan, Surabaya, Jawa Timur 60233
						</span>
					</li>

					<!-- Phones -->
					<li class="contact-item">
						<svg
							class="contact-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							></path>
						</svg>
						<div class="contact-text">
							<div>Director 08127602079</div>
							<div>Office 0813 2023 809</div>
						</div>
					</li>

					<!-- Email -->
					<li class="contact-item">
						<svg
							class="contact-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<rect width="20" height="16" x="2" y="4" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<a href="mailto:artalokawisala@gmail.com" class="contact-link">
							artalokawisala@gmail.com
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Row: Copyright & Core Values -->
		<div class="footer-bottom">
			<p class="copyright-text">
				© {copyrightYear} {companyName}. All rights reserved.
			</p>
			<div class="values-text">
				TRUST • COMPLIANCE • ACCOUNTABILITY
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-wrapper {
		width: 100%;
		background-color: #061322;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		color: #ffffff;
		padding: clamp(60px, 6vw, 84px) clamp(24px, 5.5vw, 84px) 32px;
	}

	.footer-container {
		max-width: 1400px;
		margin: 0 auto;
	}

	/* Main Grid Layout */
	.footer-main-grid {
		display: grid;
		grid-template-columns: 1.25fr 1fr 1.15fr;
		gap: clamp(36px, 5vw, 72px);
		padding-bottom: clamp(48px, 5vw, 68px);
	}

	/* Column 1: Brand */
	.footer-brand-col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.brand-header {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 20px;
	}

	.footer-logo {
		width: 44px;
		height: 44px;
		object-fit: contain;
		border-radius: 4px;
		display: block;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.brand-titles {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.brand-name {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 15px;
		font-weight: 800;
		letter-spacing: 0.06em;
		color: #ffffff;
		margin: 0;
		text-transform: uppercase;
	}

	.brand-subtitle {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 10.5px;
		font-weight: 700;
		letter-spacing: 0.12em;
		color: #94a3b8;
		text-transform: uppercase;
	}

	.brand-desc {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 13.5px;
		line-height: 1.7;
		color: #94a3b8;
		margin: 0 0 24px 0;
		max-width: 380px;
	}

	.brand-rule {
		width: 44px;
		height: 3px;
		background-color: var(--color-gold, #d79f39);
		border-radius: 1px;
	}

	/* Titles for Col 2 & Col 3 */
	.col-title {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 11.5px;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-gold, #d79f39);
		margin: 0 0 22px 0;
	}

	/* Column 2: Navigation Links */
	.footer-nav-col {
		display: flex;
		flex-direction: column;
	}

	.nav-subgrid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	.nav-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.nav-link {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 13.5px;
		color: #94a3b8;
		text-decoration: none;
		transition: color 0.2s ease, transform 0.2s ease;
		display: inline-block;
	}

	.nav-link:hover {
		color: var(--color-gold, #d79f39);
		transform: translateX(3px);
	}

	/* Column 3: Contact & Office */
	.footer-contact-col {
		display: flex;
		flex-direction: column;
	}

	.contact-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: 14px;
	}

	.contact-icon {
		width: 18px;
		height: 18px;
		color: var(--color-gold, #d79f39);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.contact-text {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 13.5px;
		line-height: 1.65;
		color: #94a3b8;
	}

	.contact-link {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 13.5px;
		color: #94a3b8;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.contact-link:hover {
		color: var(--color-gold, #d79f39);
	}

	/* Bottom Row */
	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 28px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		gap: 20px;
		flex-wrap: wrap;
	}

	.copyright-text {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 12.5px;
		color: #64748b;
		margin: 0;
	}

	.values-text {
		font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: #64748b;
	}

	/* Responsive Breakpoints */
	@media (max-width: 1024px) {
		.footer-main-grid {
			grid-template-columns: 1fr 1fr;
			gap: 40px;
		}

		.footer-brand-col {
			grid-column: span 2;
			max-width: 100%;
		}

		.brand-desc {
			max-width: 600px;
		}
	}

	@media (max-width: 640px) {
		.footer-main-grid {
			grid-template-columns: 1fr;
			gap: 36px;
		}

		.footer-brand-col {
			grid-column: span 1;
		}

		.nav-subgrid {
			grid-template-columns: 1fr 1fr;
		}

		.footer-bottom {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
	}
</style>
