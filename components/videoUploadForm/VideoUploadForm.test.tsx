import { render, screen } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { VideoUploadForm } from "./VideoUploadForm";
import { useFetch } from "../../hooks/useFetch";
import { useInsert } from "../../hooks/useInsert";

const mockedUseFetch = useFetch as jest.Mock<any>;
const mockedUseInsert = useInsert as jest.Mock<any>;

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useInsert");

describe("Render Video upload form", () => {
  beforeAll(() => {
    mockedUseFetch.mockImplementation(() => ({
      data: {
        data: {
          categories: [
            {
              _id: "1",
              name: "category 1",
            },
            {
              _id: "2",
              name: "category 2",
            },
          ],
        },
      },
    }));
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
    const videoUploadInput = screen.getByLabelText(/charger la vidéo/i);
    expect(videoUploadInput).toBeInTheDocument();
  });

  test("Should render video thumbnail upload input correctly", () => {
    render(<VideoUploadForm />);
    const videoThumbnailUploadInput = screen.getByRole(
      "upload-video-thumbnail-file",
      {
        name: /charger la photo de couverture/i,
      }
    );
    expect(videoThumbnailUploadInput).toBeInTheDocument();
  });

  test("Should render video upload button correctly", () => {
    render(<VideoUploadForm />);
    const videoUploadButton = screen.getByRole("button", { name: /publier/i });
    expect(videoUploadButton).toBeInTheDocument();
  });
});

describe("Video upload form interactions", () => {
  beforeAll(() => {
    mockedUseFetch.mockImplementation(() => ({
      data: {
        data: {
          categories: [
            {
              _id: "1",
              name: "category 1",
            },
            {
              _id: "2",
              name: "category 2",
            },
          ],
        },
      },
    }));
    mockedUseInsert.mockImplementation(() => ({
      mutate: jest.fn(),
    }));
    userEvent.setup();
  });

  test("Should display video title input value correctly", async () => {
    render(<VideoUploadForm />);
    const videoTitleInput = screen.getByRole("textbox", {
      name: /titre de la vidéo/i,
    });
    await userEvent.type(videoTitleInput, "video title");
    expect(videoTitleInput).toHaveValue("video title");
  });

  test("Should display video description input value correctly", async () => {
    render(<VideoUploadForm />);
    const videoDescriptionInput = screen.getByRole("textbox", {
      name: /maximum height/i,
    });
    await userEvent.type(videoDescriptionInput, "video description");
    expect(videoDescriptionInput).toHaveValue("video description");
  });

  test("Should select a category from video categories select dropdown", async () => {
    render(<VideoUploadForm />);
    const videoCategorySelect = screen.getByRole("button", {
      name: /choisir une catégorie/i,
    });
    await userEvent.click(videoCategorySelect);
    const category1 = screen.getByRole("option", { name: /category 1/i });
    await userEvent.click(category1);
    expect(videoCategorySelect).toHaveTextContent("category 1");
  });

  test("Should change video upload input value", async () => {
    render(<VideoUploadForm />);
    const file = new File(["(⌐□_□)"], "myvideo.mp4", { type: "video/mp4" });
    const videoUploadInput = screen.getByLabelText(/charger la vidéo/i);
    await userEvent.upload(videoUploadInput, file);
    expect((videoUploadInput as any).files[0]).toBe(file);
    expect((videoUploadInput as any).files.item(0)).toBe(file);
    expect((videoUploadInput as any).files).toHaveLength(1);
  });

  test("Should display video thumbnail upload input value correctly", async () => {
    render(<VideoUploadForm />);
    const file = new File(["(⌐□_□)"], "my-video-thumbnail.jpg", {
      type: "image/*",
    });
    const videoThumbnailUploadInput = screen.getByRole(
      "upload-video-thumbnail-file"
    );

    await userEvent.upload(videoThumbnailUploadInput, file);
    expect((videoThumbnailUploadInput as any).files[0]).toBe(file);
    expect((videoThumbnailUploadInput as any).files.item(0)).toBe(file);
    expect((videoThumbnailUploadInput as any).files).toHaveLength(1);
  });
});
