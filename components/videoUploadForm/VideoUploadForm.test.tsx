import { render, screen } from "../../utils/test-utils";
import { VideoUploadForm } from "./VideoUploadForm";
import { useFetch } from "../../hooks/useFetch";
import { useInsert } from "../../hooks/useInsert";

const mockedUseFetch = useFetch as jest.Mock<any>;
const mockedUseInsert = useInsert as jest.Mock<any>;

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useInsert");

describe("Render Video upload form", () => {
  beforeAll(() => {
    mockedUseFetch.mockImplementation(() => ({ data: [] }));
    mockedUseInsert.mockImplementation(() => ({
      mutate: jest.fn(),
    }));
  });

  test("Should render video upload form correctly", () => {
    render(<VideoUploadForm />);
    const videoUploadForm = screen.getByRole("video-upload-form");
    expect(videoUploadForm).toBeInTheDocument();
  });

  test("Should render video title input correctly", () => {
    render(<VideoUploadForm />);
    const videoTitleInput = screen.getByRole("textbox", {
      name: /titre de la vidéo/i,
    });
    expect(videoTitleInput).toBeInTheDocument();
  });

  test("Should render video description input correctly", () => {
    render(<VideoUploadForm />);
    const videoDescriptionInput = screen.getByRole("textbox", {
      name: /maximum height/i,
    });
    expect(videoDescriptionInput).toBeInTheDocument();
  });

  test("Should render video category select correctly", () => {
    render(<VideoUploadForm />);
    const videoCategorySelect = screen.getByRole("button", {
      name: /choisir une catégorie/i,
    });
    expect(videoCategorySelect).toBeInTheDocument();
  });

  test("Should render video upload input correctly", () => {
    render(<VideoUploadForm />);
    const videoUploadInput = screen.getByLabelText(
      /charger la vidéo charger la photo de couverture/i
    );
    expect(videoUploadInput).toBeInTheDocument();
  });

  test("Should render video thumbnail upload input correctly", () => {
    render(<VideoUploadForm />);
    const videoThumbnailUploadInput = screen.getByLabelText(
      /charger la vidéo charger la photo de couverture/i
    );
    expect(videoThumbnailUploadInput).toBeInTheDocument();
  });

  test("Should render video upload button correctly", () => {
    render(<VideoUploadForm />);
    const videoUploadButton = screen.getByRole("button", { name: /publier/i });
    expect(videoUploadButton).toBeInTheDocument();
  });
});
