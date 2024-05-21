# Write your MySQL query statement below
select e1.employee_id, e1.name,
(select count(employee_id) from Employees where reports_to = e1.employee_id) as reports_count,
round((select avg(age) from Employees where reports_to = e1.employee_id)) as average_age
from Employees e1
where (select count(employee_id) from Employees where reports_to = e1.employee_id) > 0
order by e1.employee_id;