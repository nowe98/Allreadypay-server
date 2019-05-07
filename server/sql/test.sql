use db;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL,
  `task` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
 
ALTER TABLE `tasks` ADD PRIMARY KEY (`id`);
ALTER TABLE `tasks` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `tasks` (`id`, `task`, `status`, `created_at`) VALUES
(1, 'Find bugs', 1, '2016-04-10 23:50:40'),
(2, 'Review code', 1, '2016-04-10 23:50:40'),
(3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
(4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
(5, 'Push to prod', 1, '2016-04-10 23:50:50');

SELECT * FROM place;
SELECT @@global.time_zone;
SELECT @@session.time_zone;
SET @@session.time_zone = "+07:00";
SELECT NOW();

alter table usertable add hash varchar(1024);
alter table usertable drop column hash ;
alter table recent modify RecentID tinyint(20) not null primary key auto_increment;
select * from usertable;

alter table machine add MachineName varchar(50);
alter table machine drop column vending_name ;