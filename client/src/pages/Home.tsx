import { Button } from "@/components/ui/button";
import { Download, Check, Zap, Keyboard } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Modern Minimalist with Glassmorphism
 * - Color Scheme: Indigo (#1e1b4b) + Cyan (#06b6d4) with off-white backgrounds
 * - Typography: Poppins for headings, Inter for body
 * - Interactions: Smooth transitions, parallax effects, hover animations
 * - Visual Style: Glassmorphic cards, subtle depth, professional aesthetic
 * - Language: Hebrew (RTL)
 */

type OS = 'windows' | 'mac' | 'linux' | 'unknown';

export default function Home() {
  const [os, setOs] = useState<OS>('unknown');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Detect OS
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setOs('windows');
    else if (userAgent.includes('mac')) setOs('mac');
    else if (userAgent.includes('linux')) setOs('linux');
    else setOs('unknown');

    // Handle scroll for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDownloadLink = () => {
    const baseUrl = 'https://github.com/shopneckmassager37-cpu/keyboard-lang-switcher-windows/releases/download/v1.0.0';
    if (os === 'windows') return `${baseUrl}/KeyboardSwitcherSetup.exe`;
    return 'https://github.com/shopneckmassager37-cpu/keyboard-lang-switcher-windows/releases';
  };

  const getDownloadText = () => {
    if (os === 'windows') return 'הורד עבור Windows';
    if (os === 'mac') return 'בקרוב עבור Mac';
    if (os === 'linux') return 'בקרוב עבור Linux';
    return 'הורד עכשיו';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="https://github.com/shopneckmassager37-cpu/keyboard-lang-switcher-windows" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-indigo-700 transition-colors">
            GitHub
          </a>
          <div className="flex items-center gap-2">
            <Keyboard className="w-6 h-6 text-indigo-700" />
            <span className="font-bold text-lg text-indigo-900">מחליף שפות מקלדת</span>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          {/* Background with parallax */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663601682708/LbAZvJQ2py3oVB9QVnJsnF/hero-keyboard-abstract-7jYQzk6Mc5jHGnqdVNyCs6.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-white/50" />

          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in lg:order-2">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
                  החלף שפות
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                    בשנייה
                  </span>
                </h1>
                <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                  אפליקציית Windows חזקה שמחליפה את שפת המקלדת שלך באופן אוטומטי ומסירה CapsLock בלחיצה אחת: <span className="font-semibold text-indigo-700">ALT+SHIFT+J</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.open(getDownloadLink(), '_blank')}
                  disabled={os !== 'windows'}
                >
                  <Download className="w-5 h-5 ml-2" />
                  {getDownloadText()}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-300"
                  onClick={() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  למידע נוסף
                </Button>
              </div>

              {/* OS Detection Info */}
              <div className="text-sm text-slate-500">
                {os === 'windows' && <p>✓ Windows זוהה - מוכן להורדה</p>}
                {os === 'mac' && <p>Mac OS זוהה - תמיכה בקרוב</p>}
                {os === 'linux' && <p>Linux זוהה - תמיכה בקרוב</p>}
                {os === 'unknown' && <p>לא הצלחנו לזהות את מערכת ההפעלה - הורדה זמינה עבור Windows</p>}
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:flex justify-center items-center lg:order-1">
              <div className="relative w-full h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663601682708/LbAZvJQ2py3oVB9QVnJsnF/keyboard-icon-illustration-nmvxjq6xtQd9Vm48NZaGJX.webp"
                  alt="החלפת שפות מקלדת"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-indigo-900 mb-4">תכונות חזקות</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                מעוצב כדי להפוך את חוויית הקלדה רב-לשונית שלך לחלקה ויעילה
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 hover:border-cyan-300/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">החלפה בלחיצה אחת</h3>
                  <p className="text-slate-600 leading-relaxed">
                    לחץ על <span className="font-semibold text-indigo-700">ALT+SHIFT+J</span> כדי להחליף מיידית בין פריסות מקלדת אנגלית לעברית
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 hover:border-cyan-300/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <Check className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">החלפה אוטומטית של שפה</h3>
                  <p className="text-slate-600 leading-relaxed">
                    מזהה ומחליף באופן אוטומטי את שפת המקלדת שלך כדי להתאים לצרכי ההקלדה שלך
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 hover:border-cyan-300/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <Keyboard className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">הסרת CapsLock</h3>
                  <p className="text-slate-600 leading-relaxed">
                    מסירה באופן אוטומטי את מצב CapsLock בעת החלפת שפות להקלדה נקייה יותר
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section id="install-guide" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-indigo-900 mb-4">הוראות התקנה</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                התחל בשלושה שלבים פשוטים
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">הורדה</h3>
                  <p className="text-slate-600">
                    לחץ על כפתור "הורד עכשיו" למעלה כדי להוריד את ההתקנה
                  </p>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute top-8 right-[calc(50%+2rem)] w-[calc(100%-4rem)] h-1 bg-gradient-to-l from-indigo-300 to-transparent" />
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">התקנה</h3>
                  <p className="text-slate-600">
                    הרץ את ההתקנה ועקוב אחרי אשף ההתקנה
                  </p>
                </div>
                {/* Connector line */}
                <div className="hidden md:block absolute top-8 right-[calc(50%+2rem)] w-[calc(100%-4rem)] h-1 bg-gradient-to-l from-indigo-300 to-transparent" />
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">התחל להשתמש</h3>
                  <p className="text-slate-600">
                    לחץ על <span className="font-semibold">ALT+SHIFT+J</span> כדי להחליף שפות
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-900 via-indigo-800 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl" />
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4">מוכן להחליף?</h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              הצטרף לאלפי משתמשים רב-לשוניים שכבר משתמשים ב-KeyboardSwitcher כדי להגביר את הפרודוקטיביות שלהם
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(getDownloadLink(), '_blank')}
              disabled={os !== 'windows'}
            >
              <Download className="w-5 h-5 ml-2" />
              {getDownloadText()}
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">מחליף שפות מקלדת</h3>
              <p className="text-sm">כלי חזק למשתמשים רב-לשוניים</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">קישורים</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="https://github.com/shopneckmassager37-cpu/keyboard-lang-switcher-windows" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://github.com/shopneckmassager37-cpu/keyboard-lang-switcher-windows/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">גרסה</h3>
              <p className="text-sm">v1.0.0</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>© 2026 KeyboardSwitcher. בנוי בעבור משתמשים רב-לשוניים.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
