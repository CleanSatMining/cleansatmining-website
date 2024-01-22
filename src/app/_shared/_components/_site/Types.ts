export type StatusCode =
  | 'OPERATIONAL'
  | 'FUNDING'
  | 'INACTIVE'
  | 'CLOSED'
  | 'UNKNOWN'
  | 'MAINTENANCE'
  | 'COMING SOON'

export type SiteData = {
  id: number
  title: string
  description: string
  status: string
  statusCode: StatusCode
  alt: string
  src: string
}
