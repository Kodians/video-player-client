import { UserSession } from "../types";

class TokenService {
  getRefreshToken(): string | undefined | null {
    const stringifiedUser = localStorage.getItem("user");
    if (stringifiedUser) {
      const user = JSON.parse(stringifiedUser);
      return user.refreshToken;
    }
  }

  getAccessToken(): string | undefined | null {
    const stringifiedUser = localStorage.getItem("user");
    if (stringifiedUser) {
      const user = JSON.parse(stringifiedUser);
      return user.token;
    }
  }

  updateAccessToken(token: string): void {
    const stringifiedUser = localStorage.getItem("user");
    if (stringifiedUser) {
      const user = JSON.parse(stringifiedUser);
      user.token = token;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }

  getUser(): UserSession | undefined | null {
    const stringifiedUser = localStorage.getItem("user");
    if (stringifiedUser) {
      const user = JSON.parse(stringifiedUser);
      return user;
    }
  }

  setUser(user: UserSession): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser(): void {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
