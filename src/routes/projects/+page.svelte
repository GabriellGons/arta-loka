<script lang="ts">
  interface CategoryDetail {
    overview: string;
    challenge: string;
    solution: string;
    partnership: string;
    technology: string;
    impact: string;
  }

  interface Category {
    id: string;
    label: string;
    subLabel: string;
    description: string; // Deskripsi singkat di posisi garis merah
    image: string;
    details: CategoryDetail;
  }

  // State untuk melacak kategori yang aktif
  let activeTab = $state("energy");

  const categories: Category[] = [
    {
      id: "energy",
      label: "ENERGY",
      subLabel: "ENERGY DEVELOPMENT",
      description:
        "Fokus pada pengembangan solusi energi terbarukan, efisiensi kelistrikan, dan sistem energi mandiri untuk mendukung keberlanjutan industri serta kawasan.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      details: {
        overview:
          "Pengembangan PLTS, BESS dan independent energy system untuk kawasan serta industri.",
        challenge:
          "Biaya energi tinggi dan pasokan listrik yang belum stabil pada lokasi proyek.",
        solution:
          "Desain sistem energi hybrid dengan skema pembiayaan dan operasi jangka panjang.",
        partnership:
          "Asset owner, EPC teknologi, investor dan offtaker energi.",
        technology:
          "PV module, battery energy storage, smart energy monitoring.",
        impact:
          "Penurunan biaya energi, keandalan pasokan dan pengurangan emisi.",
      },
    },
    {
      id: "maritime",
      label: "MARITIME",
      subLabel: "MARITIME DEVELOPMENT",
      description:
        "Pengembangan infrastruktur pesisir, logistik kelautan, dan tata kelola ekosistem maritim berbasis teknologi modern.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
      details: {
        overview:
          "Modernisasi fasilitas pelabuhan, rantai dingin (cold chain), dan logistik maritim.",
        challenge:
          "Infrastruktur pendingin terbatas dan efisiensi distribusi hasil laut yang rendah.",
        solution:
          "Pembangunan rantai dingin terintegrasi dengan jaringan logistik lokal dan regional.",
        partnership:
          "Nelayan, pengelola pelabuhan, investor logistik, dan pemerintah daerah.",
        technology:
          "Cold storage bertenaga surya, IoT tracking, kapal efisien emisi.",
        impact:
          "Peningkatan kualitas hasil tangkapan dan kesejahteraan komunitas pesisir.",
      },
    },
    {
      id: "industrial",
      label: "INDUSTRIAL",
      subLabel: "INDUSTRIAL DEVELOPMENT",
      description:
        "Kawasan industri terpadu dengan integrasi rantai pasok, tata kelola limbah terencana, dan efisiensi operasional.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      details: {
        overview:
          "Pengembangan kawasan industri hijau bernilai tambah dan siap huni.",
        challenge:
          "Konsumsi energi tinggi dan tantangan tata kelola lingkungan industri.",
        solution:
          "Integrasi utilitas bersama dan otomatisasi manajemen fasilitas.",
        partnership:
          "Pengembang kawasan, tenant industri, dan penyedia teknologi utilitas.",
        technology:
          "Industrial IoT, waste-to-energy, automated facility management.",
        impact: "Efisiensi biaya operasional tenant dan daya saing kawasan.",
      },
    },
    {
      id: "digital",
      label: "DIGITAL & SECURITY",
      subLabel: "DIGITAL & SECURITY DEVELOPMENT",
      description:
        "Sistem transportasi data cerdas, keamanan infrastruktur kritis, dan digitalisasi manajemen aset.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      details: {
        overview:
          "Pembangunan infrastruktur digital, sensor pintar, dan kedaulatan data kawasan.",
        challenge:
          "Keterbatasan akses jaringan terintegrasi dan risiko keamanan data.",
        solution:
          "Penerapan jaringan privat terenkripsi dan dashboard monitoring terpusat.",
        partnership:
          "Penyedia jaringan, konsultan keamanan cyber, dan pengelola kawasan.",
        technology: "Private LTE/5G, cloud edge computing, AI surveillance.",
        impact:
          "Transparansi data real-time dan peningkatan keandalan sistem keamanan.",
      },
    },
    {
      id: "agriculture",
      label: "AGRICULTURE",
      subLabel: "AGRICULTURE DEVELOPMENT",
      description:
        "Penerapan smart farming, optimalisasi rantai pasok pangan, dan pemberdayaan komunitas agribisnis.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      details: {
        overview:
          "Pengembangan kawasan agribisnis dan akuakultur presisi berkelanjutan.",
        challenge:
          "Ketidakpastian cuaca, penggunaan input berlebih, dan keterbatasan pasar.",
        solution:
          "Implementasi sensor tanah/air dan skema off-taker langsung ke industri.",
        partnership:
          "Kelompok tani/petambak, penyedia teknologi agritech, dan off-taker.",
        technology:
          "IoT soil & water sensor, automated feeding, precision irrigation.",
        impact:
          "Peningkatan produktivitas panen dan stabilitas pendapatan petani.",
      },
    },
    {
      id: "environment",
      label: "ENVIRONMENT",
      subLabel: "ENVIRONMENT DEVELOPMENT",
      description:
        "Restorasi ekosistem, pengelolaan sampah terpadu, dan proyek penyerapan karbon.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
      details: {
        overview:
          "Proyek konservasi, pengolahan air limbah, dan penataan ruang hijau.",
        challenge:
          "Degradasi lingkungan dan minimnya sistem pengelolaan limbah terintegrasi.",
        solution:
          "Penerapan konsep circular economy dan fasilitas daur ulang terpadu.",
        partnership:
          "Pemerintah, komunitas lokal, NGO lingkungan, dan investor hijau.",
        technology:
          "Advanced water treatment, bio-digester, carbon offset tracking.",
        impact: "Pemulihan kualitas lingkungan dan penciptaan green jobs.",
      },
    },
  ];
  let currentCategory = $derived(
    categories.find((c) => c.id === activeTab) || categories[0],
  );
