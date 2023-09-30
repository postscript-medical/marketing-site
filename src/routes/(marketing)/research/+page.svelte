<script lang="ts">
  import SiteHead from "$lib/components/SiteHead.svelte";
  import KeyFindingsGroup from "$lib/components/KeyFindingsGroup.svelte";
  import ResearchFindingsCard from "$lib/components/ResearchFindingsCard.svelte";

  import keyFindings from "$lib/data/key-findings";

  const cardContent1 = keyFindings.cardContent1;
  const cardContent2 = keyFindings.cardContent2;
  const cardContent3 = keyFindings.cardContent3;
  const researchPage1 = keyFindings.researchPage1;
  const researchPage2 = keyFindings.researchPage2;
</script>

<SiteHead
  heading="Research"
  title="Research papers - PostScript Medical"
  subheading="An independent survey was conducted with 50 specialist nurses across different hospitals and this is what was found:"
/>

<section class="intro stacker--x-large">
  <ResearchFindingsCard {...cardContent1} />

  <KeyFindingsGroup entries={researchPage1} />

  <ResearchFindingsCard {...cardContent2} />

  <KeyFindingsGroup entries={researchPage2} />

  <ResearchFindingsCard {...cardContent3} />
</section>
