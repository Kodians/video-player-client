import { render, screen } from "../../utils/test-utils";
import { VideoUploadForm } from "./VideoUploadForm";
import { useFetch } from "../../hooks/useFetch";
import { useInsert } from "../../hooks/useInsert";

const mockedUseFetch = useFetch as jest.Mock<any>;
const mockedUseInsert = useInsert as jest.Mock<any>;

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useInsert");

describe("Upload new video", () => {
  beforeAll(() => {
    mockedUseFetch.mockImplementation(() => ({ data: [] }));
    mockedUseInsert.mockImplementation(() => ({
      mutate: jest.fn(),
    }));
  });

  test("should render video upload form correctly", () => {
    render(<VideoUploadForm />);
    const videoUploadForm = screen.getByRole("video-upload-form");
    expect(videoUploadForm).toBeInTheDocument();
  });
});
