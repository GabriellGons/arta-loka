<script lang="ts">
  import { Hero } from "$lib";
  import strategyMeetingImg from "$lib/assets/strategy-meeting.jpg";
  import { fade, fly } from "svelte/transition";

  let openPillarIndices = $state<number[]>([]);

  function togglePillar(index: number) {
    if (openPillarIndices.includes(index)) {
      openPillarIndices = openPillarIndices.filter((i) => i !== index);
    } else {
      openPillarIndices = [...openPillarIndices, index];
    }
  }

  const pillars = [
    {
      number: "01",
      title: "Asset",
      description:
        "Identifikasi potensi dan optimalisasi nilai aset secara terukur.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Penyusunan peta jalan strategis berdaya saing tinggi.",
    },
    {
      number: "03",
      title: "Partnership",
      description:
        "Kolaborasi sinergis antar pemangku kepentingan dan mitra industri.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Transformasi aset menjadi pusat pertumbuhan ekonomi produktif.",
    },
    {
      number: "05",
      title: "Sustainable Value",
      description: "Menjaga nilai ekonomi dan keberlanjutan jangka panjang.",
    },
  ];

  interface CycleStep {
    id: number;
    stepNumber: string;
    label: string;
    title: string;
    description: string;
    iconSvg: string;
  }

  // State Step Aktif (Default: Step 1 / IDENTIFY)
  let activeStepId = $state(1);

  // Data 7 Tahap Kerja Circular Development Cycle
  const cycleSteps: CycleStep[] = [
    {
      id: 1,
      stepNumber: "STEP 01",
      label: "IDENTIFY",
      title: "Identify",
      description:
        "Memetakan aset, potensi wilayah dan peluang usaha yang layak dikembangkan.",
      iconSvg: '<path d="m21 21-4.35-4.35"/><circle cx="11" cy="11" r="8"/>', // Search Icon
    },
    {
      id: 2,
      stepNumber: "STEP 02",
      label: "ANALYZE",
      title: "Analyze",
      description:
        "Menganalisa kelayakan, risiko, kebutuhan teknologi dan struktur pembiayaan.",
      iconSvg:
        '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', // Bar Chart Icon
    },
    {
      id: 3,
      stepNumber: "STEP 03",
      label: "DESIGN",
      title: "Design",
      description:
        "Menyusun business model, roadmap implementasi dan skema kemitraan.",
      iconSvg:
        '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>', // Pen/Design Icon
    },
    {
      id: 4,
      stepNumber: "STEP 04",
      label: "CONNECT",
      title: "Connect",
      description:
        "Mempertemukan pemilik aset dengan investor, teknologi, pemerintah dan pasar.",
      iconSvg:
        '<rect x="9" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M12 9v3"/><path d="M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"/>', // Hierarchy/Network Icon
    },
    {
      id: 5,
      stepNumber: "STEP 05",
      label: "DEVELOP",
      title: "Develop",
      description:
        "Mengawal implementasi proyek, koordinasi komersial dan eksekusi lapangan.",
      iconSvg:
        '<path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 4.36a2.5 2.5 0 0 1 3.54 3.54l-2.6 2.6-3.54-3.54 2.6-2.6z"/>', // Hammer/Tools Icon
    },
    {
      id: 6,
      stepNumber: "STEP 06",
      label: "MANAGE",
      title: "Manage",
      description:
        "Mengelola operasi, monitoring kinerja aset dan tata kelola kemitraan.",
      iconSvg:
        '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="m9 14 2 2 4-4"/>', // Checklist Icon
    },
    {
      id: 7,
      stepNumber: "STEP 07",
      label: "SCALE",
      title: "Scale",
      description:
        "Replikasi model, ekspansi kawasan dan pertumbuhan recurring income.",
      iconSvg:
        '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>', // Trending Up Icon
    },
  ];

  // Mengambil step aktif menggunakan rune $derived
  let activeStep = $derived(
    cycleSteps.find((s) => s.id === activeStepId) || cycleSteps[0],
  );

  const cycleCenter = 250;
  const cycleRadius = 140;
  const cycleLabelRadius = 195;

  // Compute 7 arrow positions at midpoints along the ring
  const cycleArrows = Array.from({ length: 7 }, (_, i) => {
    const angleDeg = -90 + (i + 0.5) * (360 / 7);
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = cycleCenter + cycleRadius * Math.cos(angleRad);
    const y = cycleCenter + cycleRadius * Math.sin(angleRad);
    const rotation = angleDeg + 90;
    return { x, y, rotation };
  });

  // Compute 7 node circle positions and outer label positions
  const cycleNodePositions = cycleSteps.map((item, index) => {
    const angleDeg = -90 + index * (360 / 7);
    const angleRad = (angleDeg * Math.PI) / 180;
    const nx = cycleCenter + cycleRadius * Math.cos(angleRad);
    const ny = cycleCenter + cycleRadius * Math.sin(angleRad);
    const lx = cycleCenter + cycleLabelRadius * Math.cos(angleRad);
    const ly = cycleCenter + cycleLabelRadius * Math.sin(angleRad);
    return {
      ...item,
      nx,
      ny,
      lx,
      ly,
    };
  });

  interface AssetItem {
    id: number;
    number: string;
    title: string;
    description: string;
    iconSvg: string;
  }

  // State Aset Aktif (Default: 1 / Physical Asset)
  let activeAssetId = $state(1);

  // Data 4 Jenis Aset
  const assetTypes: AssetItem[] = [
    {
      id: 1,
      number: "01",
      title: "Physical Asset",
      description:
        "Lahan, bangunan, pabrik, gudang, dermaga dan infrastruktur.",
      iconSvg:
        '<path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/><path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>',
    },
    {
      id: 2,
      number: "02",
      title: "Natural Resources",
      description:
        "Potensi energi, perairan, pesisir, pertanian dan hasil bumi.",
      iconSvg: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    },
    {
      id: 3,
      number: "03",
      title: "Business Asset",
      description:
        "Perizinan, lini usaha, kapasitas produksi dan kontrak berjalan.",
      iconSvg:
        '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    },
    {
      id: 4,
      number: "04",
      title: "Network Asset",
      description:
        "Relasi institusi, kanal distribusi, mitra teknologi dan akses pasar.",
      iconSvg:
        '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    },
  ];

  // State Aset Aktif (Mendukung toggle buka-tutup per step)
  let activeAssetIds = $state<number[]>([1]);

  function toggleAssetStep(id: number) {
    if (activeAssetIds.includes(id)) {
      activeAssetIds = activeAssetIds.filter((item) => item !== id);
    } else {
      activeAssetIds = [...activeAssetIds, id];
    }
  }

  const businessSectors = [
    {
      number: "01",
      title: "Strategy Development",
      desc: "Menyusun arah, model bisnis, dan roadmap pengembangan yang terukur.",
      icon: "strategy",
    },
    {
      number: "02",
      title: "Asset Management",
      desc: "Mengoptimalkan aset fisik, bisnis, sumber daya, dan akses pasar.",
      icon: "asset",
    },
    {
      number: "03",
      title: "Energy & Sustainability",
      desc: "PLTS, BESS, efisiensi energi, dan sistem energi berkelanjutan.",
      icon: "energy",
    },
    {
      number: "04",
      title: "Digital & Security",
      desc: "Infrastruktur digital, AI surveillance, IoT, dan command center.",
      icon: "digital",
    },
    {
      number: "05",
      title: "Maritime Development",
      desc: "Ekosistem pesisir, cold chain, logistik, dan elektrifikasi pulau.",
      icon: "maritime",
    },
    {
      number: "06",
      title: "Agriculture & Food",
      desc: "Supply chain, pengolahan, distribusi, dan perluasan pasar pangan.",
      icon: "agriculture",
    },
    {
      number: "07",
      title: "Industry & Environment",
      desc: "Optimalisasi industri, pengolahan air, limbah, dan utilitas.",
      icon: "industry",
    },
    {
      number: "08",
      title: "Property & Regional",
      desc: "Masterplan, investasi, operasi, dan aktivasi pasar kawasan.",
      icon: "property",
    },
  ];

  const developmentCycles = [
    {
      number: "01",
      title: "Identify",
      desc: "Mengenali potensi, karakter dan persoalan pada aset atau peluang yang ada.",
    },
    {
      number: "02",
      title: "Analyze",
      desc: "Menganalisis kelayakan, risiko, dan peluang secara teknis, finansial, dan regulatif.",
    },
    {
      number: "03",
      title: "Design",
      desc: "Merancang model bisnis, konsep pengembangan, dan roadmap implementasi yang terukur.",
    },
    {
      number: "04",
      title: "Connect",
      desc: "Membangun kemitraan strategis, ekosistem pendukung, dan jaringan pemangku kepentingan.",
    },
    {
      number: "05",
      title: "Develop",
      desc: "Mengeksekusi rencana pengembangan aset dan bisnis secara terstruktur dan bertahap.",
    },
    {
      number: "06",
      title: "Manage",
      desc: "Mengelola operasional, kinerja, dan tata kelola aset yang sedang berjalan.",
    },
    {
      number: "07",
      title: "Scale",
      desc: "Memperluas skala bisnis, replikasi model, dan ekspansi ke pasar yang lebih luas.",
    },
  ];

  let openCycleIndex = $state<number | null>(null);

  interface EcosystemNode {
    number: string;
    id: string;
    name: string;
    headline: string;
    description: string;
    points: string[];
  }

  let activeNodeId = $state("asset-owner");

  // Data 6 Simpul Ekosistem
  const ecosystemNodes: EcosystemNode[] = [
    {
      number: "01",
      id: "asset-owner",
      name: "Asset Owner",
      headline: "Pemilik Aset & Sumber Daya",
      description:
        "Pemilik aset fisik, lahan, sumber daya alam dan aset usaha yang belum optimal dalam penciptaan nilai ekonomi.",
      points: [
        "Optimalisasi lahan dan properti menganggur",
        "Penyusunan model bisnis dan nilai komersial",
        "Kemitraan strategis jangka panjang",
      ],
    },
    {
      number: "02",
      id: "government",
      name: "Government",
      headline: "Regulator & Mitra Kawasan",
      description:
        "Pemerintah daerah, BUMN/BUMD dan instansi sebagai regulator serta mitra pengembang kawasan strategis.",
      points: [
        "Penyelarasan kebijakan dan perizinan kawasan",
        "Sinergi pembangunan infrastruktur daerah",
        "Kemitraan publik-swasta (KPBU) yang transparan",
      ],
    },
    {
      number: "03",
      id: "investor",
      name: "Investor",
      headline: "Pembiayaan & Penanaman Modal",
      description:
        "Mitra pembiayaan proyek, equity participation dan penyedia struktur investasi yang sehat serta terukur.",
      points: [
        "Strukturasi investasi yang layak dan teruji",
        "Manajemen risiko dan kepatuhan hukum",
        "Imbal hasil yang berkelanjutan (recurring income)",
      ],
    },
    {
      number: "04",
      id: "technology",
      name: "Technology",
      headline: "Penyedia Inovasi & Sistem",
      description:
        "Mitra penyedia teknologi energi terbarukan, infrastruktur digital, AI surveillance dan otomatisasi industri.",
      points: [
        "Integrasi IoT dan sistem monitoring real-time",
        "Penerapan teknologi efisiensi energi (PLTS/BESS)",
        "Digitalisasi manajemen aset dan operasional",
      ],
    },
    {
      number: "05",
      id: "community",
      name: "Community",
      headline: "Pelaku Ekonomi Lokal",
      description:
        "Masyarakat, koperasi dan UMKM sekitar kawasan sebagai penggerak utama kegiatan ekonomi produktif.",
      points: [
        "Penyerapan dan pelatihan tenaga kerja lokal",
        "Pemberdayaan ekonomi berbasis koperasi",
        "Peningkatan dampak sosial (social impact)",
      ],
    },
    {
      number: "06",
      id: "market",
      name: "Market",
      headline: "Akses Pasar & Offtaker",
      description:
        "Kanal distribusi, pembeli siaga (offtaker) dan akses pasar yang menjamin penyerapan hasil proyek.",
      points: [
        "Konektivitas rantai pasok industri dan komersial",
        "Kepastian penyerapan komoditas/energi",
        "Ekspansi jaringan distribusi regional",
      ],
    },
  ];

  // Mengambil node aktif menggunakan rune $derived
  let activeNode = $derived(
    ecosystemNodes.find((node) => node.id === activeNodeId) ||
      ecosystemNodes[0],
  );

  interface PartnerTrack {
    title: string;
    description: string;
  }

  let openPartnerIndices = $state<number[]>([]);

  function togglePartnerTrack(index: number) {
    if (openPartnerIndices.includes(index)) {
      openPartnerIndices = openPartnerIndices.filter((i) => i !== index);
    } else {
      openPartnerIndices = [...openPartnerIndices, index];
    }
  }

  // Data 5 Kartu Strategic Partnership
  const partnerTracks: PartnerTrack[] = [
    {
      title: "Have an Asset?",
      description:
        "Kami bantu membaca potensinya, merancang strategi, dan menyusun model pengembangan.",
    },
    {
      title: "Have Technology?",
      description:
        "Kami hubungkan solusi Anda dengan proyek dan kawasan terpadu yang membutuhkan.",
    },
    {
      title: "Have Capital?",
      description:
        "Kami siapkan struktur proyek yang layak, transparan, terukur, dan berkelanjutan.",
    },
    {
      title: "Have a Market?",
      description:
        "Kami integrasikan pasokan komoditas, energi, dan jasa dari proyek pengembangan kami.",
    },
    {
      title: "Have a Strategic Project?",
      description:
        "Kami dampingi dari penyusunan konsep, eksekusi komersial, hingga implementasi lapangan.",
    },
  ];

  interface PortfolioItem {
    number: string;
    id: string;
    title: string;
    overview: string;
    solution: string;
    impact: string;
  }

  // State Poin Aktif (Default: 'energy')
  let activeId = $state("energy");

  // Data 6 Kategori Portofolio
  const portfolios: PortfolioItem[] = [
    {
      number: "01",
      id: "energy",
      title: "Energy",
      overview:
        "Pengembangan PLTS, BESS dan independent energy system untuk kawasan serta industri.",
      solution:
        "Desain sistem energi hybrid dengan skema pembiayaan dan operasi jangka panjang.",
      impact:
        "Penurunan biaya energi, keandalan pasokan dan pengurangan emisi.",
    },
    {
      number: "02",
      id: "maritime",
      title: "Maritime",
      overview:
        "Modernisasi fasilitas pelabuhan, rantai dingin (cold storage), dan logistik maritim.",
      solution:
        "Pembangunan rantai dingin terintegrasi dengan jaringan logistik lokal dan regional.",
      impact:
        "Peningkatan kualitas hasil tangkapan dan kesejahteraan komunitas pesisir.",
    },
    {
      number: "03",
      id: "industrial",
      title: "Industrial",
      overview:
        "Pengembangan kawasan industri hijau bernilai tambah dan siap huni.",
      solution:
        "Integrasi utilitas bersama dan otomatisasi manajemen fasilitas terpusat.",
      impact: "Efisiensi biaya operasional tenant dan daya saing kawasan.",
    },
    {
      number: "04",
      id: "digital-security",
      title: "Digital & Security",
      overview:
        "Pembangunan infrastruktur digital, sensor pintar, dan kedaulatan data kawasan.",
      solution:
        "Penerapan jaringan privat terenkripsi dan dashboard monitoring terpusat.",
      impact:
        "Transparansi data real-time dan peningkatan keandalan sistem keamanan.",
    },
    {
      number: "05",
      id: "agriculture",
      title: "Agriculture",
      overview:
        "Pengembangan kawasan agribisnis dan akuakultur presisi berkelanjutan.",
      solution:
        "Implementasi sensor tanah/air dan skema off-taker langsung ke industri.",
      impact:
        "Peningkatan produktivitas panen dan stabilitas pendapatan petani.",
    },
    {
      number: "06",
      id: "environment",
      title: "Environment",
      overview:
        "Proyek konservasi, pengolahan air limbah, dan penataan ruang hijau.",
      solution:
        "Penerapan konsep circular economy dan fasilitas daur ulang terpadu.",
      impact: "Pemulihan kualitas lingkungan dan penciptaan green jobs.",
    },
  ];

  // Mengambil item portofolio aktif menggunakan rune $derived
  let activeItem = $derived(
    portfolios.find((item) => item.id === activeId) || portfolios[0],
  );

  interface EsgPillar {
    id: string;
    number: string;
    title: string;
    desc: string;
  }

  // State untuk menyimpan ID pillar ESG yang terbuka
  let openEsgIds = $state<string[]>([]);

  function toggleEsg(id: string) {
    if (openEsgIds.includes(id)) {
      openEsgIds = openEsgIds.filter((itemId) => itemId !== id);
    } else {
      openEsgIds = [...openEsgIds, id];
    }
  }

  // Data ESG Pillars lengkap dengan deskripsi
  const esgPillars: EsgPillar[] = [
    {
      id: "profit",
      number: "01",
      title: "Profit",
      desc: "Menciptakan nilai ekonomi yang berkelanjutan dan pertumbuhan pendapatan berulang bagi seluruh pemangku kepentingan.",
    },
    {
      id: "people",
      number: "02",
      title: "People",
      desc: "Memberdayakan masyarakat lokal, meningkatkan keterampilan sumber daya manusia, dan menciptakan lingkungan kerja inklusif.",
    },
    {
      id: "planet",
      number: "03",
      title: "Planet",
      desc: "Menerapkan teknologi ramah lingkungan, efisiensi energi terbarukan, dan prinsip circular economy untuk menekan emisi.",
    },
    {
      id: "partnership",
      number: "04",
      title: "Partnership",
      desc: "Membangun sinergi transparan dan jangka panjang antara pemilik aset, pemerintah, investor, dan mitra teknologi.",
    },
  ];

  interface JourneyMilestone {
    year: string;
    title: string;
    description: string;
  }

  // State Tahun Aktif (Default: '2020')
  let activeYear = $state("2020");

  // Data Perjalanan Perusahaan (2020 - 2026)
  const journeyMilestones: JourneyMilestone[] = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Fondasi perusahaan dan pembangunan jejaring usaha serta peluang pengembangan aset.",
    },
    {
      year: "2021",
      title: "Network",
      description:
        "Penguatan aktivitas bisnis, perdagangan, relasi usaha, dan pemetaan ulang lintas sektor.",
    },
    {
      year: "2022",
      title: "Strategic Partnership",
      description:
        "Perluasan pendekatan kemitraan dan pengembangan proyek berbasis kolaborasi.",
    },
    {
      year: "2023",
      title: "Business Development",
      description:
        "Penguatan fungsi business development, supply chain, dan integrasi kebutuhan mitra.",
    },
    {
      year: "2024",
      title: "Multi-Sector Expansion",
      description:
        "Ekspansi pengembangan pada energi, lingkungan, maritim, pangan, dan pengelolaan aset.",
    },
    {
      year: "2025",
      title: "Technology Integration",
      description:
        "Penguatan kolaborasi teknologi, renewable energy, digitalisasi, surveillance, dan pengelolaan aset.",
    },
    {
      year: "2026",
      title: "Positioning",
      description:
        "Reposisi dan konsolidasi sebagai Strategy Development & Asset Management Partner dengan pendekatan integrated business ecosystem.",
    },
  ];

  // Mengambil data milestone aktif menggunakan rune $derived
  let activeMilestone = $derived(
    journeyMilestones.find((m) => m.year === activeYear) ||
      journeyMilestones[0],
  );

  let activeIndex = $derived(
    journeyMilestones.findIndex((m) => m.year === activeYear),
  );

  interface Leader {
    name: string;
    role?: string;
  }

  interface LegalDoc {
    id: string;
    number: string;
    title: string;
    description: string;
  }

  let openLeaderIndices = $state<number[]>([]);

  function toggleLeader(index: number) {
    if (openLeaderIndices.includes(index)) {
      openLeaderIndices = openLeaderIndices.filter((i) => i !== index);
    } else {
      openLeaderIndices = [...openLeaderIndices, index];
    }
  }

  // Data Leadership Team
  const leadershipTeam: Leader[] = [
    { name: "Grace Diana Hariadinata", role: "Commissioner" },
    { name: "Dodik Kurniawan", role: "Director" },
    { name: "Dodiet Herry Kiswanto", role: "Head of Operation" },
    { name: "Hari Utomo", role: "Operational Staff" },
  ];

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
  <title
    >PT Arta Loka Wisala — Strategy Development & Asset Management Partner</title
  >
  <meta
    name="description"
    content="PT Arta Loka Wisala menghubungkan aset, strategi, teknologi, modal, jaringan, dan pasar untuk membangun proyek serta ekosistem bisnis yang produktif dan berkelanjutan."
  />
