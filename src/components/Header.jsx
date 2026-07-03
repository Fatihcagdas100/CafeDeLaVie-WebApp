import { useState } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-[#FDFBF7]/90 backdrop-blur-md z-50 border-b border-[#8C6A53]/20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <a href="#top" className="flex items-center gap-2 text-[#2D241E] hover:text-[#8C6A53] transition-colors">
                    <Coffee strokeWidth={1.5} />
                    <span className="font-semibold text-lg tracking-wide">CAFE DE LA VIE</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-sm font-medium text-[#5A4A41] hover:text-[#8C6A53] transition-colors">Hakkımızda</a>
                    <a href="#menu" className="text-sm font-medium text-[#5A4A41] hover:text-[#8C6A53] transition-colors">Menü</a>
                    <a href="#reviews" className="text-sm font-medium text-[#5A4A41] hover:text-[#8C6A53] transition-colors">Yorumlar</a>
                    <a href="#visit" className="text-sm font-medium text-[#5A4A41] hover:text-[#8C6A53] transition-colors">Ziyaret Et</a>
                    <a
                        href="#"
                        className="text-sm font-medium bg-[#8C6A53] text-white px-4 py-2 rounded-full hover:bg-[#6E5140] transition-colors"
                    >
                        Online Sipariş
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-[#2D241E]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-[#FDFBF7] border-b border-[#8C6A53]/20 px-4 py-6 flex flex-col gap-4">
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-base text-[#5A4A41]">Hakkımızda</a>
                    <a href="#menu" onClick={() => setIsOpen(false)} className="text-base text-[#5A4A41]">Menü</a>
                    <a href="#reviews" onClick={() => setIsOpen(false)} className="text-base text-[#5A4A41]">Yorumlar</a>
                    <a href="#visit" onClick={() => setIsOpen(false)} className="text-base text-[#5A4A41]">Ziyaret Et</a>
                    <a href="#" className="text-base text-[#8C6A53] font-medium">Online Sipariş</a>
                </div>
            )}
        </header>
    );
}
