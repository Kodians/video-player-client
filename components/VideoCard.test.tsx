import { render, screen } from "../utils/test-utils";
/* import userEvent from "@testing-library/user-event"; */
import VideoCard from "./VideoCard";


describe("Render Video Card", () => {

    test("Should render card video  correctly", () => {
        const video = {fileBase64String:"",
        metadata: { title:"", description:"" },}
        const videoCard = screen.getByRole("video");
        render(<VideoCard  video = {video}/>);
        expect(videoCard).toBeInTheDocument();
      });
})
