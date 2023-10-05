import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  const onCheckboxChange = (e) => {
    setTcChecked(e.target.checked);
  };

  return (
    <Form>
      <Form.Group controlId={"terms-and-conditions"}>
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={onCheckboxChange}
          id="custom-checkbox"
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