</svelte:head>

<!-- Hero Section with arta-loka-hero.jpg -->
<Hero />

<!-- About Us -->
<section
  id="about-us"
  class="section-light"
  aria-label="About PT Arta Loka Wisala"
>
  <div class="container">
    <!-- Top Row: Editorial Content & Strategy Meeting Image -->
    <div class="about-main-grid">
      <!-- Left Column: Copywriting -->
      <div class="about-content">
        <div class="tagline-wrapper">
          <span class="tagline">WHO WE ARE</span>
          <span class="tagline-bar" aria-hidden="true"></span>
        </div>

        <h2 class="title-dark">
          More than an<br />
          asset manager.<br />
          We are a strategic<br />
          development partner.
        </h2>

        <p class="desc-dark">
          PT Arta Loka Wisala membantu pemilik aset, perusahaan, investor,
          pemerintah, BUMN/BUMD, koperasi dan mitra strategis dalam
          mengidentifikasi potensi, menyusun strategi, membangun kemitraan serta
          mengembangkan aset menjadi kegiatan ekonomi produktif.
        </p>

        <div class="business-action">
          <a href="/about" class="button-light">
            <span>ABOUT US</span>
            <svg
              class="button-icon"
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
    <div class="pillars-container" role="region" aria-label="Strategic Pillars">
      <div class="pillars-grid">
        {#each pillars as pillar, index}
          {@const isOpen = openPillarIndices.includes(index)}
          <div
            class="pillar-item"
            class:active={isOpen}
            onclick={() => togglePillar(index)}
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                togglePillar(index);
              }
            }}
            role="button"
            tabindex="0"
            aria-pressed={isOpen}
          >
            <div class="pillar-inner">
              <span class="pillar-number">{pillar.number}</span>
              <h3 class="pillar-title">{pillar.title}</h3>
              <div class="pillar-accent-line" aria-hidden="true"></div>
              <p class="pillar-desc" class:visible={isOpen}>
                {pillar.description}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Our Business Ecosystem -->
