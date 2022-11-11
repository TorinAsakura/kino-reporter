export interface RepeaterProps {
  quantity?: number
  items?: Array<any>
  children: (item: any, index?: number) => any
}
