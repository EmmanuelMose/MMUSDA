import { useEffect, useState } from "react";
import { fetchAllLeaders, fetchLeadersByRole } from "../../Features/leaders/leadersAPI";
import { Search, User, ShieldCheck, Phone, Info } from "lucide-react";
import "./Leaders.css";

export default function Leaders() {
  const [leaders, setLeaders] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  const loadLeaders = async () => {
    setLoading(true);
    try {
      const allLeaders = await fetchAllLeaders();
      setLeaders(allLeaders);
    } catch (error) {
      console.error("Failed to load leaders:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchByRole = async () => {
    setLoading(true);
    try {
      if (!role.trim()) {
        await loadLeaders();
      } else {
        const filteredLeaders = await fetchLeadersByRole(role);
        setLeaders(filteredLeaders);
      }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaders();
  }, []);

  return (
    <div className="leaders-page-wrapper">
      <div className="leaders-container">
        <header className="leaders-header">
          <div className="title-underline">
            <h1 className="title-interactive">MMUSDA CHURCH LEADERS</h1>
            <div className="line-animated"></div>
          </div>
          <p className="subtitle-interactive">Committed to service, anchored in faith.</p>
        </header>

        <section className="quotes-grid">
          <div className="quote-card-interactive">
            <span className="quote-icon">“</span>
            <p>"Obey your leaders and submit to them, for they are keeping watch over your souls."</p>
            <cite>– Hebrews 13:17</cite>
          </div>
          <div className="quote-card-interactive">
            <span className="quote-icon">“</span>
            <p>"The greatest among you shall be your servant."</p>
            <cite>– Matthew 23:11</cite>
          </div>
          <div className="quote-card-interactive">
            <span className="quote-icon">“</span>
            <p>"Where there is no guidance, a people falls, but in an abundance of counselors there is safety."</p>
            <cite>– Proverbs 11:14</cite>
          </div>
        </section>

        <div className="search-section">
          <div className="search-bar-interactive">
            <input
              type="text"
              placeholder="Search by role (e.g., Elder, Deacon)..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchByRole()}
            />
            <button className="search-btn-glow" onClick={searchByRole}>
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="content-area">
          {loading ? (
            <div className="loader-container">
              <div className="spinner-dynamic"></div>
              <p className="loading-text">Fetching leadership data...</p>
            </div>
          ) : leaders.length > 0 ? (
            <div className="table-wrapper-glass">
              <table className="leaders-table-interactive">
                <thead>
                  <tr>
                    <th><div className="th-content"><User size={16} /> Name</div></th>
                    <th><div className="th-content"><ShieldCheck size={16} /> Department</div></th>
                    <th><div className="th-content"><Info size={16} /> Role</div></th>
                    <th><div className="th-content"><Phone size={16} /> Contact</div></th>
                  </tr>
                </thead>
                <tbody>
                  {leaders.map((leader, index) => (
                    <tr key={leader.leaderId} style={{ "--i": index }}>
                      <td className="name-cell-interactive" data-label="Name">
                        <div className="avatar-bounce">{leader.name.charAt(0)}</div>
                        <span className="leader-name-text">{leader.name}</span>
                      </td>
                      <td data-label="Department">
                        <span className="badge-interactive dept-blue">{leader.department || "General"}</span>
                      </td>
                      <td data-label="Role">
                        <span className="badge-interactive role-orange">{leader.role || "Officer"}</span>
                      </td>
                      <td className="contact-cell-interactive" data-label="Contact">
                        {leader.contactInfo || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon-float">🕊️</div>
              <h3>No Leaders Found</h3>
              <p>We couldn't find any leaders matching your search.</p>
              <button onClick={loadLeaders} className="reset-btn-interactive">View All Leaders</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}