import { defineEventHandler } from "h3";
import axios from "axios";
import * as cheerio from "cheerio";

export default defineEventHandler(async () => {
  try {
    const url = "https://dprd-tasikmalayakota.go.id/";
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    const $ = cheerio.load(data);

    const berita = [];

    // Gunakan class yang benar berdasarkan gambar: "td-module-loop"
    $(".tdb_module_loop_2").each((i, el) => {
      const title =
        $(el).find(".td-module-title a").text().trim() ||
        "Judul tidak tersedia";
      const link = $(el).find(".td-module-title a").attr("href") || "#";
      const category =
        $(el).find(".td-post-category").text().trim() || "Uncategorized";
      let image = $(el).find(".td-module-thumb span").attr("data-img-url") || "";

      // Jika URL gambar relatif, ubah ke absolut
      if (image && !image.startsWith("http")) {
        image = `https://dprd-tasikmalayakota.go.id${image.replace(
          /^\/+/,
          ""
        )}`;
      }

      const date =
        $(el).find(".td-post-date").text().trim() || "Tidak ada tanggal";
      const excerpt =
        $(el).find(".td-editor-date").text().trim() ||
        "Deskripsi tidak tersedia";

      berita.push({ title, link, category, image, date, excerpt });
    });

    console.log("Berita yang diambil:", berita); // Debugging

    return { berita };
  } catch (error) {
    console.error("Error scraping berita:", error);
    return { error: "Gagal mengambil berita" };
  }
});
