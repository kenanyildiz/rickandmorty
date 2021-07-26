import { render, fireEvent } from "@testing-library/react";
import Paging from "./index";

describe("pagingButton", () => {
  const info = { count: 1, pages: 3 }
  const dummyFn = () => {}
  const commonOptions = { info, active: 1, clearCharacters: dummyFn, onCharactersFetchRequested: dummyFn }

  it('checkRender', () => {
    const { queryByTitle } = render(<Paging {...commonOptions} />)
    const btn = queryByTitle("1")
    expect(btn).toBeTruthy()
  })


  it('onClick', () => {
    const { queryByTitle } = render(<Paging {...commonOptions} />)
    const btn = queryByTitle("1")
    fireEvent.click(btn)
    expect(btn.parentElement).toHaveClass('active')
  })
})
