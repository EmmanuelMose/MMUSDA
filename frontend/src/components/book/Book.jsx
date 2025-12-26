import React from 'react';
import './Books.css';

const Books = () => {
  return (
    <div className="books-page">
      {/* Hero Header */}
      <header className="books-header">
        <h1>Literature Ministry Department</h1>
        <p className="subtitle">"Fulfilling the great commission through the printed page"</p>
      </header>

      <div className="books-content">
        {/* Vision & Mission Section */}
        <section className="vision-mission-grid">
          <div className="info-card animate-slide-up">
            <h3>Vision</h3>
            <p>To see every home, heart, and nation reached with the message of hope and salvation through Seventh-day Adventist literature.</p>
          </div>
          <div className="info-card animate-slide-up">
            <h3>Mission</h3>
            <p>To uplift Christ by equipping and mobilizing church members to share truth-filled literature that transforms lives for eternity.</p>
          </div>
        </section>

        {/* Who We Are & History */}
        <section className="text-section">
          <h2>Who Are We?</h2>
          <p>
            The Literature Ministry Department of Masinde Muliro  University of Science AndTechnology SDA Church is part of a global network committed to 
            evangelism through printed and digital materials. Inspired by the three angels' message, we echo the global mission locally—providing 
            gospel-centered resources for church members and the broader community.
          </p>

          <div className="historical-box">
            <h2>Historical Foundation</h2>
            <p>The literature ministry dates back to the 1840s. Elder James White published <i>The Present Truth</i> in 1849, laying the foundation for Adventist publishing.</p>
            <p>MMUSDA's literature ministry began in 2012 and continues through divine guidance, spreading the gospel one page at a time.</p>
            <p className="scripture-quote">"There is no better witness of Christ than the inspired text of scripture."</p>
          </div>
        </section>

        {/* Activities & Goals Grid */}
        <section className="list-grid">
          <div className="list-card">
            <h3>What We Do</h3>
            <ul>
              <li><strong>Literature Distribution:</strong> Books, tracts, magazines, and Bible studies sharing hope, health, and healing.</li>
              <li><strong>Training and Empowerment:</strong> Equipping members to become literature evangelists in all walks of life.</li>
              <li><strong>Evangelism Support:</strong> Partnering with other departments for outreach and mission events.</li>
              <li><strong>Digital Access:</strong> Promoting online materials, QR codes, and social media outreach.</li>
            </ul>
          </div>

          <div className="list-card">
            <h3>Goals and Objectives</h3>
            <ul>
              <li>Revive literature evangelism in the church.</li>
              <li>Encourage all members to be literature missionaries.</li>
              <li>Nurture spiritual growth through inspired writings.</li>
              <li>Reach unreached communities with Christ-centered messages.</li>
              <li>Support youth through summer literature programs.</li>
            </ul>
          </div>
        </section>

        {/* Involvement Section */}
        <section className="involvement-section">
          <h2>How You Can Get Involved</h2>
          <div className="involvement-chips">
            <span>Share a tract or book daily</span>
            <span>Volunteer for workshops</span>
            <span>Support through prayer</span>
            <span>Donate materials</span>
            <span>Pray for open hearts</span>
          </div>
        </section>

        {/* Why It Matters & CTA */}
        <section className="cta-section">
          <div className="importance-box">
            <h3>Why It Still Matters</h3>
            <p>A printed book or tract can quietly speak to a soul when words cannot. This ministry remains one of the most effective outreach channels today.</p>
            <blockquote>
              "If there is one work more important than another, it is that of getting our publications before the people." 
              <cite>— Ellen G. White, The Publishing Ministry, p. 385</cite>
            </blockquote>
          </div>

          <div className="online-library">
            <h2>Ellen G. White Books – Full Online Library</h2>
            <p>Access the complete collection of Ellen G. White's writings, books, letters, and manuscripts online through the official EGW Writings website.</p>
            <a 
              href="https://egwwritings.org/titles/books" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="browse-button"
            >
              📚 Browse All EGW Books
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Books;