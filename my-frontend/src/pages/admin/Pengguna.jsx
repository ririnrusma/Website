import React, { useState } from 'react';

const Pengguna = () => {
    const [users, setUsers] = useState([
        { id: 55, name: 'veloz', email: 'ryu@gmail.com', createdAt: '2024-12-06 05:21:11' },
        { id: 57, name: 'ririn', email: 'ririnrusmayanti35@gmail.com', createdAt: '2024-12-06 05:44:50' },
        { id: 63, name: 'alma', email: 'aalmaa@gmail.com', createdAt: '2024-12-07 04:05:06' },
        { id: 65, name: 'rusma', email: 'rus@gmail.com', createdAt: '2024-12-08 22:58:23' },
        { id: 73, name: 'ririrus', email: 'rusma@gmail.com', createdAt: '2024-12-09 10:06:01' },
        { id: 75, name: 'ruswma', email: 'rusmaaas@gmail.com', createdAt: '2024-12-09 13:27:16' },
        { id: 76, name: 'admin', email: 'admin@example.com', createdAt: '2024-12-09 13:27:16' },
        { id: 77, name: 'Key Alderen', email: 'key@example.com', createdAt: '2024-12-11 09:22:12' },
    ]);

    const handleDelete = (userId) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        alert(`User  with ID ${userId} deleted successfully`);
    };

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
                                <td style={styles.td}>{user.createdAt}</td>
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