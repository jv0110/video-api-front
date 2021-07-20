export default function authHeader() {
  const token:any = localStorage.getItem('user')
  const user = JSON.parse(token)

  if(user && user.token){
    return { Authorization: `Bearer + ${user.token}` }
  } else {
    return {}
  }
}
