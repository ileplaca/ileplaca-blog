export interface Post {
  title: string
  description: string
  id: string
  created_at: Date
  slug: string
  user: {
    username: string
    email: string
    created_at: Date
    id: number,
    roles: string[]
  }
}