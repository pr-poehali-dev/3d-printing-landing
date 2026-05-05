import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO_IMAGES = [
  {
    url: "https://cdn.poehali.dev/projects/4d9b8734-444f-441d-97c9-130d56443c0d/files/cba496da-47dd-4140-bcef-30c97709968a.jpg",
    title: "Промышленная шестерня",
    material: "PETG Metal",
    category: "Механика",
  },
  {
    url: "https://cdn.poehali.dev/projects/4d9b8734-444f-441d-97c9-130d56443c0d/files/6fe7653d-965d-4bd2-afe7-11c1da66eff3.jpg",
    title: "Индивидуальные награды",
    material: "PLA+ / Resin",
    category: "Трофеи",
  },
  {
    url: "https://cdn.poehali.dev/projects/4d9b8734-444f-441d-97c9-130d56443c0d/files/379a8d96-17df-419b-ac83-d26da7117f5a.jpg",
    title: "Коллекционная фигурка",
    material: "Resin",
    category: "Сувениры",
  },
];

const SERVICES = [
  { icon: "Layers", title: "FDM печать", desc: "Термопластиковые материалы для прототипов и серийных деталей. PLA, ABS, PETG, TPU.", color: "blue" },
  { icon: "Zap", title: "Фотополимерная печать", desc: "Высочайшая детализация для ювелирных изделий, миниатюр и медицинских моделей.", color: "violet" },
  { icon: "Package", title: "Постобработка", desc: "Шлифовка, окраска, склейка, химическое сглаживание — финишная обработка любой сложности.", color: "blue" },
  { icon: "Scan", title: "3D сканирование", desc: "3D-сканирование объектов для создания цифровых копий и обратного инжиниринга.", color: "violet" },
  { icon: "Settings", title: "Инжиниринг", desc: "Моделирование под заказ: от эскиза до готового STL-файла, оптимизированного для печати.", color: "blue" },
  { icon: "Building2", title: "Работаем с юрлицами", desc: "Договор, закрывающие документы, НДС. Серийные партии от 1 до 10 000 единиц.", color: "violet" },
];

const MATERIALS = [
  { name: "PLA+", desc: "Биоразлагаемый, без запаха, идеален для прототипов и декора", temp: "200–220°C", price: "6₽/г", color: "#00D4FF", bg: "rgba(0,212,255,0.08)" },
  { name: "ABS", desc: "Ударопрочный, термостойкий, для функциональных деталей", temp: "230–250°C", price: "8₽/г", color: "#B44FFF", bg: "rgba(180,79,255,0.08)" },
  { name: "PETG", desc: "Прозрачный, химически стойкий, пищевой класс", temp: "240–260°C", price: "9₽/г", color: "#00FFB3", bg: "rgba(0,255,179,0.08)" },
  { name: "TPU", desc: "Гибкий, эластичный, износостойкий — для прокладок и деталей", temp: "220–240°C", price: "12₽/г", color: "#FF6B35", bg: "rgba(255,107,53,0.08)" },
  { name: "Resin", desc: "Максимальная детализация, гладкая поверхность без слоёв", temp: "UV cure", price: "18₽/г", color: "#8A2BE2", bg: "rgba(138,43,226,0.08)" },
  { name: "Nylon", desc: "Прочный, гибкий, устойчив к истиранию и химии", temp: "260–280°C", price: "14₽/г", color: "#FFD700", bg: "rgba(255,215,0,0.08)" },
];

