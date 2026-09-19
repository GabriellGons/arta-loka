<script></script>

<svelte:head>
  <title>ESG — PT Arta Loka Wisala</title>
  <meta
    name="description"
    content="PT Arta Loka Wisala bergerak sebagai Strategy Development & Asset Management Partner bagi pemilik aset, perusahaan, investor, pemerintah, BUMN/BUMD, koperasi dan mitra strategis."
  />
</svelte:head>

<!-- Hero / Page Header -->
<section class="about-hero" aria-label="About Us Hero">
  <div class="about-hero-inner">
    <span class="hero-badge">ESG & Impact</span>
    <div class="hero-badge-bar" aria-hidden="true"></div>
    <h1 class="hero-headline">Business with purpose</h1>
    <p class="hero-sub">
      Setiap pengembangan diarahkan pada keseimbangan Profit, People, Planet dan
      Partnership untuk memperlihatkan bahwa penciptaan nilai ekonomi berjalan
      bersama social impact dan environmental responsibility.
    </p>
  </div>
</section>

<!-- Four Pillars -->
<section class="section-light" aria-label="Four Pillars">
  <div class="container">
    <!-- Badge & Heading -->
    <div class="pillars-intro">
      <div class="tagline-wrapper">
        <span class="tagline">FOUR PILLARS</span>
        <div class="tagline-bar" aria-hidden="true"></div>
      </div>
      <h2 class="title-dark">
        Profit <span class="title-square">▪</span> People
        <span class="title-square">▪</span>
        Planet <span class="title-square">▪</span> Partnership
      </h2>
    </div>

    <!-- 4-Column Pillars Grid -->
    <div class="pillars-grid">
      <!-- Card 01 -->
      <div class="pillars-card">
        <span class="pillars-number">01</span>
        <h3 class="pillars-card-title">Profit</h3>
        <p class="pillars-card-desc">
          Nilai ekonomi yang terukur, recurring income dan pertumbuhan nilai
          aset.
        </p>
      </div>

      <!-- Card 02 -->
      <div class="pillars-card">
        <span class="pillars-number">02</span>
        <h3 class="pillars-card-title">People</h3>
        <p class="pillars-card-desc">
          Pemberdayaan masyarakat, koperasi dan penyerapan tenaga kerja lokal.
        </p>
      </div>

      <!-- Card 03 -->
      <div class="pillars-card">
        <span class="pillars-number">03</span>
        <h3 class="pillars-card-title">Planet</h3>
        <p class="pillars-card-desc">
          Energi terbarukan, efisiensi sumber daya dan pengelolaan lingkungan.
        </p>
      </div>

      <!-- Card 04 -->
      <div class="pillars-card">
        <span class="pillars-number">04</span>
        <h3 class="pillars-card-title">Partnership</h3>
        <p class="pillars-card-desc">
          Kemitraan sehat, transparan dan berkelanjutan antar stakeholder.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  /* ===========================================================
	   Hero / Page Header (Dark Navy)
	   =========================================================== */
  .about-hero {
    width: 100%;
    background: linear-gradient(160deg, #071b38 0%, #0d2a4d 60%, #0a1e36 100%);
    color: #ffffff;
    padding: clamp(120px, 14vw, 180px) 0 clamp(80px, 10vw, 120px) 0;
    position: relative;
    overflow: hidden;
  }

  .about-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 70% 50%,
      rgba(215, 159, 57, 0.07) 0%,
      transparent 65%
    );
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
     Four Pillars
     =========================================================== */

  /* Badge & Header */
  .pillars-intro {
    margin-bottom: 56px;
  }

  .title-square {
    font-size: 0.85em;
    color: #0d1e38;
    line-height: 1;
  }

  /* Grid Layout (4 Columns dengan border tipis di antaranya) */
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .pillars-card {
    padding: 24px 32px;
    border-right: 1px solid #eef2f6;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }

  /* Menghilangkan garis kanan di kartu paling akhir */
  .pillars-card:last-child {
    border-right: none;
  }

  .pillars-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: #c5cbd5;
    line-height: 1;
    margin-bottom: 16px;
    letter-spacing: -0.03em;
  }

  .pillars-card-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 16px 0;
    line-height: 1.2;
  }

  .pillars-card-desc {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .pillars-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .pillars-card {
      padding: 28px 24px;
      border-bottom: 1px solid #eef2f6;
    }

    .pillars-card:nth-child(2n) {
      border-right: none;
    }

    .pillars-card:nth-child(n + 3) {
      border-bottom: none;
    }
  }

  @media (max-width: 640px) {
    .pillars-grid {
      grid-template-columns: 1fr;
    }

    .pillars-card {
      border-right: none !important;
      border-bottom: 1px solid #eef2f6 !important;
      padding: 24px 0;
    }

    .pillars-card:last-child {
      border-bottom: none !important;
    }
  }
</style>
