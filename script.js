document.addEventListener('DOMContentLoaded', function () {
    const canvas = new fabric.Canvas('canvas');

    // تحميل الصورة
    fabric.Image.fromURL('IMG_20250208_201307.png', function(img) {
        img.scaleToWidth(500); // تغيير حجم الصورة لتناسب Canvas
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    // إضافة حقول النص في المواضع المحددة
    const text1 = new fabric.Textbox('', {
        left: 50, // تعديل الموضع حسب الخانة
        top: 100, // تعديل الموضع حسب الخانة
        width: 200,
        fontSize: 16,
        fontFamily: 'Arial',
        textAlign: 'right'
    });

    const text2 = new fabric.Textbox('', {
        left: 50, // تعديل الموضع حسب الخانة
        top: 150, // تعديل الموضع حسب الخانة
        width: 200,
        fontSize: 16,
        fontFamily: 'Arial',
        textAlign: 'right'
    });

    canvas.add(text1, text2);

    window.updateText = function() {
        const input1 = document.getElementById('text1').value;
        const input2 = document.getElementById('text2').value;

        text1.set('text', input1);
        text2.set('text', input2);

        canvas.renderAll();
    };
});
