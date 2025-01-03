function calculate() {
    const kwh = parseFloat(document.getElementById('kwh').value);
    const price = parseFloat(document.getElementById('price').value);
    const result = document.getElementById('result');
  
    if (!isNaN(kwh) && !isNaN(price)) {
      const total = kwh * price;
      result.textContent = `ค่าไฟฟ้ารวม: ฿${total.toFixed(2)}`;
    } else {
      result.textContent = 'กรุณากรอกข้อมูลให้ถูกต้อง!';
    }
  }
  