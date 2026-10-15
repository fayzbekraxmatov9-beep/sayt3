
export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-14">

                {/* FOOTER TOP */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* LOGO */}
                    <div>
                        <a href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
                                🔨
                            </div>
                            <span className="text-2xl font-extrabold">
                                Usta <span className="text-blue-400">Top</span>
                            </span>
                        </a>

                        <p className="mt-5 max-w-xs leading-7 text-slate-400">
                            Uyingiz uchun ishonchli ustalarni toping.
                            Sifatli xizmat va qulay narxlar bir joyda!
                        </p>

                        <div className="mt-5 flex gap-3">
                            <a
                                href="https://t.me/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Telegram"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                            >
                                ✈️
                            </a>

                            <a
                                href="https://instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-pink-600"
                            >
                                📸
                            </a>

                            <a
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition hover:bg-blue-600"
                            >
                                f
                            </a>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h3 className="text-lg font-bold">Foydali havolalar</h3>

                        <ul className="mt-5 space-y-4 text-slate-400">
                            <li>
                                <a href="/" className="transition hover:text-white">
                                    Bosh sahifa
                                </a>
                            </li>
                            <li>
                                <a href="/sevimlilar" className="transition hover:text-white">
                                    ❤️ Sevimlilar
                                </a>
                            </li>
                            <li>
                                <a href="/kirish" className="transition hover:text-white">
                                    Kirish
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/royxatdan-otish"
                                    className="transition hover:text-white"
                                >
                                    Ro‘yxatdan o‘tish
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/usta-bolish"
                                    className="transition hover:text-white"
                                >
                                    Usta bo‘lish
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="text-lg font-bold">Xizmatlar</h3>

                        <ul className="mt-5 space-y-4 text-slate-400">
                            <li>🔧 Santexnik</li>
                            <li>⚡ Elektrik</li>
                            <li>❄️ Konditsioner ustasi</li>
                            <li>🧱 Quruvchi</li>
                            <li>🎨 Bo‘yoqchi</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-lg font-bold">Biz bilan aloqa</h3>

                        <ul className="mt-5 space-y-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <span>📍</span>
                                <span>Toshkent shahri, O‘zbekiston</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <span>📞</span>
                                <a
                                    href="tel:+998971988788"
                                    className="transition hover:text-white"
                                >
                                    +998 97 298 87 88
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <span>✉️</span>
                                <a
                                    href="mailto:info@ustatop.uz"
                                    className="transition hover:text-white"
                                >
                                    info@ustatop.uz
                                </a>
                            </li>
                        </ul>

                        <a
                            href="/usta-bolish"
                            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
                        >
                            Usta bo‘ling →
                        </a>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Usta Top. Barcha huquqlar himoyalangan.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <a href="/" className="transition hover:text-white">
                            Maxfiylik siyosati
                        </a>
                        <a href="/" className="transition hover:text-white">
                            Foydalanish shartlari
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}