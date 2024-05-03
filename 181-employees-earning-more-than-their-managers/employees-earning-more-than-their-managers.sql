# Write your MySQL query statement below
select name as Employee
from Employee e
where salary > (
    select me.salary
    from Employee me
    where me.id = e.managerId
)