function Gear3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-violet/10 to-transparent blur-3xl animate-glow-pulse" />
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full max-w-xs sm:max-w-sm"
        style={{ filter: "drop-shadow(0 0 24px rgba(138,43,226,0.5)) drop-shadow(0 0 48px rgba(0,212,255,0.2))" }}
      >
        <defs>
          <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#B44FFF" />
          </linearGradient>
          <linearGradient id="gearGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B44FFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(0,212,255,0.05)" strokeWidth="1" />
        <circle cx="150" cy="150" r="130" fill="none" stroke="rgba(138,43,226,0.1)" strokeWidth="1" strokeDasharray="8 4" className="gear-ring" />

        <g className="gear-ring" style={{ transformOrigin: "150px 150px" }}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 150 + 95 * Math.cos(angle);
            const y1 = 150 + 95 * Math.sin(angle);
            const x2 = 150 + 118 * Math.cos(angle - 0.09);
            const y2 = 150 + 118 * Math.sin(angle - 0.09);
            const x3 = 150 + 118 * Math.cos(angle + 0.09);
            const y3 = 150 + 118 * Math.sin(angle + 0.09);
            return <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill="url(#gearGrad)" opacity="0.9" filter="url(#glow)" />;
          })}
          <circle cx="150" cy="150" r="90" fill="rgba(11,14,20,0.95)" stroke="url(#gearGrad)" strokeWidth="2" filter="url(#glow)" />
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x1 = 150 + 30 * Math.cos(angle); const y1 = 150 + 30 * Math.sin(angle);
            const x2 = 150 + 76 * Math.cos(angle); const y2 = 150 + 76 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#gearGrad)" strokeWidth="9" strokeLinecap="round" opacity="0.65" />;
          })}
          <circle cx="150" cy="150" r="30" fill="rgba(11,14,20,0.98)" stroke="url(#gearGrad2)" strokeWidth="2.5" filter="url(#glow)" />
          <circle cx="150" cy="150" r="17" fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.55)" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="7" fill="url(#gearGrad)" />
        </g>

        <g className="gear-ring-reverse" style={{ transformOrigin: "240px 78px" }}>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x1 = 240 + 24 * Math.cos(angle); const y1 = 78 + 24 * Math.sin(angle);
            const x2 = 240 + 31 * Math.cos(angle - 0.11); const y2 = 78 + 31 * Math.sin(angle - 0.11);
            const x3 = 240 + 31 * Math.cos(angle + 0.11); const y3 = 78 + 31 * Math.sin(angle + 0.11);
            return <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill="rgba(0,212,255,0.65)" />;
          })}
          <circle cx="240" cy="78" r="21" fill="rgba(11,14,20,0.95)" stroke="rgba(0,212,255,0.45)" strokeWidth="1.5" />
          <circle cx="240" cy="78" r="7" fill="rgba(0,212,255,0.25)" stroke="rgba(0,212,255,0.5)" strokeWidth="1" />
          <circle cx="240" cy="78" r="3" fill="rgba(0,212,255,0.8)" />
        </g>

        {[[-8,150,8,150],[150,-8,150,8],[292,150,308,150],[150,292,150,308]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,212,255,0.2)" strokeWidth="1"/>
        ))}

        {[[60,60],[240,60],[60,240],[240,240]].map(([x,y],i)=>(
          <g key={i}>
            <line x1={x-7} y1={y} x2={x+7} y2={y} stroke="rgba(0,212,255,0.35)" strokeWidth="1.2"/>
            <line x1={x} y1={y-7} x2={x} y2={y+7} stroke="rgba(0,212,255,0.35)" strokeWidth="1.2"/>
          </g>
        ))}
      </svg>

      <div className="absolute top-3 right-3 glass rounded px-2 py-1 text-xs font-body text-neon-blue animate-float" style={{ animationDelay: "0.5s" }}>
        <span className="opacity-40 mr-1">MAT:</span>PETG
      </div>
      <div className="absolute bottom-6 left-3 glass rounded px-2 py-1 text-xs font-body text-neon-purple animate-float" style={{ animationDelay: "1.5s" }}>
        <span className="opacity-40 mr-1">RES:</span>0.1mm
      </div>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState(0);
  const [calcWeight, setCalcWeight] = useState(100);
  const [calcMaterial, setCalcMaterial] = useState("PLA+");
  const [calcUrgent, setCalcUrgent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const calcPrice = () => {
    const prices: Record<string, number> = { "PLA+": 6, "ABS": 8, "PETG": 9, "TPU": 12, "Nylon": 14, "Resin": 18 };
    const base = prices[calcMaterial] ?? 6;
    return Math.round(calcWeight * base * (calcUrgent ? 1.5 : 1));
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white font-body overflow-x-hidden">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-8 h-8 relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-violet rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xs">3D</div>
            </div>
            <span className="font-display font-bold text-lg tracking-widest">
              <span className="text-white">3D</span><span className="gradient-text"> MAGIC</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {[["Услуги","services"],["Материалы","materials"],["Портфолио","portfolio"],["Контакты","contacts"]].map(([label,id])=>(
              <button key={id} onClick={()=>scrollTo(id)} className="text-sm text-white/55 hover:text-neon-blue transition-colors duration-200 font-medium tracking-wide">{label}</button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={()=>scrollTo("calculator")} className="btn-neon hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm text-white font-semibold">
              <Icon name="Calculator" size={14} />Рассчитать стоимость
            </button>
            <button className="md:hidden p-2 text-white/60 hover:text-white" onClick={()=>setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen?"X":"Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden glass border-t border-white/5">
            <div className="px-4 py-4 flex flex-col gap-1">
              {[["Услуги","services"],["Материалы","materials"],["Портфолио","portfolio"],["Контакты","contacts"]].map(([label,id])=>(
                <button key={id} onClick={()=>scrollTo(id)} className="text-left text-white/65 hover:text-neon-blue py-2.5 text-sm font-medium transition-colors border-b border-white/5 last:border-0">{label}</button>
              ))}
              <button onClick={()=>scrollTo("calculator")} className="btn-neon w-full py-2.5 rounded-lg text-sm text-white font-semibold mt-3">Рассчитать стоимость</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-neon-violet/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

        {/* grid lines */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 glass border border-neon-blue/20 rounded-full px-4 py-1.5 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-xs text-neon-blue font-medium tracking-widest uppercase">Студия 3D печати · Москва</span>
              </div>

              <h1 className="font-display font-bold leading-[0.92] tracking-tight mb-6" style={{fontSize:"clamp(2.6rem,7vw,5.5rem)"}}>
                <span className="block text-white/90">ПРОФЕССИОНАЛЬНАЯ</span>
                <span className="block gradient-text animate-neon-flicker">3D ПЕЧАТЬ</span>
                <span className="block text-white/70 text-[0.85em]">НА ЗАКАЗ</span>
              </h1>

              <p className="text-white/45 text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                От прототипа до серийного изделия. Любые материалы, любая сложность — за 24 часа.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  {value:"30+", label:"материалов", color:"text-neon-blue"},
                  {value:"1 день", label:"срок печати", color:"text-neon-purple"},
                  {value:"от 6₽", label:"за грамм", color:"text-neon-blue"},
                ].map(s=>(
                  <div key={s.label} className="glass rounded-xl p-3 text-center border border-white/5">
                    <div className={`font-display font-bold text-xl sm:text-2xl ${s.color}`}>{s.value}</div>
                    <div className="text-white/35 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button onClick={()=>scrollTo("calculator")} className="btn-neon flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold">
                  <Icon name="Calculator" size={17} />Рассчитать стоимость
                </button>
                <button onClick={()=>scrollTo("portfolio")} className="btn-outline-neon flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold">
                  <Icon name="Eye" size={17} />Смотреть работы
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center w-full max-w-[280px] sm:max-w-xs lg:max-w-[380px]">
              <div className="w-full aspect-square gear-3d">
                <Gear3D />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] tracking-widest text-white/50 uppercase">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-neon-blue to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-14">
            <span className="text-xs text-neon-blue font-medium tracking-widest uppercase mb-3 block">Что мы делаем</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
              НАШИ <span className="gradient-text">УСЛУГИ</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto">Полный цикл производства — от идеи до готового изделия</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s,i)=>(
              <div key={s.title} className="service-card reveal rounded-2xl p-6" style={{transitionDelay:`${i*0.07}s`}}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${s.color==="blue"?"bg-neon-blue/10 text-neon-blue":"bg-neon-violet/10 text-neon-purple"}`}>
                  <Icon name={s.icon} size={20} fallback="Star" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-white/38 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-800/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-12">
            <span className="text-xs text-neon-purple font-medium tracking-widest uppercase mb-3 block">30+ видов</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
              <span className="gradient-text">МАТЕРИАЛЫ</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto">Каждый материал — для конкретной задачи. Поможем выбрать оптимальный.</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {MATERIALS.map((m,i)=>(
              <button
                key={m.name}
                onClick={()=>setActiveMaterial(i)}
                className="material-card reveal rounded-xl px-4 py-3 flex items-center gap-2.5 transition-all"
                style={{background: activeMaterial===i ? m.bg : "rgba(17,21,32,0.7)"}}
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{background:m.color,boxShadow:activeMaterial===i?`0 0 8px ${m.color}`:"none"}} />
                <span className="font-display font-semibold text-sm text-white">{m.name}</span>
              </button>
            ))}
          </div>

          <div className="reveal glass rounded-2xl p-6 sm:p-8 border transition-all duration-500" style={{borderColor:`${MATERIALS[activeMaterial].color}25`}}>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center font-display font-bold text-2xl"
                style={{background:MATERIALS[activeMaterial].bg,color:MATERIALS[activeMaterial].color,border:`2px solid ${MATERIALS[activeMaterial].color}45`,boxShadow:`0 0 30px ${MATERIALS[activeMaterial].color}18`}}>
                {MATERIALS[activeMaterial].name.slice(0,2)}
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-white mb-2">{MATERIALS[activeMaterial].name}</h3>
                <p className="text-white/55 mb-4 leading-relaxed">{MATERIALS[activeMaterial].desc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    ["Температура", MATERIALS[activeMaterial].temp, MATERIALS[activeMaterial].color],
                    ["Цена", MATERIALS[activeMaterial].price, MATERIALS[activeMaterial].color],
                    ["Точность", "до 0.1 мм", "#ffffff"],
                    ["Срок", "от 1 дня", "#ffffff"],
                  ].map(([label,val,col])=>(
                    <div key={label} className="glass rounded-lg px-3 py-1.5 text-sm">
                      <span className="text-white/35 mr-1">{label}:</span>
                      <span style={{color:col==="‍#ffffff"?"white":col}}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-12">
            <span className="text-xs text-neon-blue font-medium tracking-widest uppercase mb-3 block">Наши работы</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
              ПОРТ<span className="gradient-text">ФОЛИО</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto">Каждый проект — уникальная инженерная задача с точным результатом</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO_IMAGES.map((item,i)=>(
              <div key={i} className="reveal group relative rounded-2xl overflow-hidden aspect-square cursor-pointer" style={{transitionDelay:`${i*0.1}s`}}>
                <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 border border-transparent group-hover:border-neon-blue/35 rounded-2xl transition-all duration-300 group-hover:shadow-[inset_0_0_40px_rgba(0,212,255,0.08)]" />

                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-neon-blue text-xs font-medium tracking-wider uppercase mb-1">{item.category}</div>
                      <h3 className="font-display font-semibold text-lg text-white">{item.title}</h3>
                      <p className="text-white/45 text-sm">{item.material}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full glass border border-neon-blue/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon name="RotateCw" size={15} className="text-neon-blue" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-5 h-5 border-t-2 border-r-2 border-neon-blue" />
                </div>
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-5 h-5 border-t-2 border-l-2 border-neon-blue" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <button className="btn-outline-neon flex items-center gap-2 mx-auto px-6 py-3 rounded-xl font-semibold">
              <Icon name="Grid2x2" size={16} />Показать все работы
            </button>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 relative">
        <div className="absolute inset-0 bg-dark-800/40" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-10">
            <span className="text-xs text-neon-blue font-medium tracking-widest uppercase mb-3 block">Быстро и точно</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
              КАЛЬКУЛЯТОР <span className="gradient-text">СТОИМОСТИ</span>
            </h2>
          </div>

          <div className="reveal glass rounded-2xl p-6 sm:p-8 border border-neon-blue/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-white/45 text-sm mb-2 font-medium">Вес изделия (граммы)</label>
                <input
                  type="number"
                  value={calcWeight}
                  onChange={e=>setCalcWeight(Math.max(1,parseInt(e.target.value)||1))}
                  className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-neon-blue/50 transition-colors"
                  min="1" placeholder="100"
                />
                <input
                  type="range" min="10" max="1000" value={calcWeight}
                  onChange={e=>setCalcWeight(parseInt(e.target.value))}
                  className="w-full mt-2 accent-cyan-400"
                />
                <div className="flex justify-between text-white/25 text-xs mt-0.5">
                  <span>10 г</span><span>1000 г</span>
                </div>
              </div>

              <div>
                <label className="block text-white/45 text-sm mb-2 font-medium">Материал</label>
                <select
                  value={calcMaterial}
                  onChange={e=>setCalcMaterial(e.target.value)}
                  className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-neon-blue/50 transition-colors"
                >
                  <option value="PLA+">PLA+ — от 6₽/г</option>
                  <option value="ABS">ABS — от 8₽/г</option>
                  <option value="PETG">PETG — от 9₽/г</option>
                  <option value="TPU">TPU — от 12₽/г</option>
                  <option value="Nylon">Nylon PA12 — от 14₽/г</option>
                  <option value="Resin">Resin — от 18₽/г</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between mb-5 p-4 rounded-xl bg-dark-800/80 border border-white/5">
              <div>
                <div className="text-white font-medium text-sm">Срочный заказ (24ч)</div>
                <div className="text-white/35 text-xs">+50% к стоимости</div>
              </div>
              <button
                onClick={()=>setCalcUrgent(!calcUrgent)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${calcUrgent?"bg-neon-blue":"bg-white/10"}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 shadow-sm ${calcUrgent?"translate-x-6":"translate-x-1"}`} />
              </button>
            </div>

            <div className="rounded-xl border border-neon-blue/20 bg-neon-blue/5 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-white/35 text-xs mb-1">Примерная стоимость</div>
                <div className="font-display font-bold text-4xl text-neon-blue">{calcPrice().toLocaleString("ru-RU")} ₽</div>
                <div className="text-white/25 text-xs mt-1">{calcWeight}г × {calcMaterial}</div>
              </div>
              <button className="btn-neon flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold whitespace-nowrap w-full sm:w-auto justify-center">
                <Icon name="Send" size={15} />Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              ПОЧЕМУ <span className="gradient-text">3D MAGIC</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {icon:"Shield",title:"Гарантия качества",desc:"Контроль на каждом этапе производства",val:"100%"},
              {icon:"Clock",title:"Срок от 1 дня",desc:"Срочные заказы без потери качества",val:"24ч"},
              {icon:"FileText",title:"Работаем с юрлицами",desc:"Договор, НДС, закрывающие документы",val:"ООО/ИП"},
              {icon:"Award",title:"8 лет опыта",desc:"Сотни реализованных проектов",val:"500+"},
            ].map((item,i)=>(
              <div key={i} className="reveal service-card rounded-2xl p-5 text-center" style={{transitionDelay:`${i*0.07}s`}}>
                <div className="font-display font-bold text-3xl gradient-text-blue mb-1">{item.val}</div>
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center mx-auto my-3">
                  <Icon name={item.icon} size={19} className="text-neon-blue" />
                </div>
                <div className="font-display font-semibold text-white text-sm mb-1">{item.title}</div>
                <div className="text-white/35 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="absolute inset-0 bg-dark-800/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center mb-12">
            <span className="text-xs text-neon-blue font-medium tracking-widest uppercase mb-3 block">Свяжитесь с нами</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
              <span className="gradient-text">КОНТАКТЫ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="reveal glass rounded-2xl p-6 sm:p-8 border border-white/5 space-y-2">
              {[
                {icon:"Phone",label:"Телефон",value:"+7 (999) 000-00-00",href:"tel:+79990000000"},
                {icon:"Mail",label:"Email",value:"info@3dmagic.ru",href:"mailto:info@3dmagic.ru"},
                {icon:"MapPin",label:"Адрес",value:"Москва, ул. Примерная, 1",href:"#"},
                {icon:"Clock",label:"Режим работы",value:"Пн–Пт 9:00–19:00, Сб 10:00–16:00",href:"#"},
              ].map(c=>(
                <a key={c.label} href={c.href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/4 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/18 transition-colors">
                    <Icon name={c.icon} size={17} className="text-neon-blue" />
                  </div>
                  <div>
                    <div className="text-white/35 text-xs">{c.label}</div>
                    <div className="text-white font-medium text-sm">{c.value}</div>
                  </div>
                </a>
              ))}

              <div className="pt-4 border-t border-white/5">
                <div className="text-white/35 text-xs mb-3 uppercase tracking-wider">Социальные сети</div>
                <div className="flex gap-3">
                  {[
                    {icon:"MessageCircle",label:"Telegram"},
                    {icon:"Instagram",label:"Instagram"},
                    {icon:"Youtube",label:"YouTube"},
                  ].map(s=>(
                    <button key={s.label} className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center hover:border-neon-blue/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all group">
                      <Icon name={s.icon} size={17} className="text-white/45 group-hover:text-neon-blue transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal glass rounded-2xl p-6 sm:p-8 border border-white/5">
              <h3 className="font-display font-semibold text-xl text-white mb-5">Быстрый заказ</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Ваше имя" className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/28 focus:outline-none focus:border-neon-blue/45 transition-colors text-sm" />
                <input type="tel" placeholder="Телефон" className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/28 focus:outline-none focus:border-neon-blue/45 transition-colors text-sm" />
                <textarea placeholder="Опишите задачу: материал, размеры, количество..." rows={4} className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/28 focus:outline-none focus:border-neon-blue/45 transition-colors resize-none text-sm" />
                <button className="btn-neon w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2">
                  <Icon name="Rocket" size={17} />Отправить заявку
                </button>
                <p className="text-white/22 text-xs text-center">Отвечаем в течение 1 часа в рабочее время</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-violet rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xs">3D</div>
              </div>
              <span className="font-display font-bold text-base tracking-widest">
                <span className="text-white">3D</span><span className="gradient-text"> MAGIC</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-white/28 text-sm">
              {["Услуги","Материалы","Портфолио","Контакты"].map((item,i)=>(
                <button key={item} onClick={()=>scrollTo(["services","materials","portfolio","contacts"][i])} className="hover:text-neon-blue transition-colors">{item}</button>
              ))}
            </div>

            <div className="text-white/18 text-xs">© 2024 3D MAGIC. Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}