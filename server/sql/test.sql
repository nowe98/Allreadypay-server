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

SELECT * FROM recent;
SELECT @@global.time_zone;
SELECT @@session.time_zone;
SET @@session.time_zone = "+07:00";
SELECT NOW();

call create_recent("0800000000","fdsafsa","dfas");

alter table admin add llevel varchar(20);
alter table admin drop column  llevel;
alter table comments modify  Rating float(5,1) default 3;
select * from comments;
select * from comments;
update slot set Amount = 4 where MachineID =5;
delete from recent where RecentID =1;

alter table machine add IP varchar(20);
alter table machine drop column vending_name ;

select * from userbank;

INSERT INTO userbank set MobileNum ="081000000", Pass ="1234";
UPDATE userbank SET balance = balance - 10 WHERE MobileNum = "081000000";