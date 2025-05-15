<script>
  import SiteHead from "$lib/components/SiteHead.svelte";

  const locale = "gbp";
  const plans = [
    {
      name: "Individual plans",
      products: [
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
            "90% discount on the cost of the subscription with code: 90OFF"
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
  <div class="stacker--large">
    <h2>
      {plan.name}
    </h2>
  
    <ul class="plain products">
      {#each plan.products as product}
        {@const price = product.price.currencies.find(
          (currency) => currency.locale === locale
        )}
        <li>
          <p style="font-size:1.2em">
            <strong>
              {product.name}
            </strong>
          </p>
  
          <p>
            <span class="price">£{price?.amount}</span><span class="billing-frequency">/per month</span><br />or £{price && price?.amount * 10}/per year
          </p>
  
          <p>
            Includes:
          </p>
  
          <ul class="features">
            {#each product.features as feature}
              <li>
                {feature}
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
{/each}

<!-- <div class="box">
  <p>
    <a class="cta" href="https://app.postscriptmedical.com/#/sign-up">Sign up for a plan</a>
  </p>

  <p class="discount-note">
    Coupon discount for limited time only.
  </p>
</div> -->

<div class="box">
  <h2>
    Team plans
  </h2>
  
  <p style="margin:auto; text-align:center;">
    Please <a href="mailto:admin@postscriptmedical.com">contact us</a> to discuss.
  </p>
</div>

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

  .features {
    list-style: inside "- ";
    padding-left: var(--size_100);
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

  /* .cta {
    font-size: 1.5em;
    padding: var(--size_400) var(--size_600)
  }

  .discount-note {
    font-style: italic;
    font-size: 0.8rem;
    line-height: 2.5;
    text-align: center;
  } */
</style>