create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
    img text,
    mortgage decimal,
    rent decimal
);
insert into houses (name, address, city, state, zip, img, mortgage, rent)
values ('Jonathan', '2080 Forest Ridge Dr', 'Layton', 'UT', 84040, 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 100.23, 500.67);
select * from houses;

alter table houses
drop column if exists img;

alter table houses
drop column if exists mortgage;

alter table houses
drop column if exists rent;