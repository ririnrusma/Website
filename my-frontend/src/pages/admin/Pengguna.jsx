import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pengguna = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };    

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            });
            alert('User deleted successfully');
            fetchUsers(); 
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Pengguna</h1>
            <div style={styles.tableWrapper}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Tanggal dibuat</th>
                            <th style={styles.th}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td style={styles.td}>{user.id}</td>
                                <td style={styles.td}>{user.name}</td>
                                <td style={styles.td}>{user.email}</td>
                                <td style={styles.td}>
                                    {new Date(user.createdAt).toLocaleString()}
                                </td>
                                <td style={styles.td}>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        style={styles.verifyButton}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginLeft: "200px",
        padding: "20px",
        backgroundColor: "#fcefe3",
        minHeight: "100vh",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    tableWrapper: {
        borderTop: "5px solid #a855f7",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#fff",
    },
    th: {
        backgroundColor: "#f9f9f9",
        fontWeight: "bold",
        textAlign: "left",
        padding: "10px",
        borderBottom: "1px solid #ddd",
    },
    td: {
        padding: "10px",
        textAlign: "left",
        borderBottom: "1px solid #ddd",
    },
    verifyButton: {
        backgroundColor: "#ff3b30",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Pengguna;
