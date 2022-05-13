# Challenge 06: Car Management API

M. Putra Perdana - FSW KM 10

## Getting Started

Sebelum memulai untuk menjalankan projek ini ada  beberapa hal yang harus disiapkan.

Pertama, rename file `.env-example` menjadi `.env` kemudian sesuaikan isi filenya dengan configurasi yang diperlukan.

```
PORT=3000                           // Dapat diubah sesuai port yang ingin digunakan
DB_USERNAME=myUsername              // Sesuaikan dengan username database masing-masing
DB_PASSWORD=myPassword              // Sesuaikan dengan password database masing-masing
DB_NAME=my_db                       // Masukkan nama database yang akan digunakan
DB_HOST=127.0.0.1                   
DB_DIALECT=postgres                  
ACCESS_TOKEN_SECRET=yourSecretKey   // Secret key digunakan dalam mengenkripsi jtw token
```

Kemudian, buat database yang sesuai dengan apa yang ada dalam file `.env`.
```
yarn db:create
```

Jika database sudah dibuat maka selanjutnya adalah melakukan migrasi seluruh model yang ada di folder [`app/models`](./app/models) ke dalam database.
```
yarn db:migrate
```

Selanjutya masukkan beberapa data yang diperlukan seperti yang ada di folder [`db/seeds`](./db/seeds).
```
yarn db:seed
```

Jika sudah, maka akan tersedia data user sebagai super admin yang digunakan untuk login dan mengakses seluruh endpoint.
```
email: superadmin@crm.com
pass: 123456
```

Langkah terakhir yaitu menjalankan server, beberapa script yang dapat digunakan dalam project ini dapat dilihat di file [`package.json`](./package.json#L6-L14).
```
yarn dev
```

Untuk melihat seluruh endpoint yang tersedia dapat mengunjungi API Documentation di alamat berikut `/api-docs/v1/` pada localhost masing-masing atau melalui file [`./config/route.js`](./config/routes.js).

## Database Management

Di dalam repository ini sudah terdapat beberapa script yang dapat digunakan untuk memanage database, yaitu:

- `yarn db:create` digunakan untuk membuat database
- `yarn db:drop` digunakan untuk menghapus database
- `yarn db:migrate` digunakan untuk menjalankan database migration
- `yarn db:seed` digunakan untuk melakukan seeding
- `yarn db:rollback` digunakan untuk membatalkan migrasi terakhir
