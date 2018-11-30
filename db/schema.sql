create database burgers_db;
use burgers_db;
create table burgers(
    id int(10) not null auto_increment,
    burger_name varchar(75),
    devoured boolean not null default false,
    primary key (id)
);
