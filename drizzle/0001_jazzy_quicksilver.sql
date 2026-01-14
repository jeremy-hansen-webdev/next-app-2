ALTER TABLE `users` MODIFY COLUMN `created_at` datetime DEFAULT '2026-01-14 18:37:35.802';--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_email_unique` UNIQUE(`email`);