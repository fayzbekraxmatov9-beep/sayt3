
export type FavoriteMaster = {
  id: string;
  name: string;
  job: string;
  rating: string;
  reviews: number;
  price: string;
  icon: string;
  location: string;
  experience: string;
  phone: string;
};

const STORAGE_KEY = "usta-top-favorites";

export function getFavorites(): FavoriteMaster[] {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    ) as FavoriteMaster[];
  } catch {
    return [];
  }
}

export function toggleFavorite(master: FavoriteMaster): FavoriteMaster[] {
  const favorites = getFavorites();

  const exists = favorites.some((item) => item.id === master.id);

  const updated = exists
    ? favorites.filter((item) => item.id !== master.id)
    : [...favorites, master];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
}

export function isFavorite(id: string): boolean {
  return getFavorites().some((item) => item.id === id);
}