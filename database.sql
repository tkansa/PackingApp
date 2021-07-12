create database travellist;

use travellist;

create table categories (
id int not null auto_increment primary key,
category varchar(100)

);

create table userlists (
userlistsId int not null auto_increment,
PRIMARY KEY (userlistsId),
username varchar(50),
userlisttitle varchar(90) 
);

create table itemslist (
itemslistId int not null auto_increment primary key,
itemname varchar(75),
itemcategory varchar(100),
userlistsId int,
FOREIGN KEY (userlistsId) REFERENCES userlists(userlistsId)
);

insert into categories (category) values ('camping');
insert into categories (category) values ('beach');
insert into categories (category) values ('flight');

insert into userlists (username, userlisttitle) values ('chelsea', 'My first camping trip' );
insert into userlists (username, userlisttitle) values ('chelsea', 'My trip to the beach');
insert into userlists (username, userlisttitle) values ('david', 'My hiking trip');

insert into itemslist (itemname, itemcategory, userlistsId) values ('tent', 'camping', '1' );
insert into itemslist (itemname, itemcategory, userlistsId) values ('pillow', 'camping', '1' );
insert into itemslist (itemname, itemcategory, userlistsId) values ('frisbee', 'beach', '2' );
insert into itemslist (itemname, itemcategory, userlistsId) values ('water bottle', 'camping', '3' );
insert into itemslist (itemname, itemcategory, userlistsId) values ('hiking boots', 'camping', '3' );

select * from userlists where username = "chelsea" and userlisttitle = "My first camping trip";
select itemslist from userlists where userlistsId = '1';
