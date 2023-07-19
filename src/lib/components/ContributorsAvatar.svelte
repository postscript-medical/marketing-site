<script lang="ts">
  export let avatar_url: string;
  export let name: string;
  export let profession: string;
</script>

<figure class="contributor stacker--tightest">
  {#if avatar_url}
    <img
      class="contributor__avatar"
      src={avatar_url}
      alt={name}
      width="440"
      height="440"
    />
  {:else}
    <svg class="contributor__avatar" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="50" fill="grey" />
    </svg>
  {/if}

  <figcaption class="stacker--tightest">
    <p class="contributor__name">
      {name}
    </p>
    <p class="contributor__profession">
      {profession}
    </p>
  </figcaption>
</figure>