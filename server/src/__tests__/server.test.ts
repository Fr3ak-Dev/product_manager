describe('Primer Test', () => {
    it('Debe revisar que 1 + 1 sea igual a 2', () => {
        expect(1 + 1).toBe(2)
    })

    it('Debe revisar que 1 + 1 no sea igual a 3', () => {
        expect(1 + 1).not.toBe(3)
    })
})