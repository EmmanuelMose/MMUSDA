import React, { useEffect, useState } from "react";
import { announcementAPI } from "../../Features/announcements/announcementsAPI";
import "./Announcements.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [idFilter, setIdFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAllAnnouncements = async () => {
    try {
      setLoading(true);
      const data = await announcementAPI.getAll();
      setAnnouncements(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterById = async () => {
    if (!idFilter) return fetchAllAnnouncements();

    try {
      setLoading(true);
      const data = await announcementAPI.getById(idFilter);
      setAnnouncements(data ? [data] : []);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterByDate = async () => {
    if (!dateFilter) return fetchAllAnnouncements();

    try {
      setLoading(true);
      const data = await announcementAPI.getFromDate(dateFilter);
      setAnnouncements(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllAnnouncements();
  }, []);

  return (
    <div className="announcements-container">
      <h1>Announcements</h1>

      <div className="filters">
        <div className="filter-group">
          <label htmlFor="idFilter">Filter by ID:</label>
          <input
            type="number"
            id="idFilter"
            value={idFilter}
            onChange={(e) => setIdFilter(e.target.value)}
          />
          <button onClick={handleFilterById}>Apply</button>
        </div>

        <div className="filter-group">
          <label htmlFor="dateFilter">Filter from Date:</label>
          <input
            type="date"
            id="dateFilter"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          <button onClick={handleFilterByDate}>Apply</button>
        </div>
      </div>

      {loading && <p>Loading announcements...</p>}
      {error && <p className="error">{error}</p>}

      <div className="announcements-list">
        {announcements.length === 0 && !loading && <p>No announcements found.</p>}
        {announcements.map((announcement) => (
          <div key={announcement.announcementId} className="announcement-card">
            <h2>{announcement.title}</h2>
            <p>{announcement.content}</p>
            <p className="date">
              Created at: {new Date(announcement.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
