import { useState } from 'react';
import { useAuth } from '../Context/Auth';
import { Link, useNavigate } from 'react-router-dom';
import myImage from '../imge/Maskl.png';

export default function Register() {
  const navigate = useNavigate();
  const { registerUser, loading, error, success } = useAuth();

  const [user, setUser] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitRegisterForm = async (e) => {
    e.preventDefault();

    for (let key in user) {
      if (!user[key].trim()) {
        alert('Please fill all the fields correctly');
        return;
      }
    }

    if (user.password !== user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const result = await registerUser(user);
    if (result) navigate('/login');
  };

  return (
    <section className="min-vh-100 d-flex align-items-center py-5 bg-light position-relative">
      {/* Loading Overlay */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050,
          }}
        >
          <div className="spinner-border text-warning" role="status" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row g-5 align-items-center flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6">
            <h2 className="text-dark text-md-start mb-3 fw-bold">Track Your Progress & More!</h2>
            <p className="text-dark text-md-start mb-4">Start your fitness journey today</p>

            <form onSubmit={submitRegisterForm} className="p-4 bg-white rounded shadow-sm">
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <div className="form-group mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning text-white w-100 py-2 rounded-pill"
              >
                {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Create Account'}
              </button>

              <p className="text-center small mt-3">
                Don't have an account?{' '}
                <Link to="/login" className="text-decoration-none text-danger fw-bold">
                  Login
                </Link>
              </p>
            </form>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img src={myImage} className="img-fluid rounded" alt="Fitness" />
          </div>
        </div>
      </div>
    </section>
  );
}
