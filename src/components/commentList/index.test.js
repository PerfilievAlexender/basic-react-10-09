import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CommentList from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should ', () => {
    const conteiner = render(<CommentList comment={articles[0].comments} />)
    console.log(articles[0].comments.length)
    expect(conteiner.find('.test_comment').length).toBe(0)
  })
})
