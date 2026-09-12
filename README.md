# Karang Taruna DHARMA ADIKARA

Website resmi Karang Taruna Dharma Adikara Desa Gunungsari, Madiun.

## Publish ke GitHub Pages

Repository yang disiapkan:

- Owner: `Dharma-Adikara-Desa-Gunung-Sari`
- Repository: `dharma-adikara`
- Target URL: https://dharma-adikara-desa-gunung-sari.github.io/dharma-adikara/

Setelah Git terpasang dan login GitHub selesai, jalankan PowerShell dari folder ini:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial website Dharma Adikara"
git remote add origin https://github.com/Dharma-Adikara-Desa-Gunung-Sari/dharma-adikara.git
git push -u origin main
```

Aktifkan Pages di GitHub:

1. Buka repository `dharma-adikara`.
2. Pilih `Settings` lalu `Pages`.
3. Pada `Build and deployment`, pilih `GitHub Actions`.
4. Tunggu workflow `Deploy website to GitHub Pages` selesai.

Setelah website online, setiap perubahan berikutnya dapat diterbitkan dengan:

```powershell
git add .
git commit -m "Update website"
git push
```

## Google Search

Website sudah memiliki `robots.txt`, `sitemap.xml`, meta description, dan canonical URL. Setelah Pages aktif, daftarkan URL utama di Google Search Console dan kirim sitemap:

```text
https://dharma-adikara-desa-gunung-sari.github.io/dharma-adikara/sitemap.xml
```

Pengindeksan Google tidak selalu langsung muncul dan dapat membutuhkan waktu beberapa hari.
