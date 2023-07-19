<script lang="ts">
  export let entries: { percentage: number, summary: string }[];

  /**
   * Returns the circumference of a circle based on its radius
   * @param {Number} radius The radius of the circle
   * @returns {Number} The circumference of the cicle
   */
  function getCircleCircumference (radius: number): number {
    // circumference = 2 * PI * radius
    return 2 * 3.14 * radius;
  }

  /**
   * Returns a partial circumference value based on a given ratio
   * @param {Number} radius The radius of the circle
   * @param {Number} ratio The ratio of the full circumference
   * @returns {Number} The partial of a given circumference
   */
  function getCircleCircumferencePartial (radius: number, ratio: number): number {
    return getCircleCircumference(radius) * ratio;
  }
</script>

<ul class="key-findings-group horizontal-gallery">
  {#each entries as entry}
    <li>
      <figure class="stacker">
        <svg class="percentage-ring" viewBox="0 0 100 100" width="100" height="100">
          <text x="52.5%" y="57.5%" text-anchor="middle">
            { entry.percentage }%
          </text>

          <path
            fill-rule="evenodd"
            d="
            M 0, 50
            a 50,50 0 1,0 100,0
            a 50,50 0 1,0 -100,0

            M 10, 50
            a 40,40 0 1,0 80,0
            a 40,40 0 1,0 -80,0
            "
          />

          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke-width="10"
            stroke-dasharray={getCircleCircumferencePartial(45, entry.percentage / 100) }
            transform="rotate(-90, 50, 50)"
          />
        </svg>

        <figcaption>
          { entry.summary }
        </figcaption>
      </figure>
    </li>
  {/each}
</ul>

<style>
  .key-findings-group {
    text-align: center;
  }

  .key-findings-group>li {
    max-width: 25ch;
  }

  ul.horizontal-gallery {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    max-width: var(--width_max);
    margin-right: auto;
    margin-left: auto;
  }

  .horizontal-gallery>* {
    padding: var(--size_400);
    max-width: var(--width_half);
  }
</style>