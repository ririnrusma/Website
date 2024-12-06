const EditProfileModal = ({ closeModal, profile, setProfile }) => {
    const [fullName, setFullName] = useState(profile.fullName);
    const [username, setUsername] = useState(profile.username);
    const [email, setEmail] = useState(profile.email);
  
    const handleSave = (e) => {
      e.preventDefault();
  
      fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          alert("Profil berhasil diperbarui!");
          closeModal();
        })
        .catch((err) => console.error(err));
    };
  
    return (
      <div className="modal">
        <h2>Edit Profil</h2>
        <form onSubmit={handleSave}>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Simpan</button>
        </form>
        <button onClick={closeModal}>Tutup</button>
      </div>
    );
  };
  
  export default EditProfileModal;
  