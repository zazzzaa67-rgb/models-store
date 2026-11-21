import categoryData from '@/lib/data/categories.json'
import type { Category } from '@/lib/types'

const categories = categoryData as Category[]

export async function getCategories() {
  return categories
}

export async function getCategoryBySlug(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug)
}
