import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SummaryForm from "./SummaryForm";

const OrderSummary = () => {
  const scoops = ["3 Vanilla"];
  const toppings = ["M&Ms", "Hot fudge", "Gummibears"];

  return (
    <>
      <h1>Order Summary</h1>

      <Form>
        <Form.Group controlId={"scoops"}>
          <Form.Label>Scoops: $6.00</Form.Label>
          <Form.Control as="select" defaultValue={scoops[0]}>
            {scoops.map(({ scoop, idx }) => (
              <option
                key={`scoops-${idx}`}
                id={`scoops-${idx}`}
                type="radio"
                name="scoop"
                label={scoop}
                value={scoop}
              >
                {scoop}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId={"topping"}>
          <Form.Label>Toppings: $2.00</Form.Label>
          <Form.Control as="select" defaultValue={toppings[0]}>
            {toppings.map(({ topping, idx }) => (
              <option
                key={`topping-${idx}`}
                id={`topping-${idx}`}
                type="radio"
                name="scoop"
                label={topping}
                value={topping}
              >
                {topping}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <SummaryForm />
      </Form>
    </>
  );
};

export default OrderSummary;
