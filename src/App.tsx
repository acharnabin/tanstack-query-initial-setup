import { useState } from "react";
import "./App.css";
import axiosInstance from "./api/axios-instance";
import { useMutation } from "@tanstack/react-query";
import useUser from "./hooks/react-query/useUser";

// https://fakestoreapi.com/products/1

function App() {
  const [retryCount, setRetryCount] = useState(0);

  const { data, error, status, isLoading } = useUser(retryCount);

  const { mutate } = useMutation({
    mutationKey: ["login-mutation"],
    mutationFn: async (data: { username: string; password: string }) => {
      const res = await axiosInstance.post("auth/login", data);
      return res.data;
    },
  });

  const handleRetry = () => {
    setRetryCount(retryCount + 1);
  };

  const handleLogin = (username: string, password: string) => {
    mutate(
      {
        username,
        password,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          alert("Api sucees");
        },
        onError: (err) => {
          console.log(err);
          alert("Api err");
        },
      }
    );
  };

  console.log(data);

  return (
    <>
      {status}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Something went wrong</h1>
          ) : (
            <table className="user-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.email}</td>

                    <td>
                      {user.name.firstname} {user.name.lastname}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleLogin(user.username, user.password)
                        }
                      >
                        Login
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}

      <button onClick={handleRetry}>Retry -{retryCount}</button>
    </>
  );
}

export default App;
