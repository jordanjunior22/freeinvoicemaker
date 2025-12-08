export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Party {
  name: string;
  address: string;
}

export interface Invoice {
  id: string;
  from: Party;
  to: Party;
  items: LineItem[];
  notes?: string;
  date: string;
  dueDate: string;
}
