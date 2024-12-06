const UploadPhotoModal = ({ closeModal }) => {
    const handleUpload = (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("photo", file);
  
      fetch("http://localhost:5000/api/profile/photo", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Foto profil berhasil diperbarui!");
          closeModal();
          window.location.reload(); // Reload halaman untuk memperbarui foto
        })
        .catch((err) => console.error(err));
    };
  
    return (
      <div className="modal">
        <h2>Pilih Foto Profil</h2>
        <input type="file" accept="image/*" onChange={handleUpload} />
        <button onClick={closeModal}>Tutup</button>
      </div>
    );
  };
  
  export default UploadPhotoModal;
  