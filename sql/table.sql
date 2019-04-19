use db;
drop table usertable;
create table if not exists usertable(
	MobileNum varchar(10) not null primary key,
    Pass varchar(20) not null,
    FirstName varchar(20) ,
    LastName varchar(20),
    Sex tinyint(1),
    Email varchar(50)
	
);
INSERT INTO usertable (MobileNum, Pass, FirstName, LastName, Sex,Email) VALUES
('0800000000','1234','Lagna','Nowe', 0 ,'abc@g.com');

create table if not exists machine(
	MachineID varchar(50) not null primary key,
    MachineName varchar(50),
    Location varchar(50),
    ManufacturedDate timestamp,
    Sales smallint(6),
    UserID varchar(20), 
    MachineType varchar(30),
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT AdminID FOREIGN KEY (AdminID)
    REFERENCES Admin(AdminID),
    CONSTRAINT MachineType foreign key (MachineType)
    references Type_machine(MachineType)
);

create table if not exists admin(
	AdminID varchar(20) not null primary key,
    Pass varchar(20) not null,
    level tinyint(1),
    FirstName varchar(20),
    LastName varchar(20),
    Sex tinyint(1),
    Email varchar(50)
)

SELECT * FROM usertable;