use db;
drop table usertable;
create table if not exists usertable(
	MobileNum varchar(10) not null primary key,
    Pass varchar(20) not null,
    FirstName varchar(20) ,
    LastName varchar(20),
    Sex tinyint(1),
    Ppoint tinyint(5) default 0,
    Email varchar(50)
	
);

drop table machine;
drop table slot;
create table if not exists machine(
	MachineID tinyint(10) not null primary key,
    Description varchar(50),
    PlaceID tinyint(10),
    ManufacturedDate datetime,
    Sales smallint(6),
    mstatus tinyint(1),
    AdminID varchar(20), 
    MachineType tinyint(10),
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP on update current_timestamp,
    FOREIGN KEY (AdminID) REFERENCES admin(AdminID),
    foreign key (MachineType) references type_machine(MachineType)
);

create table if not exists type_machine(
	MachineType tinyint(10) not null primary key,
    Slots tinyint(5),
    CapacityPerBlock tinyint(5)

);

create table if not exists slot(
	MachineID tinyint(10) not null,
    NumberSlot tinyint(5) not null,
    ProductID tinyint(10),
    primary key(MachineID, NumberSlot),
    foreign key (MachineID) references machine(MachineID),
    foreign key (ProductID) references product(ProductID)
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

create table if not exists place(
	PlaceID tinyint(10) not null primary key,
	PlaceName varchar(50),
    latitude float(10,6),
    longitude float(10,6)
);
drop table place;
create table if not exists product(
	ProductID tinyint(10) not null primary key,
    ProductName varchar(20) not null,
    Picture varchar(100),
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
    foreign key (ProductID)
    references product(ProductID),
    foreign key (AdminID)
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
    foreign key (ProductID)
    references product(ProductID),
    foreign key (AdminID)
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
    foreign key (AdminID) references admin(AdminID)

);
drop table recent;
create table if not exists recent(
	RecentID tinyint(20) not null primary key auto_increment,
    MobileNum varchar(10),
    ProductID tinyint(10),
    MachineID tinyint(10),
	created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    foreign key (MobileNum) references usertable(MobileNum),
    foreign key (ProductID) references product(ProductID),
    foreign key (MachineID) references machine(MachineID)

);
drop table comments;
create table if not exists comments(
	CommentID tinyint(20) not null primary key auto_increment,
    Topic varchar(40),
    Detail varchar(200),
    ProductID tinyint(10),
    MachineID tinyint(10),
    foreign key (ProductID)
    references product(ProductID),
    foreign key (MachineID)
    references machine(MachineID)    
);
SELECT * FROM comments;