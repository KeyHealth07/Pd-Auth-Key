'use client';
import { useState } from 'react';

export default function Home() {
  const [keyValue, setKeyValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const rules = {
    capital: /[A-Z]/.test(keyValue),
    length: keyValue.length >= 7,
    alphanumeric:
      /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(keyValue) &&
      /[a-zA-Z]/.test(keyValue) &&
      /[0-9]/.test(keyValue),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(keyValue),
  };

  const isValid = Object.values(rules).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
  };

  return (
    <div className="container">

      <div className="matrix">
        {Array(200)
          .fill("ENCRYPTION_PROTOCOL_ACTIVE 110101010 SECURE_CHANNEL_ESTABLISHED\n")
          .join("")}
      </div>

      <div className="plus">✚</div>

      <div className="card">
        <h1 className="title">Welcome Ms. KeyHealth</h1>
        <h3 className="subtitle">Create your Authorization Key</h3>

        <form onSubmit={handleSubmit} className="form">

          <div className="inputWrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={keyValue}
              onChange={(e) => setKeyValue(e.target.value)}
              placeholder="Enter Authorization Key"
              className="input"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="eye"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <div className="rules">
            <p className={rules.capital ? "valid" : "invalid"}>
              • At least one capital letter
            </p>
            <p className={rules.length ? "valid" : "invalid"}>
              • At least 7 characters
            </p>
            <p className={rules.alphanumeric ? "valid" : "invalid"}>
              • Must be alphanumeric
            </p>
            <p className={rules.special ? "valid" : "invalid"}>
              • At least one special character
            </p>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`button ${isValid ? "active" : ""}`}
          >
            Create
          </button>
        </form>

        {loading && (
          <div className="loadingWrapper">
            <div className="progressBar">
              <div className="progress" />
            </div>
            <p className="loadingText">
              Establishing Permanent Secure Authorization Channel...
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #020617;
          font-family: Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        .matrix {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          font-size: 10px;
          color: #d4af37;
          white-space: pre-wrap;
          animation: scroll 20s linear infinite;
        }

        .plus {
          position: absolute;
          bottom: 20px;
          right: 30px;
          font-size: 80px;
          color: #d4af37;
          opacity: 0.05;
        }

        .card {
          width: 100%;
          max-width: 480px;
          background: #0f172a;
          padding: 60px 40px;
          border-radius: 16px;
          border: 1px solid #bfa14a;
          box-shadow: 0 0 50px rgba(191,161,74,0.25);
          text-align: center;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          color: #d4af37;
          margin-bottom: 10px;
        }

        .subtitle {
          color: #cbd5e1;
          margin-bottom: 35px;
        }

        /* THIS fixes your alignment issue */
        .form {
          width: 100%;
          max-width: 380px;
        }

        .inputWrapper {
          position: relative;
          left: 5%;
          width: 80%;
        }

        .input {
          width: 90%;
          padding: 14px 45px 14px 16px;
          border-radius: 8px;
          border: 1px solid #bfa14a;
          background: #020617;
          color: #fff;
          outline: none;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .input:focus {
          box-shadow: 0 0 12px rgba(212,175,55,0.4);
        }

        .eye {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #d4af37;
        }

        .rules {
          text-align: left;
          margin-top: 20px;
          font-size: 13px;
        }

        .valid {
          color: #d4af37;
        }

        .invalid {
          color: #64748b;
        }

        .button {
          margin-top: 25px;
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: none;
          background: #334155;
          color: #0b1c2d;
          font-weight: bold;
          cursor: not-allowed;
          transition: 0.3s ease;
        }

        .button.active {
          background: #bfa14a;
          cursor: pointer;
        }

        .loadingWrapper {
          margin-top: 25px;
          width: 100%;
          max-width: 380px;
        }

        .progressBar {
          height: 6px;
          width: 100%;
          background: #1e293b;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          width: 40%;
          background: #d4af37;
          animation: loading 2s linear infinite;
        }

        .loadingText {
          margin-top: 10px;
          color: #d4af37;
          font-size: 13px;
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @media (max-width: 500px) {
          .card {
            padding: 40px 25px;
          }
        }
      `}</style>
    </div>
  );
}