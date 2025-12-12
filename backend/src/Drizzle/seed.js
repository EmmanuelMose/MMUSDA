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
    // Users
    await db.insert(schema.users).values([
      { fullName: "John Doe", email: "john@example.com", password: "password1", role: "user" },
      { fullName: "Jane Smith", email: "jane@example.com", password: "password2", role: "user" },
      { fullName: "Mark Johnson", email: "mark@example.com", password: "password3", role: "user" },
      { fullName: "Emily Brown", email: "emily@example.com", password: "password4", role: "user" },
      { fullName: "Michael White", email: "michael@example.com", password: "password5", role: "user" }
    ]);

    // Admins
    await db.insert(schema.admins).values([
      { userId: 1, isVerified: true, verificationCode: "123456" },
      { userId: 2, isVerified: false, verificationCode: "654321" },
      { userId: 3, isVerified: true, verificationCode: "111222" },
      { userId: 4, isVerified: false, verificationCode: "333444" },
      { userId: 5, isVerified: true, verificationCode: "555666" }
    ]);

    // Departments
    await db.insert(schema.departments).values([
      { name: "Music", description: "Music department" },
      { name: "Evangelism", description: "Evangelism department" },
      { name: "Youth", description: "Youth ministry" },
      { name: "Health", description: "Health department" },
      { name: "Education", description: "Education department" }
    ]);

    // Events
    await db.insert(schema.events).values([
      { title: "Annual Day", description: "Annual celebration", eventDate: new Date(), photoUrl: "https://example.com/photo1.jpg", createdBy: 1 },
      { title: "Bible Camp", description: "Youth camp", eventDate: new Date(), photoUrl: "https://example.com/photo2.jpg", createdBy: 2 },
      { title: "Charity Drive", description: "Helping the community", eventDate: new Date(), photoUrl: "https://example.com/photo3.jpg", createdBy: 3 },
      { title: "Concert", description: "Music concert", eventDate: new Date(), photoUrl: "https://example.com/photo4.jpg", createdBy: 4 },
      { title: "Retreat", description: "Spiritual retreat", eventDate: new Date(), photoUrl: "https://example.com/photo5.jpg", createdBy: 5 }
    ]);

    // Contacts
    await db.insert(schema.contacts).values([
      { name: "Alice", email: "alice@example.com", phone: "1234567890", message: "Hello" },
      { name: "Bob", email: "bob@example.com", phone: "2345678901", message: "Inquiry" },
      { name: "Charlie", email: "charlie@example.com", phone: "3456789012", message: "Question" },
      { name: "David", email: "david@example.com", phone: "4567890123", message: "Support" },
      { name: "Eve", email: "eve@example.com", phone: "5678901234", message: "Feedback" }
    ]);

    // Sermons
    await db.insert(schema.sermons).values([
      { title: "Faith", sermonDate: new Date(), videoUrl: "https://example.com/sermon1.mp4", description: "On faith", createdBy: 1 },
      { title: "Hope", sermonDate: new Date(), videoUrl: "https://example.com/sermon2.mp4", description: "On hope", createdBy: 2 },
      { title: "Love", sermonDate: new Date(), videoUrl: "https://example.com/sermon3.mp4", description: "On love", createdBy: 3 },
      { title: "Patience", sermonDate: new Date(), videoUrl: "https://example.com/sermon4.mp4", description: "On patience", createdBy: 4 },
      { title: "Prayer", sermonDate: new Date(), videoUrl: "https://example.com/sermon5.mp4", description: "On prayer", createdBy: 5 }
    ]);

    // Missions
    await db.insert(schema.missions).values([
      { title: "Mission 1", description: "Helping the needy", startDate: new Date(), endDate: new Date(), location: "Location 1", photoUrl: "https://example.com/mission1.jpg", createdBy: 1 },
      { title: "Mission 2", description: "Community outreach", startDate: new Date(), endDate: new Date(), location: "Location 2", photoUrl: "https://example.com/mission2.jpg", createdBy: 2 },
      { title: "Mission 3", description: "Education support", startDate: new Date(), endDate: new Date(), location: "Location 3", photoUrl: "https://example.com/mission3.jpg", createdBy: 3 },
      { title: "Mission 4", description: "Healthcare", startDate: new Date(), endDate: new Date(), location: "Location 4", photoUrl: "https://example.com/mission4.jpg", createdBy: 4 },
      { title: "Mission 5", description: "Evangelism", startDate: new Date(), endDate: new Date(), location: "Location 5", photoUrl: "https://example.com/mission5.jpg", createdBy: 5 }
    ]);

    // Books
    await db.insert(schema.books).values([
      { title: "Book 1", author: "Author 1", description: "Description 1", publicationDate: new Date(), pdfUrl: "https://example.com/book1.pdf" },
      { title: "Book 2", author: "Author 2", description: "Description 2", publicationDate: new Date(), pdfUrl: "https://example.com/book2.pdf" },
      { title: "Book 3", author: "Author 3", description: "Description 3", publicationDate: new Date(), pdfUrl: "https://example.com/book3.pdf" },
      { title: "Book 4", author: "Author 4", description: "Description 4", publicationDate: new Date(), pdfUrl: "https://example.com/book4.pdf" },
      { title: "Book 5", author: "Author 5", description: "Description 5", publicationDate: new Date(), pdfUrl: "https://example.com/book5.pdf" }
    ]);

    // Choirs
    await db.insert(schema.choirs).values([
      { name: "Choir 1", description: "Description 1", leaderName: "Leader 1", membersCount: 20 },
      { name: "Choir 2", description: "Description 2", leaderName: "Leader 2", membersCount: 15 },
      { name: "Choir 3", description: "Description 3", leaderName: "Leader 3", membersCount: 25 },
      { name: "Choir 4", description: "Description 4", leaderName: "Leader 4", membersCount: 10 },
      { name: "Choir 5", description: "Description 5", leaderName: "Leader 5", membersCount: 30 }
    ]);

    // Announcements
    await db.insert(schema.announcements).values([
      { title: "Announcement 1", description: "Description 1", createdBy: 1 },
      { title: "Announcement 2", description: "Description 2", createdBy: 2 },
      { title: "Announcement 3", description: "Description 3", createdBy: 3 },
      { title: "Announcement 4", description: "Description 4", createdBy: 4 },
      { title: "Announcement 5", description: "Description 5", createdBy: 5 }
    ]);

    // Homechurches
    await db.insert(schema.homechurches).values([
      { name: "Homechurch 1", location: "Location 1", leaderName: "Leader 1", membersCount: 10 },
      { name: "Homechurch 2", location: "Location 2", leaderName: "Leader 2", membersCount: 12 },
      { name: "Homechurch 3", location: "Location 3", leaderName: "Leader 3", membersCount: 15 },
      { name: "Homechurch 4", location: "Location 4", leaderName: "Leader 4", membersCount: 20 },
      { name: "Homechurch 5", location: "Location 5", leaderName: "Leader 5", membersCount: 18 }
    ]);

    // Families
    await db.insert(schema.families).values([
      { familyName: "Family 1", headOfFamily: "Head 1", membersCount: 4, contactInfo: "contact1@example.com" },
      { familyName: "Family 2", headOfFamily: "Head 2", membersCount: 5, contactInfo: "contact2@example.com" },
      { familyName: "Family 3", headOfFamily: "Head 3", membersCount: 3, contactInfo: "contact3@example.com" },
      { familyName: "Family 4", headOfFamily: "Head 4", membersCount: 6, contactInfo: "contact4@example.com" },
      { familyName: "Family 5", headOfFamily: "Head 5", membersCount: 2, contactInfo: "contact5@example.com" }
    ]);

    // Prayer Requests
    await db.insert(schema.prayerRequests).values([
      { title: "Prayer 1", description: "Description 1", requestedBy: 1 },
      { title: "Prayer 2", description: "Description 2", requestedBy: 2 },
      { title: "Prayer 3", description: "Description 3", requestedBy: 3 },
      { title: "Prayer 4", description: "Description 4", requestedBy: 4 },
      { title: "Prayer 5", description: "Description 5", requestedBy: 5 }
    ]);

    console.log("Seeding complete!");
    await pool.end();
  } catch (err) {
    console.error(err);
    await pool.end();
  }
}

seed();
