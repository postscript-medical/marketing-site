<script lang="ts">
  import { page } from "$app/stores";

  import navigationLinks from "$lib/data/navigation-links.json";
  import legalLinks from "$lib/data/legal-links.json"

  function isActive (url: string): boolean {
    return $page.url.pathname.endsWith(url);
  }
</script>

<footer>
  {#key $page.url.pathname}
    <ul class="footer__list--primary">
      <li class="footer__item">
        <p>
          Navigation
        </p>

        <ul class="footer__list">
          <li>
            <a
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              data-state={isActive("/") ? "active" : "inactive"}
            >
              Home
            </a>
          </li>
          
          {#each navigationLinks as { text, url }}
            <li>
              <a
                href={url}
                aria-current={isActive(url) ? "page" : undefined}
                data-state={isActive(url) ? "active" : "inactive"}
              >
                {text}
              </a>
            </li>
          {/each}
        </ul>
      </li>

      <li class="footer__item">
        <p>
          Legal
        </p>

        <ul class="footer__list">
          {#each legalLinks as { text, url }}
            <li>
              <a
                href={url}
                aria-current={isActive(url) ? "page" : undefined}
                data-state={isActive(url) ? "active" : "inactive"}
              >
                {text}
              </a>
            </li>
          {/each}
        </ul>
      </li>

      <li class="footer__item">
        <p>
          Social
        </p>

        <ul class="social-share">
          <li>
            <a href="https://twitter.com/postscriptmed" target="_blank">
              Twitter
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/company/postscriptmedical/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </li>
    </ul>
  {/key}
</footer>

<style>
  footer {
  background-color: var(--color_dark);
  color: var(--color_light);
  padding: var(--size_700) var(--size_400) var(--size_800);
  }

  footer a:link {
    color: var(--color_light);
  }

  footer a:visited {
    color: var(--color_secondary);
  }

  ul.footer__list--primary {
    display: flex;
    flex-wrap: wrap;
    max-width: var(--width_max);
    margin: auto;
  }

  .footer__list--primary>* {
    min-width: var(--width_min);
  }

  .footer__list--primary> :not(:last-child) {
    flex-grow: 1;
  }

  .footer__list--primary> :not(:last-child),
  .footer__item> :not(:last-child) {
    margin-bottom: var(--size_500);
  }

  .footer__item p {
    font-weight: 800;
  }
</style>