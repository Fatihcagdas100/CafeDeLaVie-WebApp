import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function VisitUs() {
    return (
        <section id="visit" className="py-24 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#8C6A53] font-semibold text-sm tracking-wider uppercase">Bizi Ziyaret Edin</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2D241E] mt-4 mb-6">
                        Gelin, <span className="text-[#8C6A53] font-serif italic">biraz oturun</span>
                    </h2>
                    <p className="text-lg text-[#5A4A41]">
                        Talas'ın kalbinde bizi bulun. İster sabah kahvesi ister gece tatlısı olsun, kapılarımız her gün gece 01.00'e kadar açık.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-[#8C6A53]/20">

                    <div className="p-8 md:p-12 flex flex-col gap-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#8C6A53]/10 flex items-center justify-center text-[#8C6A53]">
                                <MapPin />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#2D241E] text-xl mb-2">Adres</h3>
                                <p className="text-[#5A4A41] leading-relaxed">
                                    Bahçelievler, Yağmur Bulutu Sk. <br /> 38280 Talas/Kayseri
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#8C6A53]/10"></div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#8C6A53]/10 flex items-center justify-center text-[#8C6A53]">
                                <Clock />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-[#2D241E] text-xl mb-3">Çalışma Saatleri</h3>
                                <div className="space-y-3 w-full">
                                    <div className="flex justify-between items-center text-[#5A4A41] border-b border-[#8C6A53]/5 pb-2">
                                        <span>Pazartesi – Perşembe</span>
                                        <span className="font-medium text-[#2D241E]">09:00 – 01:00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[#5A4A41] border-b border-[#8C6A53]/5 pb-2">
                                        <span>Cuma – Cumartesi</span>
                                        <span className="font-medium text-[#2D241E]">09:00 – 01:00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[#5A4A41]">
                                        <span>Pazar</span>
                                        <span className="font-medium text-[#2D241E]">09:00 – 01:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#8C6A53]/10"></div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#8C6A53]/10 flex items-center justify-center text-[#8C6A53]">
                                <Phone />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#2D241E] text-xl mb-2">Rezervasyon</h3>
                                <p className="text-[#5A4A41] leading-relaxed">
                                    Kalabalık gruplar için masa ayırtmak üzere önceden arayın.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[300px] lg:h-auto bg-slate-100 flex flex-col justify-end p-6 md:p-8 border-l border-[#8C6A53]/10">
                        {/* Map placeholder or actual Map embed */}
                        <div className="absolute inset-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.626244670068!2d35.539366!3d38.703714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b12cf5e6c7ea3%3A0x6b5c0c9aaad1003!2sBah%C3%A7elievler%2C%20Ya%C4%9Fmur%20Bulutu%20Sk.%2C%2038280%20Talas%2FKayseri!5e0!3m2!1str!2str!4v1700611200000!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale opacity-90 contrast-125"
                                title="Google Maps"
                            ></iframe>
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-auto">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Cafe%20de%20la%20Vie%20Bah%C3%A7elievler%2C%20Ya%C4%9Fmur%20Bulutu%20Sk.%2C%2038280%20Talas%2FKayseri"
                                target="_blank" rel="noreferrer"
                                className="flex-1 bg-[#2D241E] text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#8C6A53] transition-colors font-medium shadow-xl"
                            >
                                <Navigation className="w-5 h-5" />
                                Yol Tarifi Al
                            </a>
                            <a
                                href="https://www.yemeksepeti.com"
                                target="_blank" rel="noreferrer"
                                className="flex-1 bg-white text-[#2D241E] py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#FDFBF7] transition-colors font-medium shadow-xl"
                            >
                                Yemeksepeti'nde Sipariş Ver
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
