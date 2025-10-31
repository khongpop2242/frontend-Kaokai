# คู่มือการตั้งค่า Email ฟรี

## 🆓 วิธีฟรีสำหรับการส่ง Email Reset Password

### 🎯 ตัวเลือกฟรีที่ดีที่สุด

#### 1. **Gmail ฟรี** (แนะนำ)
- **ฟรี 100%**
- **ใช้งานง่าย**
- **เชื่อถือได้**
- **รองรับการส่ง email จำนวนมาก**

#### 2. **Outlook ฟรี**
- **ฟรี 100%**
- **รองรับการส่ง email**
- **ใช้งานง่าย**

#### 3. **Yahoo Mail ฟรี**
- **ฟรี 100%**
- **รองรับการส่ง email**
- **ใช้งานง่าย**

## 📧 วิธีที่ 1: Gmail ฟรี (แนะนำ)

### 1. สร้าง Gmail ฟรี
1. ไปที่ [Gmail](https://gmail.com)
2. คลิก **"Create account"**
3. ใส่ข้อมูล:
   - **ชื่อ:** Furniture KaoKai
   - **นามสกุล:** Business
   - **Username:** furniture.kaokai (หรือชื่อที่ต้องการ)
   - **รหัสผ่าน:** รหัสผ่านที่แข็งแรง
4. คลิก **"Next"**

### 2. เปิดใช้งาน 2-Factor Authentication
1. ไปที่ [Google Account Security](https://myaccount.google.com/security)
2. เปิดใช้งาน **2-Step Verification**
3. ใช้โทรศัพท์มือถือยืนยันตัวตน

### 3. สร้าง App Password
1. ไปที่ [Google Account Security](https://myaccount.google.com/security)
2. คลิก **"App passwords"** ภายใต้ "2-Step Verification"
3. เลือก **"Mail"** และ **"Other (Custom name)"**
4. ใส่ชื่อ **"Furniture Business App"**
5. **คัดลอกรหัสผ่าน 16 ตัวอักษร** ที่ได้

### 4. ตั้งค่าใน .env
```env
EMAIL_USER=furniture.kaokai@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 📧 วิธีที่ 2: Outlook ฟรี

### 1. สร้าง Outlook ฟรี
1. ไปที่ [Outlook](https://outlook.com)
2. คลิก **"Create free account"**
3. ใส่ข้อมูล:
   - **Email:** furniture.kaokai@outlook.com
   - **รหัสผ่าน:** รหัสผ่านที่แข็งแรง
4. คลิก **"Next"**

### 2. เปิดใช้งาน Multi-Factor Authentication
1. ไปที่ [Microsoft Account Security](https://account.microsoft.com/security)
2. เปิดใช้งาน **Multi-Factor Authentication**
3. ใช้โทรศัพท์มือถือยืนยันตัวตน

### 3. สร้าง App Password
1. ไปที่ [Microsoft Account Security](https://account.microsoft.com/security)
2. คลิก **"Advanced security options"**
3. คลิก **"Create a new app password"**
4. ใส่ชื่อ **"Furniture Business App"**
5. **คัดลอกรหัสผ่าน**

### 4. ตั้งค่าใน .env
```env
EMAIL_USER=furniture.kaokai@outlook.com
EMAIL_PASS=your-app-password
USE_GMAIL_SERVICE=false
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

## 📧 วิธีที่ 3: Yahoo Mail ฟรี

### 1. สร้าง Yahoo Mail ฟรี
1. ไปที่ [Yahoo Mail](https://mail.yahoo.com)
2. คลิก **"Sign up"**
3. ใส่ข้อมูล:
   - **Email:** furniture.kaokai@yahoo.com
   - **รหัสผ่าน:** รหัสผ่านที่แข็งแรง
4. คลิก **"Continue"**

### 2. เปิดใช้งาน 2-Factor Authentication
1. ไปที่ [Yahoo Account Security](https://login.yahoo.com/account/security)
2. เปิดใช้งาน **2-Step Verification**
3. ใช้โทรศัพท์มือถือยืนยันตัวตน

### 3. สร้าง App Password
1. ไปที่ [Yahoo Account Security](https://login.yahoo.com/account/security)
2. คลิก **"Generate app password"**
3. ใส่ชื่อ **"Furniture Business App"**
4. **คัดลอกรหัสผ่าน**

### 4. ตั้งค่าใน .env
```env
EMAIL_USER=furniture.kaokai@yahoo.com
EMAIL_PASS=your-app-password
USE_GMAIL_SERVICE=false
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

## 🧪 การทดสอบ

### 1. ทดสอบการตั้งค่า
```bash
cd backend
node test-business-email.js
```

### 2. ทดสอบการส่ง email
```bash
cd backend
node verify-email-setup.js
```

## 📊 เปรียบเทียบตัวเลือกฟรี

| ตัวเลือก | ฟรี | ใช้งานง่าย | เชื่อถือได้ | รองรับการส่งจำนวนมาก |
|---------|-----|-----------|-----------|-------------------|
| Gmail ฟรี | ✅ | ✅ | ✅ | ✅ |
| Outlook ฟรี | ✅ | ✅ | ✅ | ✅ |
| Yahoo Mail ฟรี | ✅ | ✅ | ✅ | ✅ |

## 💡 คำแนะนำ

### สำหรับธุรกิจขนาดเล็ก
- **ใช้ Gmail ฟรี** - ใช้งานง่ายที่สุด
- **สร้าง email เฉพาะสำหรับธุรกิจ** เช่น `furniture.kaokai@gmail.com`
- **ใช้ App Password** เพื่อความปลอดภัย

### สำหรับธุรกิจขนาดกลาง
- **ใช้ Gmail ฟรี** - รองรับการส่ง email จำนวนมาก
- **สร้าง email เฉพาะสำหรับธุรกิจ** เช่น `info@furniture-kaokai.com`
- **ใช้ App Password** เพื่อความปลอดภัย

### สำหรับธุรกิจขนาดใหญ่
- **ใช้ Gmail Business** - มีฟีเจอร์เพิ่มเติม
- **ใช้ email domain ของตัวเอง** เช่น `info@furniture-kaokai.com`
- **ใช้ App Password** เพื่อความปลอดภัย

## ⚠️ หมายเหตุสำคัญ

- **ใช้ App Password ไม่ใช่รหัสผ่านปกติ**
- **App Password จะมี 16 ตัวอักษร**
- **ต้องเปิด 2-Factor Authentication ก่อน**
- **ตรวจสอบ Spam folder หากลูกค้าไม่ได้รับ email**
- **ใช้ email ของบริษัทเป็นผู้ส่ง**
- **ลูกค้าจะได้รับ email ที่อีเมลของตัวเอง**

## 🔒 ความปลอดภัย

- **เก็บ App Password เป็นความลับ**
- **ไม่แชร์ App Password กับใคร**
- **เปลี่ยน App Password เป็นระยะ**
- **ใช้ HTTPS สำหรับการส่ง email**
- **ตรวจสอบ logs เป็นประจำ**

## 📞 การแก้ไขปัญหา

### ปัญหา: "Invalid login"
- ตรวจสอบ EMAIL_USER และ EMAIL_PASS
- สำหรับ Gmail: ใช้ App Password ไม่ใช่รหัสผ่านปกติ
- ตรวจสอบว่า 2-Factor Authentication เปิดอยู่

### ปัญหา: "Connection timeout"
- ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต
- ตรวจสอบ Firewall settings
- ตรวจสอบ SMTP settings

### ปัญหา: "Email not received"
- ตรวจสอบ Spam folder
- ตรวจสอบ email address ของลูกค้า
- ตรวจสอบ logs ของ server
