import {render, screen, fireEvent} from '@testing-library/react'
import checkStringsAnagram from '../src/checkStringsAnagram';
import '@testing-library/jest-dom'
import App from '../src/App'

describe('the anagram calculator function', () => {
    it('renders default message if not changed', () => {
        render(<App/>)
        expect(screen.getByTestId('message')).toHaveTextContent('Write something in the input fields to see if they are anagrams')

    })
    it('requires both input fields to have a value', () => {
      render(<App/>)
      const input1 = screen.getByTestId('input1')
      const button = screen.getByTestId('button')
      fireEvent.change(input1, {target: {value: 'Hej'}})
      fireEvent.click(button)
      expect(screen.getByTestId('message')).toHaveTextContent('Please write something in both of the input fields to find out if they are anagrams')
    })

    it('is anagram if length and letters are equal', () => {
      render(<App/>)
      const input1 = screen.getByTestId('input1')
      const input2 = screen.getByTestId('input2')
      const button = screen.getByTestId('button')
      fireEvent.change(input1, {target: {value: 'Hej'}})
      fireEvent.change(input2, {target: {value: 'jeh'}})
      fireEvent.click(button)
      expect(screen.getByTestId('message')).toHaveTextContent('Hej and jeh are anagrams!')
    })

    it('is not anagram if length differentiate', () => {
      render(<App/>)
      const input1 = screen.getByTestId('input1')
      const input2 = screen.getByTestId('input2')
      const button = screen.getByTestId('button')
      fireEvent.change(input1, {target: {value: 'Hej'}})
      fireEvent.change(input2, {target: {value: 'Hallå'}})
      fireEvent.click(button)
      expect(screen.getByTestId('message')).toHaveTextContent('Hej and Hallå are NOT anagrams!')
    })

    it('is not anagram if letters differentiate', () => {
      render(<App/>)
      const input1 = screen.getByTestId('input1')
      const input2 = screen.getByTestId('input2')
      const button = screen.getByTestId('button')
      fireEvent.change(input1, {target: {value: 'Hej'}})
      fireEvent.change(input2, {target: {value: 'Tja'}})
      fireEvent.click(button)
      expect(screen.getByTestId('message')).toHaveTextContent('Hej and Tja are NOT anagrams!')
    })
})
