
"use client";

import { useState } from "react";

export default function UstaBolishPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("Toshkent shahri");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const application = {
      id: crypto.randomUUID(),
      name,
      phone,
      job,
      experience,
      location,
      price,
      about,
      status: "Ko‘rib chiqilmoqda",
      createdAt: new Date().toISOString(),
    };

    try {
      const saved = JSON.parse(
        localStorage.getItem("usta-top-applications") || "[]"
      );

      localStorage.setItem(
        "usta-top-applications",
        JSON.stringify([...saved, application])
      );

      alert("Arizangiz muvaffaqiyatli yuborildi! ✅");

      setName("");
      setPhone("");
      setJob("");
      setExperience("");
      setLocation("Toshkent shahri");
      setPrice("");
      setAbout("");
    } catch {
      alert("Arizani saqlashda xatolik yuz berdi.");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-xl md:p-10">
        <a href="/" className="text-2xl font-extrabold text-blue-600">
          🔨 Usta Top
        </a>

        <h1 className="mt-8 text-3xl font-extrabold text-slate-900">
          Usta bo‘ling!
        </h1>

        <p className="mt-3 leading-7 text-slate-500">
          Ma’lumotlaringizni to‘ldiring. Arizangizni ko‘rib chiqish uchun
          saqlaymiz.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-black">
              Ism va familiya
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masalan, Ali Valiyev"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Telefon raqami
            </label>
            <input
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 97 298 87 88"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Mutaxassisligingiz
            </label>
            <select
              required
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-blue-600 text-black"
            >
              <option value="">Kasbni tanlang</option>
              <option value="Santexnik">🔧 Santexnik</option>
              <option value="Elektrik">⚡ Elektrik</option>
              <option value="Konditsioner ustasi">❄️ Konditsioner ustasi</option>
              <option value="Quruvchi">🧱 Quruvchi</option>
              <option value="Duradgor">🪚 Duradgor</option>
              <option value="Bo‘yoqchi">🎨 Bo‘yoqchi</option>
              <option value="Boshqa">Boshqa</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Ish tajribangiz
            </label>
            <select
              required
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-blue-600 text-black"
            >
              <option value="">Tajribani tanlang</option>
              <option value="Tajribasiz">Hali tajribam yo‘q</option>
              <option value="1 yil">1 yil</option>
              <option value="2-3 yil">2–3 yil</option>
              <option value="4-5 yil">4–5 yil</option>
              <option value="6+ yil">6+ yil</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Ishlaydigan hududingiz
            </label>
            <input
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Masalan, Toshkent shahri"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              Xizmat narxi
            </label>
            <input
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Masalan, 100 000 so‘mdan"
              className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-black">
              O‘zingiz haqingizda
            </label>
            <textarea
              required
              minLength={10}
              rows={4}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Qanday xizmatlar ko‘rsatasiz?"
              className="w-full resize-y rounded-xl border px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Ariza yuborish →
          </button>
        </form>

        <a
          href="/"
          className="mt-6 block text-center text-slate-500 hover:text-blue-600"
        >
          ← Bosh sahifaga qaytish
        </a>
      </div>
    </main>
  );
}