import { render } from '@testing-library/react'
import Character from "./index";

const image = 'https://media4.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=f2fb70b29y6eyb0o8mp8eputksgk0utwfgrzaj32q6g2f14t&rid=giphy.gif&ct=g'

it('checkLoadingRender', () => {
  const { queryByAltText } = render(<Character isLoading data={{ image }} />)
  const loadingCmp = queryByAltText(image)
  expect(loadingCmp).toBeTruthy()
})
