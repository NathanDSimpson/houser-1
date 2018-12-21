-- JUST IN CASE YOU NEED TO RESTART
drop table if exists houses;

-- INITIAL TABLE CREATION
create table houses(
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip integer,
);

-- ADD IMG, MORTGAGE, RENT COLUMNS
alter table houses
add column img text,
add column mortgage decimal,
add column rent decimal;

-- DUMMY DATA
insert into houses (name, address, city, state, zip, img, mortgage, rent)
values ('Jonathan', '2080 Forest Ridge Dr', 'Layton', 'UT', 84040, 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 100.23, 500.67);
insert into houses (name, address, city, state, zip, img, mortgage, rent)
values ('Jonathan2', '2222080 Forest Ridge Dr', '2Layton', 'UT', 84040, 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 100.23, 500.67);
insert into houses (name, address, city, state, zip, img, mortgage, rent)
values ('Jonathan3', '3332080 Forest Ridge Dr', '3Layton', 'UT', 84040, 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 100.23, 500.67);
insert into houses (name, address, city, state, zip, img, mortgage, rent)
values ('Jonathan4', '4442080 Forest Ridge Dr', '4Layton', 'UT', 84040, 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260', 100.23, 500.67);
