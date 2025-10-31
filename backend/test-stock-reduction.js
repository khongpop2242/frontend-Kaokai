import axios from 'axios';

// ทดสอบการลด stock เมื่อสร้างคำสั่งซื้อ
async function testStockReduction() {
  try {
    console.log('🔄 กำลังทดสอบการลด stock...');
    
    // 1. ดู stock ก่อนสั่งซื้อ
    console.log('\n📦 ดู stock ก่อนสั่งซื้อ:');
    const productsResponse = await axios.get('http://localhost:5050/api/products');
    const products = productsResponse.data;
    
    products.slice(0, 3).forEach(product => {
      console.log(`- ${product.name}: ${product.stock} ชิ้น`);
    });
    
    // 2. สร้างคำสั่งซื้อทดสอบ
    console.log('\n🛒 สร้างคำสั่งซื้อทดสอบ...');
    const testOrder = {
      items: [
        {
          id: 1,
          name: products[0].name,
          price: products[0].price,
          quantity: 1
        }
      ],
      shippingAddress: 'ที่อยู่ทดสอบ'
    };
    
    // ใช้ token ของ user ที่ล็อกอินอยู่
    const token = 'your-jwt-token-here'; // ใส่ token จริง
    
    const orderResponse = await axios.post('http://localhost:5050/api/orders', testOrder, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    console.log('✅ สร้างคำสั่งซื้อสำเร็จ:', orderResponse.data.id);
    
    // 3. ดู stock หลังสั่งซื้อ
    console.log('\n📦 ดู stock หลังสั่งซื้อ:');
    const productsAfterResponse = await axios.get('http://localhost:5050/api/products');
    const productsAfter = productsAfterResponse.data;
    
    productsAfter.slice(0, 3).forEach(product => {
      console.log(`- ${product.name}: ${product.stock} ชิ้น`);
    });
    
  } catch (error) {
    console.error('❌ เกิดข้อผิดพลาด:', error.response?.data?.message || error.message);
  }
}

testStockReduction();
