# 🗄️ คู่มือการตั้งค่าฐานข้อมูล MySQL

## 📋 ข้อกำหนดเบื้องต้น

1. **MySQL Server** - ติดตั้ง MySQL Server บนเครื่องของคุณ
2. **Node.js** - เวอร์ชัน 14.0.0 ขึ้นไป
3. **npm** - สำหรับติดตั้ง dependencies

## 🚀 ขั้นตอนการติดตั้ง

### 1. ติดตั้ง MySQL Server

#### Windows:
1. ดาวน์โหลด MySQL Installer จาก [mysql.com](https://dev.mysql.com/downloads/installer/)
2. รัน installer และเลือก "Developer Default"
3. ตั้งค่า root password (จดจำไว้)
4. ติดตั้งให้เสร็จ

#### macOS:
```bash
brew install mysql
brew services start mysql
```

#### Linux (Ubuntu):
```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

### 2. สร้างไฟล์ .env

สร้างไฟล์ `.env` ในโฟลเดอร์ `backend` และใส่ข้อมูลดังนี้:

```env
# Database Configuration
DATABASE_URL="mysql://root:your_password@localhost:3306/furniture_office"

# หรือใช้ตัวแปรแยก
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=furniture_office

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (สำหรับ authentication ในอนาคต)
JWT_SECRET="your-super-secret-jwt-key-here"

# API Configuration
API_BASE_URL="http://localhost:5000/api"
```

**หมายเหตุ:** แทนที่ `your_password` ด้วยรหัสผ่าน MySQL ของคุณ

### 3. ติดตั้ง Dependencies

```bash
cd backend
npm install
```

### 4. สร้างฐานข้อมูลและตาราง

```bash
# สร้างฐานข้อมูลและตารางทั้งหมด
npm run db:setup
```

### 5. เพิ่มข้อมูลตัวอย่าง

```bash
# เพิ่มข้อมูลสินค้าอย่างเดียว
npm run db:seed-products

# หรือเพิ่มข้อมูลทั้งหมด (สินค้า, ผู้ใช้, โปรโมชั่น, ฯลฯ)
npm run db:seed-all

# หรือรีเซ็ตฐานข้อมูลทั้งหมดและเพิ่มข้อมูลใหม่
npm run db:reset
```

## 📊 โครงสร้างฐานข้อมูล

### ตารางหลัก:

1. **users** - ข้อมูลผู้ใช้
2. **products** - ข้อมูลสินค้า
3. **cart_items** - สินค้าในตะกร้า
4. **orders** - คำสั่งซื้อ
5. **order_items** - รายการในคำสั่งซื้อ
6. **promotions** - โปรโมชั่น
7. **contacts** - ข้อความติดต่อ

### ความสัมพันธ์:
- `cart_items.productId` → `products.id`
- `orders.userId` → `users.id`
- `order_items.orderId` → `orders.id`
- `order_items.productId` → `products.id`

## 🔧 คำสั่งที่มีประโยชน์

```bash
# ดูข้อมูลในฐานข้อมูล
mysql -u root -p furniture_office

# รีเซ็ตฐานข้อมูลทั้งหมด
npm run db:reset

# เพิ่มข้อมูลสินค้าใหม่
npm run db:seed-products

# เปิด Prisma Studio (ถ้าใช้ Prisma)
npm run db:studio
```

## 🛠️ การแก้ไขปัญหา

### ปัญหาที่พบบ่อย:

1. **เชื่อมต่อฐานข้อมูลไม่ได้**
   - ตรวจสอบว่า MySQL Server กำลังทำงาน
   - ตรวจสอบ username และ password ใน .env
   - ตรวจสอบ port (default: 3306)

2. **ฐานข้อมูลไม่มี**
   - รัน `npm run db:setup` เพื่อสร้างฐานข้อมูล

3. **ตารางไม่มี**
   - รัน `npm run db:setup` เพื่อสร้างตารางทั้งหมด

4. **ข้อมูลไม่แสดง**
   - รัน `npm run db:seed-all` เพื่อเพิ่มข้อมูลตัวอย่าง

## 📝 ตัวอย่างการใช้งาน

### เชื่อมต่อฐานข้อมูลด้วย MySQL CLI:
```bash
mysql -u root -p
USE furniture_office;
SHOW TABLES;
SELECT * FROM products;
```

### ดูข้อมูลสินค้า:
```sql
SELECT id, name, price, category FROM products;
```

### ดูข้อมูลตะกร้าสินค้า:
```sql
SELECT p.name, p.price, ci.quantity 
FROM cart_items ci 
JOIN products p ON ci.productId = p.id;
```

## 🔐 ความปลอดภัย

1. **อย่าลืมเปลี่ยนรหัสผ่าน default**
2. **ใช้ environment variables** สำหรับข้อมูลที่สำคัญ
3. **อย่า commit ไฟล์ .env** ขึ้น Git
4. **ใช้ prepared statements** เพื่อป้องกัน SQL injection

## 📞 การสนับสนุน

หากมีปัญหาหรือคำถาม สามารถ:
1. ตรวจสอบ error logs ใน console
2. ตรวจสอบการเชื่อมต่อฐานข้อมูล
3. ตรวจสอบไฟล์ .env
4. รันคำสั่ง `npm run db:reset` เพื่อรีเซ็ตทั้งหมด 