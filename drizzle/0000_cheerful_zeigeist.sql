CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255),
	`created_at` datetime DEFAULT '2026-01-14 17:42:04.731',
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
