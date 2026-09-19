<script lang="ts">
  import commandCenterImg from "$lib/assets/command-center.jpg";
  interface EcosystemNode {
    title: string;
    description: string;
  }

  // Data 6 Simpul Ekosistem Proyek
  const ecosystemNodes: EcosystemNode[] = [
    {
      title: "ASSET OWNER",
      description:
        "Pemilik aset fisik, lahan, sumber daya dan aset usaha yang belum optimal.",
    },
    {
      title: "GOVERNMENT",
      description:
        "Pemerintah daerah, BUMN/BUMD dan instansi sebagai regulator dan mitra kawasan.",
    },
    {
      title: "INVESTOR",
      description:
        "Pembiayaan proyek, equity participation dan struktur investasi.",
    },
    {
      title: "TECHNOLOGY",
      description:
        "Penyedia teknologi energi, digital, surveillance dan industri.",
    },
    {
      title: "COMMUNITY",
      description: "Masyarakat dan koperasi sebagai pelaku ekonomi produktif.",
    },
    {
      title: "MARKET",
      description:
        "Kanal distribusi, offtaker dan akses pasar bagi hasil proyek.",
    },
  ];

  interface AssetType {
    title: string;
    description: string;
  }

  // Data 4 Jenis Aset (Grid 2x2)
  const assetTypes: AssetType[] = [
    {
      title: "PHYSICAL ASSET",
      description:
        "Lahan, bangunan, pabrik, gudang, dermaga dan infrastruktur.",
    },
    {
      title: "NATURAL RESOURCES",
      description:
        "Potensi energi, perairan, pesisir, pertanian dan hasil bumi.",
    },
    {
      title: "BUSINESS ASSET",
      description:
        "Perizinan, lini usaha, kapasitas produksi dan kontrak berjalan.",
    },
    {
      title: "NETWORK ASSET",
      description:
        "Relasi institusi, kanal distribusi, mitra teknologi dan akses pasar.",
    },
  ];

  interface SectorItem {
    number: string;
    title: string;
    description: string;
  }

  // Data 8 Lini Pengembangan
  const sectors: SectorItem[] = [
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
      title: "Maritime & Coastal Development",
      description:
        "Smart Fishing Village, budidaya, cold chain, pabrik es berbasis PLTS, elektrifikasi pulau, logistik dan maritime surveillance.",
    },
    {
      number: "06",
      title: "Agriculture & Food Security",
      description:
        "Supply chain, processing, warehouse, distribution, trading dan market expansion untuk komoditas pangan serta hasil bumi.",
    },
    {
      number: "07",
      title: "Industrial, Environmental & Water",
      description:
        "Industrial asset optimization, IPAL/WWTP, water treatment, waste management, utility efficiency dan environmental infrastructure.",
    },
    {
      number: "08",
      title: "Property, Tourism & Regional Development",
      description:
        "Masterplan, business model, investment structuring, development, operation dan market activation untuk aset properti dan kawasan.",
    },
  ];
</script>

<svelte:head>
  <title>Our Business — PT Arta Loka Wisala</title>
  <meta
    name="description"
    content="PT Arta Loka Wisala bergerak sebagai Strategy Development & Asset Management Partner bagi pemilik aset, perusahaan, investor, pemerintah, BUMN/BUMD, koperasi dan mitra strategis."
  />
</svelte:head>

<!-- Hero / Page Header -->
<section class="about-hero" aria-label="About Us Hero">
  <div class="about-hero-inner">
    <span class="hero-badge">Our Business</span>
    <div class="hero-badge-bar" aria-hidden="true"></div>
    <h1 class="hero-headline">We connect the ecosystem.</h1>
    <p class="hero-sub">
      Mempertemukan pemilik aset, pemerintah, investor, teknologi, masyarakat
      dan pasar sehingga setiap proyek memiliki struktur ekosistem yang lebih
      kuat.
    </p>
  </div>
</section>

