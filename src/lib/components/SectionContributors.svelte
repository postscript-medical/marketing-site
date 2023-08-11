<script lang="ts">
  import ContributorsSpecialty from "./ContributorsSpecialty.svelte";

  import contributors from "../data/contributors.json";
</script>

<section class="contributors stacker--large">
  <ContributorsSpecialty heading="Specialty Leads" entries={contributors.gastroenterology} />

  <a class="cta--b" href="/contributors"> See all contributors </a>
</section>

<style>
  .contributors {
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
</style>
