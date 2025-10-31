import 'dotenv/config';
import { createTransport } from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

console.log('🔍 ตรวจสอบการตั้งค่า Email...');
console.log('EMAIL_USER:', EMAIL_USER);
console.log('EMAIL_PASS:', EMAIL_PASS ? '***ตั้งค่าแล้ว***' : '❌ ไม่ได้ตั้งค่า');

// ตรวจสอบว่ายังใช้ค่า placeholder อยู่หรือไม่
if (!EMAIL_USER || !EMAIL_PASS || 
    EMAIL_USER.includes('your-') || 
    EMAIL_PASS.includes('your-') ||
    EMAIL_USER === 'your-actual-email@gmail.com' ||
    EMAIL_PASS === 'your-16-character-app-password-from-google') {
  console.log('\n❌ ปัญหา: การตั้งค่า Email ยังใช้ค่า placeholder');
  console.log('💡 วิธีแก้ไข:');
  console.log('   1. เปิดไฟล์ backend/.env');
  console.log('   2. เปลี่ยน EMAIL_USER เป็นอีเมลจริงของคุณ');
  console.log('   3. เปลี่ยน EMAIL_PASS เป็น App Password จริงจาก Google');
  console.log('   4. App Password ต้องมี 16 ตัวอักษร');
  console.log('   5. ต้องเปิด 2-Factor Authentication ใน Gmail ก่อน');
  process.exit(1);
}

console.log('\n📧 ทดสอบการเชื่อมต่อ Gmail...');

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

async function testEmail() {
  try {
    // ทดสอบการเชื่อมต่อ
    console.log('🔄 กำลังทดสอบการเชื่อมต่อ...');
    await transporter.verify();
    console.log('✅ การเชื่อมต่อ Gmail สำเร็จ!');
    
    // ทดสอบการส่ง email
    console.log('🔄 กำลังส่ง email ทดสอบ...');
    const testEmail = {
      from: `"Furniture KaoKai" <${EMAIL_USER}>`,
      to: EMAIL_USER, // ส่งให้ตัวเอง
      subject: 'ทดสอบการส่ง Email - Furniture KaoKai',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">✅ ทดสอบการส่ง Email สำเร็จ!</h1>
          </div>
          <div style="padding: 20px;">
            <p>สวัสดีครับ!</p>
            <p>นี่คือการทดสอบการส่ง Email จากระบบ Furniture KaoKai</p>
            <p>หากคุณได้รับ email นี้ แสดงว่าระบบทำงานปกติ</p>
            <p>ตอนนี้คุณสามารถใช้ฟังก์ชัน "ลืมรหัสผ่าน" ได้แล้ว</p>
            <p>ขอบคุณครับ,<br>ทีมงาน Furniture KaoKai</p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(testEmail);
    console.log('✅ ส่ง Email ทดสอบสำเร็จ!');
    console.log(`📧 ตรวจสอบ inbox ของ ${EMAIL_USER}`);
    console.log('🎉 ระบบพร้อมใช้งานแล้ว!');
    
  } catch (error) {
    console.log('❌ เกิดข้อผิดพลาด:', error.message);
    
    if (error.message.includes('Invalid login') || error.message.includes('BadCredentials')) {
      console.log('\n💡 วิธีแก้ไข:');
      console.log('   1. ตรวจสอบ EMAIL_USER และ EMAIL_PASS');
      console.log('   2. สำหรับ Gmail: ใช้ App Password ไม่ใช่รหัสผ่านปกติ');
      console.log('   3. ตรวจสอบว่า 2-Factor Authentication เปิดอยู่');
      console.log('   4. App Password ต้องมี 16 ตัวอักษร');
      console.log('   5. ลองสร้าง App Password ใหม่');
    } else if (error.message.includes('Connection timeout')) {
      console.log('\n💡 วิธีแก้ไข:');
      console.log('   1. ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต');
      console.log('   2. ตรวจสอบ Firewall settings');
    }
  }
}

testEmail();
