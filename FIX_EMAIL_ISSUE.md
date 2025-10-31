# 🔧 แก้ไขปัญหาอีเมลไม่เข้าเมลบริษัท

## ❌ ปัญหาที่พบ: "Invalid login: 535-5.7.8 Username and Password not accepted"

### 🛠️ วิธีแก้ไขทีละขั้นตอน:

#### **ขั้นตอนที่ 1: ตรวจสอบ Gmail Settings**

1. **เปิด 2-Factor Authentication**
   - เข้าไปที่ [Google Account Security](https://myaccount.google.com/security)
   - ไปที่ "2-Step Verification"
   - เปิดใช้งาน 2-Factor Authentication

2. **สร้าง App Password**
   - ไปที่ "App passwords" ใน Google Account
   - เลือก "Mail" และ "Other (Custom name)"
   - ตั้งชื่อ: "Furniture App"
   - **คัดลอก App Password ที่ได้ (16 หลัก)**

#### **ขั้นตอนที่ 2: ตั้งค่าไฟล์ .env**

สร้างไฟล์ `backend/.env`:
```env
EMAIL_USER=furniture.kaokai@gmail.com
EMAIL_PASS=oftb awao hssc itgn
```

**⚠️ หมายเหตุ:** 
- ใช้ App Password (16 หลัก) ไม่ใช่รหัสผ่านปกติ
- ไม่มีช่องว่างใน App Password

#### **ขั้นตอนที่ 3: ทดสอบการส่งอีเมล**

```bash
cd backend
node test-contact-email.js
```

**ผลลัพธ์ที่คาดหวัง:**
```
✅ การเชื่อมต่ออีเมลสำเร็จ
✅ อีเมลส่งสำเร็จ: <message-id>
```

#### **ขั้นตอนที่ 4: ทดสอบผ่านหน้าเว็บ**

1. เปิดหน้า Contact
2. กรอกข้อมูลและส่งข้อความ
3. ตรวจสอบ console log ใน backend

## 🔍 การแก้ไขปัญหาเพิ่มเติม

### ปัญหา: "Connection timeout"
- ✅ ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
- ✅ ตรวจสอบ firewall settings

### ปัญหา: "Authentication failed"
- ✅ ตรวจสอบ App Password
- ✅ ตรวจสอบ Gmail settings
- ✅ ตรวจสอบ 2-Factor Authentication

### ปัญหา: "Less secure app access"
- ✅ ใช้ App Password แทนการเปิด "Less secure app access"
- ✅ App Password ปลอดภัยกว่า

## 📧 การตั้งค่าที่ถูกต้อง

```env
# ตัวอย่างการตั้งค่าที่ถูกต้อง
EMAIL_USER=furniture.kaokai@gmail.com
EMAIL_PASS=oftbawaohsscitgn
```

**หมายเหตุ:** App Password ไม่มีช่องว่าง

## 🎯 ตรวจสอบผลลัพธ์

เมื่อตั้งค่าถูกต้อง:
- ✅ **Console** → แสดง "✅ อีเมลส่งสำเร็จ"
- ✅ **Inbox** → อีเมลจะเข้าเมลบริษัท
- ✅ **Content** → เนื้อหาอีเมลสวยงามพร้อมข้อมูลลูกค้า

## 🚨 หมายเหตุสำคัญ

1. **App Password** ต้องเป็น 16 หลัก (ไม่มีช่องว่าง)
2. **2-Factor Authentication** ต้องเปิดใช้งาน
3. **Gmail** ต้องอนุญาตการเข้าถึงจากแอปที่ไม่ปลอดภัย (ถ้าจำเป็น)
