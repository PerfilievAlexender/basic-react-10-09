import { createSelector } from 'reselect'

export const selectedSelector = (state) => state.filters.selected
export const dateSelector = (state) => state.filters.dateRange
export const articlesSelector = (state) => state.articles

export const filteredArticles = createSelector(
  selectedSelector,
  dateSelector,
  articlesSelector,
  (selected, dateRange, articles) => {
    console.log('--- select')
    const { from, to } = dateRange

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((select) => select.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)
