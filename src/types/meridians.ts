export type PointType = {
  name: string
  transliteration: string
  english: string
  pinyin: string
  korean: string
  romaji: string
  vietnamese: string
  alternative: string
  location: string
  color: string
  colorCode: string
  depth: string
  action: string
  indications: string | undefined
  // image: NodeRequire
}

export type MeridianDataType = {
  meridianID: string
  chinese: string
  english: string
  korean: string
  vietnamese: string
  points: string[]
  // iconPath: NodeRequire
}
