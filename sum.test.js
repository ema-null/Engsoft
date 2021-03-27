const {soma, sub, multi, div} = require("./calculadora")

test('Adicionando 1 + 2 é igual a 3', () => {
  expect(soma( 1, 2) ).toBe(3)
})

test('adds 5 - 2 to equal 3', () =>{
  expect(sub(5,2)).toBe(3)
})

test('adds 1 * 2 to equal 2', () =>{
  expect(multi(1,2)).toBe(2)
})

test('adds 2 / 2 to equal 1', () =>{
  expect(div(2,2)).toBe(1)
})