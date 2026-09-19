<script lang="ts">
  interface ServiceItem {
    number: string;
    title: string;
    description: string;
  }

  // Data 8 Lini Layanan Utama
  const services: ServiceItem[] = [
    {
      number: "01",
      title: "Strategy Development",
      description:
        "Business development strategy, corporate & market development, project development, regional development, opportunity mapping, institutional relations dan supply chain development.",
    },
    {
      number: "02",
      title: "Asset Management Development",
      description:
        "Optimalisasi aset fisik, sumber daya alam, aset bisnis, teknologi, jaringan, kanal distribusi dan market access melalui prinsip Unlocking Asset Value.",
    },
    {
      number: "03",
      title: "Energy & Sustainability",
      description:
        "PLTS, BESS, renewable energy, energy efficiency, independent energy system dan smart energy management.",
    },
    {
      number: "04",
      title: "Digital Technology & Security",
      description:
        "Digital infrastructure, integrated CCTV, AI surveillance, command center, IoT, asset monitoring dan data management.",
    },
    {
      number: "05",
      title: "Maritime, Logistics & Infrastructure",
      description:
        "Infrastruktur pelabuhan, rantai dingin (cold storage), sistem logistik kelautan dan efisiensi transportasi maritim.",
    },
    {
      number: "06",
      title: "Agriculture, Fishery & Food System",
      description:
        "Modernisasi sistem pertanian, modernisasi akuakultur, ketahanan pangan dan integrasi off-taker hasil bumi/laut.",
    },
    {
      number: "07",
      title: "Industrial & Regional Development",
      description:
        "Perencanaan kawasan industri hijau, komersialisasi lahan, utilitas bersama dan integrasi rantai pasok kawasan.",
    },
    {
      number: "08",
      title: "Environmental & Circular Economy",
      description:
        "Konservasi lingkungan, pengolahan limbah industri, waste-to-energy, dan pengembangan skema carbon offset.",
    },
  ];

  const deliverablesList: string[] = [
    "Opportunity mapping & asset assessment",
    "Feasibility review dan analisa risiko",
    "Business model & roadmap implementasi",
    "Struktur kemitraan dan pembiayaan",
    "Koordinasi teknologi dan mitra pelaksana",
    "Pendampingan implementasi dan monitoring",
  ];

  interface CycleStep {
    step: string;
    title: string;
    desc: string;
  }

  // Data 7 Tahap Kerja
  const cycleSteps: CycleStep[] = [
    {
      step: "Step 1",
      title: "IDENTIFY",
      desc: "Memetakan aset, potensi wilayah dan peluang usaha yang layak dikembangkan.",
    },
    {
      step: "Step 2",
      title: "ANALYZE",
      desc: "Menganalisa kelayakan, risiko, kebutuhan teknologi dan struktur pembiayaan.",
    },
    {
      step: "Step 3",
      title: "DESIGN",
      desc: "Menyusun business model, roadmap implementasi dan skema kemitraan.",
    },
    {
      step: "Step 4",
      title: "CONNECT",
      desc: "Mempertemukan pemilik aset dengan investor, teknologi, pemerintah dan pasar.",
    },
    {
      step: "Step 5",
      title: "DEVELOP",
      desc: "Mengawal implementasi proyek, koordinasi komersial dan eksekusi lapangan.",
    },
    {
      step: "Step 6",
      title: "MANAGE",
      desc: "Mengelola operasi, monitoring kinerja aset dan tata kelola kemitraan.",
    },
    {
      step: "Step 7",
      title: "SCALE",
      desc: "Replikasi model, ekspansi kawasan dan pertumbuhan recurring income.",
    },
  ];
</script>

<svelte:head>
  <title>Services — PT Arta Loka Wisala</title>
  <meta
    name="description"
    content="PT Arta Loka Wisala bergerak sebagai Strategy Development & Asset Management Partner bagi pemilik aset, perusahaan, investor, pemerintah, BUMN/BUMD, koperasi dan mitra strategis."
  />
</svelte:head>

<!-- Hero / Page Header -->
<section class="about-hero" aria-label="About Us Hero">
  <div class="about-hero-inner">
    <span class="hero-badge">Services</span>
    <div class="hero-badge-bar" aria-hidden="true"></div>
    <h1 class="hero-headline">Unlocking asset value.</h1>
    <p class="hero-sub">
      Kami tidak berhenti pada rekomendasi. Setiap layanan diarahkan menjadi
      struktur bisnis yang dapat dijalankan, dibiayai dan dikelola dalam jangka
      panjang.
    </p>
  </div>
</section>

