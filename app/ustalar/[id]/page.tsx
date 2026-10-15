
"use client";

import { use, useEffect, useState } from "react";

import {
  isFavorite as isFavoriteFromStorage,
  toggleFavorite as updateFavorite,
} from "@/app/lib/favorites";

const masters = {
  "Umar-Keldiyorov": {
    name: "Umar Keldiyorov",
    job: "Santexnik",
    rating: "4.9",
    reviews: 48,
    price: "100 000 so'mdan",
    icon: "🔧",
    location: "Toshkent shahri",
    experience: "7 yil",
    phone: "+998 97 298 87 88",
  },

  "Alisher-Asatov": {
    name: "Alisher Asatov",
    job: "Elektrik",
    rating: "4.8",
    reviews: 36,
    price: "80 000 so'mdan",
    icon: "⚡",
    location: "Toshkent shahri",
    experience: "5 yil",
    phone: "+998 97 298 87 88",
  },

  "Fayzbek-Raxmatov": {
    name: "Fayzbek Raxmatov",
    job: "Konditsioner ustasi",
    rating: "5.0",
    reviews: 52,
    price: "120 000 so'mdan",
    icon: "❄️",
    location: "Toshkent shahri",
    experience: "8 yil",
    phone: "+998 97 298 87 88",
  },
};

export default function MasterProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [isFavorite, setIsFavorite] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [problem, setProblem] = useState("");

  const master = masters[id as keyof typeof masters];

  useEffect(() => {
    setIsFavorite(isFavoriteFromStorage(id));
  }, [id]);

  function toggleFavorite() {
    if (!master) return;

    const updated = updateFavorite({
      id,
      ...master,
    });

    setIsFavorite(updated.some((item) => item.id === id));
  }

  function submitOrder() {
    if (!name.trim() || !phone.trim()) {
      alert("Ismingiz va telefon raqamingizni kiriting!");
      return;
    }

    const order = {
      masterId: id,
      masterName: master?.name,
      name,
      phone,
      address,
      problem,
      createdAt: new Date().toISOString(),
    };

    const oldOrders = JSON.parse(
      localStorage.getItem("usta-top-orders") || "[]"
    );

    localStorage.setItem(
      "usta-top-orders",
      JSON.stringify([...oldOrders, order])
    );

    alert("Buyurtmangiz saqlandi! ✅");

    setShowOrder(false);
    setName("");
    setPhone("");
    setAddress("");
    setProblem("");
  }

  if (!master) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="text-7xl">😕</div>
          <h1 className="mt-5 text-3xl font-bold">
            Usta topilmadi
          </h1>
          <a
            href="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Bosh sahifaga qaytish
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* NAVBAR */}
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
            href="/sevimlilar"
            className="font-semibold hover:text-red-500"
          >
            ❤️ Sevimlilar
          </a>
        </div>
      </nav>

      {/* PROFILE */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="h-48 bg-linear-to-r from-blue-600 to-indigo-700" />

          <div className="px-6 pb-8 md:px-10">
            <div className="-mt-20 flex flex-col items-center md:flex-row md:items-end md:justify-between">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-8 border-white bg-blue-100 text-7xl shadow-lg">
                {master.icon}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 md:mt-0">
                <button
                  onClick={toggleFavorite}
                  className={`rounded-xl border px-6 py-3 font-semibold transition ${
                    isFavorite
                      ? "border-red-200 bg-red-50 text-red-500"
                      : "hover:bg-slate-50"
                  }`}
                >
                  {isFavorite ? "❤️ Sevimlida" : "♡ Sevimli"}
                </button>

                <a
                  href={`tel:${master.phone}`}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  📞 Bog‘lanish
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-3xl font-extrabold">
                {master.name}
              </h1>

              <p className="mt-2 text-lg text-slate-500">
                {master.job}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-xl bg-yellow-50 px-4 py-2 font-bold text-yellow-600">
                  ⭐ {master.rating} ({master.reviews} ta sharh)
                </span>

                <span className="rounded-xl bg-slate-100 px-4 py-2">
                  📍 {master.location}
                </span>

                <span className="rounded-xl bg-slate-100 px-4 py-2">
                  🛠 {master.experience} tajriba
                </span>
              </div>
            </div>

            {/* PRICE AND PHONE */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  Xizmat narxi
                </p>
                <p className="mt-2 text-2xl font-extrabold">
                  {master.price}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm text-slate-500">
                  Telefon
                </p>
                <p className="mt-2 text-xl font-bold">
                  {master.phone}
                </p>
              </div>
            </div>

            {/* ABOUT */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold">
                Usta haqida
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Men professional {master.job.toLowerCase()}man.
                Mijozlarimga sifatli va ishonchli xizmat ko‘rsataman.
                Ishimga mas&apos;uliyat bilan yondashaman.
              </p>
            </div>

            {/* ORDER BUTTON */}
            <div className="mt-10 rounded-2xl bg-blue-600 p-7 text-white">
              <h2 className="text-2xl font-bold">
                Ustaga buyurtma bermoqchimisiz?
              </h2>
              <p className="mt-2 text-blue-100">
                Ma&apos;lumotlaringizni kiriting va buyurtma yuboring.
              </p>
              <button
                onClick={() => setShowOrder(true)}
                className="mt-5 rounded-xl bg-white px-7 py-3 font-bold text-blue-600 hover:bg-blue-50"
              >
                📋 Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER MODAL */}
      {showOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-8">
          <div className="my-auto w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">
                📋 Buyurtma berish
              </h2>
              <button
                onClick={() => setShowOrder(false)}
                className="text-2xl text-slate-400 hover:text-slate-700"
                aria-label="Oynani yopish"
              >
                ✕
              </button>
            </div>

            <p className="mt-2 text-slate-500">
              Usta: {master.name}
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitOrder();
              }}
            >
              <input
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ismingiz"
                className="mt-6 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="tel"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Telefon raqamingiz"
                className="mt-4 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Manzilingiz"
                className="mt-4 w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <textarea
                value={problem}
                onChange={(event) => setProblem(event.target.value)}
                placeholder="Qanday muammo bor?"
                rows={4}
                className="mt-4 w-full resize-none rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="mt-5 w-full rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700"
              >
                Buyurtmani yuborish
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}