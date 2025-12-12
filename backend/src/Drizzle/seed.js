import "dotenv/config";
import pkg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema.js";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.Database_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const db = drizzle(pool);

async function seed() {
  try {
    await db.insert(schema.users).values([
      { fullName: "John Doe", email: "john@example.com", role: "user", areaOfResidence: "Nairobi" },
      { fullName: "Jane Smith", email: "jane@example.com", role: "user", areaOfResidence: "Mombasa" },
      { fullName: "Mark Johnson", email: "mark@example.com", role: "user", areaOfResidence: "Kisumu" },
      { fullName: "Emily Brown", email: "emily@example.com", role: "user", areaOfResidence: "Eldoret" },
      { fullName: "Michael White", email: "michael@example.com", role: "user", areaOfResidence: "Nakuru" }
    ]);

    await db.insert(schema.admins).values([
      { fullName: "Admin One", email: "admin1@example.com", isVerified: true, verificationCode: "123456" },
      { fullName: "Admin Two", email: "admin2@example.com", isVerified: false, verificationCode: "654321" },
      { fullName: "Admin Three", email: "admin3@example.com", isVerified: true, verificationCode: "111222" },
      { fullName: "Admin Four", email: "admin4@example.com", isVerified: false, verificationCode: "333444" },
      { fullName: "Admin Five", email: "admin5@example.com", isVerified: true, verificationCode: "555666" }
    ]);

    await db.insert(schema.departments).values([
      { name: "Music", description: "Music department", adminLeader: "Admin One", assistant: "Assistant One", adminContact: "music@example.com" },
      { name: "Evangelism", description: "Evangelism department", adminLeader: "Admin Two", assistant: "Assistant Two", adminContact: "evangelism@example.com" },
      { name: "Youth", description: "Youth ministry", adminLeader: "Admin Three", assistant: "Assistant Three", adminContact: "youth@example.com" },
      { name: "Health", description: "Health department", adminLeader: "Admin Four", assistant: "Assistant Four", adminContact: "health@example.com" },
      { name: "Education", description: "Education department", adminLeader: "Admin Five", assistant: "Assistant Five", adminContact: "education@example.com" }
    ]);

    await db.insert(schema.events).values([
      { title: "Annual Day", description: "Annual celebration", eventDate: new Date(), photoUrl: "https://example.com/photo1.jpg" },
      { title: "Bible Camp", description: "Youth camp", eventDate: new Date(), photoUrl: "https://example.com/photo2.jpg" },
      { title: "Charity Drive", description: "Helping the community", eventDate: new Date(), photoUrl: "https://example.com/photo3.jpg" },
      { title: "Concert", description: "Music concert", eventDate: new Date(), photoUrl: "https://example.com/photo4.jpg" },
      { title: "Retreat", description: "Spiritual retreat", eventDate: new Date(), photoUrl: "https://example.com/photo5.jpg" }
    ]);

    await db.insert(schema.contacts).values([
      { name: "Alice", email: "alice@example.com", phone: "1234567890", message: "Hello" },
      { name: "Bob", email: "bob@example.com", phone: "2345678901", message: "Inquiry" },
      { name: "Charlie", email: "charlie@example.com", phone: "3456789012", message: "Question" },
      { name: "David", email: "david@example.com", phone: "4567890123", message: "Support" },
      { name: "Eve", email: "eve@example.com", phone: "5678901234", message: "Feedback" }
    ]);

    await db.insert(schema.sermons).values([
      { title: "Faith", sermonDate: new Date(), videoUrl: "https://www.youtube.com/watch?v=QQp1B6UCk3Y&list=RDMMQQp1B6UCk3Y&start_radio=1", description: "On faith" },
      { title: "Hope", sermonDate: new Date(), videoUrl: "https://example.com/sermon2.mp4", description: "On hope" },
      { title: "Love", sermonDate: new Date(), videoUrl: "https://example.com/sermon3.mp4", description: "On love" },
      { title: "Patience", sermonDate: new Date(), videoUrl: "https://example.com/sermon4.mp4", description: "On patience" },
      { title: "Prayer", sermonDate: new Date(), videoUrl: null, description: "On prayer" }
    ]);

    await db.insert(schema.missions).values([
      { title: "Mission 1", description: "Helping the needy", startDate: new Date(), endDate: new Date(), location: "Location 1", photoUrl: "https://example.com/mission1.jpg" },
      { title: "Mission 2", description: "Community outreach", startDate: new Date(), endDate: new Date(), location: "Location 2", photoUrl: "https://example.com/mission2.jpg" },
      { title: "Mission 3", description: "Education support", startDate: new Date(), endDate: new Date(), location: "Location 3", photoUrl: "https://example.com/mission3.jpg" },
      { title: "Mission 4", description: "Healthcare", startDate: new Date(), endDate: new Date(), location: "Location 4", photoUrl: "https://example.com/mission4.jpg" },
      { title: "Mission 5", description: "Evangelism", startDate: new Date(), endDate: new Date(), location: "Location 5", photoUrl: "https://example.com/mission5.jpg" }
    ]);

    await db.insert(schema.books).values([
      { title: "Book 1", author: "Author 1", description: "Description 1", publicationDate: new Date(), pdfUrl: "https://example.com/book1.pdf" },
      { title: "Book 2", author: "Author 2", description: "Description 2", publicationDate: new Date(), pdfUrl: "https://example.com/book2.pdf" },
      { title: "Book 3", author: "Author 3", description: "Description 3", publicationDate: new Date(), pdfUrl: "https://example.com/book3.pdf" },
      { title: "Book 4", author: "Author 4", description: "Description 4", publicationDate: new Date(), pdfUrl: "https://example.com/book4.pdf" },
      { title: "Book 5", author: "Author 5", description: "Description 5", publicationDate: new Date(), pdfUrl: "https://example.com/book5.pdf" }
    ]);

    await db.insert(schema.choirs).values([
      { name: "Choir 1", description: "Description 1", leaderName: "Leader 1", videoUrl: "https://example.com/choir1.mp4", membersCount: 20 },
      { name: "Choir 2", description: "Description 2", leaderName: "Leader 2", videoUrl: null, membersCount: 15 },
      { name: "Choir 3", description: "Description 3", leaderName: "Leader 3", videoUrl: "https://example.com/choir3.mp4", membersCount: 25 },
      { name: "Choir 4", description: "Description 4", leaderName: "Leader 4", videoUrl: null, membersCount: 10 },
      { name: "Choir 5", description: "Description 5", leaderName: "Leader 5", videoUrl: "https://example.com/choir5.mp4", membersCount: 30 }
    ]);

    await db.insert(schema.announcements).values([
      { title: "Announcement 1", description: "Description 1", createdBy: 1 },
      { title: "Announcement 2", description: "Description 2", createdBy: 2 },
      { title: "Announcement 3", description: "Description 3", createdBy: 3 },
      { title: "Announcement 4", description: "Description 4", createdBy: 4 },
      { title: "Announcement 5", description: "Description 5", createdBy: 5 }
    ]);

    await db.insert(schema.homechurches).values([
      { name: "Homechurch 1", location: "Location 1", leaderName: "Leader 1", membersCount: 10 },
      { name: "Homechurch 2", location: "Location 2", leaderName: "Leader 2", membersCount: 12 },
      { name: "Homechurch 3", location: "Location 3", leaderName: "Leader 3", membersCount: 15 },
      { name: "Homechurch 4", location: "Location 4", leaderName: "Leader 4", membersCount: 20 },
      { name: "Homechurch 5", location: "Location 5", leaderName: "Leader 5", membersCount: 18 }
    ]);

    await db.insert(schema.families).values([
      { familyName: "Family 1", headOfFamily: "Head 1", membersCount: 4, contactInfo: "contact1@example.com" },
      { familyName: "Family 2", headOfFamily: "Head 2", membersCount: 5, contactInfo: "contact2@example.com" },
      { familyName: "Family 3", headOfFamily: "Head 3", membersCount: 3, contactInfo: "contact3@example.com" },
      { familyName: "Family 4", headOfFamily: "Head 4", membersCount: 6, contactInfo: "contact4@example.com" },
      { familyName: "Family 5", headOfFamily: "Head 5", membersCount: 2, contactInfo: "contact5@example.com" }
    ]);

    await db.insert(schema.prayerRequests).values([
      { title: "Prayer 1", description: "Description 1", requestedBy: 1 },
      { title: "Prayer 2", description: "Description 2", requestedBy: 2 },
      { title: "Prayer 3", description: "Description 3", requestedBy: 3 },
      { title: "Prayer 4", description: "Description 4", requestedBy: 4 },
      { title: "Prayer 5", description: "Description 5", requestedBy: 5 }
    ]);

    await db.insert(schema.leaders).values([
      { name: "Leader 1", department: "Music", membersCount: 10, contactInfo: "leader1@example.com" },
      { name: "Leader 2", department: "Evangelism", membersCount: 15, contactInfo: "leader2@example.com" },
      { name: "Leader 3", department: "Youth", membersCount: 12, contactInfo: null },
      { name: "Leader 4", department: "Health", membersCount: 8, contactInfo: null },
      { name: "Leader 5", department: "Education", membersCount: 20, contactInfo: "leader5@example.com" }
    ]);

    console.log("Seeding complete!");
    await pool.end();
  } catch (err) {
    console.error(err);
    await pool.end();
  }
}

seed();
