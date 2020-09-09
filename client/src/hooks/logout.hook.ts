export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("userData");
    window.location.reload();
  }
  return logout;
}