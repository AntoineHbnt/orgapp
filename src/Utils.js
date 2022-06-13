export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export const getFileFromDataUrl = (url) => {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], "File name", { type: "image/png" });
      return file
    });
};
