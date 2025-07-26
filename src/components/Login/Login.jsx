import { useState } from 'react';
import { useAuth } from '../Context/Auth';
import { useNavigate, Link } from 'react-router-dom';
import myImage from '../imge/Maskl.png';

export default function Login() {
  const navigate = useNavigate();
  const { loginUser, loading, error, success } = useAuth();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const submitLoginForm = async (e) => {
    e.preventDefault();

    if (!credentials.email.trim() || !credentials.password.trim()) {
      alert('Please fill in all fields correctly');
      return;
    }

    const result = await loginUser(credentials);

    if (result) navigate('/home');
  };

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center py-5 bg-light position-relative">
      
      {/* Loader - shows in the center while loading */}
      {loading && (
        <div 
          className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div className="spinner-border text-warning" role="status" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="mt-3 fw-bold text-warning">Logging in...</span>
        </div>
      )}

      <div className="container">
        <div className="row g-5 align-items-center flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6">
            <h2 className="text-dark text-md-start mb-3 fw-bold">Welcome Back!</h2>
            <p className="text-dark text-md-start mb-4">Login to continue your journey</p>

            <form onSubmit={submitLoginForm} className="p-4 bg-white rounded shadow-sm" style={{ opacity: loading ? 0.3 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                  disabled={loading}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={getUserData}
                  className="form-control p-2 border-0 rounded-pill"
                  disabled={loading}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" disabled={loading} />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="text-decoration-none text-danger small">Forgot password?</Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning text-white w-100 py-2 rounded-pill"
              >
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  'Login'
                )}
              </button>

              <p className="text-center small mt-3">
                Don't have an account?{' '}
                <Link to="/register" className="text-decoration-none text-danger fw-bold">
                  Register
                </Link>
              </p>
            </form>
          </div>

          <div className="col-12 col-md-6 text-center">
            <img src={myImage} className="img-fluid rounded" alt="Login" />
          </div>
        </div>
      </div>
    </section>
  );
}
