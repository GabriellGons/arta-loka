export interface NewsAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface NewsContentSection {
  type: 'paragraph' | 'heading' | 'quote' | 'highlight' | 'image';
  text?: string;
  author?: string;
  role?: string;
  title?: string;
  items?: string[];
  src?: string;
  caption?: string;
}

export interface NewsArticle {
  id: number;
  categoryId: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: NewsAuthor;
  image: string;
  imageCaption: string;
  excerpt: string;
  tags: string[];
  sections: NewsContentSection[];
}

export interface NewsCategory {
  id: string;
  label: string;
}

export const categories: NewsCategory[] = [
  { id: "all", label: "ALL NEWS" },
  { id: "corporate", label: "CORPORATE NEWS" },
  { id: "project", label: "PROJECT UPDATE" },
  { id: "energy-tech", label: "ENERGY & TECHNOLOGY" },
  { id: "maritime", label: "MARITIME DEVELOPMENT" },
  { id: "asset-invest", label: "ASSET & INVESTMENT" },
  { id: "community", label: "COMMUNITY DEVELOPMENT" },
];

export const articles: NewsArticle[] = [
  {
    id: 1,
    categoryId: "corporate",
    title: "PT Arta Loka Wisala Memperkuat Struktur Kemitraan Strategis Kawasan",
    subtitle: "Akselerasi integrasi ekosistem bisnis lintas sektoral untuk optimalisasi nilai aset nasional secara berkelanjutan.",
    date: "12 Sep 2026",
    readTime: "3 min read",
    author: {
      name: "Tim Komunikasi Korporat",
      role: "Corporate Secretary & Media Relations",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Pertemuan Kemitraan Strategis Kawasan PT Arta Loka Wisala bersama jajaran stakeholder ekosistem bisnis.",
    excerpt: "Langkah strategis perusahaan dalam membangun integrasi ekosistem bisnis lintas sektoral untuk optimalisasi aset.",
    tags: ["Corporate Strategy", "Partnership", "Asset Optimization", "Ekosistem Bisnis"],
    sections: [
      {
        type: 'paragraph',
        text: 'JAKARTA — PT Arta Loka Wisala secara resmi mengumumkan penguatan konsolidasi kemitraan strategis kawasan yang melibatkan pemangku kepentingan kunci dari sektor private, pemerintah daerah, BUMN, hingga asosiasi industri nasional. Inisiatif ini dirancang sebagai landasan utama dalam mengoptimalkan potensi aset bernilai tinggi serta menciptakan sinergi bisnis yang komprehensif.'
      },
      {
        type: 'heading',
        title: 'Membangun Sinergi Ekosistem Lintas Sektor'
      },
      {
        type: 'paragraph',
        text: 'Melalui model kolaborasi terpadu, perusahaan bertindak sebagai Strategy Development & Asset Management Partner yang menghubungkan para pemilik lahan, investor modal, serta pengelola operasional. Pendekatan ini memastikan bahwa setiap aset tidak hanya bernilai dari sisi finansial, namun juga menjadi penggerak ekonomi kawasan.'
      },
      {
        type: 'quote',
        text: 'Langkah kemitraan ini merupakan perwujudan komitmen kami untuk tidak sekadar mengelola aset, melainkan membangun ekosistem yang resilien, efisien, dan berdampak sosial-ekonomi nyata.',
        author: 'Management Representative',
        role: 'PT Arta Loka Wisala'
      },
      {
        type: 'highlight',
        title: 'Poin Kunci Kerjasama Strategis',
        items: [
          'Integrasi pemanfaatan lahan dengan jaringan logistik dan rantai pasok modern.',
          'Penerapan governance dan Good Corporate Governance (GCG) berstandar internasional.',
          'Peningkatan daya saing kawasan industri dan pariwisata terpadu.',
          'Pembukaan skema pendanaan fleksibel dan kemitraan publik-swasta (PPP).'
        ]
      },
      {
        type: 'heading',
        title: 'Prospek & Harapan Masa Depan'
      },
      {
        type: 'paragraph',
        text: 'Dengan kerangka kerja baru ini, PT Arta Loka Wisala optimistis dapat mengakselerasi tingkat okupansi kawasan serta meningkatkan ROI (Return on Investment) bagi seluruh mitra bisnis yang terlibat hingga 25% dalam kurun waktu tiga tahun mendatang.'
      }
    ]
  },
  {
    id: 2,
    categoryId: "energy-tech",
    title: "Implementasi Sistem Hybrid PLTS & BESS pada Kawasan Industri Terpadu",
    subtitle: "Transisi energi bersih melalui integrasi Pembangkit Listrik Tenaga Surya dan Battery Energy Storage System modern.",
    date: "08 Sep 2026",
    readTime: "4 min read",
    author: {
      name: "Divisi Energi & Teknologi",
      role: "Renewable Infrastructure Team",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Instalasi panel surya berkapasitas tinggi di kawasan industri terpadu binaan PT Arta Loka Wisala.",
    excerpt: "Mendorong efisiensi konsumsi energi dan keandalan pasokan listrik hijau jangka panjang bagi para tenant.",
    tags: ["Clean Energy", "PLTS Hybrid", "BESS", "ESG Integration", "Green Industry"],
    sections: [
      {
        type: 'paragraph',
        text: 'SURABAYA — Mengantisipasi tuntutan global terhadap dekode karbonasi dan pemanfaatan energi terbarukan, PT Arta Loka Wisala menginisiasi pemasangan infrastruktur energi cerdas berbasis Hybrid PLTS (Pembangkit Listrik Tenaga Surya) dan BESS (Battery Energy Storage System).'
      },
      {
        type: 'heading',
        title: 'Efisiensi Energi dan Stabilitas Pasokan'
      },
      {
        type: 'paragraph',
        text: 'Sistem ini mampu mereduksi emisi karbon hingga ribuan ton CO2 per tahun sekaligus menjamin kontinuitas pasokan daya berkualitas tinggi bagi pabrik dan fasilitas manufaktur yang beroperasi di dalam kawasan.'
      },
      {
        type: 'quote',
        text: 'Kombinasi solar fotovoltaik dengan sistem penyimpanan baterai tingkat lanjut memungkinkan kawasan beroperasi secara mandiri saat beban puncak, mengurangi ketergantungan pada jaringan fosil.',
        author: 'Ir. Ahmad Subagja',
        role: 'Chief Technical Officer'
      },
      {
        type: 'highlight',
        title: 'Dampak & Manfaat Utama',
        items: [
          'Penghematan biaya operasional energi hingga 30% per tahun.',
          'Pengurangan jejak karbon secara signifikan selaras dengan target Net Zero Emission 2060.',
          'Proteksi terhadap lonjakan beban puncak (Peak Shaving) dan fluktuasi voltase.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Ke depan, model infrastruktur energi hijau ini akan direplikasi di seluruh kawasan operasional lainnya yang dikelola oleh perusahaan.'
      }
    ]
  },
  {
    id: 3,
    categoryId: "maritime",
    title: "Pengembangan Rantai Dingin Terintegrasi di Wilayah Pesisir Jawa Timur",
    subtitle: "Memperkuat ketahanan pangan laut dan daya saing hasil perikanan melalui rantai dingin modern bertenaga terbarukan.",
    date: "02 Sep 2026",
    readTime: "5 min read",
    author: {
      name: "Tim Inovasi Maritim",
      role: "Maritime Infrastructure & Logistics",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Fasilitas penampungan & cold storage terpadu di kawasan pesisir Jawa Timur.",
    excerpt: "Fasilitas cold storage modern bertenaga terbarukan siap menopang daya saing hasil tangkapan nelayan lokal.",
    tags: ["Maritime", "Cold Storage", "Fisheries Logistics", "Blue Economy"],
    sections: [
      {
        type: 'paragraph',
        text: 'BANYUWANGI — Sektor maritim dan perikanan nasional terus membutuhkan sentuhan teknologi penyimpanan suhu rendah yang handal. PT Arta Loka Wisala meluncurkan hub rantai dingin (cold chain hub) terpadu di kawasan pesisir strategis Jawa Timur.'
      },
      {
        type: 'heading',
        title: 'Solusi Penurunan Post-Harvest Loss'
      },
      {
        type: 'paragraph',
        text: 'Selama ini, penurunan mutu hasil tangkapan nelayan akibat ketiadaan fasilitas pendingin menjadi tantangan utama. Hub cold storage baru ini dirancang untuk menjaga kestabilan mutu komoditas perikanan sebelum didistribusikan ke pasar domestik maupun ekspor.'
      },
      {
        type: 'quote',
        text: 'Dengan integrasi energi terbarukan dan manajemen rantai pasok terdigitalisasi, kami memberikan kepastian mutu dan harga jual yang lebih stabil bagi komunitas nelayan.',
        author: 'Dra. Ratna Handayani',
        role: 'VP Maritime Development'
      },
      {
        type: 'highlight',
        title: 'Fitur Utama Hub Rantai Dingin',
        items: [
          'Kapasitas penyimpanan hingga 5.000 ton komoditas beku.',
          'Penggunaan refrigeran ramah lingkungan hemat daya.',
          'Sistem pemantauan suhu otomatis berbasis IoT 24/7.'
        ]
      }
    ]
  },
  {
    id: 4,
    categoryId: "asset-invest",
    title: "Unlocking Asset Value: Optimalisasi Lahan & Komersialisasi Properti",
    subtitle: "Strategi transformasi aset idle menjadi pusat pertumbuhan ekonomi baru melalui kajian kelayakan komprehensif.",
    date: "28 Agu 2026",
    readTime: "3 min read",
    author: {
      name: "Divisi Asset Management",
      role: "Investment & Property Valuation",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Analisis pemetaan potensi aset dan perencanaan komersialisasi lahan terpadu.",
    excerpt: "Kajian kelayakan dan pemetaan potensi aset tidur menjadi sarana usaha produktif bernilai tinggi.",
    tags: ["Asset Management", "Property Development", "Investment", "Real Estate"],
    sections: [
      {
        type: 'paragraph',
        text: 'JAKARTA — Banyak kawasan strategis di Indonesia yang belum termanfaatkan secara maksimal (idle assets). PT Arta Loka Wisala hadir membawa metodologi teruji dalam mendiagnosis, mereorganisasi, dan merevitalisasi nilai ekonomi aset-aset tersebut.'
      },
      {
        type: 'heading',
        title: 'Kerangka Kerja Re-Strukturisasi Aset'
      },
      {
        type: 'paragraph',
        text: 'Proses optimalisasi dilakukan mulai dari pemetaan legalitas, analisis kesesuaian lahan (Highest and Best Use), pencarian skema pendanaan, hingga tahap eksekusi komersialisasi.'
      },
      {
        type: 'quote',
        text: 'Aset yang dulunya pasif dapat diubah menjadi revenue generator yang aktif dan memberikan capital appreciation berkelanjutan.',
        author: 'Budi Santoso, SE., M.Sc.',
        role: 'Head of Asset Monetization'
      }
    ]
  },
  {
    id: 5,
    categoryId: "community",
    title: "Program Pemberdayaan Ekonomi Koperasi & Kemitraan Tenaga Kerja Lokal",
    subtitle: "Inisiatif kolaboratif dalam memperkuat fondasi ekonomi masyarakat lokal sekitar area pengembangan kawasan.",
    date: "20 Agu 2026",
    readTime: "4 min read",
    author: {
      name: "Divisi Sustainability & CSR",
      role: "Community Empowerment Team",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Pelatihan sertifikasi dan workshop pemberdayaan UMKM & Koperasi mitra.",
    excerpt: "Membangun iklim kemitraan inklusif yang memberikan dampak ekonomi langsung bagi masyarakat sekitar.",
    tags: ["CSR", "Community Empowerment", "Koperasi", "Incompatible Growth"],
    sections: [
      {
        type: 'paragraph',
        text: 'GRESIK — Keberhasilan sebuah proyek pengembangan kawasan tidak lepas dari dukungan dan partisipasi masyarakat lokal. Melalui program pembinaan berkelanjutan, PT Arta Loka Wisala menggandeng puluhan koperasi dan usaha mikro lokal.'
      },
      {
        type: 'heading',
        title: 'Pelatihan Sertifikasi dan Integrasi Supply Chain'
      },
      {
        type: 'paragraph',
        text: 'Program ini mencakup pelatihan standar keselamatan kerja, digitalisasi tata kelola keuangan koperasi, serta pelibatan langsung warga sekitar dalam kegiatan operasional pendukung kawasan.'
      },
      {
        type: 'quote',
        text: 'Prinsip kami adalah tumbuh bersama masyarakat. Pertumbuhan bisnis yang sehat harus berjalan seiring dengan kesejahteraan sosial lingkungan sekitar.',
        author: 'Siti Rahmawati',
        role: 'CSR & Community Engagement Director'
      }
    ]
  },
  {
    id: 6,
    categoryId: "project",
    title: "Update Progres Pembangunan Command Center & Infrastructure Monitoring",
    subtitle: "Digitalisasi pengawasan fasilitas kawasan secara real-time berbasis sensor IoT dan AI Analytics.",
    date: "15 Agu 2026",
    readTime: "4 min read",
    author: {
      name: "Divisi Project Execution",
      role: "Infrastructure Task Force",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Pusat kendali operasional (Command Center) yang dilengkapi layar monitor terpadu.",
    excerpt: "Fasilitas pengawasan berbasis AI dan IoT memasuki tahap integrasi data akhir sebelum beroperasi penuh.",
    tags: ["IoT", "Command Center", "Smart City", "Project Progress"],
    sections: [
      {
        type: 'paragraph',
        text: 'MODERN LAND — Pembangunan Command Center sebagai pusat kecerdasan operasional kawasan telah mencapai progres 92%. Pemasangan jaringan sensor IoT di seluruh perimeter infrastruktur siap memantau performa jaringan daya, air, serta lalu lintas kawasan.'
      },
      {
        type: 'heading',
        title: 'Keandalan Operasional dan Respons Cepat'
      },
      {
        type: 'paragraph',
        text: 'Sistem ini dirancang untuk mendeteksi potensi anomali secara dini (predictive maintenance), meminimalisir risiko downtime, dan meningkatkan keselamatan kerja seluruh occupant.'
      },
      {
        type: 'quote',
        text: 'Command Center menjadi otak dari seluruh operasional kawasan yang memberikan visibilitas penuh secara efisien dan akurat.',
        author: 'Ferry Kurniawan',
        role: 'Project Director'
      }
    ]
  }
];

export function getArticles(categoryId: string = 'all'): NewsArticle[] {
  if (!categoryId || categoryId === 'all') {
    return articles;
  }
  return articles.filter(a => a.categoryId === categoryId);
}

export function getArticleById(id: string | number): NewsArticle | undefined {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return articles.find(a => a.id === numericId);
}

export function getRelatedArticles(currentId: string | number, limit: number = 3): NewsArticle[] {
  const current = getArticleById(currentId);
  const currentNumId = typeof currentId === 'string' ? parseInt(currentId, 10) : currentId;
  
  if (!current) {
    return articles.filter(a => a.id !== currentNumId).slice(0, limit);
  }

  // Same category first, then others
  const sameCategory = articles.filter(a => a.id !== currentNumId && a.categoryId === current.categoryId);
  const otherCategory = articles.filter(a => a.id !== currentNumId && a.categoryId !== current.categoryId);
  
  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export function getCategoryLabel(categoryId: string): string {
  const cat = categories.find(c => c.id === categoryId);
  return cat ? cat.label : 'NEWS';
}
