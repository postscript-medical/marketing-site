<script lang="ts">
  import SiteHead from "$lib/components/SiteHead.svelte";
  import ContributorsAvatar from "$lib/components/ContributorsAvatar.svelte";
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

  <p>You can write to them at <a href="mailto:admin@postscriptmedical.com">admin@postscriptmedical.com</a>.</p>

  <ul class="founders stacker--large">
    <li class="founder">
      <ContributorsAvatar
        avatar_url="https://res.cloudinary.com/postscript-medical/image/upload/v1622576447/marketing-website/graeme.jpg"
        name="Graeme Syme"
        profession="Graeme is a Specialist Gastroenterology Dietitian who lives and works in London having trained in Edinburgh. He is passionate about patient care and incorporating the patient within decision making."
      />

      <p>
        Having trained in Endoscopy, Graeme is the first JAG accredited Dietitian in the UK who can
        perform diagnostic gastroscopy procedures. This has led to the development of a of a "one
        stop coeliac service" enhancing consistency and familiarity for patients care.
      </p>

      <p>
        Graeme is a Fellow on the NHS Clinical Entrepreneur Programme. This is the biggest entrepreneurial workforce development programme of its kind to support development solutions to the challenges facing the NHS for the benefit of patients, staff and the wider NHS.
      </p>

      <a href="https://nhscep.hivebrite.com/">
        <img
          src="https://res.cloudinary.com/postscript-medical/image/upload/c_scale,w_400/v1689936644/marketing-website/logos/cep-logo_vrretu.png"
          alt="NHS clinical entrepreneur programme"
          width="200"
          height="49"
        />
      </a>
    </li>

    <li class="founder">
      <ContributorsAvatar
        avatar_url="https://res.cloudinary.com/postscript-medical/image/upload/v1622576447/marketing-website/rajan.jpg"
        name="Dr Rajan Patel"
        profession="Raj is a consultant gastroenterologist in Christchurch, New Zealand. He did his undergraduate degree (MBChB (Hons)) at the University of Liverpool Medical School, UK. He went on to complete his gastroenterology training in London (including Kings College Hospital, Royal Free Hospital and The Royal London Hospital). Raj worked as a consultant in North London before moving to New Zealand in 2021."
      />

      <p>
        He has an interest in Inflammatory Bowel Disease, advanced luminal endoscopy and clinical research. Raj also has a passion for telehealth and innovation. He has presented and published in areas including inflammatory bowel disease, colonic polypectomy and bowel preparation.
      </p>
    </li>
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

  .founder {
    display: grid;
    gap: var(--size_400);
    grid-auto-rows: min-content;
    max-width: 22rem;
  }

  .founder > p {
    padding-left: var(--size_200);
    padding-right: var(--size_200);
  }
</style>
