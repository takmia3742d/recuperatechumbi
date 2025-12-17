import {create }from 'zustand'

export const useProductStore= create((set) =>({
    productos:[,],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    


}))