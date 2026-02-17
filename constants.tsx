
import React from 'react';
import { Building2, Factory, Home, Building, HardHat, Package, CheckCircle, Clock, ShieldCheck, Users, Zap, Heart, Lock, Sparkles } from 'lucide-react';
import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'comercial',
    title: 'Limpeza Comercial',
    description: 'Limpeza ágil para lojas, escritórios e espaços comerciais.',
    idealFor: 'Lojas, consultórios, escritórios',
    frequency: 'Diária/Semanal',
    highlight: '',
    icon: 'Building2'
  },
  {
    id: 'industrial',
    title: 'Limpeza Industrial',
    description: 'Limpeza profunda com equipamentos avançados para ambientes industriais.',
    idealFor: 'Fábricas, galpões, áreas industriais',
    frequency: 'Conforme necessário',
    highlight: '',
    icon: 'Factory'
  },
  {
    id: 'residencial',
    title: 'Limpeza Residencial',
    description: 'Limpeza completa para residências com equipe dedicada.',
    idealFor: 'Casas, apartamentos, condomínios',
    frequency: 'Semanal/Quinzenal/Mensal',
    highlight: '',
    icon: 'Home'
  },
  {
    id: 'empresarial',
    title: 'Limpeza Empresarial',
    description: 'Limpeza estruturada para ambientes corporativos.',
    idealFor: 'Prédios corporativos, escritórios grandes',
    frequency: 'Diária/Contínua',
    highlight: '',
    icon: 'Building'
  },
  {
    id: 'pos-obra',
    title: 'Limpeza Pós-Obra',
    description: 'Remoção completa de resíduos e poeira de construção.',
    idealFor: 'Imóveis após reforma/construção',
    frequency: 'Única/Conforme necessário',
    icon: 'HardHat',
    highlight: ''
  },
  {
    id: 'pre-mudanca',
    title: 'Limpeza Pré-Mudança',
    description: 'Limpeza profunda para preparar imóvel para mudança.',
    idealFor: 'Imóveis em transição',
    frequency: 'Única/Conforme necessário',
    icon: 'Package',
    highlight: ''
  },
  {
    id: 'outras',
    title: 'Outras Limpezas',
    description: 'Precisa de algo específico? Nós adaptamos nossa equipe para sua necessidade.',
    idealFor: 'Demandas específicas',
    frequency: 'Sob consulta',
    highlight: '',
    icon: 'Sparkles'
  }
];

export const FEATURES = [
  {
    title: "Satisfação Garantida",
    description: "Se o resultado não for o esperado, nós refazemos o serviço sem custo adicional. Risco zero para você.",
    icon: <Heart className="w-8 h-8 text-neon-green" />
  },
  {
    title: "Orçamento em 2 Horas",
    description: "Nossa equipe comercial é a mais rápida do Rio. Você recebe sua cotação detalhada em tempo recorde.",
    icon: <Zap className="w-8 h-8 text-neon-green" />
  },
  {
    title: "Seguro Total",
    description: "Operamos com seguro de responsabilidade civil. Seu patrimônio está 100% protegido durante todo o processo.",
    icon: <Lock className="w-8 h-8 text-neon-green" />
  },
  {
    title: "Produtos Certificados",
    description: "Utilizamos apenas insumos de alta performance, biodegradáveis e seguros para crianças e pets.",
    icon: <ShieldCheck className="w-8 h-8 text-neon-green" />
  }
];