import { Star, Clock, MapPin } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image composite */}
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-[#FDFBF7]">
                            <img
                                alt="Cafe interior"
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600&h=800"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Stats float card */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#FDFBF7] p-6 rounded-2xl shadow-xl border border-[#8C6A53]/10 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#8C6A53]/10 flex items-center justify-center text-[#8C6A53]">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#2D241E] text-lg leading-tight">4.1★ Google Puanı</div>
                                    <div className="text-sm text-[#5A4A41]">365+ Mutlu Yorum</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#8C6A53]/10 flex items-center justify-center text-[#8C6A53]">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#2D241E] text-lg leading-tight">01.00</div>
                                    <div className="text-sm text-[#5A4A41]">Geç Saatlere Kadar</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[#8C6A53] font-semibold text-sm tracking-wider uppercase">Hikâyemiz</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2D241E] leading-tight">
                            Elde hazırlanır, <br className="hidden md:block" />
                            <span className="text-[#8C6A53] font-serif italic">gönülden sunulur</span>
                        </h2>
                        <div className="space-y-4 text-lg text-[#5A4A41] leading-relaxed">
                            <p>
                                Cafe de la Vie'de şefimiz Fatma her tatlıyı bizzat kendisi hazırlar — Cédric Grolet'den ilham alan zarif Fransız meyve tatlılarından, müdavimlerimizin her ay dönüp geldiği klasiklere kadar. Her lokmada hissedeceğiniz bir emek meselesi.
                            </p>
                            <p>
                                İlgili ve içten bir hizmet ile özenle tasarlanmış bir mekân — küçükler için ayrılmış oyun alanı dâhil — sayesinde, Kayseri'de dostların ve ailelerin tekrar tekrar geldiği mekân hâline geldik.
                            </p>
                        </div>

                        <div className="mt-4 pt-6 border-t border-[#8C6A53]/20 flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-[#8C6A53]" />
                            <div>
                                <div className="font-medium text-[#2D241E]">Talas, Kayseri</div>
                                <div className="text-sm text-[#5A4A41]">Bahçelievler Mevkii</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
