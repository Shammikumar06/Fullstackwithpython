DROP database testDb;
SHOW DATABASES;
DROP database test;
DROP database tedtDb;

CREATE database testDb;

drop database testDb;

CREATE TABLE testdb.members(members_id integer, Name varchar(100), Marks integer);

SELECT *
FROM testDb.members;

CREATE TABLE testDb.Committees(committee_id integer, Name varchar(100));

SELECT *
FROM testDb.Committees;
INSERT INTO testDb.members
VALUES(1,'kathir',90),(2,'jana',90),(3,'Shammi',95),(4,'Ram',95);
select * 
from testDb.members;

INSERT INTO testDb.Committees
VALUES(1,'kathir'),(2,'jana'),(3,'Shammi'),(4,'Ram');

select *
FROM testDb.Committees;
-- Inner Join
SELECT m.members_id, m.name as member,c.committee_id, c.name as committee
from testDb.members m
INNER JOIN testDb.committees c ON c.name =m.name;
-- left join

SELECT m.members_id, m.name as member,c.committee_id, c.name as committee
from testDb.members m
LEFT JOIN testDb.committees c USING(NAME);

-- right join
SELECT m.members_id, m.name as member,c.committee_id, c.name as committee
from testDb.members m
Right JOIN testDb.committees c ON c.name =m.name;
-- cross join
SELECT m.members_id, m.name as member,c.committee_id, c.name as committee
from testDb.members m
CROSS JOIN testDb.committees c;

SELECT * 
FROM  testDb.members
WHERE name LIKE 'S%';

