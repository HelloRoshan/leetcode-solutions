# Write your MySQL query statement below
select p.product_id, ifnull(round(sum(un.units*p.price)/sum(un.units), 2), 0) as average_price
from Prices as p
left join UnitsSold as un
on p.product_id = un.product_id and (un.purchase_date >= p.start_date and un.purchase_date <= p.end_date )
group by p.product_id