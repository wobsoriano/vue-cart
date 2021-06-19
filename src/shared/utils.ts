const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export const toCurrency = (value: number) => formatter.format(value)