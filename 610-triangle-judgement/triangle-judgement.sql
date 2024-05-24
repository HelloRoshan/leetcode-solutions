# Write your MySQL query statement below
select *,
case 
when sign(x) = -1 or sign(y) = -1 or sign(z) = -1 then 'No'
when x + y > z and x + z > y and y + z > x then 'Yes'
else 'No'
end as triangle
from Triangle