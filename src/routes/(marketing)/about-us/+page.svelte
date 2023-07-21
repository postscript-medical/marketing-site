<script lang="ts">
  import SiteHead from "$lib/components/SiteHead.svelte";
  import ContributorsAvatar from "$lib/components/ContributorsAvatar.svelte";

  const founders = [
    {
      name: "Graeme Syme",
      profession:
        "Graeme is a Specialist Gastroenterology Dietitian who lives and works in London having trained in Edinburgh. He is passionate about patient care and incorporating the patient within decision making.",
      avatar_url:
        "https://res.cloudinary.com/postscript-medical/image/upload/v1622576447/marketing-website/graeme.jpg",
    },
    {
      name: "Dr Rajan Patel",
      profession:
        "Rajan Patel is a consultant gastroenterologist and general physician. He trained in London and is currently working in New Zealand. He’s got a passion for teaching and innovation.",
      avatar_url:
        "https://res.cloudinary.com/postscript-medical/image/upload/v1622576447/marketing-website/rajan.jpg",
    },
  ];
</script>

<SiteHead heading="About us" title="About us - PostScript Medical" />

<section class="about-us stacker--large">
  <p>
    PostScript Medical, founded by a gastroenterologist and dietitian, is for healthcare
    professionals who want to personalise care.
  </p>

  <p>
    Co-founders Rajan and Graeme embarked upon a journey to bring high quality digital
    illustrations, which can be annotated and individualised, to every patient they see.
  </p>

  <ul class="founders stacker--large">
    {#each founders as { name, profession, avatar_url }}
      <li class="founder">
        <ContributorsAvatar {avatar_url} {name} {profession} />
      </li>
    {/each}
  </ul>
</section>

<style>
  .about-us p {
    margin-left: auto;
    margin-right: auto;
  }

  .about-us :global(.contributor) {
    max-width: 22rem;
  }

  .about-us :global(.contributor img) {
    width: 90vw;
    height: 90vw;
    max-width: 16rem;
    max-height: 16rem;
  }

  .about-us :global(.contributor__name) {
    text-align: center;
    font-size: 1.5em;
  }

  .founders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
