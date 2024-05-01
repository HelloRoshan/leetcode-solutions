# Write your MySQL query statement below
select St.student_id, St.student_name, Sub.subject_name
, count(E.subject_name) as attended_exams
from Students as St
join Subjects as Sub
left join Examinations as E
on St.student_id = E.student_id and Sub.subject_name = E.subject_name
group by St.student_id, Sub.subject_name
order by St.student_id, Sub.subject_name
