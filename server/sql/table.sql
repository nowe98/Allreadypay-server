use db;
drop table usertable;
create table if not exists usertable(
	MobileNum varchar(10) not null primary key,
    Pass varchar(20) not null,
    FirstName varchar(20) ,
    LastName varchar(20),
    Sex tinyint(1),
    ppoint tinyint(5) not null default 0,
    Email varchar(50)
	
);
INSERT INTO usertable (MobileNum, Pass, FirstName, LastName, Sex,Email) VALUES
('0800000000','1234','Lagna','Nowe', 0 ,'abc@g.com');

create table if not exists machine(
	MachineID varchar(50) not null primary key,
    MachineName varchar(50),
    LLocation varchar(50),
    ManufacturedDate datetime,
    Sales smallint(6),
    mstatus tinyint(1),
    AdminID varchar(20), 
    MachineType varchar(30),
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP on update current_timestamp,
    CONSTRAINT AdminID FOREIGN KEY (AdminID)
    REFERENCES Admin(AdminID),
    CONSTRAINT MachineType foreign key (MachineType)
    references type_machine(MachineType)
);

create table if not exists type_machine(
	MachineType varchar(30) not null primary key,
    Slots tinyint(5),
    CapacityPerBlock tinyint(5)

);

create table if not exists slot(
	MachineID varchar(20) not null,
    NumberSlot tinyint(5) not null,
    ProductID varchar(20),
    primary key(MachineID, NumberSlot),
    CONSTRAINT MachineID foreign key (MachineID)
    references machine(MachineID),
    CONSTRAINT ProductID foreign key (ProductID)
    references product(ProductID)
);

create table if not exists admin(
	AdminID varchar(20) not null primary key,
    Pass varchar(20) not null,
    llevel tinyint(1),
    FirstName varchar(20),
    LastName varchar(20),
    Sex tinyint(1),
    Email varchar(50)
);

create table if not exists product(
	ProductID tinyint(10) not null primary key,
    ProductName varchar(20) not null,
    Picture varchar(50),
    Price tinyint(5),
    PPoint tinyint(5),
    Volume tinyint(5),
    Company varchar(50),
    Description varchar(100),
    ProPoint tinyint(5),
    ProPrice tinyint(5)
);

create table if not exists promotionRegular(
	PromotionRID varchar(20) not null primary key,
    Picture varchar(50),
    ProPrice tinyint(5),
    ProPoint tinyint(5),
    Description varchar(50),
    StartDate datetime,
    EndDate datetime,
    StartTime datetime,
    EndTime datetime,    
    ProductID varchar(20),
    AdminID varchar(20),
    CONSTRAINT ProductID foreign key (ProductID)
    references product(ProductID),
    CONSTRAINT AdminID foreign key (AdminID)
    references admin(AdminID)
);

create table if not exists promotionMember(
	PromotionMID varchar(20) not null primary key,
    Picture varchar(50),
    ProPrice tinyint(5),
    ProPoint tinyint(5),
    Description varchar(50),
    StartDate datetime,
    EndDate datetime,
    StartTime datetime,
    EndTime datetime,     
    ProductID varchar(20),
    AdminID varchar(20),
    CONSTRAINT ProductID foreign key (ProductID)
    references product(ProductID),
    CONSTRAINT AdminID foreign key (AdminID)
    references admin(AdminID)
);

create table if not exists eventtable(
	EventID varchar(20) not null primary key,
    EventName varchar(20),
    Description varchar(20),
    Picture varchar(50),
    StartDate datetime,
    EndDate datetime,
    CreateDate datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    AdminID varchar(20),
    CONSTRAINT AdminID foreign key (AdminID)
    references admin(AdminID)

);

create table if not exists recent(
	RecentID varchar(20) not null primary key,
    Time_stamp timestamp,
    MobileNum varchar(20),
    ProductID varchar(20),
    MachineID varchar(20),
    CONSTRAINT UserID foreign key (MoblieNum)
    references usertable(MobileNum),
    CONSTRAINT ProductID foreign key (ProductID)
    references Product(ProductID),
    CONSTRAINT MachineID foreign key (MachineID)
    references Machine(MachineID)

);

create table if not exists comments(
	CommentID varchar(20) not null primary key,
    Topic varchar(20),
    ProductID varchar(20),
    MachineID varchar(20),
    CONSTRAINT ProductID foreign key (ProductID)
    references Product(ProductID),
    CONSTRAINT MachineID foreign key (MachineID)
    references Machine(MachineID)    
);
SELECT * FROM usertable;