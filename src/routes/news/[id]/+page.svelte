<script lang="ts">
  let { data } = $props();

  let article = $derived(data.article);
  let relatedArticles = $derived(data.relatedArticles);
  let categoryLabel = $derived(data.categoryLabel);

  let copiedToast = $state(false);

  function copyLink() {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      copiedToast = true;
      setTimeout(() => {
        copiedToast = false;
      }, 2500);
    }
  }
</script>

<svelte:head>
  <title>{article.title} — PT Arta Loka Wisala</title>
  <meta name="description" content={article.subtitle || article.excerpt} />
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.excerpt} />
  <meta property="og:image" content={article.image} />
</svelte:head>

<!-- Toast Notification -->
{#if copiedToast}
  <div class="toast-notification" role="status">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>Tautan artikel berhasil disalin!</span>
  </div>
{/if}

<!-- Header / Hero Section -->
<header class="detail-hero" aria-label="News Header">
  <div class="detail-hero-container">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Beranda</a>
      <span class="bc-sep">/</span>
      <a href="/news">Berita</a>
      <span class="bc-sep">/</span>
      <span class="bc-current">{categoryLabel}</span>
    </nav>

    <!-- Badge & Category -->
    <div class="category-badge-wrap">
      <span class="hero-category-tag">{categoryLabel}</span>
      <div class="hero-badge-line" aria-hidden="true"></div>
    </div>

    <!-- Title & Subtitle -->
    <h1 class="hero-title">{article.title}</h1>
    <p class="hero-subtitle">{article.subtitle}</p>

    <!-- Author & Meta Info -->
    <div class="author-meta-bar">
      <div class="author-info">
        <img src={article.author.avatar} alt={article.author.name} class="author-avatar" />
        <div class="author-text">
          <span class="author-name">{article.author.name}</span>
          <span class="author-role">{article.author.role}</span>
        </div>
      </div>

      <div class="meta-divider" aria-hidden="true"></div>

      <div class="publish-meta">
        <div class="meta-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>{article.date}</span>
        </div>

        <span class="meta-dot">•</span>

        <div class="meta-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>{article.readTime}</span>
        </div>
      </div>

      <button type="button" class="share-btn" onclick={copyLink} title="Salin Tautan Artikel">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
        <span>Bagikan</span>
      </button>
    </div>
  </div>
</header>

<!-- Main Article Body & Sidebar -->
<div class="detail-body-section">
  <div class="detail-container">

    <!-- Left Column: Main Content -->
    <main class="main-article-col">
      <!-- Main Featured Image -->
      <figure class="featured-image-box">
        <img src={article.image} alt={article.title} class="featured-img" />
        {#if article.imageCaption}
          <figcaption class="image-caption">{article.imageCaption}</figcaption>
        {/if}
      </figure>

      <!-- Content Sections Loop -->
      <article class="article-content">
        {#each article.sections as section}
          {#if section.type === 'paragraph'}
            <p class="paragraph-text">{section.text}</p>
          {:else if section.type === 'heading'}
            <h2 class="section-heading">{section.title}</h2>
          {:else if section.type === 'quote'}
            <blockquote class="article-quote">
              <p>“{section.text}”</p>
              {#if section.author}
                <cite class="quote-cite">
                  <strong>{section.author}</strong> — <span>{section.role}</span>
                </cite>
              {/if}
            </blockquote>
          {:else if section.type === 'highlight'}
            <div class="highlight-box">
              <div class="highlight-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <h3>{section.title}</h3>
              </div>
              {#if section.items}
                <ul class="highlight-list">
                  {#each section.items as item}
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/if}
        {/each}
      </article>

      <!-- Tags Section -->
      {#if article.tags && article.tags.length > 0}
        <div class="article-tags-wrap">
          <span class="tags-label">TAGS:</span>
          <div class="tags-list">
            {#each article.tags as tag}
              <span class="tag-item">#{tag}</span>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Article Share Bar -->
      <div class="share-footer-bar">
        <span class="share-title">Bagikan Berita Ini:</span>
        <div class="share-actions">
          <button type="button" class="social-share-btn" onclick={copyLink} title="Salin Tautan">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Salin Tautan</span>
          </button>
        </div>
      </div>

      <!-- Author Bio Footer Box -->
      <div class="author-bio-box">
        <img src={article.author.avatar} alt={article.author.name} class="bio-avatar" />
        <div class="bio-content">
          <span class="bio-written-by">DITULIS OLEH</span>
          <h4 class="bio-name">{article.author.name}</h4>
          <p class="bio-role">{article.author.role}</p>
          <p class="bio-desc">Tim Komunikasi Korporat PT Arta Loka Wisala menyajikan kabar terkini, transparansi informasi, dan perkembangan proyek di seluruh ekosistem perusahaan.</p>
        </div>
      </div>

      <!-- Back to News Button -->
      <div class="back-link-wrapper">
        <a href="/news" class="btn-back-news">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>KEMBALI KE DAFTAR BERITA</span>
        </a>
      </div>
    </main>

    <!-- Right Column: Sidebar -->
    <aside class="sidebar-col">
      <!-- Related News Widget -->
      <div class="sidebar-widget">
        <div class="widget-header">
          <span class="widget-badge">INFORMASI TERKAIT</span>
          <h3 class="widget-title">Berita Terkait</h3>
          <div class="widget-line"></div>
        </div>

        <div class="related-list">
          {#each relatedArticles as item}
            <a href={`/news/${item.id}`} class="related-card">
              <div class="related-img-box">
                <img src={item.image} alt={item.title} class="related-img" />
              </div>
              <div class="related-info">
                <span class="related-date">{item.date}</span>
                <h4 class="related-item-title">{item.title}</h4>
              </div>
            </a>
          {/each}
        </div>
      </div>

      <!-- CTA Widget -->
      <div class="sidebar-widget cta-widget">
        <span class="cta-badge">KEMITRAAN STRATEGIS</span>
        <h3 class="cta-title">Tertarik Mengembangkan Aset Kawasan Anda?</h3>
        <p class="cta-text">Hubungi tim ahli PT Arta Loka Wisala untuk konsultasi strategi pengembangan & manajemen aset secara terpadu.</p>
        <a href="/contact" class="cta-btn">
          <span>HUBUNGI KAMI</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </aside>

  </div>
</div>

<style>
  /* ===========================================================
     Toast Notification
     =========================================================== */
  .toast-notification {
    position: fixed;
    bottom: 32px;
    right: 32px;
    background-color: #071b38;
    color: #ffffff;
    padding: 14px 22px;
    border-radius: 4px;
    border-left: 4px solid var(--color-gold, #d79f39);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 9999;
    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .toast-notification svg {
    color: var(--color-gold, #d79f39);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ===========================================================
     Hero Section
     =========================================================== */
  .detail-hero {
    width: 100%;
    background: linear-gradient(160deg, #071b38 0%, #0d2a4d 65%, #0a1e36 100%);
    color: #ffffff;
    padding: clamp(120px, 14vw, 170px) 0 clamp(60px, 8vw, 90px) 0;
    position: relative;
    overflow: hidden;
  }

  .detail-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 75% 40%,
      rgba(215, 159, 57, 0.08) 0%,
      transparent 60%
    );
    pointer-events: none;
  }

  .detail-hero-container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 48px);
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }

  /* Breadcrumb */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #8da4be;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .breadcrumb a {
    color: #9ab2cb;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .breadcrumb a:hover {
    color: var(--color-gold, #d79f39);
  }

  .bc-sep {
    color: #4a6382;
    font-size: 0.75rem;
  }

  .bc-current {
    color: var(--color-gold, #d79f39);
    font-weight: 700;
  }

  /* Category Badge */
  .category-badge-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .hero-category-tag {
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-gold, #d79f39);
    background: rgba(215, 159, 57, 0.12);
    border: 1px solid rgba(215, 159, 57, 0.3);
    padding: 4px 12px;
    border-radius: 2px;
  }

  .hero-badge-line {
    width: 36px;
    height: 2px;
    background-color: var(--color-gold, #d79f39);
  }

  /* Title & Subtitle */
  .hero-title {
    font-size: clamp(2rem, 3.8vw, 3.4rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0 0 20px 0;
    max-width: 980px;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 1.25vw, 1.2rem);
    line-height: 1.65;
    color: #a7bed8;
    margin: 0 0 40px 0;
    max-width: 860px;
  }

  /* Author Meta Bar */
  .author-meta-bar {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .author-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--color-gold, #d79f39);
  }

  .author-text {
    display: flex;
    flex-direction: column;
  }

  .author-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffff;
  }

  .author-role {
    font-size: 0.75rem;
    color: #8da4be;
  }

  .meta-divider {
    width: 1px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .publish-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.85rem;
    color: #9ab2cb;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .meta-item svg {
    color: var(--color-gold, #d79f39);
  }

  .meta-dot {
    color: #587394;
  }

  .share-btn {
    margin-left: auto;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 2px;
    font-size: 0.775rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
  }

  .share-btn:hover {
    background: var(--color-gold, #d79f39);
    border-color: var(--color-gold, #d79f39);
    color: #071b38;
  }

  /* ===========================================================
     Main Content Layout
     =========================================================== */
  .detail-body-section {
    width: 100%;
    background-color: #f8fafc;
    padding: clamp(50px, 7vw, 90px) 0;
    box-sizing: border-box;
    color: #0d1e38;
    font-family: var(--font-main, "Plus Jakarta Sans", sans-serif);
  }

  .detail-container {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 48px);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 48px;
    align-items: start;
  }

  /* Left Main Column */
  .main-article-col {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 2px;
    padding: clamp(24px, 4vw, 48px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  }

  .featured-image-box {
    margin: 0 0 40px 0;
    width: 100%;
    border-radius: 2px;
    overflow: hidden;
    background-color: #e2e8f0;
  }

  .featured-img {
    width: 100%;
    height: auto;
    max-height: 480px;
    object-fit: cover;
    display: block;
  }

  .image-caption {
    font-size: 0.8rem;
    color: #64748b;
    padding: 12px 16px;
    background-color: #f1f5f9;
    border-left: 3px solid var(--color-gold, #c08d2b);
    font-style: italic;
  }

  /* Article Content Formatting */
  .article-content {
    font-size: 1.05rem;
    line-height: 1.85;
    color: #334155;
  }

  .paragraph-text {
    margin-bottom: 24px;
  }

  .section-heading {
    font-size: 1.65rem;
    font-weight: 800;
    color: #071b38;
    margin: 40px 0 20px 0;
    letter-spacing: -0.01em;
    padding-bottom: 10px;
    border-bottom: 2px solid #f1f5f9;
  }

  .article-quote {
    margin: 36px 0;
    padding: 24px 32px;
    background-color: #f8fafc;
    border-left: 4px solid var(--color-gold, #c08d2b);
    border-radius: 0 4px 4px 0;
  }

  .article-quote p {
    font-size: 1.15rem;
    font-weight: 600;
    font-style: italic;
    color: #0d2a4d;
    line-height: 1.7;
    margin: 0 0 16px 0;
  }

  .quote-cite {
    font-size: 0.875rem;
    color: #64748b;
    display: block;
    font-style: normal;
  }

  .quote-cite strong {
    color: #071b38;
  }

  .highlight-box {
    margin: 36px 0;
    padding: 28px;
    background: linear-gradient(135deg, #071b38 0%, #0d2a4d 100%);
    color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 8px 24px rgba(7, 27, 56, 0.12);
  }

  .highlight-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }

  .highlight-header svg {
    color: var(--color-gold, #d79f39);
  }

  .highlight-header h3 {
    font-size: 1.15rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;
  }

  .highlight-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .highlight-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #cbd5e1;
  }

  .highlight-list li svg {
    color: var(--color-gold, #d79f39);
    flex-shrink: 0;
    margin-top: 3px;
  }

  /* Tags Section */
  .article-tags-wrap {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 40px 0;
    padding: 20px 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
    flex-wrap: wrap;
  }

  .tags-label {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: #94a3b8;
  }

  .tags-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tag-item {
    font-size: 0.8rem;
    font-weight: 600;
    color: #0d2a4d;
    background-color: #f1f5f9;
    padding: 4px 12px;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  .tag-item:hover {
    background-color: #0d2a4d;
    color: #ffffff;
  }

  /* Share Footer Bar */
  .share-footer-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 16px 20px;
    background-color: #f8fafc;
    border-radius: 4px;
  }

  .share-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #475569;
  }

  .share-actions {
    display: flex;
    gap: 10px;
  }

  .social-share-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    color: #0d2a4d;
    padding: 8px 16px;
    font-size: 0.8rem;
    font-weight: 700;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .social-share-btn:hover {
    border-color: var(--color-gold, #c08d2b);
    color: var(--color-gold, #c08d2b);
  }

  /* Author Bio Box */
  .author-bio-box {
    display: flex;
    gap: 24px;
    padding: 28px;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    margin-bottom: 40px;
    align-items: flex-start;
  }

  .bio-avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-gold, #c08d2b);
    flex-shrink: 0;
  }

  .bio-content {
    display: flex;
    flex-direction: column;
  }

  .bio-written-by {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--color-gold, #c08d2b);
    margin-bottom: 4px;
  }

  .bio-name {
    font-size: 1.1rem;
    font-weight: 800;
    color: #071b38;
    margin: 0 0 2px 0;
  }

  .bio-role {
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
    margin: 0 0 10px 0;
  }

  .bio-desc {
    font-size: 0.875rem;
    color: #475569;
    line-height: 1.6;
    margin: 0;
  }

  /* Back Link */
  .back-link-wrapper {
    padding-top: 10px;
  }

  .btn-back-news {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: #0d2a4d;
    color: #ffffff;
    padding: 14px 24px;
    font-size: 0.775rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-decoration: none;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  .btn-back-news:hover {
    background-color: var(--color-gold, #c08d2b);
    color: #ffffff;
  }

  /* Right Sidebar Column */
  .sidebar-col {
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: sticky;
    top: 100px;
  }

  .sidebar-widget {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 2px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  }

  .widget-header {
    margin-bottom: 20px;
  }

  .widget-badge {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--color-gold, #c08d2b);
    display: block;
    margin-bottom: 4px;
  }

  .widget-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #071b38;
    margin: 0 0 10px 0;
  }

  .widget-line {
    width: 32px;
    height: 3px;
    background-color: var(--color-gold, #c08d2b);
  }

  /* Related List */
  .related-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .related-card {
    display: flex;
    gap: 14px;
    text-decoration: none;
    padding-bottom: 16px;
    border-bottom: 1px solid #f1f5f9;
    transition: transform 0.2s ease;
  }

  .related-card:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .related-card:hover {
    transform: translateX(4px);
  }

  .related-img-box {
    width: 80px;
    height: 64px;
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #e2e8f0;
  }

  .related-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .related-info {
    display: flex;
    flex-direction: column;
  }

  .related-date {
    font-size: 0.725rem;
    color: #94a3b8;
    margin-bottom: 4px;
  }

  .related-item-title {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.35;
    color: #0d1e38;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s ease;
  }

  .related-card:hover .related-item-title {
    color: var(--color-gold, #c08d2b);
  }

  /* CTA Sidebar Widget */
  .cta-widget {
    background: linear-gradient(160deg, #071b38 0%, #0d2a4d 100%);
    color: #ffffff;
    border: none;
  }

  .cta-badge {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--color-gold, #d79f39);
    display: block;
    margin-bottom: 8px;
  }

  .cta-title {
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.35;
    color: #ffffff;
    margin: 0 0 12px 0;
  }

  .cta-text {
    font-size: 0.85rem;
    color: #9ab2cb;
    line-height: 1.6;
    margin: 0 0 24px 0;
  }

  .cta-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--color-gold, #d79f39);
    color: #071b38;
    padding: 12px 20px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-decoration: none;
    border-radius: 2px;
    transition: all 0.2s ease;
  }

  .cta-btn:hover {
    background-color: #ffffff;
    color: #071b38;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .detail-container {
      grid-template-columns: 1fr;
    }

    .sidebar-col {
      position: static;
    }
  }

  @media (max-width: 640px) {
    .author-meta-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .meta-divider {
      display: none;
    }

    .share-btn {
      margin-left: 0;
      width: 100%;
      justify-content: center;
    }

    .author-bio-box {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .share-footer-bar {
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;
    }
  }
</style>
