import React from 'react'
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import FormField from './Form.test'



it('Input should be red and have a error message', () => {
    const component = render(<FormField value="hola" />)
    expext(component.getByTestId('input')).toHaveClass('text-danger is-invalid')
    expext(component.getByTestId('message')).toHaveTextContent('Por favor, introduzca un número válido')
})

it('Input not should be red and have no error message', () => {
    const component = render(<FormField value="15" />)
    expext(component.getByTestId('input')).not.toHaveClass('text-danger is-invalid')
    expext(component.getByTestId('message')).not.toHaveTextContent('Por favor, introduzca un número válido')
})