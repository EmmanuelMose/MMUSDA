ALTER TABLE "prayerRequests" ADD COLUMN "is_public" varchar(3) DEFAULT 'no';--> statement-breakpoint
ALTER TABLE "prayerRequests" DROP COLUMN "is_answered";