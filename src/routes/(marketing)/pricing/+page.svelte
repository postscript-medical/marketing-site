<script>
  import SiteHead from "$lib/components/SiteHead.svelte";

  const locale = "gbp";
  const plans = [
    {
      name: "Individual plans",
      products: [
        {
          name: "Single specialty",
          price: {
            currencies: [
              {
                amount: 25,
                locale: "gbp"
              },
              {
                amount: 52,
                locale: "nzd"
              }
            ]
          },
          features: [
            "All illustrations for a single specialty",
            "50% discount for the first 12 months"
          ]
        },
        {
          name: "Whole catalogue",
          price: {
            currencies: [
              {
                amount: 30,
                locale: "gbp"
              },
              {
                amount: 62.5,
                locale: "nzd"
              }
            ]
          },
          features: [
            "All illustrations from all specialties",
            "50% discount for the first 12 months"
          ]
        }
      ]
    }
  ];
</script>

<SiteHead
  heading="Pricing"
  title="Pricing plans - PostScript Medical"
  subheading="Choose the best plan to suit your needs"
/>

{#each plans as plan}
  <h2>
    {plan.name}
  </h2>

  <ul class="plain products">
    {#each plan.products as product}
      {@const price = product.price.currencies.find(
        (currency) => currency.locale === locale
      )}
      <li>
        <p>
          <strong>
            {product.name}
          </strong>
        </p>

        <p>
          <span class="price">£{price?.amount}</span><span class="billing-frequency">/per month</span><br />or £{price?.amount * 10}/per year
        </p>

        <p>
          Includes:
        </p>

        <ul>
          {#each product.features as feature}
            <li>
              {feature}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
{/each}

<div class="box">
  <p>
    <a class="cta" href="https://app.postscriptmedical.com/#/sign-up">Sign up for a plan.</a>
  </p>

  <p class="discount-note">
    50% discount for limited time only. Discount will be applied at the final stage of payment process. 
  </p>
</div>

<h2>
  Team plans
</h2>

<p style="margin:auto; text-align:center;">
  Please <a href="mailto:admin@postscriptmedical.com">contact us</a> to discuss.
</p>

<style>
  h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .box {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--size_500);
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .products > * {
    border: 2px solid black;
    border-radius: 0.25rem;
    padding: 1rem;
    max-width: 17rem;
  }

  .products > * > :not(:last-child) {
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2.36rem;
    font-weight: 600;
    line-height: 1;
  }

  .billing-frequency {
    text-transform: uppercase;
    color: #a1a1a1;
    font-size: 0.8em;
  }

  .discount-note {
    font-style: italic;
    font-size: 0.8rem;
  }
</style>