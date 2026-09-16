<script lang="ts">
  interface NewsArticle {
    id: number;
    categoryId: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    readTime: string;
  }

  interface NewsCategory {
    id: string;
    label: string;
  }

  // State Kategori Aktif (Default: 'all' atau 'corporate')
  let activeTab = $state("all");

  // Daftar Kategori Berita
  const categories: NewsCategory[] = [
    { id: "all", label: "ALL NEWS" },
    { id: "corporate", label: "CORPORATE NEWS" },
    { id: "project", label: "PROJECT UPDATE" },
    { id: "energy-tech", label: "ENERGY & TECHNOLOGY" },
    { id: "maritime", label: "MARITIME DEVELOPMENT" },
    { id: "asset-invest", label: "ASSET & INVESTMENT" },
    { id: "community", label: "COMMUNITY DEVELOPMENT" },
  ];

  // Sample Data Berita
  const articles: NewsArticle[] = [
    {
      id: 1,
      categoryId: "corporate",
      title:
        "PT Arta Loka Wisala Memperkuat Struktur Kemitraan Strategis Kawasan",
      date: "12 Sep 2026",
      excerpt:
        "Langkah strategis perusahaan dalam membangun integrasi ekosistem bisnis lintas sektoral untuk optimalisasi aset.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      readTime: "3 min read",
    },
    {
      id: 2,
      categoryId: "energy-tech",
      title:
        "Implementasi Sistem Hybrid PLTS & BESS pada Kawasan Industri Terpadu",
      date: "08 Sep 2026",
      excerpt:
        "Mendorong efisiensi konsumsi energi dan keandalan pasokan listrik hijau jangka panjang bagi para tenant.",
      image:
        "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      readTime: "4 min read",
    },
    {
      id: 3,
      categoryId: "maritime",
      title:
        "Pengembangan Rantai Dingin Terintegrasi di Wilayah Pesisir Jawa Timur",
      date: "02 Sep 2026",
      excerpt:
        "Fasilitas cold storage modern bertenaga terbarukan siap menopang daya saing hasil tangkapan nelayan lokal.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 4,
      categoryId: "asset-invest",
      title:
        "Unlocking Asset Value: Optimalisasi Lahan & Komersialisasi Properti",
      date: "28 Agu 2026",
      excerpt:
        "Kajian kelayakan dan pemetaan potensi aset tidur menjadi sarana usaha produktif bernilai tinggi.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      readTime: "3 min read",
    },
    {
      id: 5,
      categoryId: "community",
      title:
        "Program Pemberdayaan Ekonomi Koperasi & Kemitraan Tenaga Kerja Lokal",
      date: "20 Agu 2026",
      excerpt:
        "Membangun iklim kemitraan inklusif yang memberikan dampak ekonomi langsung bagi masyarakat sekitar.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      readTime: "4 min read",
    },
    {
      id: 6,
      categoryId: "project",
      title:
        "Update Progres Pembangunan Command Center & Infrastructure Monitoring",
      date: "15 Agu 2026",
      excerpt:
        "Fasilitas pengawasan berbasis AI dan IoT memasuki tahap integrasi data akhir sebelum beroperasi penuh.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      readTime: "4 min read",
    },
  ];

  // Filtering Berita berdasarkan Tab Aktif (Menggunakan Rune $derived)
  let filteredArticles = $derived(
    activeTab === "all"
      ? articles
      : articles.filter((item) => item.categoryId === activeTab),
  );
</script>

<svelte:head>
  <title>News — PT Arta Loka Wisala</title>
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
    <span class="hero-badge">News</span>
    <div class="hero-badge-bar" aria-hidden="true"></div>
    <h1 class="hero-headline">Corporate news & insight.</h1>
    <p class="hero-sub">
      Kanal informasi mengenai aktivitas perusahaan, perkembangan proyek, dan
      wawasan lintas sektor.
    </p>
  </div>
</section>

<!-- ============================================================
     News & Information Section
     ============================================================ -->
