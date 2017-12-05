create database pets3309;
use pets3309;

create table stores (
storeID int not null auto_increment, 
phoneNumber varchar(15) not null, 
email varchar(60) not null,
primary key(storeID));

create table employee (
EID int not null auto_increment, 
Ename varchar(50) not null, 
phoneNumber varchar(15) not null, 
email varchar(60) not null, 
storeID int not null,
primary key(EID),
foreign key(storeID) references stores(storeID));

create table customer (
memberID int not null auto_increment, 
points int not null, 
phoneNumber varchar(15) not null, 
email varchar(60) not null,
primary key(memberID));

create table Stransaction (
TID int not null auto_increment, 
memberID int not null, 
storeID int not null, 
Tdate datetime not null,
primary key(TID),
foreign key(memberID) references customer(memberID),
foreign key(storeID) references stores(storeID));

create table items (
ItemID int not null, 
price decimal(7,2) not null, 
stock int not null, 
storeID int,
primary key(ItemID, storeID),
foreign key(storeID) references stores(storeID));

create table animal (
className varchar(30) not null, 
lifeSpan int not null, 
size varchar(6) not null, 
weight int not null, 
trainability int not null, 
playfulness int not null,
primary key(className));

create table pet (
PetID int not null auto_increment, 
className varchar(30), 
pName varchar(30) not null, 
age int not null, 
price decimal(7,2) not null, 
storeID int, 
spayedNeutered boolean not null,
primary key(PetID),
foreign key(storeID) references stores(storeID),
foreign key(className) references animal(className));

create table transactionInst (
InstID int not null auto_increment, 
TID int not null, 
PetID int not null, 
ItemID int not null,
primary key(InstID),
foreign key(TID) references Stransaction(TID),
foreign key(PetID) references pet(PetID),
foreign key(ItemID) references items(ItemID));

