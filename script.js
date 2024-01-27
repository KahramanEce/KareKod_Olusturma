document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-btn");
  const saveButton = document.getElementById("save-btn");
  const qrCodeContainer = document.getElementById("qr-code");
  let qrCodeInstance = null;

  generateButton.addEventListener("click", function () {
    //butona tikladigi zaman qr kod olusacak
    //kullanicinin girdigi metin veya url
    let qrText = document.getElementById("qr-text").value;

    if (qrCodeInstance) {
      qrCodeInstance.clear(); //onceki qr kodu temizle
      qrCodeInstance = null;
      qrCodeContainer.innerHTML = ""; //qr kod konteynirini temizle
    }
    if (qrText) {
      //kullanicinin girdigi metin/url bos degilse qr kod olusturulacak
      qrCodeInstance = new QRCode(qrCodeContainer, {
        text: qrText,
        width: 128,
        height: 128,
      });
      qrCodeContainer.style.opacity = "1";
      qrCodeContainer.style.transform = "scale(1)";
    }
  });

  saveButton.addEventListener("click", function () {
    if (qrCodeInstance) {
      const qrImageData = qrCodeInstance._el
        .querySelector("img")
        .getAttribute("src");
      const link = document.createElement("a");
      link.href = qrImageData;
      link.download = "qr-code.png";
      link.click();
    }
  });
});
