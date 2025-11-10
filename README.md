# J Store

Aplikasi CRUD sederhana untuk manajemen Users dan Produk menggunakan Node.js, MySQL, dan Docker.

## Arsitektur

- **Backend (Node.js + Express)**
  - Mengakses database MySQL via `mysql2`
  - Endpoint utama: `/users`, `/products`
- **Database (MySQL)**
  - Tersimpan di Docker volume `db_data`
  - Database: `crud_app`
  - User: `appuser`, Password: `apppassword`
- **Docker Compose**
  - Container `crud-web` (Node.js backend)
  - Container `crud-mysql` (MySQL database)
  - Volume `db_data` untuk persistensi data

## Setup & Jalankan

1. **Pastikan Docker & Docker Compose sudah terinstall.**

2. **Clone project & masuk folder:**

    ```bash
    git clone <repo-url>
    cd justin_store
    ```

3. **Pastikan file `.env` ada di folder backend**:

    ```env
    DB_HOST=db
    DB_USER=appuser
    DB_PASSWORD=apppassword
    DB_NAME=crud_app
    DB_PORT=3306
    ```

4. **Jalankan Docker Compose:**

    ```bash
    docker-compose up -d
    ```

5. **Cek log container:**

    ```bash
    docker logs crud-web
    docker logs crud-mysql
    ```

6. **Import database awal (opsional jika ingin restore data):**

    ```bash
    docker cp backend/justin_store.sql crud-mysql:/justin_store.sql
    docker exec -i crud-mysql mysql -u root -prootpassword crud_app < /justin_store.sql
    ```

7. **Akses aplikasi:**  
    - Backend: `http://localhost:3000`

## Catatan

- Data MySQL tersimpan di **Docker volume** `db_data` → tidak hilang saat container restart.  
- Simpan backup `justin_store.sql` untuk restore atau deploy ulang.  
- Semua konfigurasi database ada di file `.env`.
