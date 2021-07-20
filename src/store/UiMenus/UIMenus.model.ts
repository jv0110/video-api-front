interface IObjectKeys {
    [key: string]: boolean;
  }
export default interface UIMenuInterface extends IObjectKeys{
  accountManageMenu: boolean,
  menuResumeOpen: boolean,
  menenuFullOpen: boolean
}