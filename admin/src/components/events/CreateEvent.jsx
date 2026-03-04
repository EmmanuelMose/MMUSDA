import React, { useState } from "react";
import { EventsAPI } from "../../Features/events/eventsAPI";
import "./Events.css";

const CreateEvent = ({ onCreated }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    eventDate: "",
    photo: ""
  });

  const [loading, setLoading] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newEv = await EventsAPI.createEvent(form);
    onCreated(newEv);
    setForm({ title: "", description: "", eventDate: "", photo: "" });
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="event-form">
      <h3>Create Event</h3>

      <input type="text" name="title" value={form.title} onChange={change} required placeholder="Title" />

      <textarea name="description" value={form.description} onChange={change} placeholder="Description" />

      <input type="date" name="eventDate" value={form.eventDate} onChange={change} required />

      <input type="text" name="photo" value={form.photo} onChange={change} placeholder="Photo URL" />

      <button disabled={loading}>{loading ? "Creating..." : "Create Event"}</button>
    </form>
  );
};

export default CreateEvent;