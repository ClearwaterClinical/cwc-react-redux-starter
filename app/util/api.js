/*@flow*/

export function logout (): void {
  // Stub logout function
}

export const authenticate =
  (username, password) =>
    new Promise((resolve, reject) => {
      !username ? reject('username-required') :
        !password ? reject('password-required') :
          setTimeout(() => {
            resolve(username)
          }, 500)
    })
