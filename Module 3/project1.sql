CREATE DATABASE test;
SHOW DATABASES;
CREATE TABLE test.Marks(ID integer, Name varchar(100), Marks integer);
-- Print a Table
SELECT * FROM test.Marks;
-- Insert into table
INSERT INTO test.Marks
Values(001, 'Shammi',94);
SELECT * FROM test.Marks;
-- alter a column
ALTER TABLE test.Marks
ADD Mentor varchar(100);
-- Print a Table
SELECT * FROM test.Marks;
-- add a primary Key
ALTER TABLE test.Marks
ADD primary key(ID);

-- Describe a table
DESCRIBE test.Marks;
-- to create Index
CREATE INDEX new_index
ON test.Marks(Name);
SELECT * FROM test.Marks;
-- Where Clause
SELECT Name
FROM test.Marks
WHERE Marks<80;
SELECT Name 
FROM test.Marks
WHERE MARKS>80;
-- Count rows in table
SELECT COUNT(*)
FROM test.Marks;

INSERT INTO test.Marks
Values(002, 'Jana',90,'rthanan');
SELECT * FROM test.Marks;
-- Order by Clause
SELECT *
FROM test.Marks
ORDER BY  NAME ASC;
-- Order By Clause
SELECT *
FROM test.Marks
ORDER BY  NAME DESC;


