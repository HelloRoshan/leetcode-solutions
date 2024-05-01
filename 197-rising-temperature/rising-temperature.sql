# Write your MySQL query statement below
select id as Id
from (
    select *, LAG(temperature) OVER () AS lagged_temp, LAG(recordDate) OVER () AS lagged_date
    from Weather
    order by STR_TO_DATE(recordDate,'%Y-%m-%d') asc
) as lt
where recordDate = DATE_ADD(lagged_date, INTERVAL 1 DAY) and temperature > lagged_temp
