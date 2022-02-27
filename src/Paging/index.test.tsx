import { render, fireEvent, screen } from "@testing-library/react";
import Paging from "./index";

describe("pagingButton", () => {
  const info = { count: 1, pages: 3 };
  const dummyFn = () => {};
  const commonOptions = {
    info,
    active: 1,
    clearCharacters: dummyFn,
    onCharactersFetchRequested: dummyFn,
  };

  it("checkRender", () => {
    render(<Paging {...commonOptions} />);
    const btn = screen.getByText("1");
    expect(btn).toBeTruthy();
  });

  it("onClick", () => {
    render(<Paging {...commonOptions} />);
    const btn = screen.getByText("1");
    fireEvent.click(btn);
    expect(btn.parentElement).toHaveClass("active");
  });
});
