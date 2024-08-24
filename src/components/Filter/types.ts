export type Tab = {
  id: string;
  label: string;
  description?: string;
};

export type Item = {
  id: number;
  name: string;
  category: string;
  calories?: string;
  description?: string;
  price?: string;
};
