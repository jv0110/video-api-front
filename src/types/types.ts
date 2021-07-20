export interface VideoType{
  video_id:number,
  title:string,
  description: string,
  duration: string,
  like: number,
  deslikes:number
}
export interface VideoPost{
  title: string,
  description: string,
  duration: string
}
export interface UserLogin{
  user_email: string,
  user_password: string
}
export interface UserSignIn{
  user_name: string,
  user_email: string,
  user_password: string
}