import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";
import { useInfiniteFetch } from "../hooks/useInfiniteFetch";
import { StoreProvider } from "../utils/store";

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
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
  });

  test("Load More button should be available", () => {
    render(
      <StoreProvider>
        <Home />
      </StoreProvider>
    );
    const loadModeBtn = screen.getByRole("button", { name: /Load More/i });
    expect(loadModeBtn).toBeInTheDocument();
  });
});
