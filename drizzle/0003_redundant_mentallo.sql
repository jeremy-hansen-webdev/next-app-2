ALTER TABLE `products` MODIFY COLUMN `created_at` datetime DEFAULT '2026-01-14 19:11:06.613';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` datetime DEFAULT '2026-01-14 19:11:06.613';--> statement-breakpoint
ALTER TABLE `products` ADD CONSTRAINT `products_name_unique` UNIQUE(`name`);