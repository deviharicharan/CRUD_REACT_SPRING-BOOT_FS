import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
export default function Homepage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getAll");
    setUsers(result.data);
  };
  return (
    <div>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User ID</th>
                <th scope="col">E-mail</th>
                <th scope="col">Mobile</th>
                <th scope="col">Office</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.office}</td>
                    <td>
                      <button type="button" class="btn btn-primary mx-2">
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary  mx-2"
                      >
                        View
                      </button>
                      <button type="button" class="btn btn-danger mx-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
