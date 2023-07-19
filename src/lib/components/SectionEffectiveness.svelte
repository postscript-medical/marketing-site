<script lang="ts">
  import KeyFindingsGroup from "./KeyFindingsGroup.svelte";
  import keyFindings from "$lib/data/key-findings";
</script>

<section class="effectiveness full-bleed">
  <div class="effectiveness-grid width--max">
    <div class="stacker">
      <h2>
        Just how effective is PostScript?
      </h2>

      <p>
        We evaluated the use of our illustrative tool with a group of Clinical Nurse specialists. This is what they said...
      </p>
    </div>

    <KeyFindingsGroup entries={keyFindings.homePage} />
  </div>
</section>

<style>
  .effectiveness {
    background-color: var(--color_accent);
    color: var(--color_light);
    padding: var(--size_900);
    text-align: center;
  }

  .effectiveness-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .effectiveness-grid> :not(:last-child) {
    margin-bottom: var(--size_400);
  }

  @media screen and (min-width: 1024px) {
    .effectiveness {
      text-align: left;
    }

    /* IE11 */
    .effectiveness-grid {
      flex-direction: row;
    }

    /* Modern browsers */
    @supports (display: grid) {
      .effectiveness-grid {
        display: grid;
        gap: var(--size_400);
        grid-template-columns: 1.25fr 3fr;
      }
  
      .effectiveness-grid> :not(:last-child) {
        margin-bottom: 0;
      }
  
      .effectiveness-grid .key-findings-group {
        grid-column-start: 2;
        grid-row: 1 / -1;
      }
    }
  }
</style>