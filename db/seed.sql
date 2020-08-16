drop database if exists organization;

create database organization;

use organization;

create table department (
	id int not null auto_increment primary key,
    department varchar(30) not null
);

create table role (
	id int not null auto_increment primary key,
    title varchar(30) not null,
    salary decimal(10,2) not null,
    department_id int not null
);

create table employee (
	id int not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int
);

insert into department (department) 
	values
		("sales"),
        ("finance"),
        ("engineering"),
        ("legal"),
        ("human resources");
        
insert into role (title, salary, department_id) 
	values
		("sales rep", 80000, 1),
		("sales manager", 100000, 1),
        ("accountant", 125000, 2),
        ("finance director", 170000, 2),
        ("software engineer", 120000, 3),
        ("lead engineer", 150000, 3),
        ("lawyer", 190000, 4),
        ("legal team lead", 250000, 4),
        ("HR representative", 100000, 5),
        ("HR manager", 140000, 5);
        
insert into employee (first_name, last_name, role_id) 
	values
		("nathan", "hall", 6),
		("josh", "smith", 10),
        ("shawn", "bush", 8),
        ("ingrid", "hall", 4),
        ("tad", "walters", 2);
        
insert into employee (first_name, last_name, role_id, manager_id) 
	values
		("matthew", "hoelter", 5, 1),
		("paula", "skaggs", 9, 2),
        ("dylan", "doetch", 7, 3),
        ("kristen", "hallen", 3, 4),
        ("steph", "izard", 1, 5);