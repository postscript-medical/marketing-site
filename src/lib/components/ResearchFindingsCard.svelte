<script lang="ts">
  export let heading: string | undefined = undefined;
  export let percentage: number;
  export let summary: string;
  export let image: { src: string; alt: string; width: number; height: number } | undefined =
    undefined;
</script>

<article class="research-findings__card">
  <div class="stacker">
    <h2>
      {heading}
    </h2>

    <p class="research-findings__card__percentage">
      {percentage}%
    </p>

    <p>
      {summary}
    </p>
  </div>

  {#if image}
    <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
  {/if}
</article>

<style>
  .research-findings__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .research-findings__card > * {
    max-width: 90vw;
  }

  .research-findings__card > :not(:last-child) {
    margin-bottom: var(--size_400);
  }

  .research-findings__card__percentage {
    font-size: var(--size_800);
    font-weight: 700;
    line-height: 1;
  }

  @media screen and (min-width: 1024px) {
    .research-findings__card {
      flex-direction: row;
    }
    .research-findings__card > * {
      max-width: 40vw;
    }
    .research-findings__card:nth-of-type(even) img {
      order: -1;
    }
  }
</style>
