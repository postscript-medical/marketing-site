<script lang="ts">
  import SiteHead from "$lib/components/SiteHead.svelte";
  import SectionContributors from "$lib/components/SectionContributors.svelte";
  import SectionEffectiveness from "$lib/components/SectionEffectiveness.svelte";
  import SectionTestimonials from "$lib/components/SectionTestimonials.svelte";
</script>

<SiteHead
  heading="Empowering patients. Personalising care."
  subheading="An easy-to-use web application across multiple devices to enhance communication during consultations."
/>

<img
  alt=""
  src="https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/application-1.jpg"
  width="2010"
  height="1412"
/>

<section class="intro stacker--x-large">
  <article class="intro-card">
    <div class="intro-card__content stacker">
      <h2>Communication made easy.</h2>

      <p>
        Overcome obstacles such as language barriers, hearing impairments and learning difficulties
        with individualised illustrations.
      </p>

      <a href="/research"> Review the research </a>
    </div>

    <img
      alt=""
      src="https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/device-1.jpg"
      width="1145"
      height="724"
    />
  </article>

  <article class="intro-card">
    <div class="intro-card__content stacker">
      <h2>Improve the efficiency of consultations.</h2>

      <p>An intuitive tool to simplify the message to patients.</p>
    </div>

    <img
      alt=""
      src="https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/device-2.jpg"
      width="1199"
      height="688"
    />
  </article>

  <article class="intro-card--b stacker">
    <div class="intro-card__content stacker">
      <h2>Multi-device access.</h2>

      <p>
        High performance on your clinic room desktop and on the move with your tablet or smartphone.
      </p>
    </div>

    <img
      alt=""
      src="https://res.cloudinary.com/postscript-medical/image/upload/v1622576446/marketing-website/device-3.jpg"
      width="1812"
      height="1206"
    />
  </article>
</section>

<SectionEffectiveness />

<SectionTestimonials />

<SectionContributors />

<style>
  .intro-card {
    display: flex;
    flex-direction: column;
  }

  .intro-card > :not(:last-child) {
    margin-bottom: var(--size_400);
  }

  .intro-card,
  .intro-card--b {
    text-align: center;
  }

  .intro-card__content > *,
  .intro-card--b > * {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1024px) {
    .intro-card {
      flex-direction: row;
    }

    .intro-card__content {
      text-align: left;
    }

    .intro-card img {
      width: 45%;
    }

    .intro-card:nth-child(odd) img {
      order: -1;
    }

    .intro-card--b img {
      width: 75%;
    }
  }
</style>