<section class="news-section" aria-label="News and Updates">
  <div class="news-container">
    <!-- Badge & Header -->
    <div class="news-intro">
      <span class="news-badge">MEDIA & UPDATES</span>
      <div class="news-badge-bar" aria-hidden="true"></div>
      <h2 class="news-title">Informasi & berita terkini</h2>
      <p class="news-lead">
        Temukan update terbaru mengenai proyek, perkembangan teknologi, dan
        aktivitas ekosistem perusahaan.
      </p>
    </div>

    <!-- Navigation Tabs (7 Columns Equal Width Grid) -->
    <div class="news-tabs-wrapper">
      <div class="news-tabs" role="tablist">
        {#each categories as category}
          <button
            type="button"
            role="tab"
            class="tab-btn"
            class:is-active={activeTab === category.id}
            aria-selected={activeTab === category.id}
            onclick={() => (activeTab = category.id)}
          >
            {category.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- News Grid Container -->
    <div class="news-grid">
      {#each filteredArticles as article (article.id)}
        <article class="news-card">
          <div class="news-image-box">
            <img src={article.image} alt={article.title} class="news-image" />
            <span class="news-category-tag">
              {categories.find((c) => c.id === article.categoryId)?.label}
            </span>
          </div>

          <div class="news-card-body">
            <div class="news-meta">
              <span class="news-date">{article.date}</span>
              <span class="meta-dot">•</span>
              <span class="news-readtime">{article.readTime}</span>
            </div>

            <h3 class="news-card-title">
              <a href={`/news/${article.id}`}>{article.title}</a>
            </h3>

            <p class="news-card-excerpt">{article.excerpt}</p>

            <a href={`/news/${article.id}`} class="news-read-more">
              BACA SELENGKAPNYA
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      {:else}
        <!-- State jika belum ada berita pada kategori tertentu -->
        <div class="empty-state">
          <p>Belum ada berita terbaru untuk kategori ini.</p>
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
     News & Updates Section
     =========================================================== */
  .news-section {
    width: 100%;
    background-color: #f8fafc;
    padding: clamp(60px, 8vw, 100px) 0;
    box-sizing: border-box;
    font-family: var(
      --font-main,
      "Plus Jakarta Sans",
      -apple-system,
      sans-serif
    );
    color: #0d1e38;
  }

  .news-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    box-sizing: border-box;
  }

  /* Badge & Header */
  .news-intro {
    margin-bottom: 40px;
  }

  .news-badge {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold, #c08d2b);
    display: block;
  }

  .news-badge-bar {
    width: 40px;
    height: 3px;
    background-color: var(--color-gold, #c08d2b);
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .news-title {
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 12px 0;
    letter-spacing: -0.02em;
  }

  .news-lead {
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
  }

  /* Navigation Tabs (7 Columns Equal Grid - Full Width) */
  .news-tabs-wrapper {
    width: 100%;
    margin-bottom: 48px;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 2px;
  }

  .news-tabs {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
  }

  .tab-btn {
    background: transparent;
    border: none;
    border-right: 1px solid #e2e8f0;
    padding: 16px 8px;
    font-family: inherit;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tab-btn:last-child {
    border-right: none;
  }

  .tab-btn:hover {
    color: #0d1e38;
    background-color: #f1f5f9;
  }

  .tab-btn.is-active {
    background-color: #0d2a4d;
    color: #ffffff;
    border-right-color: #0d2a4d;
  }

  /* News Grid Layout (3 Columns) */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  /* Article Card Styling */
  .news-card {
    background-color: #ffffff;
    border-radius: 2px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      border-color 0.25s ease;
  }

  .news-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.08);
    border-color: var(--color-gold, #c08d2b);
  }

  .news-image-box {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: #e2e8f0;
  }

  .news-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .news-card:hover .news-image {
    transform: scale(1.04);
  }

  .news-category-tag {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background: rgba(13, 42, 77, 0.9);
    color: #ffffff;
    font-size: 9.5px;
    font-weight: 800;
    letter-spacing: 0.1em;
    padding: 4px 10px;
    border-radius: 2px;
    text-transform: uppercase;
    backdrop-filter: blur(4px);
  }

  .news-card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .news-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.775rem;
    color: #94a3b8;
    margin-bottom: 12px;
  }

  .meta-dot {
    font-size: 0.6rem;
  }

  .news-card-title {
    font-size: 1.1rem;
    font-weight: 800;
    line-height: 1.4;
    margin: 0 0 12px 0;
  }

  .news-card-title a {
    color: #0d1e38;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .news-card-title a:hover {
    color: var(--color-gold, #c08d2b);
  }

  .news-card-excerpt {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0 0 24px 0;
    flex-grow: 1;
  }

  .news-read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: var(--color-gold, #c08d2b);
    text-decoration: none;
    transition: gap 0.2s ease;
  }

  .news-read-more:hover {
    gap: 12px;
  }

  .empty-state {
    grid-column: span 3;
    padding: 60px 0;
    text-align: center;
    color: #64748b;
  }

  /* Responsive Adjustments */
  @media (max-width: 1200px) {
    .news-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .empty-state {
      grid-column: span 2;
    }
  }

  @media (max-width: 1024px) {
    .news-tabs-wrapper {
      overflow-x: auto;
    }

    .news-tabs {
      display: flex;
      width: max-content;
    }

    .tab-btn {
      padding: 14px 20px;
    }
  }

  @media (max-width: 640px) {
    .news-grid {
      grid-template-columns: 1fr;
    }

    .empty-state {
      grid-column: span 1;
    }

    .news-section {
      padding: 40px 0;
    }
  }
</style>
