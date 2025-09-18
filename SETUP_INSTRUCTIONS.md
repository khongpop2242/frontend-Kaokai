# 📋 คู่มือการติดตั้งโปรเจก Furnituree บนเครื่องใหม่

## 🔧 ขั้นตอนการติดตั้ง

### 1. ติดตั้ง Dependencies
```bash
# ติดตั้ง dependencies ทั้งหมด
npm run install-all
```

### 2. ติดตั้ง MySQL Server
- **Windows**: ดาวน์โหลดและติดตั้งจาก [mysql.com](https://dev.mysql.com/downloads/installer/)
- **macOS**: `brew install mysql && brew services start mysql`
- **Linux**: `sudo apt install mysql-server`

### 3. สร้างไฟล์ .env
สร้างไฟล์ `backend/.env` และใส่ข้อมูลต่อไปนี้:

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

**หมายเหตุ**: แก้ไข `your_password` เป็นรหัสผ่าน MySQL ของคุณ

### 4. ตั้งค่าฐานข้อมูล
```bash
cd backend
npm run db:quick-setup
```

### 5. รันโปรเจก
```bash
# กลับไปที่โฟลเดอร์หลัก
cd ..

# รันทั้ง frontend และ backend
npm run dev
```

### 6. เข้าถึงเว็บไซต์
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🚨 ปัญหาที่พบบ่อยและวิธีแก้ไข

### ปัญหา: MySQL ไม่เชื่อมต่อ
**วิธีแก้**: 
1. ตรวจสอบว่า MySQL Server กำลังทำงาน
2. ตรวจสอบรหัสผ่านในไฟล์ .env
3. รัน `npm run db:test` เพื่อทดสอบการเชื่อมต่อ

### ปัญหา: Port ถูกใช้งาน
**วิธีแก้**:
1. เปลี่ยน port ในไฟล์ .env
2. หรือปิดโปรแกรมที่ใช้ port นั้น

### ปัญหา: ข้อมูลไม่แสดง
**วิธีแก้**:
1. รัน `npm run db:seed-all` เพื่อเพิ่มข้อมูลตัวอย่าง

## 📊 คำสั่งที่มีประโยชน์

```bash
# ทดสอบการเชื่อมต่อฐานข้อมูล
npm run db:test

# สร้างฐานข้อมูลและตาราง
npm run db:setup

# เพิ่มข้อมูลตัวอย่าง
npm run db:seed-all

# รีเซ็ตฐานข้อมูลทั้งหมด
npm run db:reset

# ตั้งค่าทั้งหมดแบบง่าย
npm run db:quick-setup
```

## 🔄 การอัปเดตโปรเจก

เมื่อได้รับโปรเจกใหม่:
1. Backup ฐานข้อมูล (ถ้าจำเป็น)
2. แทนที่ไฟล์โปรเจก
3. รัน `npm run install-all`
4. รัน `npm run db:setup` (ถ้าจำเป็น)
5. รัน `npm run dev`

## 📞 การสนับสนุน

หากมีปัญหา:
1. ตรวจสอบ error logs
2. รัน `npm run db:test` เพื่อทดสอบการเชื่อมต่อ
3. ตรวจสอบไฟล์ .env
4. รัน `npm run db:reset` เพื่อรีเซ็ตทั้งหมด 