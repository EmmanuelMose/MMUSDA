ALTER TABLE "prayerRequests" ADD COLUMN "first_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "prayerRequests" ADD COLUMN "last_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "prayerRequests" ADD COLUMN "phone_number" varchar(50) DEFAULT null;