export type Operation = '+' | '-' | '*' | '/'


export type CalculatePayload = {
    nums: number[]
    texts: string[]
    operation: Operation
}
