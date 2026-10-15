
export default function HaqidaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-linear-to-r from-blue-700 to-indigo-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-200">
            Biz haqimizda
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Usta Top — ishonchli ustalar bir joyda!
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Biz mijozlarga kerakli ustalarni oson topishga, ustalarga esa
            o‘z xizmatlarini ko‘proq odamlarga taklif qilishga yordam beramiz.
          </p>

          <a
            href="/xizmatlar"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Xizmatlarni ko‘rish →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-5xl">🎯</div>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Bizning maqsadimiz
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Har bir inson o‘ziga kerakli ustani tez, qulay va oson topishi
              uchun yordam berish. Mijozlar va ustalarni bitta platformada
              birlashtirish.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="text-5xl">🤝</div>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Bizning vazifamiz
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Xizmat qidirishni soddalashtirish, ustalar bilan bog‘lanishni
              qulay qilish va mijozlarga tanlov imkoniyatini yaratish.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center md:p-12">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Usta izlayapsizmi?
          </h2>
          <p className="mt-4 text-slate-600">
            Usta Top orqali kerakli xizmatni tanlang.
          </p>
          <a
            href="/xizmatlar"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Usta topish
          </a>
        </div>
      </section>
    </main>
  );
}
