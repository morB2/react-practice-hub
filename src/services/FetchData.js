import axios from "axios";
const BASE_URL = "https://api.pexels.com/v1";

export const fetchImages = async (
  q,
  setImages,
  setLoading,
  setError,
  page = 1,
  per_page = 40
) => {
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  if (!API_KEY) {
    setError("API key is missing");
    return;
  }

  const storageKey = `pexels_${q}_${page}_${per_page}`;

  const cached = localStorage.getItem(storageKey);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      setImages(parsed);
      return; 
    } catch (e) {
      console.warn("Failed to parse cached data:", e);
    }
  }

  setImages([]);
  setLoading(true);
  setError(null);

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        query: q,
        page: page,
        per_page: per_page,
      },
    });

    const photos = response.data.photos || [];
    setImages(photos);

    localStorage.setItem(storageKey, JSON.stringify(photos));
  } catch (err) {
    console.error("fetchImages error:", err);
    const status = err.response?.status;
    setError(
      status ? `Error ${status} ${err.response.statusText}` : "Network error"
    );
  } finally {
    setLoading(false);
  }
};
