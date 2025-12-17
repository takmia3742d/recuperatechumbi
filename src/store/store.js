import { create } from 'zustand'

export const useProductStore = create((set) => ({
  products: [],  // ← Cambié: productos → products
  currentPage: 1,
  totalPages: 1,
  loading: false,
  
  fetchProducts: async (page = 1) => {
    set({ loading: true })
    try {
      const limit = 20
      const skip = (page - 1) * limit
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      )
      const data = await response.json()
      
      const totalPages = Math.ceil(data.total / limit)
      
      set({
        products: data.products,
        currentPage: page,
        totalPages: totalPages,
        loading: false
      })
    } catch (error) {
      console.error('Error:', error)
      set({ loading: false })
    }
  }
}))