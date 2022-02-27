import { render } from "@testing-library/react";
import Character from "./index";

const imgUrl =
  "https://yt3.ggpht.com/ytc/AKedOLSaDjkFYa9HkazCIrT4Vu28MaF0E3lfY7E14VoaKHo=s900-c-k-c0x00ffffff-no-rj";

it("checkCharacterRender", () => {
  const { queryByAltText } = render(<Character data={{ image: imgUrl }} />);
  const character = queryByAltText(imgUrl);
  expect(character).toBeTruthy();
});
