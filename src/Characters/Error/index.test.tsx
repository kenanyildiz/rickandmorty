import { render } from '@testing-library/react'
import Character from "./index";

const image = 'https://media1.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif?cid=f2fb70b2lt9hcai04259yj53nthod4rg1i8m31xst73cw2q5&rid=giphy.gif&ct=g'

it('checkErrorRender', () => {
  const { queryByAltText } = render(<Character hasError data={{ image }} />)
  const errorCmp = queryByAltText(image)
  expect(errorCmp).toBeTruthy()
})
