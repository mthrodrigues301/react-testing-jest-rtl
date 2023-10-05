import SummaryForm from "./SummaryForm";

const OrderSummary = () => {
  const scoops = ["3 Vanilla"];
  const toppings = ["M&Ms", "Hot fudge", "Gummibears"];

  return (
    <>
      <h1>Order Summary</h1>

      <form>
        <fieldset>
          <legend>Scoops: $6.00</legend>
          <div>
            {scoops.map(({ scoop, idx }) => (
              <input
                id={`scoops-${idx}`}
                type="radio"
                name="scoop"
                value={scoop}
              >
                {scoop}
              </input>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Toppings: $2.00</legend>
          <div>
            {toppings.map(({ topping, idx }) => (
              <input
                id={`topping-${idx}`}
                type="radio"
                name="topping"
                value={topping}
              >
                {topping}
              </input>
            ))}
          </div>
        </fieldset>

        <SummaryForm />
      </form>
    </>
  );
};

export default OrderSummary;
