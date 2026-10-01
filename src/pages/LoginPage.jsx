import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Login using Supabase Authentication
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

    if (error) {
      setError(error.message);
      return;
    }

    console.log("Logged in user:", data.user);

    // Temporary:
    // Later we will check ADMIN / USER role here
    navigate("/admin");
  };

  return (
    <div className="modern-login-page">

      {/* LEFT SIDE */}
      <section className="login-left-panel">

        <div className="login-left-content">

          <div className="system-logo">
            TR
          </div>

          <h1>Tool Record System</h1>

          <p className="login-description">
            A simple and secure system for managing,
            searching, and maintaining tool records.
          </p>

          <div className="login-feature-list">

            <div className="login-feature">
              <span className="feature-check">✓</span>

              <div>
                <strong>Record Management</strong>
                <p>
                  Add and maintain tool information
                  efficiently.
                </p>
              </div>
            </div>

            <div className="login-feature">
              <span className="feature-check">✓</span>

              <div>
                <strong>Quick Search</strong>
                <p>
                  Find tool records quickly using
                  contact information.
                </p>
              </div>
            </div>

            <div className="login-feature">
              <span className="feature-check">✓</span>

              <div>
                <strong>Role-Based Access</strong>
                <p>
                  Separate access for administrators
                  and users.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="login-left-footer">
          Tool Record Management System
        </div>

      </section>


      {/* RIGHT SIDE */}
      <section className="login-right-panel">

        <div className="modern-login-card">

          <div className="mobile-login-logo">
            TR
          </div>

          <div className="login-welcome">

            <span className="login-small-title">
              WELCOME BACK
            </span>

            <h2>Sign in to your account</h2>

            <p>
              Enter your account details to continue.
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="modern-form-group">

              <label>Email Address</label>

              <div className="login-input-container">

                <span className="login-input-icon">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="modern-form-group">

              <label>Password</label>

              <div className="login-input-container">

                <span className="login-input-icon">
                  🔒
                </span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* ERROR */}
            {error && (
              <div className="modern-login-error">
                <span>!</span>
                {error}
              </div>
            )}


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="modern-login-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>


          <div className="login-security-note">
            🔒 Secure access to Tool Record System
          </div>

        </div>

      </section>

    </div>
  );
}

export default LoginPage;