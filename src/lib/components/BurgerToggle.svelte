<script lang="ts">
  import { onMount } from "svelte";

  const OPEN = "open";
  const CLOSED = "closed";

  let enabled = "false";
  let state = CLOSED;

  onMount(() => {
    enabled = "true";
  });

  function toggleBurger() {
    state = state === OPEN ? CLOSED : OPEN;
  }
</script>

<button
  aria-label="Open menu"
  class="burger-toggle"
  data-enabled={enabled}
  data-state={state}
  on:click={toggleBurger}
>
  <span class="burger-toggle__icon" />
</button>

<style>
  .burger-toggle {
    align-self: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: none;
    height: 2.25rem;
    margin-left: auto;
    padding: 0;
    position: relative;
    width: 2.25rem;
  }

  .burger-toggle__icon,
  .burger-toggle__icon::before,
  .burger-toggle__icon::after {
    border: 1px solid var(--color_dark);
    box-sizing: border-box;
    display: block;
    width: 24px;
    height: 3px;
    background-color: var(--color_dark);
    position: absolute;
    border-radius: 3px;
    left: 50%;
    margin-left: -12px;
    transition: transform 350ms ease-in-out;
  }

  .burger-toggle__icon {
    top: 50%;
    transform: translateY(-50%);
  }

  .burger-toggle__icon::before,
  .burger-toggle__icon::after {
    content: "";
  }

  .burger-toggle__icon::before {
    top: -8px;
  }

  .burger-toggle__icon::after {
    bottom: -8px;
  }

  @media screen and (max-width: 600px) {
    .burger-toggle[data-enabled="true"] {
      display: block;
    }
    .burger-toggle[data-enabled="true"] + :global(nav) {
      width: 100%;
      display: none;
    }
    .burger-toggle[data-enabled="true"] + :global(nav) :global(.links--primary) {
      flex-direction: column;
      align-items: center;
      margin-top: var(--size_600);
    }
    .burger-toggle[data-enabled="true"] + :global(nav) :global(.links--primary) > :global(*) {
      margin-bottom: var(--size_600);
      margin-right: 0;
    }
    .burger-toggle[data-enabled="true"][data-state="open"] + :global(nav) {
      display: block;
    }
    .burger-toggle[data-enabled="true"][data-state="open"] .burger-toggle__icon {
      background-color: transparent;
      border: transparent;
      transform: rotate(180deg);
    }
    .burger-toggle[data-enabled="true"][data-state="open"] .burger-toggle__icon::before {
      top: 0;
      transform: rotate(45deg);
    }
    .burger-toggle[data-enabled="true"][data-state="open"] .burger-toggle__icon::after {
      top: 0;
      transform: rotate(-45deg);
    }
  }
</style>
