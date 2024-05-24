# Write your MySQL query statement below
select p.product_name, sum(o.unit) as unit
from Products p
right join Orders o
on o.product_id = p.product_id
where extract(year_month from o.order_date) = '202002'
group by p.product_name
having sum(o.unit) >= 100;