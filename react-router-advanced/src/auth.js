
// Simple fake authentication (for demo)
export const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // mimic async login
  },
  logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100); // mimic async logout
  },
};
