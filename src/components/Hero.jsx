import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="top" className="pt-24 min-h-[90vh] flex items-center bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-4 md:px-6 w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start gap-6">
                    <div className="inline-flex items-center rounded-full border border-[#8C6A53]/30 px-3 py-1 text-sm font-medium text-[#8C6A53] bg-[#8C6A53]/5">
                        Üçüncü Nesil Kahve & Pastane
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#2D241E] leading-[1.1]">
                        Her fincanda bir <br /> <span className="text-[#8C6A53] italic font-serif">tutam la vie</span>
                    </h1>
                    <p className="text-lg text-[#5A4A41] max-w-md leading-relaxed">
                        Talas, Kayseri'de keyifli sabahlar ve geç saatler için sıcacık bir köşe — özenle demlenen kahveler ve elde hazırlanan Fransız esintili tatlılar.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <a
                            href="#menu"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8C6A53] px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-white shadow hover:bg-[#6E5140] transition-colors"
                        >
                            Menüyü Keşfet <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#visit"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#8C6A53]/20 bg-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-[#2D241E] shadow-sm hover:bg-[#FDFBF7] transition-colors"
                        >
                            Bize Ulaşın
                        </a>
                    </div>
                </div>

                <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden bg-[#8C6A53]/10 shadow-xl opacity-90 hover:opacity-100 transition-opacity duration-500">
                    <img
                        alt="Delicious pastry and coffee"
                        src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800&h=1000"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center bg-white/90 backdrop-blur rounded-full px-3 py-1 shadow-sm font-serif italic text-sm text-[#8C6A53]">
                        à la maison
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-sm text-sm font-medium text-[#2D241E] max-w-[200px] text-right">
                        Her tatlı, mekânımızda elde hazırlanır.
                    </div>
                </div>
            </div>
        </section>
    );
}
