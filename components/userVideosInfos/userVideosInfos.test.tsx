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
                id: 1,
                title: "test3",
                description: "description test3",
                categoryId: "5f1b9b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5c8b4b5c",
              },
              {
                id: 2,
                title: "test4",
                description: "description test4",
                categoryId: "5f9f1b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5b4b5c",
              },
            ],
          },
          {
            data: [
              {
                id: 3,
                title: "test1",
                description: "description test1",
                categoryId: "5f9f1b9b0b1b9c0b5c8bb5c",
                videoId: "9f1b9b0b1b9c0b5c8b4b5c",
              },
              {
                id: 4,
                title: "test2",
                description: "description test2",
                categoryId: "5f9fb9b0b1b9c0b5c8b4b5c",
                videoId: "5f9f1b9b0b1b9c0b5c8b4b5",
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
