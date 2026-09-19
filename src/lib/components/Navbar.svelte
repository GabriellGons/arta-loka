<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import { page } from '$app/stores';

	export interface NavItem {
		label: string;
		href: string;
	}

	interface Props {
		active?: string;
		brandName?: string;
		ctaText?: string;
		ctaHref?: string;
		items?: NavItem[];
		onCtaClick?: () => void;
	}

	let {
		active = $bindable(''),
		brandName = 'PT ARTA LOKA WISALA',
		ctaText = 'BECOME OUR PARTNER',
		ctaHref = '/contact',
		items = [
			{ label: 'HOME', href: '/' },
			{ label: 'ABOUT US', href: '/about' },
			{ label: 'OUR BUSINESS', href: '/our-business' },
			{ label: 'SERVICES', href: '/services' },
			{ label: 'PROJECTS', href: '/projects' },
			{ label: 'PARTNERSHIP', href: '/partnership' },
			{ label: 'ESG', href: '/esg' },
			{ label: 'LEGALITY', href: '/legality' },
			{ label: 'NEWS', href: '/news' },
			{ label: 'CONTACT', href: '/contact' }
		],
		onCtaClick
	}: Props = $props();

	let isMobileOpen = $state(false);

	let currentActive = $derived.by(() => {
		const path = $page.url.pathname;
		const matched = items.find((item) =>
			item.href === '/' ? path === '/' : path.startsWith(item.href)
		);
		return matched ? matched.label : (active || 'HOME');
	});

	function handleItemClick(item: NavItem) {
		active = item.label;
		isMobileOpen = false;
	}

	function handleCtaClick(e: MouseEvent) {
		if (onCtaClick) {
			e.preventDefault();
			onCtaClick();
		}
		isMobileOpen = false;
	}
</script>

