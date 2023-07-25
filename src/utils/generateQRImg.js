async function generateQRImg(id) {
  try {
    const res = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=https://redirect-9bff.onrender.com/?url=${`${window.location.origin}/qrcode?id=${id}`}&amp;size=300x300`
    )
    const photoBlob = await res.blob()
    return URL.createObjectURL(photoBlob)
  } catch (error) {
    return null
  }
}

export default generateQRImg
