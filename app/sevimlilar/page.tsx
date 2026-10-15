
"use client";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
              🔨
            </div>

            <span className="text-2xl font-extrabold text-blue-600">
              Usta Top
            </span>
          </a>

          <a
            href="/"
            className="rounded-xl px-5 py-2.5 font-semibold hover:bg-slate-100"
          >
            ← Bosh sahifa
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="font-semibold text-red-500">
            ❤️ SEVIMLILAR
          </p>

          <h1 className="mt-2 text-4xl font-extrabold">
            Sevimli ustalarim
          </h1>

          <p className="mt-3 text-slate-500">
            Siz saqlagan ustalar shu yerda ko‘rinadi.
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-12 text-center shadow-sm">
          <div className="text-7xl">❤️</div>

          <h2 className="mt-5 text-2xl font-bold">
            Hozircha sevimli ustalar yo‘q
          </h2>

          <p className="mx-auto mt-3 max-w-md text-slate-500">
            Sizga yoqqan ustalarni profilidagi ❤️ tugmasi
            orqali sevimlilarga qo‘shishingiz mumkin.
          </p>

          <a
            href="/"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-3 font-bold text-white hover:bg-blue-700"
          >
            Ustalarni ko‘rish
          </a>
        </div>
      </section>
    </main>
  );
}
