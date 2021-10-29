import React from "react";
import { render , fireEvent } from "@testing-library/react"
import Form from "./Form";

it("renders correctly" , () => {
    const { queryByTestId } = render(<Form />)

    expect(queryByTestId("firstname-input")).toBeTruthy()
    expect(queryByTestId("lastname-input")).toBeTruthy()
    expect(queryByTestId("email-input")).toBeTruthy()
    expect(queryByTestId("password-input")).toBeTruthy()
})


describe("Input value", ()=> {
    it("firstname updates on change", ()=> {
        const { queryByTestId } = render(<Form />)
        const firstNameInput = queryByTestId("firstname-input")
        fireEvent.change(firstNameInput, {target : { value : "test"}})
        expect(firstNameInput.value).toBe("test")
    })

    it("lastName updates on change", ()=> {
        const { queryByTestId } = render(<Form />)
        const lastNameInput = queryByTestId("lastname-input")
        fireEvent.change(lastNameInput, {target : { value : "test"}})
        expect(lastNameInput.value).toBe("test")
    })

    it("email updates on change", ()=> {
        const { queryByTestId } = render(<Form />)
        const emailInput = queryByTestId("email-input")
        fireEvent.change(emailInput, {target : { value : "test"}})
        expect(emailInput.value).toBe("test")
    })

    it("password updates on change", ()=> {
        const { queryByTestId } = render(<Form />)
        const passwordInput = queryByTestId("password-input")
        fireEvent.change(passwordInput, {target : { value : "test"}})
        expect(passwordInput.value).toBe("test")
    })

})


it("Form Submits", () => {
  const onSubmit = jest.fn();
  const { getByText} = render(<Form onSubmit={onSubmit} />);
  fireEvent.click(getByText("SIGN UP"));
  expect(onSubmit).toHaveBeenCalled();
  
});


