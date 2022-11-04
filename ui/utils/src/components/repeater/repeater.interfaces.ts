export interface RepeaterProps {
  quantity?: number
  items?: Array<any>
  onIteration: (item: any, index: number, array: Array<any>) => any
}
