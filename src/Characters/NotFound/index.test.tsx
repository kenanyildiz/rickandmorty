import { render } from "@testing-library/react";
import NotFound from "./index";

const image =
  "https://media0.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=f2fb70b209i1ap216ng8i5sv3wvkjcah3lenirergwjjnfxd&rid=giphy.gif";

it("checkNotFoundRender", () => {
  const { queryByAltText } = render(<NotFound />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const notFoundCmp = queryByAltText(image);
  expect(notFoundCmp).toBeTruthy();
});
