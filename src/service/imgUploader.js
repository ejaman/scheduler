class ImgUploader {
  async upload(file) {
    // 왜 async를 사용하는지 check!
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "oueiatbk");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dvphd4uly/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImgUploader;
