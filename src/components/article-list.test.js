import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleListWithAccordion, { ArticleList } from './article-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', () => {
  it('should render article list', () => {
    const conteiner = render(
      <ArticleList articles={articles} toggleOpenItem={() => {}} />
    )
    expect(conteiner.find('.test_article-list--item').length).toEqual(
      articles.length
    )
  })

  it('should render close articles', () => {
    const conteiner = render(<ArticleListWithAccordion articles={articles} />)
    expect(conteiner.find('.test_article--body').length).toEqual(0)
  })

  /*
  it('should open article on click', () => {
    const conteiner = mount(<ArticleListWithAccordion articles={articles} />)  
    
    conteiner.find('.test_openArticle').at(0).simulate('click')

    expect(conteiner.find('.test_article--body').length).toEqual(1)
  })
  */

  it('should trigger data fetching on mount', (done) => {
    mount(<ArticleListWithAccordion articles={[]} fetchData={done} />)
  })
})
