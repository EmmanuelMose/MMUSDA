CREATE TABLE "members" (
	"member_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"area_of_residence" varchar(255) NOT NULL,
	"email" varchar(255),
	"phone" varchar(50),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "registered_admins" (
	"registered_id" serial PRIMARY KEY NOT NULL,
	"admin_id" integer NOT NULL,
	"is_verified" boolean DEFAULT false,
	"verification_code" varchar(10),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DROP TABLE "missions" CASCADE;--> statement-breakpoint
DROP TABLE "prayerRequests" CASCADE;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "books" RENAME TO "prayer_requests";--> statement-breakpoint
ALTER TABLE "prayer_requests" ADD COLUMN "request_id" serial PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "prayer_requests" ADD COLUMN "first_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "prayer_requests" ADD COLUMN "last_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "prayer_requests" ADD COLUMN "phone_number" varchar(50) DEFAULT null;--> statement-breakpoint
ALTER TABLE "prayer_requests" ADD COLUMN "requested_by" integer;--> statement-breakpoint
ALTER TABLE "prayer_requests" ADD COLUMN "is_public" varchar(3) DEFAULT 'yes';--> statement-breakpoint
ALTER TABLE "choirs" ADD COLUMN "choir_photo" varchar(500) DEFAULT null;--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "photo" varchar(500) DEFAULT null;--> statement-breakpoint
ALTER TABLE "families" ADD COLUMN "leader_contact" varchar(255);--> statement-breakpoint
ALTER TABLE "families" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "homechurches" ADD COLUMN "leader_contact" varchar(255);--> statement-breakpoint
ALTER TABLE "homechurches" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "leaders" ADD COLUMN "role" varchar(255);--> statement-breakpoint
ALTER TABLE "admins" DROP COLUMN "is_verified";--> statement-breakpoint
ALTER TABLE "admins" DROP COLUMN "verification_code";--> statement-breakpoint
ALTER TABLE "prayer_requests" DROP COLUMN "book_id";--> statement-breakpoint
ALTER TABLE "prayer_requests" DROP COLUMN "author";--> statement-breakpoint
ALTER TABLE "prayer_requests" DROP COLUMN "publication_date";--> statement-breakpoint
ALTER TABLE "prayer_requests" DROP COLUMN "pdf_url";--> statement-breakpoint
ALTER TABLE "events" DROP COLUMN "photo_url";--> statement-breakpoint
ALTER TABLE "families" DROP COLUMN "members_count";--> statement-breakpoint
ALTER TABLE "homechurches" DROP COLUMN "members_count";--> statement-breakpoint
ALTER TABLE "leaders" DROP COLUMN "members_count";