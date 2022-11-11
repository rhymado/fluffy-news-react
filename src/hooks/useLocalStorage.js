import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // validasi
  const [value, setValue] = useState(() => {
    // nilai awal => ambil nilai awal dari local storage
    const fromLocalStorage = localStorage.getItem(key);
    if (fromLocalStorage !== null) return JSON.parse(fromLocalStorage);
    // nilai awal => jika tidak ditemukan di local storage, maka gunakan initialValue
    if (typeof initialValue === "function") return initialValue();
    return initialValue;
  });

  // config live data
  // const client = useMemo(() => new Client({ config }), [config]);

  // jika value berubah maka update local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;

// useLocalStorage(key, initialValue)
