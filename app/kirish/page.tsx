
"use client";

import { useState } from "react";

export default function KirishPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const savedUser = localStorage.getItem("usta-top-user");

    if (!savedUser) {
      alert("Avval ro'yxatdan o'ting!");
      return;
    }

    try {
      const user = JSON.parse(savedUser);

      if (user.phone === phone && user.password === password) {
        localStorage.setItem("usta-top-logged-in", "true");
        alert("Xush kelibsiz! ✅");
        window.location.href = "/";
      } else {
        alert("Telefon raqami yoki parol noto'g'ri!");
      }
    } catch {
      alert("Foydalanuvchi ma'lumotlarini o'qib bo'lmadi.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <a href="/" className="text-2xl font-extrabold text-blue-600">
          🔨 Usta Top
        </a>

        <h1 className="mt-8 text-3xl font-extrabold text-slate-900">
          Hisobingizga kiring
        </h1>

        <p className="mt-2 text-slate-500">
          Davom etish uchun ma'lumotlaringizni kiriting.
        </p>

        <form onSubmit={handleLogin} className="mt-7 space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Telefon raqami
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+998 97 298 87 88"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Parol
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Parolingizni kiriting"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Kirish
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          Hisobingiz yo'qmi?{" "}
          <a
            href="/royxatdan-otish"
            className="font-bold text-blue-600 hover:underline"
          >
            Ro'yxatdan o'tish
          </a>
        </p>

        <a
          href="/"
          className="mt-5 block text-center text-sm text-slate-500 hover:text-blue-600"
        >
          ← Bosh sahifaga qaytish
        </a>
      </div>
    </main>
  );
}