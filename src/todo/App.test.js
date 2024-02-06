import { render,fireEvent, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'
import { filter } from 'mongodb-core/lib/connection/logger'

const MockApp = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

it("should add new todo", () => {
    render (<MockApp/>)

    const input = screen.getByTestId('text-input');
    fireEvent.change(input, { target: { value: 'newTodo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText('newTodo')).toBeInTheDocument();
})

it("should able to toggle all", () => {
    render(<MockApp/>)

    const input = screen.getByTestId('text-input');
    fireEvent.change(input, { target: { value: 'newTodo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    fireEvent.change(input, { target: { value: 'newTodo1' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const toggleAll = screen.getByTestId('toggle-all');
    fireEvent.click(toggleAll);

    const items = screen.getAllByTestId('todo-item');

    items.forEach((item) => {
        const checkbox = within(item).getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
});