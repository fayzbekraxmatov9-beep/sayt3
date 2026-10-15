
const xizmatlar = [
  {
    nom: "Santexnik",
    icon: "🔧",
    tavsif: "Kran, quvur va suv tizimlarini ta’mirlash.",
  },
  {
    nom: "Elektrik",
    icon: "⚡",
    tavsif: "Elektr simlari, rozetka va yoritish ishlari.",
  },
  {
    nom: "Konditsioner ustasi",
    icon: "❄️",
    tavsif: "Konditsioner o‘rnatish va ta’mirlash.",
  },
  {
    nom: "Quruvchi",
    icon: "🧱",
    tavsif: "Uy qurish va ta’mirlash xizmatlari.",
  },
  {
    nom: "Bo‘yoqchi",
    icon: "🎨",
    tavsif: "Devor bo‘yash va pardozlash ishlari.",
  },
  {
    nom: "Mebel ustasi",
    icon: "🪑",
    tavsif: "Mebel yig‘ish va ta’mirlash.",
  },
];

export default function XizmatlarPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <a
          href="/"
          className="mb-8 inline-flex rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
        >
          ← Bosh sahifa
        </a>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Bizning xizmatlar
          </h1>
          <p className="mt-4 text-slate-600">
            Kerakli xizmatni tanlang va o‘zingizga mos ustani toping.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {xizmatlar.map((xizmat) => (
            <a
              key={xizmat.nom}
              href={`/ustalar?kasb=${encodeURIComponent(xizmat.nom)}`}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition group-hover:scale-110">
                {xizmat.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                {xizmat.nom}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {xizmat.tavsif}
              </p>

              <p className="mt-6 font-semibold text-blue-600">
                Ustalarni ko‘rish →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
