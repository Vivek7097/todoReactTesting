import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {Input} from '../input'


it('Should render same placeholder that pass on', () => {
    render(<Input  label="New Todo Input" placeholder = "add new todo"/>)

    const label = screen.getByLabelText('New Todo Input')
    const placeholder = screen.getByPlaceholderText('add new todo')

    expect(label).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
})

// it("Input length should be greater than 3", () => {
//     render(<Input label="New Todo Input" placeholder="add new todo" />)
//     const input = screen.getByTestId('text-input')
//     input.value = "abcd"
//     expect(input.value.length).toBegreaterThan(3)
// })


