import React,{useState} from "react";
import { EventsAPI } from "../../Features/events/eventsAPI";
import "./Events.css";

const UpdateEvent = ({eventData,onUpdated})=>{

  const [form,setForm] = useState({
    title:eventData.title || "",
    description:eventData.description || "",
    eventDate:eventData.eventDate?.slice(0,10) || "",
    photo:eventData.photo || ""
  });

  const [loading,setLoading] = useState(false);

  const change = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const submit = async(e)=>{

    e.preventDefault();

    setLoading(true);

    const updated = await EventsAPI.updateEvent(
      eventData.eventId,
      form
    );

    onUpdated(updated);

    setLoading(false);
  };

  return(

    <form onSubmit={submit} className="event-form">

      <h3>Update Event</h3>

      <input
        type="text"
        name="title"
        value={form.title}
        onChange={change}
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={change}
      />

      <input
        type="date"
        name="eventDate"
        value={form.eventDate}
        onChange={change}
        required
      />

      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={form.photo}
        onChange={change}
      />

      <button disabled={loading}>
        {loading ? "Updating..." : "Update Event"}
      </button>

    </form>

  );
};

export default UpdateEvent;