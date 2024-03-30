export interface ICollection {
  id: number,
  imageUrl: string,
  title: string,
}

export type CollectionProps = {
  collection: ICollection
}