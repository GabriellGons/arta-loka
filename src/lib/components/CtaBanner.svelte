<script lang="ts">
  interface Props {
    badge?: string;
    title?: string;
    description?: string;
    primaryText?: string;
    primaryHref?: string;
  }

  let {
    badge = "LET'S BUILD TOGETHER",
    title = "Have an asset, project or business opportunity?",
    description = "Let’s develop its value together. Diskusikan potensi aset Anda dengan tim pengembangan kami.",
    primaryText = "PARTNERSHIP INQUIRY",
    primaryHref = "/partnership",
  }: Props = $props();
</script>

<section class="cta-banner" aria-label="Strategic Partnership CTA">
  <div class="cta-container">
    <!-- Left Side: Copywriting -->
    <div class="cta-left">
      <div class="tagline-group">
        <span class="cta-badge">{badge}</span>
        <div class="cta-badge-bar" aria-hidden="true"></div>
      </div>

      <h2 class="cta-title">
        {#if title.includes("\n")}
          {#each title.split("\n") as line, idx}
            {#if idx > 0}<br class="desktop-br" />{/if}{line}
          {/each}
        {:else}
          {title}
        {/if}
      </h2>

      <p class="cta-description">
        {description}
      </p>
    </div>

    <!-- Right Side: Get In Touch & Contact Info -->
    <div class="cta-right">
      <span class="get-in-touch-badge">GET IN TOUCH</span>

      <div class="contact-list">
        <!-- Row 1: Our Office -->
        <div class="contact-item">
          <div class="contact-icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-title">Our Office</h3>
            <p class="contact-desc">
              Jl. Wisma Pagesangan II No. 29, Kel. Pagesangan, Kec. Jambangan,
              Surabaya, Jawa Timur 60233
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Jl.+Wisma+Pagesangan+II+No.+29,+Surabaya"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-action-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>VIEW ON GOOGLE MAPS</span>
          </a>
        </div>

        <!-- Row 2: WhatsApp -->
        <div class="contact-item">
          <div class="contact-icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-title">WhatsApp</h3>
            <p class="contact-desc">
              ·&nbsp;Director: 08127602079<br />
              ·&nbsp;Office: 0813 2023 809
            </p>
          </div>
          <a
            href="https://wa.me/628127602079"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-action-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              ></path>
            </svg>
            <span>CHAT ON WHATSAPP</span>
          </a>
        </div>

        <!-- Row 3: Email -->
        <div class="contact-item">
          <div class="contact-icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
          <div class="contact-info">
            <h3 class="contact-title">Email</h3>
            <p class="contact-desc">artalokawisala@gmail.com</p>
          </div>
          <a href="mailto:artalokawisala@gmail.com" class="contact-action-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>SEND EMAIL</span>
          </a>
        </div>
      </div>

      <!-- Bottom Full-Width Gold Button -->
      <a href={primaryHref} class="btn-partnership-gold">
        <div class="btn-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{primaryText}</span>
        </div>
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
          class="arrow-icon"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .cta-banner {
    position: relative;
    width: 100%;
    background: linear-gradient(160deg, #071b38 0%, #0d2a4d 65%, #0a1e36 100%);
    color: #ffffff;
    padding: clamp(60px, 8vw, 100px) 0;
    box-sizing: border-box;
    font-family: var(
      --font-main,
      "Plus Jakarta Sans",
      -apple-system,
      sans-serif
    );
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .cta-container {
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: center;
  }

  /* Left Side Column */
  .cta-left {
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    padding-right: clamp(30px, 5vw, 60px);
  }

  .tagline-group {
    margin-bottom: 24px;
  }

  .cta-badge {
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--color-gold, #d79f39);
    display: block;
    margin-bottom: 10px;
  }

  .cta-badge-bar {
    width: 40px;
    height: 3px;
    background-color: var(--color-gold, #d79f39);
    border-radius: 1px;
  }

  .cta-title {
    font-size: clamp(2rem, 3.4vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0 0 24px 0;
  }

  .cta-description {
    font-size: clamp(0.95rem, 1.1vw, 1.08rem);
    line-height: 1.65;
    color: #9ab2cb;
    margin: 0;
    max-width: 520px;
  }

  /* Right Side Column */
  .cta-right {
    display: flex;
    flex-direction: column;
  }

  .get-in-touch-badge {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--color-gold, #d79f39);
    margin-bottom: 28px;
    display: block;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .contact-item:first-child {
    padding-top: 0;
  }

  .contact-icon-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gold, #d79f39);
    flex-shrink: 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .contact-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 4px 0;
  }

  .contact-desc {
    font-size: 0.8rem;
    color: #9ab2cb;
    line-height: 1.45;
    margin: 0;
    max-width: 280px;
  }

  .contact-action-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
    padding: 8px 14px;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 2px;
    white-space: nowrap;
    flex-shrink: 0;
    transition: all 0.2s ease;
  }

  .contact-action-btn svg {
    color: #ffffff;
  }

  .contact-action-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
  }

  /* Bottom Gold Button */
  .btn-partnership-gold {
    width: 100%;
    background-color: var(--color-gold, #d79f39);
    color: #071b38;
    padding: 16px 24px;
    text-decoration: none;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 2px;
    box-sizing: border-box;
    transition: all 0.25s ease;
    box-shadow: 0 4px 16px rgba(215, 159, 57, 0.25);
  }

  .btn-inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .btn-partnership-gold:hover {
    background-color: #ffffff;
    color: #071b38;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
  }

  .btn-partnership-gold:hover .arrow-icon {
    transform: translateX(4px);
  }

  .arrow-icon {
    transition: transform 0.2s ease;
  }

  /* Responsive Breakpoints */
  @media (max-width: 1024px) {
    .cta-container {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .cta-left {
      border-right: none;
      padding-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      padding-bottom: 40px;
    }
  }

  @media (max-width: 640px) {
    .contact-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .contact-action-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
