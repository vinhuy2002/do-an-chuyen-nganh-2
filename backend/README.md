## API cho website (Đang phát triển)
### Cài đặt thư viện cần thiết 
- [NodeJS](https://nodejs.org/)
- [WSL - Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install)
- [MySQL](https://dev.mysql.com/downloads/mysql/) - Có thể dùng XAMPP để thay thế
- [Redis - REmote DIctionary Server](https://redis.io/docs/install/install-redis/install-redis-on-windows/)
### Hướng dẫn sử dụng
1. Pull project về máy
1. Chạy lệnh
```
npm install
```
1. Copy thêm 1 file `.env.example` và đổi tên thành `.env`
1. Ở trong file `.env`, chỉnh sửa username, password, PORT (nếu có thay đổi), và database name
```
DATABASE_URL = "mysql://username:password@localhost:3306/mydb"
```
1. Chạy lệnh terminal
```
npx prisma migrate dev --name init
```
1. Và chạy trên API trên localhost
```
npm run dev
```
### Dev: Trần Nguyễn Vĩnh Uy