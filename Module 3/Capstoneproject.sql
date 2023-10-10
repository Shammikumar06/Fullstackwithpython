create database carbon_Emission;

create table Carbon_Emission.Users(
UID int PRIMARY KEY,
Name Varchar(100),
Email Varchar(100),
Password Varchar(150));

select *
from Carbon_Emission.users;

INSERT INTO Carbon_Emission.users
Values(1,'Karthi','karthi0904@mail.com','karthimag05'),
(2,'Barath','Barathpbt.mail.com','bw0201'),(3,'Dinesh','Dinu16.mail.com','dk1605');

select *
from Carbon_Emission.users;

UID int not null,
Model Varchar(100) not null,
Methof Varchar(100) not null,
trans_ce DEC(3,2)
);
