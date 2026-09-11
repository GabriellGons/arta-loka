<script lang="ts">
  import strategyMeetingImg from "$lib/assets/strategy-meeting.jpg";

  const philosophies = [
    { name: "ARTA", desc: "Nilai, kekayaan, manfaat dan sumber daya." },
    { name: "LOKA", desc: "Ruang, wilayah, daerah dan ekosistem." },
    {
      name: "WISALA",
      desc: "Visi besar dan kemampuan melihat peluang secara luas.",
    },
  ];

  const missions = [
    "Mengidentifikasi dan mengembangkan potensi aset serta sumber daya menjadi kegiatan ekonomi produktif.",
    "Menyusun strategi pengembangan bisnis berdasarkan potensi wilayah dan kebutuhan pasar.",
    "Menghubungkan pemilik aset dengan teknologi, investor, pemerintah, industri dan pasar.",
    "Mengembangkan model kemitraan bisnis yang sehat, transparan dan berkelanjutan.",
    "Mendorong teknologi, digitalisasi, energi terbarukan dan efisiensi pengelolaan aset.",
    "Membangun ekosistem yang menghasilkan economic value sekaligus social impact.",
  ];

  const managementList = [
    { name: "GRACE DIANA HARIADINATA", role: "COMMISSIONER" },
    { name: "DODIK KURNIAWAN", role: "DIRECTOR" },
    { name: "DODIET HERRY KISWANTO", role: "HEAD OF OPERATIONS" },
    { name: "HARI UTOMO", role: "OPERATIONAL STAFF" },
  ];

  const functionalList = [
    "Strategy & Business Development",
    "Project & Operations Management",
    "Asset & Commercial Management",
    "Partnership & Institutional Relations",
    "Finance, Administration & Compliance",
  ];

  const advantages = [
    {
      title: "Strategic Perspective",
      desc: "Melihat aset sebagai sumber nilai dan peluang, bukan sekadar kepemilikan.",
    },
    {
      title: "Integrated Network",
      desc: "Menghubungkan stakeholder sesuai kebutuhan setiap proyek.",
    },
    {
      title: "Cross-Sector Development",
      desc: "Energi, teknologi, maritim, pangan, industri, lingkungan dan kawasan.",
    },
    {
      title: "Flexible Partnership",
      desc: "Struktur kerja sama disesuaikan dengan aset, risiko dan target bisnis.",
    },
    {
      title: "Sustainable Value",
      desc: "Fokus pada nilai ekonomi, recurring income dan dampak jangka panjang.",
    },
  ];
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
      PT Arta Loka Wisala bergerak sebagai Strategy Development &amp; Asset
      Management Partner bagi pemilik aset, perusahaan, investor, pemerintah,
      BUMN/BUMD, koperasi, komunitas dan mitra strategis.
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
        Perusahaan membantu <strong>mengidentifikasi potensi</strong>, merancang
        strategi, menghubungkan sumber daya serta mengembangkan aset menjadi
        kegiatan usaha yang produktif dan berkelanjutan.
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
      {#each ["ASSET", "STRATEGY", "NETWORK", "TECHNOLOGY", "CAPITAL", "MARKET"] as tag}
        <span class="keyword-tag">{tag}</span>
      {/each}
    </div>
  </div>
</section>

<!-- ============================================================
     Vision & Mission
     ============================================================ -->
<section class="vm-section" aria-label="Vision & Mission">
  <div class="vm-container">
    <!-- KOLOM KIRI: VISION & FILOSOFI -->
    <div class="column">
      <!-- Section Vision -->
      <div class="vm-header">
        <span class="label">VISION</span>
        <div class="yellow-line"></div>
      </div>
      <h2 class="main-title">Visi perusahaan</h2>
      <p class="description">
        Menjadi Strategic Development & Asset Management Partner yang
        mengintegrasikan aset, teknologi, jaringan, investasi, pasar dan
        pemberdayaan masyarakat untuk menciptakan pertumbuhan ekonomi yang
        produktif, berkelanjutan dan bernilai strategis.
      </p>

      <!-- Section Filosofi Nama -->
      <div class="philosophy-section">
        <span class="sub-label">FILOSOFI NAMA</span>
        <div class="philosophy-list">
          {#each philosophies as item}
            <div class="philosophy-item">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- KOLOM KANAN: MISSION -->
    <div class="column">
      <div class="vm-header">
        <span class="label">MISSION</span>
        <div class="yellow-line"></div>
      </div>
      <h2 class="main-title">Misi perusahaan</h2>

      <div class="mission-list">
        {#each missions as mission, index}
          <div class="mission-item">
            <span class="mission-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p class="mission-text">{mission}</p>
          </div>
        {/each}
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
        Perjalanan membangun platform pengembangan aset yang terintegrasi dan
        berkelanjutan.
      </p>
    </div>

    <div class="timeline">
      {#each [{ year: "2020", label: "Pendirian", desc: "PT Arta Loka Wisala didirikan dengan fokus pada konsultansi strategis aset dan pengembangan bisnis." }, { year: "2021", label: "Ekspansi Portofolio", desc: "Memperluas layanan ke sektor energi, maritim, dan infrastruktur dengan mitra strategis pertama." }, { year: "2022", label: "Kemitraan BUMN", desc: "Membangun kolaborasi resmi dengan entitas BUMN dan pemerintah daerah untuk kawasan industri." }, { year: "2023", label: "Platform Terintegrasi", desc: "Mengembangkan platform manajemen aset yang menghubungkan investor, teknologi, dan pasar." }, { year: "2024", label: "ESG Integration", desc: "Mengintegrasikan prinsip ESG dalam seluruh lini pengembangan dan pengelolaan aset." }, { year: "2025", label: "Pertumbuhan Regional", desc: "Ekspansi ke 5 kawasan strategis Indonesia dengan model pengembangan multisektoral." }, { year: "2026", label: "Target Nasional", desc: "Menjadi platform pengembangan aset terkemuka dengan dampak ekonomi terukur skala nasional." }] as milestone, i}
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

<!-- ============================================================
     Organization Structure
     ============================================================ -->
<section class="organization-section" aria-label="Organization & Structure">
  <div class="organization-container">
    <!-- KOLOM KIRI: MANAGEMENT -->
    <div class="organization-column">
      <!-- Badge & Heading -->
      <div class="organization-intro">
        <span class="organization-badge">MANAGEMENT</span>
        <div class="organization-badge-bar" aria-hidden="true"></div>
        <h2 class="organization-title">Struktur organisasi</h2>
      </div>

      <!-- Grid Management (2x2) -->
      <div class="management-grid">
        {#each managementList as item}
          <div class="management-card">
            <h3 class="management-name">{item.name}</h3>
            <span class="management-role">{item.role}</span>
          </div>
        {/each}
      </div>

      <!-- Keterangan Catatan Bawah -->
      <p class="organization-note">
        Struktur fungsional dapat diperluas mengikuti skala proyek dan kebutuhan
        perusahaan.
      </p>
    </div>

    <!-- KOLOM KANAN: FUNCTIONAL STRUCTURE -->
    <div class="organization-column">
      <!-- Badge & Heading -->
      <div class="organization-intro">
        <span class="organization-badge">FUNCTIONAL STRUCTURE</span>
        <div class="organization-badge-bar" aria-hidden="true"></div>
        <h2 class="organization-title">Fungsi pengembangan</h2>
      </div>

      <!-- Daftar Fungsi Pengembangan -->
      <div class="functional-list">
        {#each functionalList as func}
          <div class="functional-item">
            <span class="functional-title">{func}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     Why Partner With Us
     ============================================================ -->
<section class="value-section" aria-label="Why Partner With Us">
  <div class="value-container">
    <!-- Badge & Heading -->
    <div class="value-intro">
      <span class="value-badge">WHY PARTNER WITH US</span>
      <div class="value-badge-bar" aria-hidden="true"></div>
      <h2 class="value-title">
        We don't just manage assets.<br />
        We develop their value.
      </h2>
    </div>

    <!-- 3-Column Advantage Cards Grid -->
    <div class="value-grid">
      {#each advantages as card}
        <div class="value-card">
          <h3 class="value-card-title">{card.title}</h3>
          <p class="value-card-desc">{card.desc}</p>
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
  .journey-section {
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
  .journey-badge {
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
  .journey-badge-bar {
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
    background: linear-gradient(160deg, #071b38 0%, #0d2a4d 60%, #0a1e36 100%);
    color: #ffffff;
    min-height: 100vh;
    padding: 60px 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vm-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  /* Label & Line Header */
  .vm-header {
    margin-bottom: 12px;
  }

  .label,
  .sub-label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #e2b24c; /* Warna emas/kuning */
    text-transform: uppercase;
  }

  .yellow-line {
    width: 30px;
    height: 3px;
    background-color: #e2b24c;
    margin-top: 8px;
  }

  .main-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0 0 24px 0;
    color: #ffffff;
  }

  .description {
    color: #a0aec0;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  /* Filosofi Nama */
  .philosophy-section {
    margin-top: 40px;
  }

  .philosophy-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .philosophy-item {
    border-left: 2px solid #e2b24c;
    padding-left: 16px;
  }

  .philosophy-item h3 {
    margin: 0 0 4px 0;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .philosophy-item p {
    margin: 0;
    color: #a0aec0;
    font-size: 0.875rem;
  }

  /* Mission List */
  .mission-list {
    display: flex;
    flex-direction: column;
  }

  .mission-item {
    display: flex;
    align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    gap: 20px;
  }

  .mission-item:first-child {
    padding-top: 0;
  }

  .mission-number {
    font-weight: 800;
    font-size: 1rem;
    color: #e2b24c;
    min-width: 25px;
  }

  .mission-text {
    margin: 0;
    color: #a0aec0;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /* ===========================================================
	   Corporate Journey Timeline
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
	   Organization Structure
	   =========================================================== */
  .organization-section {
    background: #06182c;
    color: #ffffff;
    padding: 60px 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .organization-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  .organization-column {
    display: flex;
    flex-direction: column;
  }

  /* Intro Header (Badge, Bar, Title) */
  .organization-intro {
    margin-bottom: 32px;
  }

  .organization-badge {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #e2b24c; /* Accent Yellow/Gold */
    text-transform: uppercase;
    display: block;
  }

  .organization-badge-bar {
    width: 30px;
    height: 3px;
    background-color: #e2b24c;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  .organization-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
  }

  /* 2x2 Management Grid dengan Garis Pembatas (Cross Borders) */
  .management-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-collapse: collapse;
  }

  .management-card {
    padding: 24px 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /* Menghilangkan garis kanan pada kolom ke-2 */
  .management-card:nth-child(2n) {
    border-right: none;
    padding-left: 28px;
  }

  /* Menghilangkan garis bawah pada 2 card terakhir */
  .management-card:nth-child(n + 3) {
    border-bottom: none;
  }

  .management-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 8px 0;
    line-height: 1.3;
    letter-spacing: 0.5px;
  }

  .management-role {
    font-size: 0.725rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #e2b24c;
    text-transform: uppercase;
  }

  /* Catatan Dibawah Management */
  .organization-note {
    margin-top: 36px;
    font-size: 0.85rem;
    color: #a0aec0;
    line-height: 1.5;
  }

  /* List Functional Structure */
  .functional-list {
    display: flex;
    flex-direction: column;
  }

  .functional-item {
    padding: 18px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  .functional-item:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .functional-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: #e2e8f0;
  }

  /* Responsive Design untuk Mobile & Tablet */
  @media (max-width: 900px) {
    .organization-container {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .organization-section {
      padding: 40px 20px;
    }

    .organization-title {
      font-size: 1.85rem;
    }

    .management-grid {
      grid-template-columns: 1fr;
    }

    .management-card {
      border-right: none !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15) !important;
      padding-left: 0 !important;
    }

    .management-card:last-child {
      border-bottom: none !important;
    }
  }

  /* ===========================================================
	   Why Partner With Us
	   =========================================================== */
  .value-section {
    background-color: #f2f4f7; /* Background abu-abu muda terang sesuai gambar */
    color: #0b1a30;
    padding: 80px 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .value-container {
    max-width: 1200px;
    width: 100%;
  }

  /* Badge & Bar Header */
  .value-intro {
    margin-bottom: 48px;
  }

  .value-badge {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #c08d2b; /* Warna emas/kuning */
    text-transform: uppercase;
    display: block;
  }

  .value-badge-bar {
    width: 35px;
    height: 3px;
    background-color: #c08d2b;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .value-title {
    font-size: 2.75rem;
    font-weight: 800;
    color: #0d1e38;
    line-height: 1.15;
    margin: 0;
    letter-spacing: -0.5px;
  }

  /* 3-Column Grid Layout */
  .value-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  /* Card Style */
  .value-card {
    background-color: #ffffff;
    padding: 36px 28px;
    border-top: 3px solid #c08d2b; /* Garis aksen emas di bagian atas card */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .value-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }

  .value-card-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0d1e38;
    margin: 0 0 16px 0;
    line-height: 1.3;
  }

  .value-card-desc {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .value-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .value-title {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 640px) {
    .value-grid {
      grid-template-columns: 1fr;
    }

    .value-section {
      padding: 40px 20px;
    }

    .value-title {
      font-size: 1.75rem;
    }
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
