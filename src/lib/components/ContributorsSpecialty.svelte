<script lang="ts">
  import ContributorsAvatar from "./ContributorsAvatar.svelte";

  export let heading: string;
  export let entries: { avatar_url: string, name: string; profession: string}[];
</script>

<h2>
  { heading }
</h2>

<ul class="contributor__list stacker--large">
  {#each entries as { avatar_url, name, profession }}
    <li>
      <ContributorsAvatar
        {avatar_url}
        {name}
        {profession}
      />
    </li>
  {/each}
</ul>

<style>
  h2 {
    text-transform: capitalize;
  }
</style>