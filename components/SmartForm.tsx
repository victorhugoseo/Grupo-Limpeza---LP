
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, User, Sparkles, ChevronDown } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceType } from '../types';

interface SmartFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialServices?: ServiceType[];
}

const SmartForm: React.FC<SmartFormProps> = ({ isOpen, onClose, initialServices = [] }) => {
  const [name, setName] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [selectedService, setSelectedService] = useState<string>(initialServices[0] || '');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !neighborhood || !selectedService) return;

    // Plain text message for WhatsApp without emojis
    const message = 
      `Olá, Grupo Limpeza!\n\n` +
      `Gostaria de solicitar um orçamento para o seguinte serviço:\n\n` +
      `Detalhes da Solicitação:\n` +
      `- Nome: ${name}\n` +
      `- Serviço: ${selectedService}\n` +
      `- Bairro/Local: ${neighborhood}\n\n` +
      `Poderiam me passar mais informações sobre valores e disponibilidade? Fico no aguardo!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5521971250381?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose} 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md cursor-pointer" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative z-10 border border-white/20"
          >
            {/* High Impact Header */}
            <div className="bg-brand-blue p-8 relative overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" 
              />
              <div className="relative z-10 pr-10">
                <h3 className="text-2xl font-black text-white flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Sparkles className="w-6 h-6 text-neon-green" />
                  </div>
                  Cotação Expressa
                </h3>
                <p className="text-blue-100 text-sm font-bold mt-2 leading-relaxed">
                  Solicite agora e receba seu orçamento personalizado em poucos minutos via WhatsApp.
                </p>
              </div>
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }} 
                className="absolute top-8 right-8 p-2 bg-black/10 hover:bg-black/20 text-white rounded-full transition-all group z-20"
                aria-label="Fechar formulário"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Intuitive Form Body */}
            <form onSubmit={handleSendWhatsApp} className="p-8 space-y-7">
              {/* Field: Name */}
              <div className="space-y-3 group">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-brand-blue flex items-center gap-2 px-1">
                  <User className="w-3.5 h-3.5" /> Nome Completo
                </label>
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    placeholder="Como podemos te chamar?" 
                    className="w-full pl-5 pr-5 py-4.5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-brand-blue focus:ring-8 focus:ring-brand-blue/5 outline-none transition-all duration-300"
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                  />
                </div>
              </div>

              {/* Field: Service Selection */}
              <div className="space-y-3 group">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-brand-blue flex items-center gap-2 px-1">
                  <Sparkles className="w-3.5 h-3.5" /> Qual o serviço desejado?
                </label>
                <div className="relative">
                  <select 
                    required
                    className="w-full pl-5 pr-12 py-4.5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-brand-blue focus:ring-8 focus:ring-brand-blue/5 outline-none transition-all duration-300 appearance-none cursor-pointer"
                    value={selectedService}
                    onChange={e => setSelectedService(e.target.value)}
                  >
                    <option value="" disabled className="text-slate-400">Escolha o serviço...</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title} className="py-2">{s.title}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Field: Neighborhood */}
              <div className="space-y-3 group">
                <label className="text-[11px] font-black uppercase tracking-[0.15em] text-brand-blue flex items-center gap-2 px-1">
                  <MapPin className="w-3.5 h-3.5" /> Onde será a limpeza? (Bairro)
                </label>
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    placeholder="Ex: Niterói, Centro, Ipanema..." 
                    className="w-full pl-5 pr-5 py-4.5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-brand-blue focus:ring-8 focus:ring-brand-blue/5 outline-none transition-all duration-300"
                    value={neighborhood} 
                    onChange={e => setNeighborhood(e.target.value)} 
                  />
                </div>
              </div>

              {/* Conversion Optimized Button */}
              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#0062a8' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-brand-blue text-white rounded-[1.25rem] font-black text-lg shadow-[0_20px_40px_-10px_rgba(0,112,188,0.4)] flex items-center justify-center gap-3 transition-all duration-300 active:shadow-none"
                >
                  <span className="flex items-center gap-2">
                    Iniciar Conversa 
                    <Send className="w-5 h-5 text-neon-green" />
                  </span>
                </motion.button>
              </div>
              
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="h-px bg-slate-100 flex-1"></div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] whitespace-nowrap">
                  Resposta em tempo real
                </p>
                <div className="h-px bg-slate-100 flex-1"></div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SmartForm;
