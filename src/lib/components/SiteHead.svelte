<script lang="ts">
  export let heading: string;
  export let subheading = "";
  export let title = "PostScript Medical";
</script>

<svelte:head>
  <title>
    {title}
  </title>
</svelte:head>

<div class="stacker--large">
  <h1>
    {heading}
  </h1>

  {#if subheading}
    <p class="page__sub-heading">
      {subheading}
    </p>
  {/if}
</div>
