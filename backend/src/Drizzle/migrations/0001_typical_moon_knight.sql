CREATE TABLE "leaders" (
	"leader_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"department" varchar(255),
	"members_count" integer DEFAULT 0,
	"contact_info" varchar(255) DEFAULT null,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "admins" DROP CONSTRAINT "admins_user_id_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "announcements" DROP CONSTRAINT "announcements_created_by_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "events_created_by_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "missions" DROP CONSTRAINT "missions_created_by_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "prayerRequests" DROP CONSTRAINT "prayerRequests_requested_by_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "sermons" DROP CONSTRAINT "sermons_created_by_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "announcements" ALTER COLUMN "created_by" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "choirs" ALTER COLUMN "leader_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "families" ALTER COLUMN "head_of_family" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "sermons" ALTER COLUMN "video_url" SET DEFAULT null;--> statement-breakpoint
ALTER TABLE "admins" ADD COLUMN "full_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "admins" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "choirs" ADD COLUMN "video_url" varchar(500) DEFAULT null;--> statement-breakpoint
ALTER TABLE "departments" ADD COLUMN "admin_leader" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "departments" ADD COLUMN "assistant" varchar(255);--> statement-breakpoint
ALTER TABLE "departments" ADD COLUMN "admin_contact" varchar(255);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "area_of_residence" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "admins" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "events" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "missions" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "sermons" DROP COLUMN "created_by";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "password";