import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../Form'
// import { render, fireEvent, getByTestId } from '@testing-library/react'
// import 'jest-dom/extend-expect';


it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("Form loads with initial state values of 0 ", () => {
    const { container } = render(<Form />);
    const transpInput = getByTestId(container, 'transp-input')
    const mealInput = getByTestId(container, 'meal-input')
    const parkingInput = getByTestId(container, 'parking-input')
    expect(transpInput.textContent).toBe("0")
    expect(mealInput.textContent).toBe("0")
    expect(parkingInput.textContent).toBe("0")
});

it("Entering a number via input fields changes the initial state values and clicking the reset buttons restores the initial state values", () => {
    const { container } = render(<Form />);
    const transpInput = getByTestId(container, 'transp-input')
    const mealInput = getByTestId(container, 'meal-input')
    const parkingInput = getByTestId(container, 'parking-input')
    const partialResult = getByTestId(container, 'partial-result')
    const totalResult = getByTestId(container, 'total-result')

    fireEvent.change(transpInput, { target: { value: '24' } });
    expect(partialResult.toHaveTextContent).toEqual('2.88');
    fireEvent.change(mealInput, { target: { value: '4' } });
    expect(partialResult.toHaveTextContent).toEqual('36');
    fireEvent.change(parkingInput, { target: { value: '68' } });
    expect(partialResult.toHaveTextContent).toEqual('44');
    expect(totalResult.toHaveTextContent).toEqual('82.88');

    fireEvent.click(component.getByTestId('transp-reset'));
    expect(partialResult.toHaveTextContent).toEqual('0');
    fireEvent.click(component.getByTestId('meal-reset'));
    expect(partialResult.toHaveTextContent).toEqual('0');
    fireEvent.click(component.getByTestId('parking-reset'));
    expect(partialResult.toHaveTextContent).toEqual('0');
})


