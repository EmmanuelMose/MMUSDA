import React, { useState } from "react";
import {
  useGetPublicPrayerRequestsQuery,
  useCreatePrayerRequestMutation,
} from "../../Features/prayerRequest/prayerRequestAPI";

const PrayerRequest = () => {
  const { data: requests, isLoading, isError } = useGetPublicPrayerRequestsQuery();
  const [createPrayerRequest] = useCreatePrayerRequestMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPrayerRequest(formData).unwrap();
      setFormData({ firstName: "", lastName: "", phoneNumber: "", title: "", description: "" });
      alert("Prayer request submitted successfully!");
    } catch (err) {
      alert("Failed to submit prayer request.");
    }
  };

  return (
    <div className="prayer-container">
      <h1>Submit a Prayer Request</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number (Optional)"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Public Prayer Requests</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching prayer requests.</p>}
      {requests?.data?.length > 0 ? (
        <ul>
          {requests.data.map((req) => (
            <li key={req.requestId}>
              <strong>{req.title}</strong> by {req.firstName} {req.lastName}
              {req.description && <p>{req.description}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>No public prayer requests found.</p>
      )}
    </div>
  );
};

export default PrayerRequest;
