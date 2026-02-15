
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Home, 
  Building, 
  HardHat, 
  Package, 
  CheckCircle, 
  Phone, 
  Instagram, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  MessageCircle,
  Clock,
  ClipboardList,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  Award,
  Users,
  Check,
  Zap,
  Shield,
  Snowflake,
  Droplets,
  Brush,
  Quote
} from 'lucide-react';
import { SERVICES, FEATURES } from './constants';
import SmartForm from './components/SmartForm';
import { ServiceType } from './types';

// Official Logo URL
const LOGO_URL = "https://grupolimpeza.com.br/wp-content/uploads/2025/08/cropped-logo-grupo-limpeza-e1755305260221.png";

// Official Hero Image URL
const HERO_IMAGE_URL = "https://grupolimpeza.com.br/wp-content/uploads/2025/05/empresa-de-limpeza.webp";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<ServiceType[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openForm = (initial?: ServiceType) => {
    setSelectedServiceForForm(initial ? [initial] : []);
    setIsFormOpen(true);
  };

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Por Que Nós', href: '#por-que-nos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Áreas de Atendimento', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
  ];

  const testimonials = [
    {
      name: "Patricia Fonseca",
      role: "",
      content: "PARABÉNS PELO ÓTIMO SERVIÇO!",
      stars: 5,
      type: "Limpeza Pós-Obra"
    },
    {
      name: "Carol Guzzo",
      role: "",
      content: "Uma excelente profissional, atendimento pontual, limpeza muito boa! Adoro o serviço e super recomendo.",
      stars: 5,
      type: "Limpeza Pós-Obra"
    },
    {
      name: "Rachel Guerrante",
      role: "",
      content: "Tive uma ótima experiência com a empresa.",
      stars: 5,
      type: "Limpeza Pós-Obra"
    }
  ];

  const benefits = [
    { 
      title: "Agilidade", 
      desc: "Nossa equipe técnica atua com máxima eficiência, garantindo ambientes impecáveis em tempo recorde.",
      icon: <Zap className="w-8 h-8" />
    },
    { 
      title: "Economia de tempo", 
      desc: "Foque no seu negócio ou família enquanto cuidamos de cada detalhe da higienização para você.",
      icon: <Clock className="w-8 h-8" />
    },
    { 
      title: "Saúde e Ambiente Saudável", 
      desc: "Eliminação profunda de ácaros e bactérias, prevenindo alergias e promovendo bem-estar real.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  // Background icon configuration for hero section
  const bgIcons = [
    { Icon: Snowflake, top: '5%', left: '3%', size: 45, delay: 0 },
    { Icon: Sparkles, top: '15%', left: '45%', size: 35, delay: 1 },
    { Icon: Brush, top: '25%', left: '88%', size: 40, delay: 0.5 },
    { Icon: Snowflake, top: '40%', left: '12%', size: 30, delay: 2 },
    { Icon: Sparkles, top: '55%', left: '2%', size: 50, delay: 1.5 },
    { Icon: Brush, top: '70%', left: '25%', size: 35, delay: 3 },
    { Icon: Snowflake, top: '85%', left: '10%', size: 40, delay: 0.2 },
    { Icon: Sparkles, top: '75%', left: '85%', size: 45, delay: 2.5 },
    { Icon: Brush, top: '50%', left: '92%', size: 30, delay: 4 },
    { Icon: Snowflake, top: '12%', left: '70%', size: 35, delay: 1.2 },
    { Icon: Sparkles, top: '35%', left: '30%', size: 25, delay: 3.5 },
    { Icon: Brush, top: '80%', left: '60%', size: 50, delay: 0.8 },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-12 md:h-16 flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={LOGO_URL} 
                  alt="Grupo Limpeza" 
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            </a>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2, color: '#0070BC' }}
                className="text-slate-600 font-bold transition-colors text-sm"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(0, 112, 188, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openForm()}
              className="bg-brand-blue text-white px-7 py-2.5 rounded-full font-bold shadow-lg"
            >
              Solicitar Cotação
            </motion.button>
          </div>

          <button className="md:hidden p-2 text-brand-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-4">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="font-bold p-2 text-center" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
                ))}
                <button onClick={() => { openForm(); setIsMenuOpen(false); }} className="bg-brand-blue text-white p-4 rounded-xl font-bold">Solicitar Cotação</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-40 md:pb-16 px-4 bg-slate-50 overflow-hidden">
        {/* Animated Decorative Background Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {bgIcons.map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-brand-blue/20"
              style={{ top: item.top, left: item.left }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.15, 0.25, 0.15],
                x: [0, 15, -15, 0],
                y: [0, -25, 25, 0],
                rotate: [0, 45, -45, 0]
              }}
              transition={{ 
                duration: 8 + Math.random() * 4, 
                repeat: Infinity, 
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              <item.Icon size={item.size} />
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 mobile-center-all z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-blue text-white font-bold text-xs uppercase tracking-widest shadow-xl"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              15+ Anos de Experiência
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-blue leading-[1.1] mobile-center-text">
              Empresa de Limpeza <br />
              <span className="text-slate-800">Profissional</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-semibold mobile-center-text">
              O Grupo Limpeza entrega soluções completas de higienização para empresas, comércios e residências com padrão técnico elevado e atendimento 24 horas.
              <br/> <br/>
              Se você precisa de agilidade, equipe confiável e resultado visível já na primeira visita, está no lugar certo.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mobile-w-full">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 112, 188, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openForm()}
                className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-bold text-lg shadow-2xl shadow-brand-blue/30 w-full sm:w-auto"
              >
                Solicitar Cotação Agora
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5521971250381" target="_blank"
                className="px-10 py-5 border-2 border-brand-blue/20 bg-white text-brand-blue rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp 24h
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 70 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={HERO_IMAGE_URL} 
                alt="Empresa de Limpeza Profissional" 
                className="w-full aspect-square md:aspect-video lg:aspect-square object-cover" 
              />
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center"><Clock className="text-white w-6 h-6" /></div>
                <div><div className="text-brand-blue font-extrabold text-base uppercase">Atendimento 24/7</div><div className="text-slate-500 font-bold text-xs">Sempre Prontos</div></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Por que nos contratar */}
      <section id="por-que-nos" className="py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-brand-blue text-3xl md:text-5xl font-bold mb-4">Por que contratar o Grupo Limpeza?</h2>
            <p className="text-slate-600 font-bold uppercase tracking-widest text-sm">Nossa reputação foi construída com excelência operacional e compromisso com resultado.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <ShieldCheck className="w-10 h-10" />, 
                title: "15+ Anos de Experiência", 
                desc: "Atuamos há mais de uma década no Rio de Janeiro entregando soluções personalizadas para cada tipo de ambiente — comercial, corporativo, industrial e residencial." 
              },
              { 
                icon: <Award className="w-10 h-10" />, 
                title: "+150 Limpezas Realizadas", 
                desc: "Centenas de ambientes transformados e clientes que permanecem conosco pela qualidade e confiança no serviço prestado." 
              },
              { 
                icon: <Users className="w-10 h-10" />, 
                title: "Profissionais Qualificados", 
                desc: "Nossa equipe passa por treinamento técnico contínuo, uso correto de equipamentos, protocolos de segurança e checklist supervisionado." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="mb-6 p-5 bg-brand-blue text-white rounded-2xl shadow-lg group-hover:bg-neon-green group-hover:text-brand-blue transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-brand-blue text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 font-semibold leading-relaxed">{item.desc}</p>
                <div className="mt-6 flex justify-center">
                  <CheckCircle className="text-neon-green w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 px-4 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-brand-blue text-3xl md:text-5xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-slate-600 font-bold uppercase tracking-tight text-sm">Confiança conquistada através de resultados visíveis e atendimento de elite.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col relative group"
              >
                <div className="absolute top-8 right-10 text-brand-blue/30">
                  <Quote size={32} />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-600 font-semibold italic mb-8 leading-relaxed relative z-10">
                  "{t.content}"
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <div className="text-brand-blue font-black text-lg">{t.name}</div>
                  </div>
                  <div className="bg-brand-blue/5 px-3 py-1.5 rounded-full text-[10px] font-black text-brand-blue uppercase">
                    {t.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefícios de Contratar uma Empresa de Limpeza */}
      <section className="py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-brand-blue text-3xl md:text-5xl font-bold mb-4">Benefícios Reais da Limpeza Profissional</h2>
            <p className="text-slate-600 font-bold uppercase tracking-tight text-sm">Contratar uma empresa especializada não é custo. É estratégia.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center transition-shadow hover:shadow-xl"
              >
                <div className="mb-8 w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-brand-blue text-xl font-black mb-4">{benefit.title}</h3>
                <p className="text-slate-600 font-semibold text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-12 bg-slate-50 p-8 rounded-[2.5rem] border-2 border-dashed border-brand-blue/20 text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-neon-green animate-bounce" />
            </div>
            <h2 className="text-xl font-bold text-brand-blue mb-4">Pronto para transformar seu ambiente hoje?</h2>
            <p className="text-slate-600 font-bold mb-8">Fale agora com um especialista e receba uma proposta sob medida.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openForm()}
              className="px-12 py-4 bg-brand-blue text-white font-black rounded-2xl shadow-xl hover:bg-brand-blue/90"
            >
              Falar com Especialista
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services (Catálogo de Serviços) */}
      <section id="servicos" className="py-12 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-brand-blue text-3xl md:text-5xl font-bold mb-4">Serviços Profissionais</h2>
            <p className="text-slate-600 font-bold uppercase tracking-tight text-sm">Soluções planejadas para cada necessidade específica.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id} 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.01, boxShadow: "0 25px 30px -10px rgba(0, 0, 0, 0.1)" }}
                className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col group items-center text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="mb-8 text-brand-blue p-5 bg-white rounded-2xl w-fit group-hover:bg-brand-blue group-hover:text-neon-green transition-all shadow-md mx-auto"
                >
                  {service.id === 'comercial' && <Building2 className="w-10 h-10" />}
                  {service.id === 'industrial' && <Factory className="w-10 h-10" />}
                  {service.id === 'residencial' && <Home className="w-10 h-10" />}
                  {service.id === 'empresarial' && <Building className="w-10 h-10" />}
                  {service.id === 'pos-obra' && <HardHat className="w-10 h-10" />}
                  {service.id === 'pre-mudanca' && <Package className="w-10 h-10" />}
                </motion.div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
                <p className="text-slate-600 font-semibold text-sm mb-10 flex-1 leading-relaxed">{service.description}</p>
                <div className="space-y-4 mb-10 bg-white p-6 rounded-2xl border text-xs font-bold text-slate-700 w-full shadow-sm">
                  <div className="flex justify-between gap-2"><span>Ideal para</span><span className="text-brand-blue text-right">{service.idealFor}</span></div>
                  <div className="flex justify-between pt-4 border-t gap-2"><span>Frequência</span><span className="text-brand-blue text-right">{service.frequency}</span></div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openForm(service.title)}
                  className="w-full py-5 bg-brand-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  Solicitar Cotação <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="py-12 bg-slate-50 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-8 mobile-center-all">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue">Áreas de <span className="text-slate-800">Atendimento</span></h2>
            <p className="text-slate-600 text-lg font-semibold">Toda a região metropolitana do Rio de Janeiro.</p>
            <div className="grid grid-cols-2 gap-4 w-full">
              {['Rio de Janeiro', 'Niterói', 'Maricá', 'São Gonçalo', 'Itaboraí', 'Zona Sul', 'Zona Norte', 'Barra'].map(city => (
                <motion.div 
                  key={city} 
                  whileHover={{ x: 10, backgroundColor: '#ffffff', borderColor: '#0070BC' }}
                  className="flex items-center gap-3 bg-white p-3 rounded-xl border font-bold text-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-blue" /> {city}
                </motion.div>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 112, 188, 0.2)" }}
              onClick={() => openForm()}
              className="px-12 py-5 bg-brand-blue text-white font-bold rounded-2xl shadow-xl w-full sm:w-auto"
            >
              Solicitar Cotação Agora
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-[2rem] overflow-hidden h-[300px] shadow-2xl relative"
          >
            <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Rio" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white/90 backdrop-blur-sm text-brand-blue px-8 py-4 rounded-full shadow-2xl font-black flex items-center gap-3"
              >
                <MapPin className="w-6 h-6" /> COBERTURA RJ
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-white px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-brand-blue text-3xl md:text-5xl font-bold mb-4">Processo de Excelência</h2>
            <p className="text-slate-600 font-bold uppercase tracking-tight text-sm">O padrão que você merece.</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Avaliação e Checklist", desc: "Entendemos sua necessidade e criamos um plano personalizado.", icon: <ClipboardList className="w-8 h-8" /> },
              { title: "Execução Profissional", desc: "Equipe equipada, produtos adequados e padrão técnico definido.", icon: <Sparkles className="w-8 h-8" /> },
              { title: "Supervisão e Entrega", desc: "Checklist rigoroso e conferência final antes da finalização.", icon: <CalendarCheck className="w-8 h-8" /> }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="bg-slate-50 p-10 rounded-[2.5rem] border group hover:bg-white hover:shadow-xl transition-all">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-lg group-hover:text-neon-green transition-all"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-brand-blue text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-700 font-semibold text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4 bg-slate-50 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-brand-blue text-3xl md:text-5xl font-bold text-center mb-10">Dúvidas Frequentes</motion.h2>
          <div className="space-y-6">
            {[
              { q: "Como funciona a cotação?", a: "Você pode solicitar pelo formulário ou WhatsApp. Nossa equipe faz uma análise rápida da sua necessidade e envia uma proposta personalizada em até 2 horas. Para serviços maiores, realizamos visita técnica sem compromisso." },
              { q: "O valor é fixo ou varia?", a: "O orçamento depende do tipo de ambiente, metragem, nível de sujidade e frequência do serviço. Garantimos preço justo, transparente e proporcional à complexidade da limpeza." },
              { q: "Vocês atendem emergências?", a: "Sim. Atendemos 24 horas, inclusive finais de semana e período noturno, ideal para demandas urgentes ou limpeza fora do horário comercial." },
              { q: "A equipe é própria ou terceirizada?", a: "Trabalhamos com equipe treinada e supervisionada, seguindo protocolos técnicos rigorosos. Isso garante padrão de qualidade, segurança e responsabilidade em cada atendimento." },
              { q: "Quais produtos e equipamentos são utilizados?", a: "Utilizamos produtos adequados para cada superfície e equipamentos profissionais que aumentam a eficiência e reduzem riscos de danos." },
              { q: "Quais regiões vocês atendem?", a: "Atendemos toda a região metropolitana do Rio de Janeiro: Rio, Niterói, São Gonçalo, Maricá, Itaboraí e bairros adjacentes." },
              { q: "É possível agendar fora do horário comercial?", a: "Sim. Muitas empresas preferem limpeza noturna para não interromper o funcionamento. Adaptamos o atendimento à sua rotina." }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-8 rounded-3xl border shadow-sm cursor-default"
              >
                <div className="font-bold text-brand-blue text-lg mb-4">{faq.q}</div>
                <div className="text-slate-600 font-semibold text-base border-t pt-4">{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"
          />
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold leading-tight text-white">
              Sua Limpeza Profissional <br /> Começa Aqui
            </h2>
            <p className="text-white/90 text-xl md:text-2xl font-bold uppercase tracking-widest">Fale agora com nossa equipe e receba atendimento rápido, técnico e confiável.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
              <motion.button 
                whileHover={{ scale: 1.1, boxShadow: "0 25px 30px -10px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openForm()}
                className="w-full md:w-auto px-20 py-7 bg-white text-brand-blue font-black text-2xl rounded-2xl shadow-2xl"
              >
                Solicitar Cotação
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5521971250381" target="_blank"
                className="w-full md:w-auto px-20 py-7 border-2 border-white/20 text-white font-black text-2xl rounded-2xl flex items-center justify-center gap-4"
              >
                <Phone className="w-8 h-8" /> WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-12 text-center md:text-left">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-24 flex items-center justify-center mb-4"
              >
                <img 
                  src={LOGO_URL} 
                  alt="Grupo Limpeza" 
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            </div>
            <p className="text-slate-600 font-bold text-sm uppercase tracking-wider">Líder no Rio de Janeiro há 15+ anos no segmento de limpeza.</p>
            <div className="flex gap-6">
              <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://www.instagram.com/grupolimpeza/" target="_blank" className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg"><Instagram className="w-6 h-6" /></motion.a>
              <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://maps.app.goo.gl/iimi4BeS4YV1zLFf6" target="_blank" className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg"><MapPin className="w-6 h-6" /></motion.a>
              <motion.a whileHover={{ scale: 1.2, y: -5 }} href="https://wa.me/5521971250381" target="_blank" className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg"><MessageCircle className="w-6 h-6" /></motion.a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-brand-blue font-black uppercase text-sm mb-8 tracking-widest">Serviços</h4>
            <ul className="space-y-4 text-base font-bold text-slate-500">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <button onClick={() => openForm(service.title)} className="hover:text-brand-blue transition-colors">{service.title}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-brand-blue font-black uppercase text-sm mb-8 tracking-widest">Empresa</h4>
            <ul className="space-y-5 text-base font-bold text-slate-500">
              <li><a href="#" className="hover:text-brand-blue">Sobre Nós</a></li>
              <li><a href="https://maps.app.goo.gl/iimi4BeS4YV1zLFf6" target="_blank" className="hover:text-brand-blue">Google Negócio</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-brand-blue font-black uppercase text-sm mb-8 tracking-widest">Contato</h4>
            <ul className="space-y-5 text-base font-bold text-slate-700">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-blue" /> (21) 97125-0381</li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-brand-blue" /> Rio de Janeiro - RJ</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t text-center text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">
          Copyright © 2026 Grupo Limpeza
        </div>
      </footer>

      {/* Floating Button with Pulse */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/5521971250381" target="_blank"
        className="fixed bottom-8 right-8 z-[90] bg-brand-blue text-white p-6 rounded-2xl shadow-2xl pulse-btn"
      >
        <MessageCircle className="w-10 h-10" />
      </motion.a>

      <SmartForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialServices={selectedServiceForForm} />
    </div>
  );
};

export default App;
