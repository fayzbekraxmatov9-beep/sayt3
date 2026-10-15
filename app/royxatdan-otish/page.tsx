
"use client";

import { useState } from "react";

export default function RoyxatdanOtishPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.length < 6) {
      alert("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Parollar bir xil emas!");
      return;
    }

    const existingUser = localStorage.getItem("usta-top-user");

    if (existingUser) {
      try {
        const user = JSON.parse(existingUser);

        if (user.phone === phone) {
          alert("Bu telefon raqami oldin ro‘yxatdan o‘tgan!");
          return;
        }
      } catch {
        // Eski yoki noto‘g‘ri formatdagi ma’lumotni almashtirish mumkin.
      }
    }

    const user = {
      name,
      phone,
      password,
    };

    localStorage.setItem("usta-top-user", JSON.stringify(user));

    alert("Ro‘yxatdan muvaffaqiyatli o‘tdingiz! ✅");

    window.location.href = "/kirish";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <a href="/" className="text-2xl font-extrabold text-blue-600">
          🔨 Usta Top
        </a>

        <h1 className="mt-8 text-3xl font-extrabold text-slate-900">
          Ro‘yxatdan o‘tish
        </h1>

        <p className="mt-2 text-slate-500">
          Usta Top xizmatlaridan foydalanish uchun hisob yarating.
        </p>

        <form onSubmit={handleRegister} className="mt-7 space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Ismingiz
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ism va familiyangiz"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

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
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Kamida 8 ta belgi"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-slate-700">
              Parolni tasdiqlang
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Parolni qayta kiriting"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          Hisobingiz bormi?{" "}
          <a
            href="/kirish"
            className="font-bold text-blue-600 hover:underline"
          >
            Kirish
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