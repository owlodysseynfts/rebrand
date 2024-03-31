export interface ICollection {
  id: number,
  imageUrl: string,
  title: string,
}

export type CollectionProps = {
  collection: ICollection
}

export interface IOwlAcademy {
  id: number,
  imageUrl: string,
  title: string,
  rating: number,
  description: string
}

export type OwlAcademyCardProps = {
  owlAcademy: IOwlAcademy
}

export interface IStoreItem {
  id: number,
  imageUrl: string,
  price: number,
  newPrice: number,
  rating: number,
}

export type StoreItemCardProps = {
  storeItem: IStoreItem
}