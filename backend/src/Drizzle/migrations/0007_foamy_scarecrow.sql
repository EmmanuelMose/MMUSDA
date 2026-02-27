CREATE TABLE "offerings" (
	"offering_id" serial PRIMARY KEY NOT NULL,
	"phone_number" varchar(50) NOT NULL,
	"name" varchar(255) NOT NULL,
	"amount" integer NOT NULL,
	"purpose" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "suggestions" (
	"suggestion_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"contact_number" varchar(50),
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