<header class="navbar-wrapper">
	<div class="navbar-container">
		<!-- Brand & Logo -->
		<a href="/" class="brand-link" aria-label="{brandName} Home">
			<img src={favicon} alt="Logo {brandName}" class="brand-logo" />
			<span class="brand-title">{brandName}</span>
		</a>

		<!-- Desktop Navigation Menu -->
		<nav class="desktop-nav" aria-label="Main Navigation">
			<ul class="nav-list">
				{#each items as item (item.label)}
					<li class="nav-item">
						<a
							href={item.href}
							class="nav-link {currentActive === item.label ? 'is-active' : ''}"
							onclick={() => handleItemClick(item)}
						>
							<span class="nav-text">{item.label}</span>
							{#if currentActive === item.label}
								<span class="active-indicator" aria-hidden="true"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Right CTA Button -->
		<div class="cta-wrapper">
			<a href={ctaHref} class="cta-btn" onclick={handleCtaClick}>
				<span class="cta-label">{ctaText}</span>
				<svg
					class="cta-icon"
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

		<!-- Mobile Hamburger Button -->
		<button
			class="mobile-toggle-btn"
			aria-label="Toggle navigation menu"
			aria-expanded={isMobileOpen}
			onclick={() => (isMobileOpen = !isMobileOpen)}
		>
			{#if isMobileOpen}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Drawer Menu -->
	{#if isMobileOpen}
		<div class="mobile-drawer" role="dialog" aria-modal="true">
			<ul class="mobile-nav-list">
				{#each items as item (item.label)}
					<li>
						<a
							href={item.href}
							class="mobile-nav-link {currentActive === item.label ? 'is-active' : ''}"
							onclick={() => handleItemClick(item)}
						>
							<span>{item.label}</span>
							{#if currentActive === item.label}
								<span class="mobile-indicator"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
			<div class="mobile-cta-box">
				<a href={ctaHref} class="mobile-cta-btn" onclick={handleCtaClick}>
					<span>{ctaText}</span>
					<svg
						class="cta-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	:root {
		--nav-gold: #d79f39;
		--nav-gold-hover: #e5af4b;
		--nav-dark: #121820;
		--nav-bg: rgba(7, 19, 34, 0.75);
		--nav-border: rgba(255, 255, 255, 0.08);
	}

	.navbar-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		width: 100%;
		background: var(--nav-bg);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-bottom: 1px solid var(--nav-border);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
		transition: background-color 0.3s ease;
	}

	.navbar-container {
		width: 100%;
		max-width: 100%;
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		min-height: 62px;
		padding-left: clamp(16px, 3vw, 40px);
	}

	/* Brand Section */
	.brand-link {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: #ffffff;
		padding: 10px 0;
		flex-shrink: 0;
		transition: opacity 0.2s ease;
	}

	.brand-link:hover {
		opacity: 0.9;
	}

	.brand-logo {
		width: 40px;
		height: 40px;
		object-fit: contain;
		border-radius: 4px;
		display: block;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.brand-title {
		font-size: 14.5px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #ffffff;
		white-space: nowrap;
		font-family: inherit;
	}

	/* Desktop Navigation */
	.desktop-nav {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		margin: 0 clamp(12px, 2vw, 36px);
	}

	.nav-list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: clamp(14px, 1.6vw, 28px);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-item {
		position: relative;
		display: flex;
		align-items: center;
	}

	.nav-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: 20px 0;
		text-decoration: none;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #ffffff;
		transition: color 0.25s ease;
		white-space: nowrap;
	}

	.nav-link:hover {
		color: var(--nav-gold);
	}

	.nav-link.is-active {
		color: var(--nav-gold);
	}

	/* Active Underline Indicator matching reference image */
	.active-indicator {
		position: absolute;
		bottom: 12px;
		left: 0;
		width: 100%;
		height: 2.5px;
		background-color: var(--nav-gold);
		border-radius: 1px;
	}

	/* CTA Button Section */
	.cta-wrapper {
		display: flex;
		align-items: stretch;
		flex-shrink: 0;
	}

	.cta-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 0 clamp(18px, 2.5vw, 36px);
		background-color: var(--nav-gold);
		color: var(--nav-dark);
		text-decoration: none;
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		white-space: nowrap;
		transition: all 0.25s ease;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
	}

	.cta-btn:hover {
		background-color: var(--nav-gold-hover);
		color: #000000;
	}

	.cta-btn:hover .cta-icon {
		transform: translateX(4px);
	}

	.cta-icon {
		width: 17px;
		height: 17px;
		transition: transform 0.25s ease;
		stroke-width: 2.4;
	}

	/* Mobile Toggle Button */
	.mobile-toggle-btn {
		display: none;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
		color: #ffffff;
		cursor: pointer;
		padding: 12px;
		margin-right: 16px;
		width: 48px;
		height: 48px;
		align-self: center;
		transition: color 0.2s ease;
	}

	.mobile-toggle-btn:hover {
		color: var(--nav-gold);
	}

	.mobile-toggle-btn svg {
		width: 26px;
		height: 26px;
	}

	/* Mobile Drawer Menu */
	.mobile-drawer {
		display: none;
		background: rgba(10, 19, 32, 0.98);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-top: 1px solid var(--nav-border);
		padding: 20px 24px 28px;
		animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mobile-nav-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.mobile-nav-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 14px;
		color: #ffffff;
		text-decoration: none;
		font-size: 13.5px;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		border-radius: 6px;
		transition: all 0.2s ease;
	}

	.mobile-nav-link:hover,
	.mobile-nav-link.is-active {
		color: var(--nav-gold);
		background-color: rgba(215, 159, 57, 0.1);
	}

	.mobile-indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: var(--nav-gold);
	}

	.mobile-cta-box {
		margin-top: 20px;
		padding-top: 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.mobile-cta-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
		padding: 14px;
		background-color: var(--nav-gold);
		color: var(--nav-dark);
		text-decoration: none;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		border-radius: 6px;
		transition: background-color 0.2s ease;
	}

	.mobile-cta-btn:hover {
		background-color: var(--nav-gold-hover);
	}

	/* Responsive Breakpoints */
	@media (max-width: 1180px) {
		.desktop-nav {
			display: none;
		}

		.cta-wrapper {
			display: none;
		}

		.mobile-toggle-btn {
			display: flex;
		}

		.mobile-drawer {
			display: block;
		}

		.navbar-container {
			padding-right: 0;
		}
	}
</style>
