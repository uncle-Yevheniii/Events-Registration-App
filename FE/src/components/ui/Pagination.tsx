import { IEvent } from '@/types/type'

interface PaginationProps {
    data: IEvent[]
    currentPage: number
    handlePageChange: (newPage: string | number) => void
}

export default function Pagination({ currentPage, handlePageChange, data }: PaginationProps) {
    const PER_PAGE: number = 6
    return (
        <div>
            {/* //TODO: Add pagination ✔ */}
            <button type="button" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                Previous Page
            </button>
            <button type="button" disabled={data.length < PER_PAGE} onClick={() => handlePageChange(currentPage + 1)}>
                Next Page
            </button>
        </div>
    )
}
