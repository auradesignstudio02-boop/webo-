import React, { useState } from 'react';
import { 
  Globe, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft, 
  Star, 
  Smartphone, 
  Headphones, 
  Send, 
  Calculator, 
  Layers, 
  Award, 
  Clock, 
  Check, 
  X, 
  Menu, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sliders,
  DollarSign,
  Users,
  Calendar,
  BookOpen,
  CheckSquare,
  Package,
  Cpu,
  Code,
  Layout,
  Monitor
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForOrder, setSelectedServiceForOrder] = useState('موقع الشركات التعريفي');

  // ROI / Business Growth Calculator State
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [averageDealValue, setAverageDealValue] = useState(1500);
  const [conversionRate, setConversionRate] = useState(2.0);

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: selectedServiceForOrder,
    notes: ''
  });

  // Calculate Business Growth / Leads
  const estimatedLeads = Math.round((monthlyVisitors * (conversionRate / 100)));
  const estimatedPotentialRevenue = estimatedLeads * averageDealValue;
  const annualPotentialRevenue = estimatedPotentialRevenue * 12;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const openOrderModal = (serviceName: string) => {
    setSelectedServiceForOrder(serviceName);
    setFormData(prev => ({ ...prev, serviceType: serviceName }));
    setConsultationModalOpen(true);
  };

  const websiteServices = [
    {
      id: 1,
      title: 'موقع الشركات والاعمال (Corporate Website)',
      price: '2,999 ر.س',
      originalPrice: '4,500 ر.س',
      badge: 'الأكثر طلباً ⭐',
      description: 'موقع احترافي متكامل للتعريف بشركتك، خدماتك، فريق العمل، ونموذج تواصل متقدم لزيادة العملاء المحتملين.',
      features: ['تصميم مخصص يتناسب مع هويتك', 'سرعة تحميل فائقة وتوافق تام مع الجوال', 'لوحة تحكم سهلة لإدارة المحتوى', 'تهيئة متقدمة لمحركات البحث SEO']
    },
    {
      id: 2,
      title: 'صفحة هبوط تسويقية (Landing Page)',
      price: '1,499 ر.س',
      originalPrice: '2,500 ر.س',
      badge: 'سريع وفعال ⚡',
      description: 'صفحة واحدة مصممة خصيصاً لإطلاق حملة إعلانية ناجحة، تسويق منتج أو خدمة جديدة، وتحقيق أعلى معدل تحويل.',
      features: ['تصميم يركز على إقناع الزوار', 'سرعة خرافية لفتح الإعلانات', 'ربط مع بكسل الإعلانات وواتساب', 'نموذج تسجيل بيانات فوري']
    },
    {
      id: 3,
      title: 'موقع بورتفوليو / شخصي (Portfolio)',
      price: '1,899 ر.س',
      originalPrice: '3,000 ر.س',
      badge: 'للمستقلين والمبدعين 🎨',
      description: 'اعرض أعمالك، خدماتك، وسيرتك الذاتية بأناقة فائقة تجذب العملاء والشركات للتعاقد معك.',
      features: ['معرض أعمال بتصميم إبداعي', 'سيرة ذاتية تفاعلية', 'صفحة حجز استشارات أو خدمات', 'مدونة شخصية اختيارية']
    },
    {
      id: 4,
      title: 'بوابة الخدمات والحلول المخصصة (Web App)',
      price: '4,999 ر.س',
      originalPrice: '7,500 ر.س',
      badge: 'حلول متقدمة 💻',
      description: 'تطوير موقع ويب تفاعلي مع لوحة تحكم خاصة، مستخدمين، وحلول برمجية مخصصة حسب فكرة مشروعك.',
      features: ['برمجة مخصصة بالكامل', 'نظام صلاحيات مستخدمين (تسجيل دخول)', 'ربط مع واجهات برمجية APIs', 'دعم فني واستضافة متقدمة']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-xs sm:text-sm py-2 px-4 text-center font-medium text-indigo-200 border-b border-indigo-800/40">
        ✨ صمم موقعك الإلكتروني الاحترافي اليوم: احصل على <span className="text-amber-400 font-bold">استضافة وسرعة فائقة + تهيئة SEO</span> مع أي باقة تختاره!
        <button onClick={() => {
          const el = document.getElementById('services-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} className="underline mr-2 hover:text-white font-bold transition">استعرض الباقات</button>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">المطور الرقمي</span>
              <span className="block text-[10px] text-indigo-400 font-semibold tracking-widest uppercase">Web Development Studio</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <button onClick={() => { document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth'}); }} className="hover:text-indigo-400 transition">خدمات المواقع</button>
            <button onClick={() => { document.getElementById('guide-section')?.scrollIntoView({ behavior: 'smooth'}); }} className="hover:text-indigo-400 transition flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-indigo-400" /> دليل المواقع الاحترافية</button>
            <button onClick={() => { document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth'}); }} className="hover:text-indigo-400 transition">حاسبة النمو</button>
            <button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'}); }} className="hover:text-indigo-400 transition">تواصل معنا</button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setConsultationModalOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/25 transition duration-300 flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              اطلب موقعك الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-5 space-y-4 shadow-2xl">
            <button 
              onClick={() => { setMobileMenuOpen(false); document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="block text-slate-200 hover:text-indigo-400 font-medium w-full text-right"
            >
              خدمات المواقع
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); document.getElementById('guide-section')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="block text-slate-200 hover:text-indigo-400 font-medium w-full text-right"
            >
              دليل المعلومات الصحيحة
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="block text-slate-200 hover:text-indigo-400 font-medium w-full text-right"
            >
              حاسبة النمو والعملاء
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} 
              className="block text-slate-200 hover:text-indigo-400 font-medium w-full text-right"
            >
              تواصل معنا
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); setConsultationModalOpen(true); }}
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl text-center shadow-lg"
            >
              اطلب موقعك الآن
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-28 lg:pt-24 lg:pb-36 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
                <Code className="w-4 h-4 text-amber-400" />
                <span>تصميم وبرمجة المواقع الإلكترونية الاحترافية للشركات والأفراد</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
                ابنِ واجهتك الرقمية بقوة واحترافية مع <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">موقع إلكتروني مخصص</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                نحن نصمم ونبرمج مواقع إلكترونية تعريفية، صفحات هبوط تسويقية، وبورتفوليو إبداعي بأعلى معايير السرعة والأمان والأداء المتميز لتترك انطباعاً لا يُنسى لدى عملائك.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#services-section"
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/30 transition duration-300 text-center flex items-center justify-center gap-3 text-base"
                >
                  <Globe className="w-5 h-5" />
                  <span>استعرض خدمات تصميم المواقع</span>
                </a>

                <a 
                  href="#guide-section"
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition duration-300 text-center flex items-center justify-center gap-2 text-base"
                >
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                  <span>دليل هندسة المواقع</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 text-center lg:text-right">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">+300</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">موقع إلكتروني أُنجز</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">&lt; 1.0 ثانية</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">سرعة تحميل فائقة</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">تصميم مخصص وخاص بك</div>
                </div>
              </div>

            </div>

            {/* Visual Hero Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border-2 border-indigo-500/40 rounded-3xl p-8 shadow-2xl text-right">
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                    تطوير مواقع الويب الحديثة
                  </div>

                  <span className="text-xs text-indigo-300 font-semibold uppercase tracking-wider block mb-2">هندسة رقمية متطورة</span>
                  <h3 className="text-2xl font-black text-white mb-4 leading-snug">
                    "اجعل شركتك تظهر بأفضل صورة أمام العالم الرقمي"
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    نحن متخصصون حصرياً في بناء المواقع الإلكترونية التعريفية، الشركات، والصفحات الاحترافية. لا نقدم منصات متاجر، بل نبتكر لك هوية ويب مميزة تعكس احترافية عملك.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>كود برمجي نظيف وخالٍ من التعقيد</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>متوافق تماماً مع محركات البحث SEO</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>دعم فني وتحديثات مستمرة</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setConsultationModalOpen(true)}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl transition text-sm flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    احجز استشارة برمجية مجانية
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Website Services Section */}
      <section id="services-section" className="py-24 bg-slate-900/60 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800/40">خدمات تصميم المواقع الإلكترونية</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">اختر نوع الموقع الذي يمثّل نشاطك وهويتك</h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8">نقدم حلولاً برمجية وتصميمية متكاملة للمواقع التعريفية والشركات وصفحات الهبوط.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteServices.map((service) => (
              <div 
                key={service.id}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 group hover:border-indigo-600/60 transition duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-indigo-950 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full border border-indigo-800/60">
                      {service.badge}
                    </span>
                    <div className="text-left">
                      <span className="text-2xl font-black text-emerald-400">{service.price}</span>
                      <span className="text-xs text-slate-500 line-through block">{service.originalPrice}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => openOrderModal(service.title)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>اطلب تصميم هذا الموقع</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Guide Section (Informative Content) */}
      <section id="guide-section" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800/40">دليل هندسة المواقع والمعلومات</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">لماذا يمثل الموقع الإلكتروني الاحترافي ركيزة نجاحك؟</h2>
            <p className="text-slate-300 text-base sm:text-lg">معلومات صحيحة ورؤى استراتيجية حول دور المواقع في بناء الثقة وجذب العملاء للشركات.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-indigo-600/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 font-bold text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-white mb-3">الانطباع الأول والمصداقية</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  75% من العملاء يقيمون مدى موثوقية الشركة بناءً على جودة واحترافية موقعها الإلكتروني. الموقع الرديء يعكس انطباعاً سلبياً، بينما الموقع العصري يبني الثقة الفورية.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-indigo-400 font-semibold flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4" /> معيار أساسي في التصميم
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-indigo-600/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-white mb-3">الظهور في محركات البحث (SEO)</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  الموقع الإلكتروني المهيكل برمجياً بشكل صحيح يتيح لك الظهور في نتائج جوجل الأولى مجاناً، مستقطباً عملاء يبحثون عن خدماتك بشكل دائم دون الحاجة لإعلانات مستمرة.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-purple-400 font-semibold flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4" /> مهيأ بالكامل لجوجل
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-indigo-600/40 transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-600/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6 font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-white mb-3">استقبال العملاء على مدار الساعة</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  موقعك هو موظفك الأبدي الذي يعمل 24 ساعة يومياً، يعرض خدماتك، ويستقبل طلبات واستفسارات العملاء المحتملين ونماذج التواصل بكل سهولة واحترافية.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs text-pink-400 font-semibold flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4" /> متاح 24/7 بدون توقف
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ROI & Leads Calculator Section */}
      <section id="calculator" className="py-24 bg-slate-900/60 border-t border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800/40">حاسبة العائد والعملاء المحتملين</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">احسب حجم نمو أعمالك مع موقعك الاحترافي الجديد</h2>
            <p className="text-slate-300 text-base sm:text-lg">توقع عدد العملاء والإيرادات الشهرية بناءً على زوار موقعك ومعدل التحويل.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" />
                    الزوار المتوقعون للموقع شهرياً
                  </label>
                  <span className="text-indigo-400 font-mono font-bold bg-indigo-950 px-3 py-1 rounded-lg border border-indigo-800/60">
                    {monthlyVisitors.toLocaleString()} زائر
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full accent-indigo-600 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    متوسط قيمة التعاقد أو الصفقة الواحدة
                  </label>
                  <span className="text-emerald-400 font-mono font-bold bg-emerald-950 px-3 py-1 rounded-lg border border-emerald-800/60">
                    {averageDealValue} ر.س
                  </span>
                </div>
                <input 
                  type="range" 
                  min="200" 
                  max="10000" 
                  step="100"
                  value={averageDealValue}
                  onChange={(e) => setAverageDealValue(Number(e.target.value))}
                  className="w-full accent-emerald-600 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    معدل تحويل الزوار لعملاء (Conversion Rate)
                  </label>
                  <span className="text-purple-400 font-mono font-bold bg-purple-950 px-3 py-1 rounded-lg border border-purple-800/60">
                    {conversionRate}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="5.0" 
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-purple-600 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-800/60 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest bg-indigo-900/60 px-3 py-1 rounded-full">نتائج النمو والعملاء</span>
                
                <div className="my-6">
                  <span className="text-xs text-slate-400 block mb-1">العملاء المحتملون شهرياً (Leads)</span>
                  <span className="text-3xl font-black text-white font-mono">{estimatedLeads.toLocaleString()} عميل</span>
                </div>

                <div className="my-6 py-6 border-t border-b border-indigo-900/60">
                  <span className="text-xs text-slate-400 block mb-1">الإيرادات الشهرية المحتملة</span>
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">{estimatedPotentialRevenue.toLocaleString()} ر.س</span>
                </div>

                <div className="mb-6">
                  <span className="text-xs text-slate-400 block mb-1">الإيرادات السنوية (متوقعة)</span>
                  <span className="text-2xl sm:text-3xl font-black text-indigo-300 font-mono">{annualPotentialRevenue.toLocaleString()} ر.س</span>
                </div>
              </div>

              <button 
                onClick={() => setConsultationModalOpen(true)}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition"
              >
                اطلب موقعك الإلكتروني لزيادة أرباحك 🚀
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Contact & Consultation Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-14 shadow-2xl">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800/40">تواصل مباشر</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">ابدأ تصميم موقعك الإلكتروني اليوم</h2>
              <p className="text-slate-300 text-sm sm:text-base">املأ النموذج أدناه وسيتواصل معك مهندس الويب المختص لمناقشة متطلبات مشروعك فورا.</p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">✓</div>
                <h3 className="text-2xl font-bold text-white">تم استلام طلبك بنجاح!</h3>
                <p className="text-emerald-300 text-sm max-w-md mx-auto">
                  شكراً لتواصلك معنا. قام مطور الويب بتسجيل طلبك وسيتم الاتصال بك خلال أقل من ساعة لمناقشة تفاصيل موقعك الإلكتروني.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-2.5 rounded-xl border border-slate-700 text-sm transition"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">الاسم الكريم *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="محمد أحمد"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">البريد الإلكتروني *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">رقم الجوال (واتساب) *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+966 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">نوع الخدمة / الموقع المطلوبة</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-600 transition"
                    >
                      <option value="موقع الشركات والأعمال">موقع الشركات والأعمال (2,999 ر.س)</option>
                      <option value="صفحة هبوط تسويقية">صفحة هبوط تسويقية (1,499 ر.س)</option>
                      <option value="موقع بورتفوليو / شخصي">موقع بورتفوليو / شخصي (1,899 ر.س)</option>
                      <option value="بوابة الخدمات والحلول المخصصة">بوابة الخدمات والحلول المخصصة (4,999 ر.س)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">تفاصيل فكرة موقعك أو متطلباتك</label>
                  <textarea 
                    rows={4}
                    placeholder="اكتب نبذة مختصرة عن نشاط شركتك أو أفكارك للموقع..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-600 transition"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-indigo-600/30 transition duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>إرسال طلب تصميم الموقع الإلكتروني</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-600 flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-white">المطور الرقمي</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                استوديو متخصص في تصميم وبرمجة المواقع الإلكترونية الاحترافية، الشركات، وصفحات الهبوط بأعلى معايير الجودة.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">روابط سريعة</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#services-section" className="hover:text-indigo-400 transition">خدمات المواقع</a></li>
                <li><a href="#guide-section" className="hover:text-indigo-400 transition">دليل المعلومات</a></li>
                <li><a href="#calculator" className="hover:text-indigo-400 transition">حاسبة النمو</a></li>
                <li><a href="#contact" className="hover:text-indigo-400 transition">تواصل معنا</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">خدمات الويب</h4>
              <ul className="space-y-2.5 text-xs">
                <li><span className="hover:text-indigo-400 transition cursor-pointer">مواقع الشركات والأعمال</span></li>
                <li><span className="hover:text-indigo-400 transition cursor-pointer">صفحات الهبوط التسويقية</span></li>
                <li><span className="hover:text-indigo-400 transition cursor-pointer">مواقع البورتفوليو الشخصي</span></li>
                <li><span className="hover:text-indigo-400 transition cursor-pointer">تطبيقات الويب المخصصة</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">تواصل معنا</h4>
              <p className="text-xs mb-2">الرياض، المملكة العربية السعودية</p>
              <p className="text-xs mb-2">contact@webstudio.agency</p>
              <p className="text-xs font-bold text-emerald-400">+966 50 000 0000</p>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 استوديو المطور الرقمي. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-300 cursor-pointer">سياسة الخصوصية</span>
              <span className="hover:text-slate-300 cursor-pointer">الشروط والأحكام</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">استشارة برمجية</span>
              <h3 className="text-2xl font-bold text-white mt-3">طلب تصميم موقع إلكتروني</h3>
              <p className="text-slate-400 text-xs mt-1">سنقوم بالتواصل معك هاتفياً لمناقشة فكرة وتفاصيل موقعك.</p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setFormSubmitted(true);
              setConsultationModalOpen(false);
            }} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">الاسم الكريم *</label>
                <input 
                  type="text" 
                  required
                  placeholder="محمد العتيبي"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">رقم الجوال (واتساب) *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+966 50 000 0000"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">نوع الخدمة المطلوبة</label>
                <select 
                  defaultValue={selectedServiceForOrder}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-600"
                >
                  {websiteServices.map(s => (
                    <option key={s.id} value={s.title}>{s.title} ({s.price})</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl text-sm shadow-lg transition mt-2"
              >
                تأكيد طلب استشارة وتصميم الموقع
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
