// app.js - utilidades globales para el proyecto

// Genera un dataURL de QR desde un texto (usa qrcode.min.js cargado en la página)
window.__generateQRCode = async function(text) {
  // QRCode.toDataURL devuelve promise si se usa la versión qrcode (CDN)
  try {
    return await QRCode.toDataURL(text, { errorCorrectionLevel: 'H', width: 300 });
  } catch (err) {
    console.error('Error generando QR:', err);
    throw err;
  }
};
