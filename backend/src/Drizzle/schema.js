import { pgTable, serial, text, varchar, timestamp, boolean, integer, date } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  userId: serial("user_id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 10 }).notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const admins = pgTable("admins", {
  adminId: serial("admin_id").primaryKey(),
  userId: integer("user_id").references(() => users.userId),
  isVerified: boolean("is_verified").default(false),
  verificationCode: varchar("verification_code", { length: 10 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const departments = pgTable("departments", {
  departmentId: serial("department_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const events = pgTable("events", {
  eventId: serial("event_id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  eventDate: date("event_date").notNull(),
  photoUrl: varchar("photo_url", { length: 500 }),
  createdBy: integer("created_by").references(() => users.userId),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const contacts = pgTable("contacts", {
  contactId: serial("contact_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const sermons = pgTable("sermons", {
  sermonId: serial("sermon_id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  sermonDate: date("sermon_date").notNull(),
  videoUrl: varchar("video_url", { length: 500 }),
  description: text("description"),
  createdBy: integer("created_by").references(() => users.userId),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const missions = pgTable("missions", {
  missionId: serial("mission_id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  startDate: date("start_date"),
  endDate: date("end_date"),
  location: varchar("location", { length: 255 }),
  photoUrl: varchar("photo_url", { length: 500 }),
  createdBy: integer("created_by").references(() => users.userId),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const books = pgTable("books", {
  bookId: serial("book_id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }),
  description: text("description"),
  publicationDate: date("publication_date"),
  pdfUrl: varchar("pdf_url", { length: 500 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const choirs = pgTable("choirs", {
  choirId: serial("choir_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  leaderName: varchar("leader_name", { length: 255 }),
  membersCount: integer("members_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const announcements = pgTable("announcements", {
  announcementId: serial("announcement_id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  createdBy: integer("created_by").references(() => users.userId),
  createdAt: timestamp("created_at").defaultNow(),
});

export const homechurches = pgTable("homechurches", {
  homechurchId: serial("homechurch_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }),
  leaderName: varchar("leader_name", { length: 255 }),
  membersCount: integer("members_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const families = pgTable("families", {
  familyId: serial("family_id").primaryKey(),
  familyName: varchar("family_name", { length: 255 }).notNull(),
  headOfFamily: varchar("head_of_family", { length: 255 }),
  membersCount: integer("members_count").default(0),
  contactInfo: varchar("contact_info", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const prayerRequests = pgTable("prayerRequests", {
  requestId: serial("request_id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  requestedBy: integer("requested_by").references(() => users.userId),
  isAnswered: boolean("is_answered").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
