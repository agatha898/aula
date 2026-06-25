const multiplicacao = requine ('./multiplicacao');
test ("deve multiplicar dois numeros positivos",() =>{
    expect (multiplicacao (4,5)).toBe (20);
})
test  ("deve multiplicar um numero positivo por um negativo",() =>{
    expect (multiplicacao (4,-5)) . toBe(-20)
})
test ("deve multiplicar dois numeros negativos",() =>{
expect (multiplicacao (-4,-5)). toBe (20);
})

test ("deve multiplicar 4 por 5 e retornar 25",() =>{
    expect (multiplicacao (4,5)). toBe (25);
    })