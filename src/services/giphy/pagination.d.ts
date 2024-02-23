export interface PaginationProps<T extends object> {
    data: T[]
    pagination: {
        total: number
        offset: number
        totalCount: number
    }
    meta: unknown
}