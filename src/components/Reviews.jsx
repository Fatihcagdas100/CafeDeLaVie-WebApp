import { Star } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        {
            name: "Ronia Kasro",
            platform: "Google",
            time: "3 hafta önce",
            rating: 5,
            text: "Mekanın atmosferi ve tatlılar harikaydı, herkese tavsiye ederim."
        },
        {
            name: "Demir Ali Taştan",
            platform: "Google",
            time: "bir ay önce",
            rating: 5,
            text: "Kahveler özenle hazırlanmış. Talas'ta gidilebilecek en iyi mekanlardan."
        },
        {
            name: "İsmail Yüceoğlu",
            platform: "Google",
            time: "4 hafta önce",
            rating: 5,
            text: "Özellikle çocuklu aileler için oyun alanı olması büyük avantaj. Servis çok hızlıydı."
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-white border-t border-[#8C6A53]/10">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

                    <div className="sticky top-24">
                        <span className="text-[#8C6A53] font-semibold text-sm tracking-wider uppercase">Misafir Yorumları</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2D241E] mt-4 mb-8">
                            Misafirlerimiz <br /> <span className="text-[#8C6A53] font-serif italic">ne diyor</span>
                        </h2>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4 bg-[#FDFBF7] p-4 rounded-xl border border-[#8C6A53]/10">
                                <div className="text-3xl font-bold text-[#2D241E]">4.1<span className="text-lg text-[#5A4A41] font-normal">/5</span></div>
                                <div>
                                    <div className="font-medium text-[#2D241E]">Google · 365</div>
                                    <div className="flex text-[#8C6A53]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-[#FDFBF7] p-4 rounded-xl border border-[#8C6A53]/10">
                                <div className="text-3xl font-bold text-[#2D241E]">4.3<span className="text-lg text-[#5A4A41] font-normal">/5</span></div>
                                <div>
                                    <div className="font-medium text-[#2D241E]">Yandex · 19</div>
                                    <div className="flex text-[#8C6A53]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#8C6A53]/10">
                                <div className="flex items-center gap-1 text-[#8C6A53] mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg text-[#2D241E] italic mb-6">"{review.text}"</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="font-bold text-[#2D241E]">{review.name}</div>
                                    <div className="text-sm border-l border-[#8C6A53]/20 pl-4 py-1 flex flex-col items-end">
                                        <span className="font-medium text-[#5A4A41]">{review.platform}</span>
                                        <span className="text-[#8C6A53] text-xs">{review.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
