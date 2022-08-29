interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
}

interface IStore {
  id?: string;
  name: string;
  description: string;
  image: string;
}
