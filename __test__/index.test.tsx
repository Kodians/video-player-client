import { render, screen } from "../utils/test-utils";
import "@testing-library/jest-dom";
import Home from "../pages";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";

const mockedUseInfiniteFetch = useInfiniteFetch as jest.Mock<any>;

jest.mock("../hooks/useInfiniteFetch");

describe("Home page all relevant elements must be available", () => {
  beforeEach(() => {
    mockedUseInfiniteFetch.mockImplementation(() => ({ isLoading: false }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders without crashing", () => {
    render(<Home />);
  });

  test("Load More button should be available", () => {
    render(<Home />);
    const loadModeBtn = screen.getByRole("button", { name: /Load More/i });
    expect(loadModeBtn).toBeInTheDocument();
  });
});
