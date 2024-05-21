# Write your MySQL query statement below
select ifnull(
    (select salary as SecondHighestSalary
    from Employee
    group by salary
    order by salary desc
    limit 1 offset 1)
, null) as SecondHighestSalary
