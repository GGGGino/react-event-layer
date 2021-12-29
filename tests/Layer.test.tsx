import React from "react";
import { render } from "@testing-library/react";

import Layer from "../src/components/Layer";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<Layer {...props} />);

  it("should exist", () => {
    const { getByTestId } = renderComponent();

    expect(renderComponent).toBeTruthy();
  });

  /*it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("test-component");

    expect(testComponent).toHaveClass("test-component-secondary");
  });*/
});