<!-- Core Services Section -->
<section class="section-light" aria-label="Core Services">
  <div class="container">
    <!-- Badge & Heading -->
    <div class="services-intro">
      <div class="tagline-wrapper">
        <span class="tagline">CORE SERVICES</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-dark">Delapan lini layanan</h2>
    </div>

    <!-- Services List -->
    <div class="services-list">
      {#each services as item}
        <div class="services-item">
          <!-- Item Number -->
          <span class="services-number">{item.number}</span>

          <!-- Item Title -->
          <h3 class="services-item-title">{item.title}</h3>

          <!-- Item Description -->
          <p class="services-item-desc">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Deliverables Section -->
<section class="section-dark" aria-label="Deliverables">
  <div class="deliverables-container">
    <!-- KOLOM KIRI: INTRO & HEADLINE -->
    <div class="deliverables-intro-col">
      <div class="deliverables-intro">
        <div class="tagline-wrapper">
          <span class="tagline">DELIVERABLES</span>
          <div class="tagline-bar" aria-hidden="true"></div>
        </div>
        <h2 class="title-light">Apa yang mitra terima</h2>
        <p class="desc-light">
          Setiap penugasan menghasilkan output yang konkret dan dapat dieksekusi
          oleh para pihak.
        </p>
      </div>
    </div>

    <!-- KOLOM KANAN: LIST DELIVERABLES -->
    <div class="deliverables-list-col">
      <ul class="deliverables-list">
        {#each deliverablesList as item}
          <li class="deliverables-item">
            <span class="deliverables-text">{item}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Development Cycle Section -->
<section class="section-light" aria-label="Development Cycle">
  <div class="container">
    <!-- Badge & Heading -->
    <div class="cycle-intro">
      <div class="tagline-wrapper">
        <span class="tagline">HOW WE WORK</span>
        <div class="tagline-bar" aria-hidden="true"></div>
      </div>
      <h2 class="cycle-title">Arta Loka Development Cycle</h2>
      <p class="cycle-lead">
        Tujuh tahap kerja yang menjadi standar pendampingan proyek.
      </p>
    </div>

    <!-- Grid Layout: 3 Horizontal, 2 Vertical Baseline -->
    <div class="cycle-grid">
      {#each cycleSteps as item, index}
        <div class="cycle-card" class:card-featured={index === 6}>
          <span class="cycle-step">{item.step}</span>
          <h3 class="cycle-card-title">{item.title}</h3>
          <p class="cycle-card-desc">{item.desc}</p>
        </div>
      {/each}
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
     Core Services Section
     =========================================================== */

  /* Header Group */
  .services-intro {
    margin-bottom: 56px;
  }

  /* Services List Layout */
  .services-list {
    display: flex;
    flex-direction: column;
  }

  .services-item {
    display: grid;
    grid-template-columns: 80px 320px 1fr;
    align-items: start;
    gap: 24px;
    padding: 36px 0;
    border-bottom: 1px solid #eef2f6;
  }

  .services-item:first-child {
    border-top: 1px solid #eef2f6;
  }

  /* Number Style (Soft Gray Extra Bold) */
  .services-number {
    font-size: 2.2rem;
    font-weight: 800;
    color: #c5cbd5;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  /* Title Style */
  .services-item-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0;
    line-height: 1.35;
    padding-right: 16px;
  }

  /* Description Style */
  .services-item-desc {
    font-size: 0.925rem;
    color: #64748b;
    line-height: 1.65;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .services-item {
      grid-template-columns: 60px 240px 1fr;
      gap: 16px;
    }

    .services-item-title {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    .services-item {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 28px 0;
    }

    .services-number {
      font-size: 1.75rem;
    }

    .services-item-title {
      padding-right: 0;
    }
  }

  /* ===========================================================
     Deliverables Section
     =========================================================== */

  .deliverables-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: start;
  }

  /* Kolom Kiri Styling */
  .deliverables-intro-col {
    display: flex;
    flex-direction: column;
  }

  /* Kolom Kanan Styling (List & Box Shadow Effect) */
  .deliverables-list-col {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    overflow: hidden;
  }

  .deliverables-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .deliverables-item {
    padding: 22px 28px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: background-color 0.2s ease;
  }

  .deliverables-item:last-child {
    border-bottom: none;
  }

  .deliverables-item:hover {
    background-color: rgba(255, 255, 255, 0.04);
  }

  .deliverables-text {
    font-size: 0.95rem;
    font-weight: 500;
    color: #e2e8f0;
    line-height: 1.5;
  }

  /* Responsive Adjustments */
  @media (max-width: 900px) {
    .deliverables-container {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .deliverables-item {
      padding: 18px 20px;
    }

    .deliverables-text {
      font-size: 0.9rem;
    }
  }

  /* ===========================================================
     Development Cycle Section
     =========================================================== */

  /* Badge & Bar Header */
  .cycle-intro {
    margin-bottom: 48px;
  }

  .cycle-title {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 12px 0;
    letter-spacing: -0.02em;
  }

  .cycle-lead {
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
  }

  /* Grid 3 Kolom Horizontal */
  .cycle-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  /* Card Styling */
  .cycle-card {
    background-color: #ffffff;
    padding: 32px 28px;
    border-top: 3px solid var(--color-gold, #c08d2b); /* Line emas di bagian atas */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .cycle-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }

  .cycle-step {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-gold, #c08d2b);
    margin-bottom: 12px;
    display: block;
  }

  .cycle-card-title {
    font-size: 1.15rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 14px 0;
    letter-spacing: 0.02em;
  }

  .cycle-card-desc {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 992px) {
    .cycle-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .cycle-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
