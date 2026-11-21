import modelData from '@/lib/data/models.json'
import type { Model } from '@/lib/types'

const models = modelData as Model[]

export async function getModels({
  search,
  sort,
  categorySlug,
  page,
  modelsPerPage,
}: {
  search?: string
  sort?: string
  categorySlug?: string
  page: number
  modelsPerPage: number
}) {
  const normalizedSearch = search?.trim().toLocaleLowerCase()
  let filteredModels = models.filter((model) => {
    const matchesSearch =
      !normalizedSearch ||
      `${model.name} ${model.description}`.toLocaleLowerCase().includes(normalizedSearch)
    const matchesCategory = !categorySlug || model.category === categorySlug

    return matchesSearch && matchesCategory
  })

  if (sort === 'alpha') {
    filteredModels = [...filteredModels].sort((a, b) => a.name.localeCompare(b.name))
  } else if (sort === 'popular') {
    filteredModels = [...filteredModels].sort((a, b) => b.likes - a.likes)
  } else if (sort === 'recent') {
    filteredModels = [...filteredModels].sort(
      (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
    )
  }

  const offset = (Math.max(page, 1) - 1) * modelsPerPage
  return filteredModels.slice(offset, offset + modelsPerPage)
}

export async function getModelById(id: string) {
  return models.find((model) => model.id === Number(id))
}

export async function getModelCount({
  search,
  categorySlug,
}: {
  search?: string
  categorySlug?: string
}) {
  const normalizedSearch = search?.trim().toLocaleLowerCase()

  return models.filter((model) => {
    const matchesSearch =
      !normalizedSearch ||
      `${model.name} ${model.description}`.toLocaleLowerCase().includes(normalizedSearch)
    const matchesCategory = !categorySlug || model.category === categorySlug

    return matchesSearch && matchesCategory
  }).length
}
