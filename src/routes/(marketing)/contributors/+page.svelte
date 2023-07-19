<script lang="ts">
  import SiteHead from "$lib/components/SiteHead.svelte";
  import ContributorsSpecialty from "$lib/components/ContributorsSpecialty.svelte";

  import contributors from "$lib/data/contributors.json";
</script>

<SiteHead
  heading="Clinical specialty leads"
  subheading="These dedicated and innovative specialists have contributed to the illustrative guides."
  title="Contributors - PostScript Medical"
/>

<div class="contributors stacker--large">
  {#each Object.entries(contributors) as [heading, entries]}
    <ContributorsSpecialty
      {heading}
      {entries}
    />
  {/each}
</div>

<style>
  .contributors {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>