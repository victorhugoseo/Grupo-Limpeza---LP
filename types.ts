
export type ServiceType = 
  | "Limpeza Comercial"
  | "Limpeza Industrial"
  | "Limpeza Residencial"
  | "Limpeza Empresarial"
  | "Limpeza Pós-Obra"
  | "Limpeza Pré-Mudança";

export interface ServiceItem {
  id: string;
  title: ServiceType;
  description: string;
  idealFor: string;
  frequency: string;
  highlight: string;
  icon: string;
}

export interface FormData {
  selectedServices: ServiceType[];
  name: string;
  email: string;
  phone: string;
  company?: string;
  cep: string;
  clientType: 'Empresa' | 'Residência' | 'Outro';
  date: string;
  time: string;
  frequency: string;
  observations: string;
}
