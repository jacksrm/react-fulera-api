
type TSong = {
  id: number,
  title: string,
  path: string,
  author: string
}

type TSongList = {
  playlistId: number,
  songList: Array<TSong>
}

type TPlaylist = {
  id: number,
  cover: string,
  playlistName: string
}

type TFAQItem = {
  title: string,
  content: string
}

type TFAQ = {
  title: string,
  perguntas: TFAQItem[]
}

type TUser = {
  id: number,
  email: string,
  password: string,
  name: string,
  birth: string,
  gender: string
}

type TUserUpdate = {
  email?: string,
  password?: string,
  name?: string,
  birth?: string,
  gender?: string
}

type TSetUserResponse = {
  message?: string,
  error?: string
  status: number
}