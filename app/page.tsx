
import Footer from "./components/Footer";

const ustalar = [
  {
    id: "Umar-Keldiyorov",
    ism: "Umar Keldiyorov",
    kasb: "Santexnik",
    icon: "🔧",
    reyting: "4.9",
    narx: "100 000 so'mdan",
    tajriba: "7 yillik tajriba",
  },
  {
    id: "Alisher-Asatov",
    ism: "Alisher Asatov",
    kasb: "Elektrik",
    icon: "⚡",
    reyting: "4.8",
    narx: "80 000 so'mdan",
    tajriba: "5 yillik tajriba",
  },
  {
    id: "Fayzbek-Raxmatov",
    ism: "Fayzbek Raxmatov",
    kasb: "Konditsioner ustasi",
    icon: "❄️",
    reyting: "5.0",
    narx: "120 000 so'mdan",
    tajriba: "8 yillik tajriba",
  },
];

const xizmatlar = [
  { nom: "Santexnik", icon: "🔧", rang: "bg-blue-100" },
  { nom: "Elektrik", icon: "⚡", rang: "bg-yellow-100" },
  { nom: "Konditsioner ustasi", icon: "❄️", rang: "bg-cyan-100" },
  { nom: "Quruvchi", icon: "🧱", rang: "bg-orange-100" },
  { nom: "Bo‘yoqchi", icon: "🎨", rang: "bg-pink-100" },
  { nom: "Mebel ustasi", icon: "🪑", rang: "bg-purple-100" },
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-blue-800 px-6 py-24 text-white md:py-32">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                ✨ Ishonchli ustalar platformasi
              </span>

              <h1 className="mt-7 text-4xl font-black leading-tight md:text-6xl">
                Uyingiz uchun
                <span className="block text-blue-400">eng yaxshi ustalar</span>
                shu yerda!
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Kerakli ustani oson toping, xizmatlarini solishtiring va
                bevosita bog‘laning. Barchasi bitta joyda.
              </p>

              <form action="/ustalar" method="GET" className="mt-9 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row">
                <input
                  type="search"
                  name="q"
                  placeholder="Qanday usta kerak?"
                  className="min-w-0 flex-1 rounded-xl px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                  Usta qidirish
                </button>
              </form>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
                <span>✓ Qulay qidiruv</span>
                <span>✓ Turli xizmatlar</span>
                <span>✓ Bevosita aloqa</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-4xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-200">Usta Top</p>
                    <h2 className="mt-1 text-2xl font-bold">Xizmat tanlang</h2>
                  </div>
                  <span className="text-4xl">🛠️</span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  {xizmatlar.slice(0, 4).map((xizmat) => (
                    <a
                      key={xizmat.nom}
                      href={`/ustalar?kasb=${encodeURIComponent(xizmat.nom)}`}
                      className="rounded-2xl bg-white p-5 text-slate-900 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <span className="text-3xl">{xizmat.icon}</span>
                      <p className="mt-3 font-bold">{xizmat.nom}</p>
                      <p className="mt-2 text-sm text-blue-600">Tanlash →</p>
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 text-slate-900 shadow-xl">
                <p className="text-sm text-slate-500">Kerakli xizmat</p>
                <p className="font-bold">Bir necha bosishda!</p>
              </div>
            </div>
          </div>
        </section>

        {/* XIZMATLAR */}
        <section id="xizmatlar" className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-bold text-blue-600">XIZMATLAR</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Sizga qanday usta kerak?
                </h2>
                <p className="mt-3 text-slate-600">
                  Kerakli yo‘nalishni tanlab, qidirishni boshlang.
                </p>
              </div>
              <a href="/xizmatlar" className="font-bold text-blue-600 hover:text-blue-800">
                Barcha xizmatlar →
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {xizmatlar.map((xizmat) => (
                <a
                  key={xizmat.nom}
                  href={`/ustalar?kasb=${encodeURIComponent(xizmat.nom)}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${xizmat.rang}`}>
                    {xizmat.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{xizmat.nom}</h3>
                  <p className="mt-3 text-slate-500">
                    Ushbu xizmat bo‘yicha ustalarni toping.
                  </p>
                  <p className="mt-5 font-bold text-blue-600">
                    Ustalarni ko‘rish →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* MASHHUR USTALAR */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-bold text-blue-600">MUTAXASSISLAR</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Mashhur ustalar
                </h2>
                <p className="mt-3 text-slate-600">
                  Ustalar profili bilan tanishing.
                </p>
              </div>
              <a href="/ustalar" className="font-bold text-blue-600 hover:text-blue-800">
                Barcha ustalar →
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ustalar.map((usta) => (
                <article
                  key={usta.id}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                      {usta.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{usta.ism}</h3>
                      <p className="mt-1 text-slate-500">{usta.kasb}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-y border-slate-100 py-4">
                    <span className="font-semibold text-amber-500">
                      ★ {usta.reyting}
                    </span>
                    <span className="text-sm text-slate-500">{usta.tajriba}</span>
                  </div>

                  <p className="mt-5 text-lg font-extrabold">{usta.narx}</p>

                  <a
                    href={`/ustalar/${usta.id}`}
                    className="mt-5 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white transition hover:bg-blue-700"
                  >
                    Profilni ko‘rish →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BIZ HAQIMIZDA */}
        <section id="haqida" className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="font-bold text-blue-400">BIZ HAQIMIZDA</p>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                Usta topish endi yanada oson!
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                Usta Top mijozlarga kerakli xizmatlarni topish va ustalar
                bilan bog‘lanish imkonini beruvchi platforma. Bizning
                maqsadimiz — xizmat qidirishni sodda va qulay qilish.
              </p>
              <a
                href="/haqida"
                className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Biz haqimizda →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-4xl">🔍</span>
                <h3 className="mt-5 text-xl font-bold">Oson qidiruv</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Kerakli xizmatni tez topish.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-4xl">🤝</span>
                <h3 className="mt-5 text-xl font-bold">Qulay aloqa</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Usta bilan bevosita bog‘lanish.
                </p>
              </div>
              <div className="col-span-2 rounded-3xl bg-blue-600 p-7">
                <h3 className="text-2xl font-extrabold">
                  Siz ham usta bo‘ling!
                </h3>
                <p className="mt-2 text-blue-100">
                  Xizmatlaringizni mijozlarga taklif qiling.
                </p>
                <a
                  href="/usta-bolish"
                  className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-blue-700 hover:bg-blue-50"
                >
                  Ariza yuborish →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* YAKUNIY CHAQIRUV */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-4xl bg-blue-600 px-7 py-14 text-center text-white md:px-16">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Kerakli ustani hoziroq toping!
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Xizmatni tanlang, ustalar bilan tanishing va o‘zingizga mosini toping.
            </p>
            <a
              href="/xizmatlar"
              className="mt-7 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Xizmatlarni ko‘rish →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
