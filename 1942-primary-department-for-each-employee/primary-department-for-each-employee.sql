# Write your MySQL query statement below
select e.employee_id, e.department_id
from Employee e
where e.primary_flag = 'Y' or
    (e.primary_flag = 'N' and
        (select count(*) from Employee where employee_id =  e.employee_id) = 1)