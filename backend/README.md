## API cho website (Đang phát triển)
### Cài đặt thư viện cần thiết 
- [NodeJS](https://nodejs.org/)
- [WSL - Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install)
- [MySQL](https://dev.mysql.com/downloads/mysql/) - Có thể dùng XAMPP để thay thế
- [Redis - REmote DIctionary Server](https://redis.io/docs/install/install-redis/install-redis-on-windows/) - Cần tải WSL trước khi cài đặt

### Hướng dẫn sử dụng
1. Pull project về máy
2. Chạy lệnh
```
npm install
```
3. Copy thêm 1 file `.env.example` và đổi tên thành `.env`
4. Ở trong file `.env`, chỉnh sửa các thông tin
```
DATABASE_URL = "mysql://username:password@localhost:3306/mydb"
ACCESS_TOKEN_SECRET =
REFRESH_TOKEN_SECRET = 
```
Lưu ý đối với `ACCESS_TOKEN_SECRET` và `REFRESH_TOKEN_SECRET`, phải tạo một dãy chuỗi trong terminal bằng lệnh
```
node
require('crypto').randomBytes(64).toString('hex')
```
5. Chạy lệnh terminal
```
npx prisma migrate dev --name init
npx prisma generate
```
6. Và chạy API trên localhost
```
npm run dev
```
### Dev: Trần Nguyễn Vĩnh Uy