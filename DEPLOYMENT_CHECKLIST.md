# 📦 Checklist สำหรับการ Deploy โปรเจก Furnituree

## ✅ ก่อน Zip โปรเจก

### 1. ตรวจสอบไฟล์ที่จำเป็น
- [ ] ไฟล์ `package.json` ทั้งหมด (root, backend, frontend)
- [ ] ไฟล์ `env.example` ใน backend
- [ ] ไฟล์ `README.md` และ `QUICK_START.md`
- [ ] ไฟล์ `prisma/schema.prisma`
- [ ] ไฟล์ scripts ทั้งหมดใน backend/scripts/

### 2. ตรวจสอบไฟล์ที่ไม่ควร zip
- [ ] ไม่รวม `node_modules/` (จะติดตั้งใหม่)
- [ ] ไม่รวม `.env` (จะสร้างใหม่)
- [ ] ไม่รวม `dist/` หรือ `build/` (จะ build ใหม่)
- [ ] ไม่รวม `prisma/migrations/` (จะสร้างใหม่)

### 3. สร้างไฟล์คำแนะนำ
- [ ] ไฟล์ `SETUP_INSTRUCTIONS.md` ✅
- [ ] ไฟล์ `DEPLOYMENT_CHECKLIST.md` ✅

## 📋 สิ่งที่ต้องทำบนเครื่องใหม่

### 1. ระบบที่จำเป็น
- [ ] Node.js (เวอร์ชัน 14 ขึ้นไป)
- [ ] npm หรือ yarn
- [ ] MySQL Server
- [ ] Git (ถ้าต้องการ)

### 2. การติดตั้ง
- [ ] Unzip โปรเจก
- [ ] รัน `npm run install-all`
- [ ] สร้างไฟล์ `backend/.env`
- [ ] ตั้งค่าฐานข้อมูล MySQL
- [ ] รัน `npm run db:quick-setup`
- [ ] รัน `npm run dev`

### 3. การทดสอบ
- [ ] ตรวจสอบ Frontend ที่ http://localhost:3000
- [ ] ตรวจสอบ Backend API ที่ http://localhost:5000
- [ ] ทดสอบการเชื่อมต่อฐานข้อมูล
- [ ] ทดสอบการแสดงข้อมูลสินค้า

## 🚨 ปัญหาที่พบบ่อย

### ปัญหา: Dependencies ไม่ติดตั้ง
**สาเหตุ**: `node_modules/` ไม่ถูก zip ไป
**วิธีแก้**: รัน `npm run install-all`

### ปัญหา: ไม่มีไฟล์ .env
**สาเหตุ**: ไฟล์ .env ไม่ถูก zip ไป
**วิธีแก้**: สร้างไฟล์ `backend/.env` ตาม env.example

### ปัญหา: ฐานข้อมูลไม่มี
**สาเหตุ**: ฐานข้อมูล MySQL ไม่มีในเครื่องใหม่
**วิธีแก้**: รัน `npm run db:quick-setup`

### ปัญหา: Port ถูกใช้งาน
**สาเหตุ**: มีโปรแกรมอื่นใช้ port 3000 หรือ 5000
**วิธีแก้**: เปลี่ยน port ในไฟล์ .env หรือปิดโปรแกรมอื่น

## 🔧 คำสั่งสำรอง

```bash
# ถ้า install-all ไม่ทำงาน
npm install
cd frontend && npm install
cd ../backend && npm install

# ถ้า db:quick-setup ไม่ทำงาน
npm run db:setup
npm run db:seed-all

# ทดสอบการเชื่อมต่อ
npm run db:test
```

## 📞 การขอความช่วยเหลือ

เมื่อมีปัญหา:
1. ตรวจสอบ error logs
2. รัน `npm run db:test`
3. ตรวจสอบไฟล์ .env
4. อ่านไฟล์ `SETUP_INSTRUCTIONS.md`
5. ติดต่อทีมพัฒนา 