<!-- Business Ecosystem Section -->
<section class="section-light" aria-label="Business Ecosystem">
  <div class="container">
    <!-- Badge & Heading -->
    <div class="ecosystem-intro">
      <div class="tagline-wrapper">
        <span class="tagline">BUSINESS ECOSYSTEM</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-dark">Enam simpul ekosistem proyek</h2>
    </div>

    <!-- 3x2 Ecosystem Grid -->
    <div class="ecosystem-grid">
      {#each ecosystemNodes as node}
        <div class="ecosystem-card">
          <h3 class="ecosystem-card-title">{node.title}</h3>
          <p class="ecosystem-card-desc">{node.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Asset Management Section -->
<section class="section-dark" aria-label="Asset Management">
  <div class="asset-container">
    <!-- KOLOM KIRI: TEXT & 2x2 GRID -->
    <div class="asset-content-col">
      <!-- Badge & Intro Header -->
      <div class="asset-intro">
        <div class="tagline-wrapper">
          <span class="tagline">ASSET MANAGEMENT</span>
          <span class="tagline-bar" aria-hidden="true"></span>
        </div>
        <h2 class="title-light">Unlocking asset value</h2>
        <p class="desc-light">
          Kami melihat aset bukan hanya berdasarkan nilai kepemilikannya, tetapi
          berdasarkan potensi ekonomi yang dapat diciptakan dari aset tersebut.
        </p>
      </div>

      <!-- Grid 2x2 Jenis Aset dengan Border Tipis -->
      <div class="asset-grid">
        {#each assetTypes as item}
          <div class="asset-card">
            <h3 class="asset-card-title">{item.title}</h3>
            <p class="asset-card-desc">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- KOLOM KANAN: PREVIEW IMAGE (COMMAND CENTER) -->
    <div class="asset-image-col">
      <div class="asset-image-wrapper">
        <img
          src={commandCenterImg}
          alt="Command Center & Monitoring Asset System"
          class="asset-image"
        />
      </div>
    </div>
  </div>
</section>

<!-- Business Sectors Section -->
<section class="section-light" aria-label="Business Sectors">
  <div class="container">
    <!-- Badge & Heading -->
    <div class="sectors-intro">
      <div class="tagline-wrapper">
        <span class="tagline">BUSINESS SECTORS</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-dark">
        Integrated multi-<br />
        sector development
      </h2>
      <p class="desc-dark">
        Delapan lini pengembangan yang saling menopang dalam satu ekosistem
        bisnis.
      </p>
    </div>

    <!-- 2-Column Grid Cards -->
    <div class="sectors-grid">
      {#each sectors as item}
        <div class="sectors-card">
          <span class="sectors-number">{item.number}</span>
          <h3 class="sectors-card-title">{item.title}</h3>
          <p class="sectors-card-desc">{item.description}</p>
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
     Business Ecosystem Section
     =========================================================== */

  /* Badge & Bar Header */
  .ecosystem-intro {
    margin-bottom: 56px;
  }

  /* Grid Layout (3 Columns x 2 Rows) */
  .ecosystem-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  /* Card Styling & Boundary Borders */
  .ecosystem-card {
    padding: 36px 32px 32px 32px;
    border: 2px solid var(--color-gold);
    border-right: 1px solid var(--color-gold);
    border-bottom: 1px solid var(--color-gold);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
  }

  .ecosystem-card-title {
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--color-gold, #c08d2b);
    text-transform: uppercase;
    margin: 0 0 16px 0;
  }

  .ecosystem-card-desc {
    font-size: 0.925rem;
    color: #64748b;
    line-height: 1.65;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 992px) {
    .ecosystem-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .ecosystem-card:nth-child(3n) {
      border-right: 1px solid #eef2f6;
    }

    .ecosystem-card:nth-child(2n) {
      border-right: none;
    }

    .ecosystem-card:nth-child(n + 4) {
      border-bottom: 1px solid #eef2f6;
    }

    .ecosystem-card:nth-child(n + 5) {
      border-bottom: none;
    }
  }

  @media (max-width: 640px) {
    .ecosystem-grid {
      grid-template-columns: 1fr;
    }

    .ecosystem-card {
      border-right: none !important;
      border-bottom: 1px solid #eef2f6 !important;
      padding: 28px 16px;
    }

    .ecosystem-card:last-child {
      border-bottom: none !important;
    }
  }

  /* ===========================================================
     Asset Management Section
     =========================================================== */

  .asset-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: clamp(40px, 6vw, 72px);
    align-items: center;
  }

  /* Left Column Styling */
  .asset-content-col {
    display: flex;
    flex-direction: column;
  }

  /* Badge & Header */
  .asset-intro {
    margin-bottom: 40px;
  }

  /* Grid 2x2 dengan Glass Box & Inter-Border */
  .asset-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 4px;
  }

  .asset-card {
    padding: 28px 24px;
    border-right: 1px solid rgba(255, 255, 255, 0.06);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
  }

  /* Hilangkan border kanan pada kolom ke-2 */
  .asset-card:nth-child(2n) {
    border-right: none;
  }

  /* Hilangkan border bawah pada baris ke-2 */
  .asset-card:nth-child(n + 3) {
    border-bottom: none;
  }

  .asset-card-title {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--color-gold, #d79f39);
    text-transform: uppercase;
    margin: 0 0 12px 0;
  }

  .asset-card-desc {
    font-size: 0.875rem;
    color: #9ab2cb;
    line-height: 1.6;
    margin: 0;
  }

  /* Right Column: Image Styling */
  .asset-image-col {
    width: 100%;
  }

  .asset-image-wrapper {
    width: 100%;
    aspect-ratio: 16 / 10;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .asset-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .asset-image-wrapper:hover .asset-image {
    transform: scale(1.02);
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .asset-container {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }

  @media (max-width: 640px) {
    .asset-grid {
      grid-template-columns: 1fr;
    }

    .asset-card {
      border-right: none !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
      padding: 24px 18px;
    }

    .asset-card:last-child {
      border-bottom: none !important;
    }
  }

  /* ===========================================================
     Business Sectors Section
     =========================================================== */

  /* Badge & Bar Header */
  .sectors-intro {
    margin-bottom: 48px;
  }

  /* Grid Layout (2 Columns) */
  .sectors-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  /* Card Base Style */
  .sectors-card {
    background-color: #ffffff;
    padding: 36px 32px;
    border-radius: 2px;
    border: 1px solid transparent; /* Border default netral transparan */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }

  /* EFEK HOVER: Memunculkan Border Warna Emas */
  .sectors-card:hover {
    border-color: var(--color-gold, #c08d2b);
    transform: translateY(-3px);
    box-shadow: 0 12px 24px -6px rgba(192, 141, 43, 0.15);
  }

  .sectors-number {
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--color-gold, #c08d2b);
    margin-bottom: 16px;
    display: block;
  }

  .sectors-card-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 14px 0;
    line-height: 1.3;
  }

  .sectors-card-desc {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.65;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 900px) {
    .sectors-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .sectors-card {
      padding: 28px 24px;
    }
  }
</style>
