# Write your MySQL query statement below
DELETE t1
FROM Person AS t1
INNER JOIN Person AS t2
where t1.id > t2.id and t1.email = t2.email