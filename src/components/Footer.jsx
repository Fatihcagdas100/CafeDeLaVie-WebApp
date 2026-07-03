import { Coffee } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#2D241E] text-white py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">

                    <div className="flex items-center gap-2">
                        <Coffee className="text-[#8C6A53] w-8 h-8" strokeWidth={1.5} />
                        <div>
                            <div className="font-semibold text-xl tracking-wide">CAFE DE LA VIE</div>
                            <div className="text-[#8C6A53] text-sm mt-1">Bahçelievler, Yağmur Bulutu Sk., Talas / Kayseri</div>
                        </div>
                    </div>

                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#about" className="hover:text-[#8C6A53] transition-colors">Hakkımızda</a>
                        <a href="#menu" className="hover:text-[#8C6A53] transition-colors">Menü</a>
                        <a href="#reviews" className="hover:text-[#8C6A53] transition-colors">Yorumlar</a>
                        <a href="#visit" className="hover:text-[#8C6A53] transition-colors">Ziyaret Et</a>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
                    <div>
                        © {new Date().getFullYear()} Cafe de la Vie. Tüm hakları saklıdır.
                    </div>
                    <div>
                        Her gün açık · 09:00 – 01:00
                    </div>
                </div>
            </div>
        </footer>
    );
}
