export interface Van {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Session {
  id: string;
  sessiontoken: string;
}
