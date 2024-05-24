# Write your MySQL query statement below
select
start.machine_id,
round(
    (sum(end.timestamp - start.timestamp))
    /(count(distinct start.process_id))
    , 3) as processing_time
from (
    select *
    from Activity
    where activity_type="start"
) as start
join (
    select *
    from Activity
    where activity_type="end"
) as end
on start.machine_id = end.machine_id and start.process_id = end.process_id
group by start.machine_id