</script>

<svelte:head>
  <title>Projects — PT Arta Loka Wisala</title>
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
    <span class="hero-badge">Projects</span>
    <div class="hero-badge-bar" aria-hidden="true"></div>
    <h1 class="hero-headline">Show results, not only services.</h1>
    <p class="hero-sub">
      Setiap kategori proyek dikembangkan dengan kerangka kerja yang sama, dari
      pemetaan potensi hingga pengukuran dampak.
    </p>
  </div>
</section>

<!-- ============================================================
     Portfolio / Category Section
     ============================================================ -->
<section class="portfolio-section" aria-label="Portfolio Gallery">
  <div class="portfolio-container">
    <!-- Badge & Header -->
    <div class="portfolio-intro">
      <span class="portfolio-badge">PORTFOLIO GALLERY</span>
      <div class="portfolio-badge-bar" aria-hidden="true"></div>
      <h2 class="portfolio-title">Pilih kategori pengembangan</h2>
    </div>

    <!-- Navigation Tabs -->
    <div class="portfolio-tabs-wrapper">
      <div class="portfolio-tabs" role="tablist">
        {#each categories as category}
          <button
            type="button"
            role="tab"
            class="tab-btn"
            class:is-active={activeTab === category.id}
            aria-selected={activeTab === category.id}
            on:click={() => (activeTab = category.id)}
          >
            {category.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- DESKRIPSI SINGKAT KATEGORI (Posisi Garis Merah) -->
    <div class="category-description">
      <p>{currentCategory.description}</p>
    </div>

    <!-- Content Area (Image + Details) -->
    <div class="portfolio-content">
      <!-- Left: Image Preview -->
      <div class="portfolio-image-box">
        <img
          src={currentCategory.image}
          alt={currentCategory.label}
          class="portfolio-image"
        />
      </div>

      <!-- Right: Detailed Specs List -->
      <div class="portfolio-details-box">
        <span class="category-sublabel">{currentCategory.subLabel}</span>

        <div class="details-list">
          <div class="detail-row">
            <span class="detail-label">PROJECT OVERVIEW</span>
            <p class="detail-text">{currentCategory.details.overview}</p>
          </div>

          <div class="detail-row">
            <span class="detail-label">CHALLENGE</span>
            <p class="detail-text">{currentCategory.details.challenge}</p>
          </div>

          <div class="detail-row">
            <span class="detail-label">SOLUTION</span>
            <p class="detail-text">{currentCategory.details.solution}</p>
          </div>

          <div class="detail-row">
            <span class="detail-label">PARTNERSHIP</span>
            <p class="detail-text">{currentCategory.details.partnership}</p>
          </div>

          <div class="detail-row">
            <span class="detail-label">TECHNOLOGY</span>
            <p class="detail-text">{currentCategory.details.technology}</p>
          </div>

          <div class="detail-row">
            <span class="detail-label">IMPACT</span>
            <p class="detail-text">{currentCategory.details.impact}</p>
          </div>
        </div>
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
     Portfolio Gallery Section
     =========================================================== */
  .portfolio-section {
    width: 100%;
    background-color: #ffffff;
    padding: clamp(60px, 8vw, 100px) 0;
    box-sizing: border-box;
    font-family: var(--font-main, "Plus Jakarta Sans", sans-serif);
    color: #0d1e38;
  }

  .portfolio-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    box-sizing: border-box;
  }

  /* Badge & Header */
  .portfolio-intro {
    margin-bottom: 40px;
  }

  .portfolio-badge {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold, #c08d2b);
    display: block;
  }

  .portfolio-badge-bar {
    width: 40px;
    height: 3px;
    background-color: var(--color-gold, #c08d2b);
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .portfolio-title {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    font-weight: 800;
    color: #0d1e38;
    margin: 0;
    letter-spacing: -0.02em;
  }

  /* Navigation Tabs Styling */
  .portfolio-tabs-wrapper {
    width: 100%;
    margin-bottom: 20px;
    background-color: #f1f5f9;
  }

  .portfolio-tabs {
    display: grid;
    /* Membagi seluruh kolom menjadi rata persis sesuai jumlah total tab (6 tab) */
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
  }

  .tab-btn {
    background: transparent;
    border: none;
    border-right: 1px solid #e2e8f0;
    padding: 18px 12px; /* Padding samping dikecilkan sedikit agar muat di layar menengah */
    font-family: inherit;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }

  /* Menghilangkan garis pembatas di tombol paling kanan */
  .tab-btn:last-child {
    border-right: none;
  }

  .tab-btn:hover {
    color: #0d1e38;
    background-color: #e2e8f0;
  }

  .tab-btn.is-active {
    background-color: #0d2a4d;
    color: #ffffff;
    border-right-color: #0d2a4d;
  }

  /* Responsif untuk Layar HP / Mobile */
  @media (max-width: 900px) {
    .portfolio-tabs-wrapper {
      overflow-x: auto; /* Memungkinkan scroll horizontal jika dibuka di layar HP */
    }

    .portfolio-tabs {
      display: flex; /* Kembalikan ke flex di HP agar teks tab tidak terpotong */
      width: max-content;
    }

    .tab-btn {
      padding: 14px 20px;
    }
  }

  /* DESKRIPSI SINGKAT KATEGORI (Bagian Garis Merah) */
  .category-description {
    background-color: #f8fafc;
    border-left: 3px solid var(--color-gold, #c08d2b);
    padding: 16px 24px;
    margin-bottom: 36px;
    border-radius: 0 4px 4px 0;
  }

  .category-description p {
    margin: 0;
    font-size: 0.925rem;
    color: #475569;
    line-height: 1.6;
    font-weight: 500;
  }

  /* Content Grid (Gambar + Detail Specs) */
  .portfolio-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .portfolio-image-box {
    width: 100%;
    height: 100%;
    min-height: 420px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.15);
  }

  .portfolio-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .portfolio-image-box:hover .portfolio-image {
    transform: scale(1.02);
  }

  /* Specs Detail Right Side */
  .portfolio-details-box {
    display: flex;
    flex-direction: column;
  }

  .category-sublabel {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold, #c08d2b);
    margin-bottom: 16px;
    display: block;
  }

  .details-list {
    display: flex;
    flex-direction: column;
  }

  .detail-row {
    display: grid;
    grid-template-columns: 160px 1fr;
    padding: 16px 0;
    border-top: 1px solid #f1f5f9;
    gap: 16px;
  }

  .detail-row:last-child {
    border-bottom: 1px solid #f1f5f9;
  }

  .detail-label {
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #0d1e38;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .detail-text {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .portfolio-content {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .portfolio-image-box {
      min-height: 320px;
      max-height: 400px;
    }
  }

  @media (max-width: 640px) {
    .detail-row {
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .tab-btn {
      padding: 14px 18px;
      font-size: 0.7rem;
    }

    .portfolio-section {
      padding: 40px 0;
    }
  }
</style>
