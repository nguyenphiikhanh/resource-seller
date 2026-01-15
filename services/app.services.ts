import { authService } from '~/services/auth.services'

export const appService = () => {
  const auth = authService()
  return {
    auth: auth, // auth service
    //other services can be added here in the future
  }
}
