function generateImage() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const textInput = document.getElementById('textInput').value;

    // تنظيف Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // تعيين خلفية بيضاء
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // تعيين خصائص النص
    ctx.fillStyle = '#000000';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // كتابة النص في وسط الصورة
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    ctx.fillText(textInput, x, y);

    // تحويل Canvas إلى صورة
    const image = canvas.toDataURL('image/png');

    // عرض الصورة للمستخدم
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${image}" alt="Generated Image">`;
}
