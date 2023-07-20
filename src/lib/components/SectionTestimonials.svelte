<script lang="ts">
  import testimonials from "$lib/data/testimonials.json";
</script>

<section class="testminonials">
  <ul class="caroussel">
    {#each testimonials as { profession, name, testimonial }}
      <li>
        <figure class="stacker">
          <blockquote>
              <p>
                { testimonial }
              </p>
          </blockquote>

          <figcaption>
            <cite class="stacker-tightest">
              <p class="contributor__name">
                { name }
              </p>

              <p class="contributor__profession">
                { profession }
              </p>
            </cite>
          </figcaption>
        </figure>
      </li>
    {/each}
  </ul>
</section>

<style>
  .caroussel {
    align-items: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--width_half);
    overflow: hidden;
    text-align: center;
  }

  .caroussel>* {
    width: 100%;
    flex: 0 0 auto;
    padding: var(--size_400);
    animation: caroussel 16s ease-in-out 1s infinite;
  }

  @keyframes caroussel {
    0% {
      transform: translateX(0);
    }
    28.33% {
      transform: translateX(0);
    }
    33.33% {
      transform: translateX(-100%);
    }
    61.66% {
      transform: translateX(-100%);
    }
    66.66% {
      transform: translateX(-200%);
    }
    94.99% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>