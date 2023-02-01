import { render, screen } from "../../utils/test-utils";
import UserVideosInfos from "./userVideosInfos";
import { useInfiniteFetch } from "../../hooks/useInfiniteFetch";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const mockedUseInfiniteFetch = useInfiniteFetch as jest.Mock<any>;

jest.mock("../../hooks/useInfiniteFetch");

describe("User Videos Infos", () => {
  beforeAll(() => {
    mockedUseInfiniteFetch.mockImplementation(() => ({
      isLoading: false,
      data: {
        pages: [
          {
            data: [
              {
                id: "5f9f1b9b0b1b9c0b5c8b4b5c",
                title: "test",
                description: "test",
                categoryId: "5f9f1b9b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5c8b4b5c",
              },
              {
                id: "5f9f1b9b0b1b9c0b5c8b4b5c",
                title: "test",
                description: "test",
                categoryId: "5f9f1b9b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5c8b4b5c",
              },
            ],
          },
          {
            data: [
              {
                id: "5f9f1b9b0b1b9c0b5c8b4b5c",
                title: "test",
                description: "test",
                categoryId: "5f9f1b9b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5c8b4b5c",
              },
              {
                id: "5f9f1b9b0b1b9c0b5c8b4b5c",
                title: "test",
                description: "test",
                categoryId: "5f9f1b9b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5c8b4b5c",
              },
            ],
          },
        ],
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserVideosInfos />
      </QueryClientProvider>
    );
    const userVideosInfos = screen.getByRole("list");
    expect(userVideosInfos).toBeInTheDocument();
  });

  it("should render 4 videos", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserVideosInfos />
      </QueryClientProvider>
    );
    const userVideosInfos = screen.getAllByRole("listitem");
    expect(userVideosInfos).toHaveLength(5);
  });
});
