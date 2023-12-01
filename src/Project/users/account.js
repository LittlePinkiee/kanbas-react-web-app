import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  console.log("id", id)

  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
      const user = await client.findUserById(id);
      setAccount(user);
  };

  const navigate = useNavigate();
  const signout = async () => {
      await client.signout();
      navigate("/kanbas/signin");
  };

  const fetchAccount = async () => {
      const account = await client.account();
      console.log("acct", account)
      setAccount(account);
  };
  const save = async () => {
      await client.updateUser(account);
  };

  useEffect(() => {
      if (id) {
          findUserById(id);
      } else {
          fetchAccount();
      }
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={account.password}
                onChange={(e) =>
                  setAccount({
                    ...account,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputFirstName" className="col-sm-2 col-form-label">
              FirstName
            </label>
            <div className="col-sm-10">
              <input
                className="form-control mt-2"
                value={account.firstName}
                onChange={(e) =>
                  setAccount({ ...account, firstName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputLastName" className="col-sm-2 col-form-label">
              LastName
            </label>
            <div className="col-sm-10">
              <input
                className="form-control mt-2"
                value={account.lastName}
                onChange={(e) =>
                  setAccount({ ...account, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputDOB" className="col-sm-2 col-form-label">
              Date of Birth
            </label>
            <div className="col-sm-10">
              <input
                className="form-control mt-2"
                value={account.dob}
                onChange={(e) =>
                  setAccount({ ...account, dob: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                className="form-control mt-2"
                value={account.email}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputRole" className="col-sm-2 col-form-label">
              Role
            </label>
            <div className="col-sm-10">
              <select
                className="form-control mt-2"
                onChange={(e) =>
                  setAccount({ ...account, role: e.target.value })
                }
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary w-100 mt-2" onClick={save}>
            Save
          </button>
          <Link
            to="/project/admin/users"
            className="btn btn-warning w-100 mt-2"
          >
            Users
          </Link>
          <button className="btn btn-danger w-100 mt-2" onClick={signout}>Signout</button>
        </div>
      )}
    </div>
  );
}
export default Account;
