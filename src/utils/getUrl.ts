// not very robust but good enough
export const getUrl = (spotImage: string) => `https://i.scdn.co/image/${spotImage.split(":")[2]}`