# 📧 การตั้งค่าระบบส่งอีเมล Contact

## 🔧 การตั้งค่า Environment Variables

### 1. สร้างไฟล์ `.env` ในโฟลเดอร์ `backend/`

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Database
DATABASE_URL="mysql://root:password@localhost:3306/furniture_db"

# JWT Secret
JWT_SECRET=your-jwt-secret-key

# Server Port
PORT=5000
```

### 2. ตั้งค่า Gmail App Password

#### ขั้นตอนที่ 1: เปิด 2-Factor Authentication
1. เข้าไปที่ [Google Account Security](https://myaccount.google.com/security)
2. ไปที่ "2-Step Verification"
3. เปิดใช้งาน 2-Factor Authentication

#### ขั้นตอนที่ 2: สร้าง App Password
1. ไปที่ "App passwords" ใน Google Account
2. เลือก "Mail" และ "Other (Custom name)"
3. ตั้งชื่อ: "Furniture App"
4. คัดลอก App Password ที่ได้ (16 หลัก)

#### ขั้นตอนที่ 3: ตั้งค่าใน .env
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

## 🧪 ทดสอบการส่งอีเมล

### วิธีที่ 1: ใช้ Test Script
```bash
cd backend
node test-contact-email.js
```

### วิธีที่ 2: ทดสอบผ่านหน้าเว็บ
1. เปิดหน้า Contact
2. กรอกข้อมูลและส่งข้อความ
3. ตรวจสอบ console log ใน backend

## 🔍 การแก้ไขปัญหา

### ปัญหา: "Invalid login"
- ✅ ตรวจสอบ EMAIL_USER และ EMAIL_PASS
- ✅ ใช้ App Password แทนรหัสผ่านปกติ
- ✅ เปิด 2-Factor Authentication

### ปัญหา: "Connection timeout"
- ✅ ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
- ✅ ตรวจสอบ firewall settings

### ปัญหา: "Authentication failed"
- ✅ ตรวจสอบ App Password
- ✅ ตรวจสอบ Gmail settings

## 📋 ตัวอย่างการตั้งค่า

```env
# ตัวอย่างการตั้งค่า
EMAIL_USER=kaokaioffice@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

## 🎯 ผลลัพธ์ที่คาดหวัง

เมื่อตั้งค่าถูกต้อง:
- ✅ อีเมลจะส่งไปยัง `info@kaokaioffice.com`
- ✅ เนื้อหาอีเมลจะสวยงามพร้อมข้อมูลลูกค้า
- ✅ Console จะแสดง "✅ อีเมลส่งสำเร็จ"

## 🚨 หมายเหตุสำคัญ

1. **App Password** ต้องเป็น 16 หลัก (ไม่มีช่องว่าง)
2. **2-Factor Authentication** ต้องเปิดใช้งาน
3. **Gmail** ต้องอนุญาตการเข้าถึงจากแอปที่ไม่ปลอดภัย (ถ้าจำเป็น)
