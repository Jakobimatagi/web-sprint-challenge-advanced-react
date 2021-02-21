import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // const formHeader = screen.getByText(/Checkout Form/i)
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i);
   
    header.then((Element) => {
        expect(Element).toBeVisible();
    })
    

   
});


test("form shows success message on submit with form details", ()=> {

    //arrange
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const submitBtn = screen.getByRole('button', {name: /checkout/i})

    // act

    userEvent.type(firstNameInput, "James");
    userEvent.type(lastNameInput, "Jones");
    userEvent.type(addressInput, "1606 W. Wynview Lane");
    userEvent.type(cityInput, 'South Jordan');
    userEvent.type(stateInput, 'utah');
    userEvent.type(zipInput, "84095");

    userEvent.click(submitBtn);

    
    //assert
    const newOrder = screen.findByText(/You have ordered some plants! Woo-hoo!/i)

    newOrder.then((Element) => {
        expect(Element).toBeVisible()
    })

})