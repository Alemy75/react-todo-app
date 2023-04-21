export interface Todo {
    id: number
    title: string
    description: string
    date: string
    status: boolean
    list: number
    importance: number
}

export type List = {
    id: number
    name: string
    color: string
}

export interface IStatus {
    id: number
    status: boolean
}