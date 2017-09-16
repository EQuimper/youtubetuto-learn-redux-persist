export function login(userInfo) {
  return {
    type: 'user/LOGIN',
    userInfo,
  }
}
