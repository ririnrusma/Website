const ChangePasswordModal = ({ closeModal }) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSave = (e) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        alert("Kata sandi baru tidak cocok.");
        return;
      }
  
      fetch("http://localhost:5000/api/profile/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Kata sandi berhasil diubah!");
          closeModal();
        })
        .catch((err) => console.error(err));
    };
  
    return (
      <div className="modal">
        <h2>Ubah Kata Sandi</h2>
        <form onSubmit={handleSave}>
          <input type="password" placeholder="Kata Sandi Lama" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
          <input type="password" placeholder="Kata Sandi Baru" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password" placeholder="Konfirmasi Kata Sandi" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="submit">Ubah</button>
        </form>
        <button onClick={closeModal}>Tutup</button>
      </div>
    );
  };
  
  export default ChangePasswordModal;
  