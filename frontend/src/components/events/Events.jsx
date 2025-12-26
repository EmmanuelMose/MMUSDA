import { useEffect, useState } from "react";
import {
  fetchAllEvents,
  fetchEventsByTitle,
} from "../../Features/events/eventsAPI";
import "./events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setLoading(true);
    const data = await fetchAllEvents();
    setEvents(data);
    setLoading(false);
  };

  const handleSearch = async () => {
    if (!title.trim()) {
      loadEvents();
      return;
    }
    setLoading(true);
    const data = await fetchEventsByTitle(title);
    setEvents(data);
    setLoading(false);
  };

  return (
    <div className="events-container">
      <h2 className="events-title">Church Events</h2>

      <div className="events-search">
        <input
          type="text"
          placeholder="Search by title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <p className="loading">Loading events...</p>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.eventId}>
              <img src={event.photoUrl} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <span>{event.eventDate}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
