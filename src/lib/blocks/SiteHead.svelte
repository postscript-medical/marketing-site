<script>
  const navigationEntries = [
      {
          "label": "Research",
          "url": "/research/"
      },
      {
          "label": "Contributors",
          "url": "/contributors/"
      },
      {
          "label": "Pricing",
          "url": "/pricing/"
      },
      {
          "label": "About us",
          "url": "/about-us/"
      }
    ];
</script>

<header role="banner" class="site-head">
  <div class="mobile-decoration">
      <a href="/" aria-label="Postscript medical" class="site-head__brand">
        <!-- {% include "partials/brand.svg" %} -->
      </a>

      <button class="burger-toggle" data-enabled="false" data-state="closed" aria-label="Open menu">
          <span class="burger-toggle__icon"></span>
      </button>

      <nav class="site-head__nav" aria-label="Primary">
          <ul class="nav__list links--primary wrapper">
              {#each navigationEntries as { url, label }}
                  <li>
                      <a href="{ url }">
                          { label }
                      </a>
                  </li>
              {/each}
          </ul>
      </nav>
  </div>

  <nav aria-label="Secondary">
      <ul class="nav__list links--application wrapper">
          <li>
              <a href="https://app.postscriptmedical.com/">
                  Sign in
              </a>
          </li>

          <li>
              <a class="cta" href="https://app.postscriptmedical.com/#/sign-up">
                  Get started
              </a>
          </li>
      </ul>
  </nav>
</header>