export default function Menu() {
    const menuItems = [
        {
            title: "Fransız Meyve Tatlısı",
            description: "İmza lezzetimiz — Cédric Grolet ruhunda, göz aldatan (trompe-l’oeil) meyve şeklinde bir tatlı.",
            category: "İmza"
        },
        {
            title: "Özel Demleme Kahve",
            description: "Espresso, flat white, filtre ve daha fazlası — özenle demlenir, latte art ile sunulur.",
            category: "Kahve"
        },
        {
            title: "Pastane Seçkisi",
            description: "Fransız esintili pastalar, tartlar ve parlak meyve tatlılarından oluşan sürekli değişen vitrin.",
            category: "Tatlı"
        }
    ];

    return (
        <section id="menu" className="py-24 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <span className="text-[#8C6A53] font-semibold text-sm tracking-wider uppercase">Menü</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2D241E] mt-4">
                        İmza lezzetler & <span className="text-[#8C6A53] font-serif italic">demlemeler</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl shadow-sm border border-[#8C6A53]/10 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="inline-block px-3 py-1 bg-[#FDFBF7] text-[#8C6A53] text-xs font-semibold tracking-wider rounded-full mb-6">
                                {item.category}
                            </div>
                            <h3 className="text-xl font-bold text-[#2D241E] mb-3 group-hover:text-[#8C6A53] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[#5A4A41] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-sm text-[#5A4A41] bg-[#8C6A53]/5 py-4 rounded-xl">
                    Fiyatlar bilgi amaçlıdır ve değişebilir. Günün spesiyalleri için ekibimize danışın.
                </div>
            </div>
        </section>
    );
}
