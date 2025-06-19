export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

/**
 * Returns true if the string is 'true' and false otherwise.
 */
export function toBoolean(str: string): boolean {
    return str.toLowerCase() === 'true'
}