<section class="section-dark" aria-label="Our Business Ecosystem">
  <div class="container">
    <!-- Badge & Header -->
    <div class="eco-intro">
      <div class="tagline-wrapper">
        <span class="tagline">OUR BUSINESS ECOSYSTEM</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-light">We connect the ecosystem.</h2>
      <p class="desc-light">
        PT Arta Loka Wisala berfungsi sebagai Strategic Integrator yang
        mempertemukan pemilik aset, pemerintah, investor, teknologi, masyarakat
        dan pasar.
      </p>
    </div>

    <!-- Content Grid (Master-Detail) -->
    <div class="eco-content">
      <!-- KOLOM KIRI: LIST SIMPUL (VERTICAL TABS) -->
      <div class="nodes-list" role="tablist">
        {#each ecosystemNodes as node}
          <button
            type="button"
            role="tab"
            class="node-btn"
            class:is-active={activeNodeId === node.id}
            aria-selected={activeNodeId === node.id}
            onclick={() => (activeNodeId = node.id)}
          >
            <span class="node-number">{node.number}</span>
            <span class="node-name">{node.name}</span>

            <!-- Aksen Garis Emas Sesuai Gambar Rujukan -->
            {#if activeNodeId === node.id}
              <div class="active-line" aria-hidden="true"></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- KOLOM KANAN: DISPLAY DESKRIPSI (RUANG TERISI PADAT) -->
      <div class="node-display">
        <div class="display-header">
          <span class="node-sublabel">ECOSYSTEM NODE</span>
          <h3 class="node-title">{activeNode.name}</h3>
        </div>

        <p class="node-desc">{activeNode.description}</p>

        <!-- Poin-Poin Peran (Mengeliminasi Ruang Kosong) -->
        <div class="node-highlights">
          <span class="highlights-label">PERAN &amp; FOKUS UTAMA</span>
          <ul class="highlights-list">
            {#each activeNode.points as point}
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="check-icon"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{point}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <!-- Bottom CTA Button -->
    <div class="business-action">
      <a href="/our-business" class="button-dark">
        <span>Our Business</span>
        <svg
          class="button-icon"
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

<!-- Our Business Sector -->
<section
  id="our-business"
  class="section-light"
  aria-label="Our Business Sectors"
>
  <div class="container">
    <!-- Header Row: Two columns on desktop -->
    <div class="business-header">
      <div class="header-left">
        <div class="tagline-wrapper">
          <span class="tagline">OUR BUSINESS SECTORS</span>
          <span class="tagline-bar" aria-hidden="true"></span>
        </div>
        <h2 class="title-dark">
          Integrated multi-sector<br />development.
        </h2>
      </div>
      <div class="header-right">
        <p class="desc-dark">
          Kompetensi lintas sektor untuk mengubah peluang menjadi model bisnis
          yang siap bergerak.
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
            {#if sector.icon === "strategy"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
                <line x1="2" y1="20" x2="22" y2="20"></line>
              </svg>
            {:else if sector.icon === "asset"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="5" y="3" width="14" height="18" rx="1.5"></rect>
                <line x1="9" y1="8" x2="10" y2="8"></line>
                <line x1="14" y1="8" x2="15" y2="8"></line>
                <line x1="9" y1="12" x2="10" y2="12"></line>
                <line x1="14" y1="12" x2="15" y2="12"></line>
                <path d="M10 21v-4h4v4"></path>
              </svg>
            {:else if sector.icon === "energy"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
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
            {:else if sector.icon === "digital"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9-9"></path>
                <path d="M8 15a9 9 0 0 1 9-9"></path>
                <path d="M3 21l8-8"></path>
                <path d="M12 20l7-7-3-3-7 7 3 3z"></path>
              </svg>
            {:else if sector.icon === "maritime"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0"></path>
                <path d="M3.5 16.5L5.5 10h13l2 6.5"></path>
                <path d="M9 10V6h6v4"></path>
                <line x1="12" y1="3" x2="12" y2="6"></line>
              </svg>
            {:else if sector.icon === "agriculture"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M11 20A7 7 0 0 1 4 13c0-7 7-9 7-9s7 2 7 9a7 7 0 0 1-7 7z"
                ></path>
                <path d="M11 4v16"></path>
              </svg>
            {:else if sector.icon === "industry"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 20h20"></path>
                <path d="M2 20V10l5 3V10l5 3V5h8v15"></path>
              </svg>
            {:else if sector.icon === "property"}
              <svg
                class="sector-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
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
      <a href="/services" class="button-light">
        <span>Our Services</span>
        <svg
          class="button-icon"
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

<!-- Development Cycle -->
<section class="section-dark" aria-label="Development Cycle">
  <div class="container">
    <!-- Badge & Intro Header -->
    <div class="cycle-intro">
      <div class="tagline-wrapper">
        <span class="tagline">DEVELOPMENT CYCLE</span>
        <div class="tagline-bar" aria-hidden="true"></div>
      </div>
      <h2 class="title-light">From potential to sustainable business.</h2>
    </div>

    <!-- Main Content Layout (Circle + Side Details) -->
    <div class="cycle-content">
      <!-- KOLOM KIRI: CIRCULAR DIAGRAM INTEGRATED -->
      <div class="cycle-diagram-wrapper">
        <div class="circle-container">
          <!-- Outer SVG Arrows Ring -->
          <svg class="ring-svg" viewBox="0 0 500 500" aria-hidden="true">
            <!-- Lingkaran Pembatas Emas -->
            <circle
              cx="250"
              cy="250"
              r="140"
              fill="none"
              stroke="#d79f39"
              stroke-width="3"
              opacity="0.85"
            />

            <!-- 7 Panah Searah Jarum Jam di Sepanjang Lingkaran -->
            {#each cycleArrows as arrow}
              <g
                transform="translate({arrow.x}, {arrow.y}) rotate({arrow.rotation})"
              >
                <polygon points="-8,-6 10,0 -8,6" fill="#d79f39" />
              </g>
            {/each}
          </svg>

          <!-- Tampilan Teks di Tengah Lingkaran (Center Display) -->
          <div class="circle-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="center-icon"
            >
              {@html activeStep.iconSvg}
            </svg>
            <span class="center-number">0{activeStep.id}</span>
            <span class="center-total">OF 07</span>
          </div>

          <!-- 7 Label Teks Luar (Diposisikan Presisi) -->
          <div class="labels-wrapper">
            {#each cycleNodePositions as item}
              <div
                class="node-label"
                class:is-active={activeStepId === item.id}
                style="left: {item.lx}px; top: {item.ly}px;"
              >
                <span class="node-step">{item.stepNumber}</span>
                <span class="node-title">{item.label}</span>
              </div>
            {/each}
          </div>

          <!-- 7 Tombol Simbol Lingkaran (Posisi Memutar) -->
          <div class="nodes-wrapper">
            {#each cycleNodePositions as item}
              <button
                type="button"
                class="node-button"
                class:is-active={activeStepId === item.id}
                style="left: {item.nx}px; top: {item.ny}px;"
                onclick={() => (activeStepId = item.id)}
                aria-label={`Step 0${item.id}: ${item.label}`}
              >
                <!-- Ikon Lingkaran (Dapat Di-klik) -->
                <div class="node-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {@html item.iconSvg}
                  </svg>
                </div>
              </button>
            {/each}
          </div>
        </div>
      </div>

      <!-- KOLOM KANAN: DETAIL STEP DISPLAY -->
      <div class="cycle-details">
        <span class="details-step-badge">STEP 0{activeStep.id} / 07</span>

        <div class="details-title-group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="details-icon"
          >
            {@html activeStep.iconSvg}
          </svg>
          <h3 class="details-title">{activeStep.title}</h3>
        </div>

        <div class="details-line" aria-hidden="true"></div>

        <p class="details-desc">{activeStep.description}</p>
      </div>
    </div>
  </div>
</section>

<!-- Asset Management Development -->
<section class="section-light" aria-label="Asset Management Development">
  <div class="container">
    <!-- Watermark Teks Latar Belakang (ASSET) -->
    <div class="watermark-text" aria-hidden="true">ASSET</div>

    <!-- Badge & Section Header -->
    <div class="asset-dev-intro">
      <div class="tagline-wrapper">
        <span class="tagline">ASSET MANAGEMENT DEVELOPMENT</span>
        <div class="tagline-bar" aria-hidden="true"></div>
      </div>
      <h2 class="title-dark">Unlocking Asset Value</h2>
      <p class="desc-dark">
        Kami membaca potensi ekonomi dari setiap jenis aset — fisik, sumber daya
        alam, bisnis dan jaringan — lalu menyusun model pengembangan yang
        mengubah aset idle menjadi kegiatan ekonomi produktif dan berkelanjutan.
      </p>
    </div>

    <!-- 4 Interactive Horizontal Asset Steps -->
    <div class="asset-steps-wrapper">
      <div class="asset-steps-grid">
        {#each assetTypes as item}
          <button
            type="button"
            class="asset-step-card"
            class:is-active={activeAssetIds.includes(item.id)}
            onclick={() => toggleAssetStep(item.id)}
          >
            <span class="step-number">{item.number}</span>

            <div class="step-icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {@html item.iconSvg}
              </svg>
            </div>

            <h3 class="step-title">{item.title}</h3>

            <!-- Deskripsi ringkas hanya muncul pada item aktif -->
            {#if activeAssetIds.includes(item.id)}
              <p class="step-desc">{item.description}</p>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Connecting Line Indicator -->
      <div class="steps-connecting-line" aria-hidden="true"></div>
    </div>

    <!-- CTA Button -->
    <div class="asset-dev-action">
      <a href="#as" class="button-light">
        <span>EXPLORE ASSET MANAGEMENT</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
  </div>
</section>

<!-- Project & Portfolio -->
<section class="section-dark" aria-label="Project and Portfolio">
  <div class="container">
    <!-- Badge & Intro Header -->
    <div class="portfolio-intro">
      <div class="tagline-wrapper">
        <span class="tagline">PROJECT &amp; PORTFOLIO</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-light">Show results, not only services.</h2>
      <p class="desc-light">
        Enam kategori portofolio. Pilih satu untuk melihat ringkasan dan
        dampaknya.
      </p>
    </div>

    <!-- Content Grid (Master-Detail) -->
    <div class="portfolio-content">
      <!-- KOLOM KIRI: LIST POIN (INTERACTIVE BUTTONS) -->
      <div class="portfolio-list" role="tablist">
        {#each portfolios as item}
          <button
            type="button"
            role="tab"
            class="portfolio-btn"
            class:is-active={activeId === item.id}
            aria-selected={activeId === item.id}
            onclick={() => (activeId = item.id)}
          >
            <span class="btn-number">{item.number}</span>
            <span class="btn-title">{item.title}</span>

            <!-- Indikator Garis Emas Sesuai Gambar -->
            {#if activeId === item.id}
              <div class="active-line" aria-hidden="true"></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- KOLOM KANAN: DISPLAY DETAIL PORTOFOLIO -->
      <div class="portfolio-display">
        <div class="display-header">
          <span class="display-badge">PORTFOLIO FOCUS</span>
          <h3 class="display-title">{activeItem.title}</h3>
        </div>

        <p class="display-overview">{activeItem.overview}</p>

        <!-- Poin Solution & Impact -->
        <div class="display-specs">
          <div class="spec-row">
            <span class="spec-label">SOLUTION</span>
            <p class="spec-text">{activeItem.solution}</p>
          </div>

          <div class="spec-row">
            <span class="spec-label">IMPACT</span>
            <p class="spec-text">{activeItem.impact}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom CTA Button -->
    <div class="business-action">
      <a href="/projects" class="button-dark">
        <span>See our projects</span>
        <svg
          class="button-icon"
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

<!-- Strategic Partnership -->
<section class="section-light" aria-label="Strategic Partnership">
  <div class="container">
    <!-- Badge & Intro Header -->
    <div class="partner-intro">
      <div class="tagline-wrapper">
        <span class="tagline">STRATEGIC PARTNERSHIP</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-dark">Let's build value together</h2>
      <p class="desc-dark">
        Titik temu bagi pemilik aset, penyedia teknologi, pemilik kapital,
        pemegang pasar dan pengelola proyek strategis.
      </p>
    </div>

    <!-- 5-Column Interactive Grid -->
    <div class="partner-grid">
      {#each partnerTracks as track, index}
        {@const isOpen = openPartnerIndices.includes(index)}
        <div
          class="partner-card"
          class:active={isOpen}
          onclick={() => togglePartnerTrack(index)}
          onkeydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              togglePartnerTrack(index);
            }
          }}
          role="button"
          tabindex="0"
          aria-pressed={isOpen}
        >
          <div class="card-content">
            <h3 class="card-title">{track.title}</h3>
            <div class="card-line" aria-hidden="true"></div>

            <p class="card-desc" class:visible={isOpen}>{track.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Bottom CTA Button -->
    <div class="business-action">
      <a href="/partnership" class="button-light">
        <span>Partnership</span>
        <svg
          class="button-icon"
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

<!-- Management -->
<section class="section-dark" aria-label="Management and Legality">
  <div class="container">
    <!-- BAGIAN 1 (ATAS): MANAGEMENT / LEADERSHIP TEAM -->
    <div class="management-block">
      <div class="section-intro">
        <div class="tagline-wrapper">
          <span class="tagline">MANAGEMENT</span>
          <span class="tagline-bar" aria-hidden="true"></span>
        </div>
        <h2 class="title-light">Leadership team</h2>
      </div>

      <!-- Grid 2x2 Leadership Cards -->
      <div class="leadership-grid">
        {#each leadershipTeam as person, index}
          {@const isOpen = openLeaderIndices.includes(index)}
          <div
            class="leader-card"
            class:active={isOpen}
            onclick={() => toggleLeader(index)}
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleLeader(index);
              }
            }}
            role="button"
            tabindex="0"
            aria-pressed={isOpen}
          >
            <div class="leader-info">
              <h3 class="leader-name">{person.name}</h3>
              <p class="leader-role" class:visible={isOpen}>{person.role}</p>
            </div>
            <div class="leader-card-line" aria-hidden="true"></div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom CTA Button -->
    <div class="business-action">
      <a href="#about-us" class="button-dark">
        <span>About Us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- ESG & Impact-->
<section class="section-light" aria-label="ESG Impact and Corporate Journey">
  <div class="container">
    <!-- KOLOM KIRI: ESG & IMPACT -->
    <div class="impact-col">
      <div class="section-intro">
        <div class="tagline-wrapper">
          <span class="tagline">ESG &amp; IMPACT</span>
          <span class="tagline-bar" aria-hidden="true"></span>
        </div>
        <h2 class="title-dark">Business with purpose</h2>
        <p class="desc-dark">
          Keseimbangan Profit, People, Planet dan Partnership pada setiap
          pengembangan.
        </p>
      </div>

      <!-- Markup Grid 4 Columns ESG Pillars -->
      <div class="esg-grid">
        {#each esgPillars as item}
          {@const isOpen = openEsgIds.includes(item.id)}
          <button
            type="button"
            class="esg-card"
            class:is-active={isOpen}
            onclick={() => toggleEsg(item.id)}
            aria-expanded={isOpen}
          >
            <div class="esg-card-header">
              <span class="esg-number">{item.number}</span>
              <span class="esg-toggle-icon">{isOpen ? "−" : "+"}</span>
            </div>

            <h3 class="esg-card-title">{item.title}</h3>
            <div class="esg-card-line" aria-hidden="true"></div>

            <!-- Deskripsi hanya muncul ketika aktif -->
            {#if isOpen}
              <p class="esg-card-desc">{item.desc}</p>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Bottom CTA Button -->
      <div class="esg-action">
        <a href="/esg" class="button-light">
          <span>ESG DETAIL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Corporate Journey -->
<section class="section-dark" aria-label="ESG Impact and Corporate Journey">
  <div class="container">
    <!-- CORPORATE JOURNEY -->
    <div class="journey-col">
      <div class="section-intro">
        <div class="tagline-wrapper">
          <span class="section-badge">CORPORATE JOURNEY</span>
          <span class="section-badge-bar" aria-hidden="true"></span>
        </div>
        <h2 class="title-light">Our journey 2020 — 2026</h2>
      </div>

      <!-- Interactive Timeline Component -->
      <div class="timeline-wrapper">
        <div class="timeline-track">
          {#each journeyMilestones as item}
            <button
              type="button"
              class="timeline-node"
              class:is-active={activeYear === item.year}
              onclick={() => (activeYear = item.year)}
            >
              <span class="timeline-year">{item.year}</span>
              <div class="timeline-connector">
                <div class="timeline-line"></div>
                <div class="timeline-diamond"></div>
              </div>
            </button>
          {/each}
          <div class="timeline-base-line" aria-hidden="true">
            <div
              class="timeline-progress-line"
              style="width: {(activeIndex / (journeyMilestones.length - 1)) *
                100}%;"
            ></div>
          </div>
        </div>
      </div>

      <!-- Milestone Detail Display -->
      <div class="milestone-display-container">
        {#key activeYear}
          <div
            class="milestone-display"
            in:fly={{ y: 14, duration: 350, delay: 90 }}
            out:fade={{ duration: 140 }}
          >
            <span class="milestone-year-badge">{activeMilestone.year}</span>
            <h3 class="milestone-title">{activeMilestone.title}</h3>
            <p class="milestone-desc">{activeMilestone.description}</p>
          </div>
        {/key}
      </div>

      <!-- Bottom CTA Button -->
      <div class="business-action">
        <a href="/about" class="button-dark">
          <span>ABOUT US</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Corporate Legality -->
<section class="section-light" aria-label="Management and Legality">
  <div class="container">
    <!-- BAGIAN 2 (BAWAH): CORPORATE LEGALITY -->
    <div class="legality-block">
      <div class="section-intro">
        <div class="tagline-wrapper">
          <span class="tagline">CORPORATE LEGALITY</span>
          <span class="tagline-bar" aria-hidden="true"></span>
        </div>
        <h2 class="title-dark">Trust ▪ Compliance ▪ Accountability</h2>
        <p class="desc-dark">
          Status verifikasi ditampilkan ringkas; dokumen lengkap melalui due
          diligence.
        </p>
      </div>

      <!-- 3-Column Document Cards Grid -->
      <div class="legality-grid">
        <!-- Card 1 -->
        <div class="legality-card">
          <div class="legality-card-top">
            <div class="legality-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="legality-card-title">Akta Pendirian</h3>
            <p class="legality-card-desc">
              Dokumen pendirian perseroan beserta perubahan terakhir.
            </p>
          </div>
          <span class="status-tag verified">VERIFIED</span>
        </div>

        <!-- Card 2 -->
        <div class="legality-card">
          <div class="legality-card-top">
            <div class="legality-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="legality-card-title">SK Kemenkumham</h3>
            <p class="legality-card-desc">Pengesahan badan hukum perseroan.</p>
          </div>
          <span class="status-tag verified">VERIFIED</span>
        </div>

        <!-- Card 3 -->
        <div class="legality-card">
          <div class="legality-card-top">
            <div class="legality-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="legality-card-title">NIB</h3>
            <p class="legality-card-desc">
              Nomor Induk Berusaha melalui sistem OSS.
            </p>
          </div>
          <span class="status-tag verified">VERIFIED</span>
        </div>

        <!-- Card 4 -->
        <div class="legality-card">
          <div class="legality-card-top">
            <div class="legality-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="legality-card-title">NPWP</h3>
            <p class="legality-card-desc">
              Nomor pokok wajib pajak perusahaan.
            </p>
          </div>
          <span class="status-tag verified">VERIFIED</span>
        </div>

        <!-- Card 5 -->
        <div class="legality-card">
          <div class="legality-card-top">
            <div class="legality-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="legality-card-title">KBLI / Bidang Usaha</h3>
            <p class="legality-card-desc">
              Klasifikasi bidang usaha yang terdaftar.
            </p>
          </div>
          <span class="status-tag verified">VERIFIED</span>
        </div>

        <!-- Card 6 -->
        <div class="legality-card">
          <div class="legality-card-top">
            <div class="legality-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="legality-card-title">Sertifikat Standar / Izin Usaha</h3>
            <p class="legality-card-desc">
              Izin sektoral relevan sesuai kegiatan proyek.
            </p>
          </div>
          <span class="status-tag request">ON REQUEST</span>
        </div>
      </div>
    </div>

    <!-- Bottom CTA Button -->
    <div class="business-action">
      <a href="/legality" class="button-dark">
        <span>LEGALITY DETAIL</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- News & Insight Section -->
<section class="section-dark" aria-label="News and Insight">
  <div class="container">
    <!-- Badge & Header -->
    <div class="insight-intro">
      <div class="tagline-wrapper">
        <span class="tagline">NEWS &amp; INSIGHT</span>
        <span class="tagline-bar" aria-hidden="true"></span>
      </div>
      <h2 class="title-light">Corporate news &amp; sector insight</h2>
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

    <!-- Bottom CTA Button -->
    <div class="business-action">
      <a href="/news" class="button-dark">
        <span>Read News</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  /* ==========================================================================
	   About Us
	   ========================================================================== */
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
    border: 2px solid var(--color-gold, #d79f39);
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
    border-right: 1px solid var(--color-gold, #d79f39);
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
    transition:
      background-color 0.25s ease,
      box-shadow 0.25s ease;
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
    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s ease;
    pointer-events: none;
  }

  .pillar-desc.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }

  /* ===========================================================
     Business Ecosystem
     =========================================================== */

  /* Grid Layout (2 Columns Master-Detail) */
  .eco-content {
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: start;
  }

  /* KOLOM KIRI: Vertical Tabs List */
  .nodes-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .node-btn {
    position: relative;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 22px 16px;
    display: flex;
    align-items: center;
    gap: 24px;
    text-align: left;
    cursor: pointer;
    transition: all 0.25s ease;
    width: 100%;
  }

  .node-btn:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .node-btn.is-active {
    background: rgba(255, 255, 255, 0.05);
  }

  .node-number {
    font-size: 0.85rem;
    font-weight: 800;
    color: #64748b;
    transition: color 0.25s ease;
  }

  .node-btn.is-active .node-number,
  .node-btn:hover .node-number {
    color: var(--color-gold, #d79f39);
  }

  .node-name {
    font-size: 1.2rem;
    font-weight: 700;
    color: #9ab2cb;
    transition: color 0.25s ease;
  }

  .node-btn.is-active .node-name {
    color: #ffffff;
    font-weight: 800;
  }

  .node-btn:hover .node-name {
    color: #ffffff;
  }

  /* Aksen Garis Emas di Kanan Tombol Aktif */
  .active-line {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 2px;
    background-color: var(--color-gold, #d79f39);
  }

  /* KOLOM KANAN: Display Detail (Tanpa Ruang Kosong) */
  .node-display {
    border-left: 2px solid var(--color-gold, #d79f39);
    padding-left: 40px;
    display: flex;
    flex-direction: column;
  }

  .display-header {
    margin-bottom: 16px;
  }

  .node-sublabel {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--color-gold, #d79f39);
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
  }

  .node-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .node-desc {
    font-size: 1.05rem;
    color: #9ab2cb;
    line-height: 1.7;
    margin: 0 0 32px 0;
  }

  /* Highlights / Poin-Poin Peran */
  .node-highlights {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 28px;
  }

  .highlights-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #ffffff;
    text-transform: uppercase;
    display: block;
    margin-bottom: 16px;
  }

  .highlights-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .highlights-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.925rem;
    color: #e2e8f0;
  }

  .check-icon {
    color: var(--color-gold, #d79f39);
    flex-shrink: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .eco-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .node-display {
      border-left: none;
      padding-left: 0;
      border-top: 2px solid var(--color-gold, #d79f39);
      padding-top: 32px;
    }
  }

  @media (max-width: 640px) {
    .node-title {
      font-size: 1.75rem;
    }

    .node-highlights {
      padding: 16px;
    }
  }
  /* ===========================================================
     Development Cycle
     =========================================================== */

  /* Badge & Section Header */
  .cycle-intro {
    margin-bottom: 60px;
  }

  /* Content Grid Layout */
  .cycle-content {
    display: grid;
    grid-template-columns: 520px 1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: center;
    min-width: 0;
    width: 100%;
  }

  /* Diagram Wadah Lingkaran */
  .cycle-diagram-wrapper {
    position: relative;
    width: 100%;
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-container {
    position: relative;
    width: 500px;
    height: 500px;
    flex-shrink: 0;
    transform-origin: center center;
    transition: transform 0.25s ease;
  }

  .ring-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* Tampilan Tengah Lingkaran */
  .circle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 2;
  }

  .center-icon {
    color: var(--color-gold, #d79f39);
    margin-bottom: 4px;
  }

  .center-number {
    font-size: 2.2rem;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
  }

  .center-total {
    font-size: 9.5px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #64748b;
    margin-top: 4px;
  }

  /* Labels Layer (Diposisikan di Luar Lingkaran) */
  .labels-wrapper {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .node-label {
    position: absolute;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
    z-index: 4;
    transition: all 0.25s ease;
  }

  .node-step {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--color-gold, #d79f39);
    text-transform: uppercase;
    line-height: 1.2;
  }

  .node-title {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #ffffff;
    text-transform: uppercase;
    line-height: 1.2;
    margin-top: 2px;
  }

  .node-label.is-active .node-step {
    color: var(--color-gold, #d79f39);
  }

  .node-label.is-active .node-title {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  /* Node Buttons Posisi Memutar */
  .nodes-wrapper {
    position: absolute;
    inset: 0;
  }

  .node-button {
    position: absolute;
    transform: translate(-50%, -50%);
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    outline: none;
  }

  .node-circle {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #071b38;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
    transition: all 0.25s ease;
  }

  /* Status Aktif (Warna Emas & Membesar Sesuai Gambar 1) */
  .node-button.is-active .node-circle {
    background-color: var(--color-gold, #d79f39);
    color: #071b38;
    transform: scale(1.15);
    box-shadow: 0 0 24px rgba(215, 159, 57, 0.7);
  }

  .node-button:hover:not(.is-active) .node-circle {
    transform: scale(1.08);
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.4);
  }

  /* KOLOM KANAN: Panel Details Display */
  .cycle-details {
    border-left: 1px solid rgba(255, 255, 255, 0.15);
    padding-left: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 280px;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .details-step-badge {
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: var(--color-gold, #d79f39);
    text-transform: uppercase;
    margin-bottom: 16px;
    display: block;
  }

  .details-title-group {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    min-width: 0;
    width: 100%;
  }

  .details-icon {
    color: var(--color-gold, #d79f39);
    flex-shrink: 0;
  }

  .details-title {
    font-size: clamp(2.2rem, 3.5vw, 3rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.01em;
    line-height: 1.1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .details-line {
    width: 44px;
    height: 3px;
    background-color: var(--color-gold, #d79f39);
    border-radius: 1px;
    margin-bottom: 24px;
  }

  .details-desc {
    font-size: clamp(1rem, 1.2vw, 1.15rem);
    color: #9ab2cb;
    line-height: 1.7;
    margin: 0;
    max-width: 500px;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  /* Responsive Design */
  @media (max-width: 1100px) {
    .cycle-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .cycle-details {
      border-left: none;
      padding-left: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 32px;
      min-height: auto;
    }
  }

  @media (max-width: 540px) {
    .cycle-intro {
      margin-bottom: 16px;
    }

    .cycle-diagram-wrapper {
      width: 100%;
      height: calc(500px * clamp(0.38, (100vw - 40px) / 850, 0.6));
      overflow: visible;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .circle-container {
      --diagram-scale: clamp(0.38, calc((100vw - 40px) / 850), 0.6);
      transform: scale(var(--diagram-scale));
      transform-origin: top center;
      margin: 0 auto;
    }

    .cycle-content {
      gap: 0;
    }

    .cycle-details {
      padding-top: 24px;
    }

    .details-title {
      font-size: clamp(1.65rem, 6vw, 2.2rem);
    }

    .details-desc {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }

  /* ===========================================================
     Asset Management Development
     =========================================================== */

  /* Watermark "ASSET" Teks Latar Belakang (Versi Terang) */
  .watermark-text {
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: clamp(8rem, 20vw, 22rem);
    font-weight: 900;
    color: rgba(13, 30, 56, 0.03); /* Warna lembut dalam tema terang */
    letter-spacing: 0.05em;
    pointer-events: none;
    z-index: 1;
    user-select: none;
  }

  /* Badge & Section Header */
  .asset-dev-intro {
    margin-bottom: 56px;
    max-width: 760px;
  }

  /* Interactive Steps Layout */
  .asset-steps-wrapper {
    position: relative;
    margin-bottom: 40px;
  }

  .asset-steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    align-items: start;
    position: relative;
    z-index: 2;
  }

  /* Connecting Line (Sejajar dengan titik tengah lingkaran ikon) */
  .steps-connecting-line {
    position: absolute;
    top: 68px;
    left: 12.5%;
    right: 12.5%;
    height: 2px;
    background-color: #e2e8f0;
    z-index: 1;
  }

  /* Step Card Button Styling */
  .asset-step-card {
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 2;
    transition: transform 0.25s ease;
  }

  .step-number {
    font-size: 1.5rem;
    font-weight: 800;
    color: #55667c;
    margin-bottom: 12px;
    transition: color 0.25s ease;
  }

  .step-icon-circle {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #e2e8f0;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }

  .step-title {
    font-size: 1.1rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 8px 0;
    transition: color 0.25s ease;
  }

  .step-desc {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.55;
    margin: 0;
    max-width: 240px;
  }

  /* ACTIVE STATE (Item Terpilih) */
  .asset-step-card.is-active .step-number {
    color: var(--color-gold, #c08d2b);
  }

  .asset-step-card.is-active .step-icon-circle {
    background-color: var(--color-gold, #c08d2b);
    border-color: var(--color-gold, #c08d2b);
    color: #0d1e38;
    transform: scale(1.15);
    box-shadow: 0 8px 20px rgba(192, 141, 43, 0.25);
  }

  .asset-step-card.is-active .step-title {
    color: #0d1e38;
  }

  .asset-step-card:hover .step-icon-circle {
    border-color: var(--color-gold, #c08d2b);
  }

  /* Value Flow Indicator (IDLE ASSET -> PRODUCTIVE VALUE) */

  /* CTA Button Styling */
  .asset-dev-action {
    display: flex;
  }

  /* Responsive Adjustments */
  @media (max-width: 992px) {
    .asset-steps-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }

    .steps-connecting-line {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .asset-steps-grid {
      grid-template-columns: 1fr;
    }
  }

  /* ==========================================================================
	   Our Business Sectors Section
	   ========================================================================== */
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

  .header-right {
    max-width: 440px;
  }

  /* 8-Card Grid Layout with Subtle Dividers */
  .business-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--color-gold, #d79f39);
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
    border-right: 1px solid var(--color-gold, #d79f39);
    border-bottom: 1px solid var(--color-gold, #d79f39);
    transition:
      background-color 0.28s ease,
      box-shadow 0.28s ease;
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

  .sector-title {
    font-family: var(--font-main);
    font-size: clamp(1.22rem, 1.4vw, 1.42rem);
    font-weight: 700;
    color: #0b1523;
    line-height: 1.3;
    margin: 0 0 14px 0;
    letter-spacing: -0.01em;
  }

  .sector-desc {
    font-family: var(--font-main);
    font-size: 0.92rem;
    line-height: 1.68;
    color: #0d2a4d;
    margin: 0;
    font-weight: 400;
  }

  /* Bottom CTA Button */
  .business-action {
    margin-top: clamp(40px, 5vw, 56px);
    display: flex;
    justify-content: flex-start;
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
      transition:
        opacity 0.25s ease,
        transform 0.25s ease,
        visibility 0.25s ease;
    }

    .pillar-desc.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      margin-top: 4px;
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
  }

  /* ===========================================================
     Strategic Partnership Styling
     =========================================================== */

  /* Badge & Bar Header */
  .partner-intro {
    margin-bottom: 48px;
  }

  /* Grid Layout (5 Columns Equal Width) */
  .partner-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #ffffff;
    border: 2px solid var(--color-gold);
    margin-bottom: 48px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  }

  /* Interactive Card Styling */
  .partner-card {
    position: relative;
    padding: 36px 24px;
    background-color: #ffffff;
    border-right: 1px solid #eef2f6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 180px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .partner-card:last-child {
    border-right: none;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 16px 0;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  .card-line {
    width: 32px;
    height: 2px;
    background-color: var(--color-gold, #d79f39);
    transition:
      width 0.3s ease,
      background-color 0.3s ease;
  }

  /* Description Styling (Default Hidden State) */
  .card-desc {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.6;
    margin: 16px 0 0 0;
    opacity: 0;
    max-height: 0;
    transform: translateY(10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      max-height 0.3s ease;
  }

  .card-desc.visible {
    opacity: 1;
    max-height: 120px;
    transform: translateY(0);
  }

  /* EFEK KLIK (ACTIVE) & HOVER: Tampilan Kartu & Garis */
  .partner-card.active,
  .partner-card:hover {
    background-color: #ffffff;
    box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.08);
    z-index: 2;
    border-color: transparent;
  }

  .partner-card.active .card-title,
  .partner-card:hover .card-title {
    color: #0d1e38;
  }

  .partner-card.active .card-line,
  .partner-card:hover .card-line {
    width: 100%;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .partner-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .partner-card {
      border-bottom: 1px solid #eef2f6;
    }

    .partner-card:nth-child(3n) {
      border-right: none;
    }
  }

  @media (max-width: 768px) {
    .partner-grid {
      grid-template-columns: 1fr;
    }

    .partner-card {
      border-right: none;
      border-bottom: 1px solid #eef2f6;
      min-height: auto;
    }

    /* Pada layar sentuh / mobile, tampilkan deskripsi secara permanen */
    .card-desc {
      opacity: 1;
      max-height: none;
      transform: none;
    }

    .card-line {
      width: 100%;
    }
  }

  /* ===========================================================
     Project & Portfolio Section
     =========================================================== */

  /* Badge & Header */
  .portfolio-intro {
    margin-bottom: 56px;
  }

  /* Grid Layout (2 Columns Master-Detail) */
  .portfolio-content {
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: start;
  }

  /* KOLOM KIRI: Vertical Buttons List */
  .portfolio-list {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .portfolio-btn {
    position: relative;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 22px 16px;
    display: flex;
    align-items: center;
    gap: 24px;
    text-align: left;
    cursor: pointer;
    transition: all 0.25s ease;
    width: 100%;
  }

  .portfolio-btn:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .portfolio-btn.is-active {
    background: rgba(255, 255, 255, 0.05);
  }

  .btn-number {
    font-size: 0.85rem;
    font-weight: 800;
    color: #64748b;
    transition: color 0.25s ease;
  }

  .portfolio-btn.is-active .btn-number,
  .portfolio-btn:hover .btn-number {
    color: var(--color-gold, #d79f39);
  }

  .btn-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #9ab2cb;
    transition: color 0.25s ease;
  }

  .portfolio-btn.is-active .btn-title {
    color: #ffffff;
    font-weight: 800;
  }

  .portfolio-btn:hover .btn-title {
    color: #ffffff;
  }

  /* Indikator Garis Emas Horizontal di Sebelah Kanan Tombol Aktif */
  .active-line {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 2px;
    background-color: var(--color-gold, #d79f39);
  }

  /* KOLOM KANAN: Display Detail Panel */
  .portfolio-display {
    border-left: 2px solid var(--color-gold, #d79f39);
    padding-left: 40px;
    display: flex;
    flex-direction: column;
  }

  .display-header {
    margin-bottom: 16px;
  }

  .display-badge {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--color-gold, #d79f39);
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
  }

  .display-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .display-overview {
    font-size: 1.05rem;
    color: #9ab2cb;
    line-height: 1.7;
    margin: 0 0 32px 0;
    max-width: 600px;
  }

  /* Specs (Solution & Impact List) */
  .display-specs {
    display: flex;
    flex-direction: column;
  }

  .spec-row {
    display: grid;
    grid-template-columns: 140px 1fr;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    gap: 16px;
    align-items: start;
  }

  .spec-row:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .spec-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--color-gold, #d79f39);
    text-transform: uppercase;
    margin-top: 2px;
  }

  .spec-text {
    font-size: 0.95rem;
    color: #e2e8f0;
    line-height: 1.6;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .portfolio-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .portfolio-display {
      border-left: none;
      padding-left: 0;
      border-top: 2px solid var(--color-gold, #d79f39);
      padding-top: 32px;
    }
  }

  @media (max-width: 640px) {
    .spec-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .display-title {
      font-size: 1.75rem;
    }
  }

  /* ===========================================================
     Section Layout & Common Styles
     =========================================================== */
  .impact-journey-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: start;
  }

  /* Badge & Section Intro */
  .section-badge {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold, #c08d2b);
    display: block;
  }

  .section-badge-bar {
    width: 40px;
    height: 3px;
    background-color: var(--color-gold, #c08d2b);
    margin-top: 8px;
    margin-bottom: 24px;
  }

  /* ===========================================================
     KOLOM KIRI: ESG Grid & Button
     =========================================================== */
  .impact-col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .esg-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 40px 0;
    width: 100%;
    border: 2px solid var(--color-gold);
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  }

  /* Ubah esg-card dari div menjadi button */
  .esg-card {
    background: transparent;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    padding: 32px 28px;
    border-right: 1px solid var(--color-gold);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition:
      background-color 0.2s ease,
      box-shadow 0.2s ease;
    font-family: var(--font-main);
  }

  .esg-card:last-child {
    border-right: none;
  }

  .esg-card:hover {
    background-color: #f8fafc;
    box-shadow: inset 0 0 0 1px var(--color-gold, #c08d2b);
    z-index: 1;
  }

  .esg-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .esg-number {
    font-size: 0.8rem;
    font-weight: 800;
    color: #55667c;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .esg-toggle-icon {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-gold, #c08d2b);
    line-height: 1;
  }

  .esg-card-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 16px 0;
  }

  .esg-card-line {
    width: 28px;
    height: 2px;
    background-color: var(--color-gold, #c08d2b);
    transition: width 0.25s ease;
  }

  /* Animasi garis emas melebar saat kartu aktif */
  .esg-card.is-active .esg-card-line {
    width: 100%;
  }

  /* Styling Deskripsi */
  .esg-card-desc {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    margin: 16px 0 0 0;
  }

  /* ===========================================================
     KOLOM KANAN: Timeline & Milestone Display
     =========================================================== */
  .journey-col {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .timeline-wrapper {
    margin: 0px 0 32px 0;
    width: 100%;
    overflow-x: auto;
  }

  .timeline-track {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 14px 12px 14px;
    min-width: 480px;
  }

  .timeline-base-line {
    position: absolute;
    bottom: 16px;
    left: 14px;
    right: 14px;
    height: 2px;
    background-color: rgba(226, 232, 240, 0.2);
    z-index: 1;
    border-radius: 2px;
    overflow: hidden;
  }

  .timeline-progress-line {
    height: 100%;
    background: linear-gradient(90deg, #c08d2b 0%, #f3d38c 100%);
    box-shadow: 0 0 10px rgba(192, 141, 43, 0.6);
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .timeline-node {
    position: relative;
    z-index: 2;
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .timeline-node:hover .timeline-year {
    color: #f1f5f9;
    transform: translateY(-2px);
  }

  .timeline-node:hover .timeline-diamond {
    background-color: var(--color-gold, #c08d2b);
    transform: rotate(45deg) scale(1.15);
  }

  .timeline-year {
    font-size: 0.95rem;
    font-weight: 800;
    color: #94a3b8;
    margin-bottom: 12px;
    transition:
      color 0.3s ease,
      transform 0.3s ease,
      font-size 0.3s ease,
      text-shadow 0.3s ease;
  }

  .timeline-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .timeline-line {
    width: 1px;
    height: 12px;
    background-color: #cbd5e1;
    transition:
      background-color 0.3s ease,
      height 0.3s ease,
      box-shadow 0.3s ease;
  }

  .timeline-diamond {
    width: 8px;
    height: 8px;
    background-color: #cbd5e1;
    transform: rotate(45deg);
    transition:
      background-color 0.3s ease,
      transform 0.3s ease,
      box-shadow 0.3s ease;
    margin-top: 4px;
  }

  /* Timeline Node Active State */
  .timeline-node.is-active .timeline-year {
    color: var(--color-gold, #c08d2b);
    font-size: 1.05rem;
    transform: translateY(-4px);
    text-shadow: 0 0 12px rgba(192, 141, 43, 0.3);
  }

  .timeline-node.is-active .timeline-line {
    background-color: var(--color-gold, #c08d2b);
    height: 18px;
    box-shadow: 0 0 8px rgba(192, 141, 43, 0.4);
  }

  .timeline-node.is-active .timeline-diamond {
    background-color: var(--color-gold, #c08d2b);
    transform: rotate(45deg) scale(1.4);
    box-shadow: 0 0 12px rgba(192, 141, 43, 0.7);
  }

  /* Milestone Display Text */
  .milestone-display-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 170px;
  }

  .milestone-display {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
  }

  .milestone-year-badge {
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--color-gold, #c08d2b);
    margin-bottom: 8px;
    display: block;
  }

  .milestone-title {
    font-size: 2rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 16px 0;
    letter-spacing: -0.01em;
  }

  .milestone-desc {
    font-size: 0.95rem;
    color: #ffffff;
    line-height: 1.65;
    margin: 0;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .impact-journey-container {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  }

  @media (max-width: 640px) {
    .esg-grid {
      grid-template-columns: 1fr;
    }

    .esg-card {
      border-right: none !important;
      border-bottom: 1px solid #eef2f6 !important;
      padding: 20px 0 !important;
    }

    .esg-card:last-child {
      border-bottom: none !important;
    }
  }

  /* ===========================================================
     Badge & Section Intro Header
     =========================================================== */
  .section-badge {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold, #c08d2b);
    display: block;
  }

  .section-badge-bar {
    width: 40px;
    height: 3px;
    background-color: var(--color-gold, #c08d2b);
    margin-top: 8px;
    margin-bottom: 24px;
  }

  /* ===========================================================
     BAGIAN 1: MANAGEMENT / LEADERSHIP GRID
     =========================================================== */
  .management-block {
    display: flex;
    flex-direction: column;
  }

  .leadership-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 36px;
    background-color: #ffffff;
    border: 2px solid var(--color-gold, #d79f39);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  }

  .leader-card {
    padding: 36px 32px;
    border-right: 1px solid #eef2f6;
    border-bottom: 1px solid #eef2f6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 140px;
    box-sizing: border-box;
    background-color: #ffffff;
    transition:
      background-color 0.25s ease,
      box-shadow 0.25s ease;
    overflow: hidden;
    cursor: pointer;
  }

  .leader-card:nth-child(2n) {
    border-right: none;
  }

  .leader-card:nth-child(n + 3) {
    border-bottom: none;
  }

  .leader-card.active,
  .leader-card:hover {
    background-color: #ffffff;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    z-index: 2;
  }

  .leader-name {
    font-size: 1.25rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0;
    line-height: 1.3;
  }

  .leader-role {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-gold, #c08d2b);
    margin: 0;
    opacity: 0;
    max-height: 0;
    transform: translateY(8px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      max-height 0.3s ease,
      margin 0.3s ease;
  }

  .leader-role.visible {
    opacity: 1;
    max-height: 40px;
    transform: translateY(0);
    margin-top: 8px;
  }

  .leader-card-line {
    width: 32px;
    height: 2px;
    background-color: var(--color-gold, #c08d2b);
    transition: width 0.3s ease;
    margin-top: 16px;
  }

  .leader-card.active .leader-card-line,
  .leader-card:hover .leader-card-line {
    width: 100%;
  }

  @media (max-width: 640px) {
    .leader-role {
      opacity: 1;
      max-height: none;
      transform: none;
      margin-top: 8px;
    }

    .leader-card-line {
      width: 100%;
    }
  }

  /* ===========================================================
     BAGIAN 2: CORPORATE LEGALITY LIST
     =========================================================== */

  .legality-block {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* Grid Layout (3-Column dengan garis pembatas halus) */
  .legality-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
    width: 100%;
    border: 2px solid var(--color-gold);
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  }

  /* Card Item */
  .legality-card {
    padding: 36px 32px 32px 32px;
    border-right: 2px solid var(--color-gold);
    border-bottom: 2px solid var(--color-gold);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    transition:
      background-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  /* Menghilangkan border-right pada kolom ke-3 */
  .legality-card:nth-child(3n) {
    border-right: none;
  }

  /* Menghilangkan border-bottom pada baris terakhir (3 item terakhir) */
  .legality-card:nth-child(n + 4) {
    border-bottom: none;
  }

  .legality-card-top {
    margin-bottom: 32px;
  }

  .legality-icon {
    color: #c08d2b;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .legality-card-title {
    font-size: 1.1rem;
    font-weight: 800;
    color: #0d1e38;
    margin: 0 0 12px 0;
    line-height: 1.3;
  }

  .legality-card-desc {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* Status Tag (VERIFIED & ON REQUEST) */
  .status-tag {
    display: inline-block;
    padding: 6px 12px;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.12em;
    border: 1px solid #e0c896;
    color: #c08d2b;
    border-radius: 2px;
    text-transform: uppercase;
    background-color: #ffffff;
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .legality-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .legality-card:nth-child(3n) {
      border-right: 1px solid #eef2f6;
    }

    .legality-card:nth-child(2n) {
      border-right: none;
    }

    .legality-card:nth-child(n + 4) {
      border-bottom: 1px solid #eef2f6;
    }

    .legality-card:nth-child(n + 5) {
      border-bottom: none;
    }
  }

  @media (max-width: 640px) {
    .legality-grid {
      grid-template-columns: 1fr;
    }

    .legality-card {
      border-right: none !important;
      border-bottom: 1px solid #eef2f6 !important;
      padding: 28px 16px;
    }

    .legality-card:last-child {
      border-bottom: none !important;
    }
  }
  .legality-block {
    display: flex;
    flex-direction: column;
  }

  .legality-list {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    border-top: 1px solid #e2e8f0;
  }

  .legality-item {
    background: transparent;
    border: none;
    border-bottom: 1px solid #e2e8f0;
    padding: 24px 0;
    text-align: left;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    transition: background-color 0.25s ease;
  }

  .legality-item:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  .legality-item-header {
    display: grid;
    grid-template-columns: 60px 1fr 80px;
    align-items: center;
    gap: 16px;
    width: 100%;
  }

  .legality-number {
    font-size: 0.9rem;
    font-weight: 800;
    color: #cbd5e1;
    letter-spacing: 0.05em;
    transition: color 0.2s ease;
  }

  .legality-item.is-active .legality-number,
  .legality-item:hover .legality-number {
    color: var(--color-gold, #c08d2b);
    transition: color 0.25s ease;
  }

  .legality-item.is-active .legality-title,
  .legality-item:hover .legality-title {
    color: #ffffff;
    transition: color 0.25s ease;
  }

  .legality-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: #9ab2cb;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .legality-line {
    width: 48px;
    height: 2px;
    background-color: var(--color-gold, #c08d2b);
    justify-self: end;
    transition: width 0.25s ease;
  }

  .legality-item.is-active .legality-line {
    width: 100%;
  }

  .legality-body {
    padding-left: 76px;
    padding-top: 12px;
  }

  .legality-desc {
    font-size: 0.925rem;
    color: #ffffff;
    margin: 0;
    line-height: 1.6;
  }

  /* Responsive Adjustments */
  @media (max-width: 640px) {
    .leadership-grid {
      grid-template-columns: 1fr;
    }

    .leader-card {
      border-right: none !important;
      border-bottom: 1px solid #eef2f6 !important;
      padding: 24px 20px;
    }

    .leader-card:last-child {
      border-bottom: none !important;
    }

    .legality-item-header {
      grid-template-columns: 40px 1fr auto;
      gap: 12px;
    }

    .legality-title {
      font-size: 1.1rem;
    }

    .legality-body {
      padding-left: 52px;
    }
  }

  /* ===========================================================
     News & Insight Styling
     =========================================================== */
  .insight-intro {
    margin-bottom: 48px;
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

  @media (max-width: 640px) {
    .news-grid {
      grid-template-columns: 1fr;
    }

    .empty-state {
      grid-column: span 1;
    }
  }
</style>
