---
title: "Clickhouse for business intelligence and web analytics"
date: "2023-12-22"
tag: "Business Intelligence"
image: "/clickhouse.jpeg"
permalink: "clickhouse-for-business-intelligence-and-web-analytics"
excerpt: "How to import MySQL data in Clickhouse for fast business intelligence analysis of large data sets."
---

Most web analytics self-hosted platforms like Matomo, Umami and others offer the unique opportunity to build custom analysis dashboards using business intelligence tools like Metabase.

Unfortunately, when collecting large volumes of data in busy sites and for a long period of time, the regular database engines used by these platforms such as MySQL don't perform well at all when performing complex queries that include joins of multiple tables.

This is indeed required when analyzing Matomo data which is spread across multiple tables, and the data schema in Matomo can't be customized.

Clickhouse offers an easy solution to the performance issues when doing SELECT and JOIN queries in Metabase agains MySQL tables.

Clickhouse is a vertical column database that – in my experience – performs 5x to 10x time faster when querying large data sets in Metabase. It's syntax and many of its data types are MySQL compatible and Metabase offers a custom module to connect a Clickhouse database as data source.

The connection to Clickhouse databases in Metabase is very simple and only requires the connection details once the Docker container has been upgraded with the custom Clickhouse module.

Clickhouse offers an interesting feature for compatibility with other database engines. The MySQL engine connects to any MySQL table directly and performs the query as any MySQL client would do. This is especially important when a client connects to Clickhouse and some of the data has to be collected in real time from MySQL.

An example of Clickhouse MySQL engine table creation query is:

CREATE TABLE mysql_data
(
`entity_id` UInt64,
`object` Nullable(String),
`property` Nullable(String),
`value` Float64,
`at` DateTime
)
ENGINE = MySQL('127.0.0.1:3306', 'db', 'table', 'usr', 'pwd')
In terms of performance – this method is only viable for simple queries and smaller data sets. The querying performance is still affected by the underlying MySQL performance as each query is performed on MySQL by Clickhouse in real time.

Import data from MySQL in Clickhouse
The best solution to query large data sets in Clickhouse is to incrementally import the MySQL data based on the last ID in Clickhouse. This will perform 5 to 10 times faster in Metabase dashboards and also avoid slow JOIN queries to time out given the 30 seconds default timeout in Metabase.

Steps
Create a MySQL engine table in Clickhouse to connect to the origin MySQL table in real time
Create a MergeTree table in Clickhouse using the same schema as the MySQL origin table and convert the MySQL data types into Clickhouse data types
Insert all the origin MySQL data into the Clickhouse table
Create a version of the same Clickhouse query to only insert the newly updated records
Schedule the data import with the tool of your choice. A cron to execute the query using the Clickhouse client is a valid option.
Create the MySQL engine table in Clichouse
CREATE TABLE mysql_data
(
`entity_id` UInt64,
`object` Nullable(String),
`property` Nullable(String),
`value` Float64,
`at` DateTime
)
ENGINE = MySQL('127.0.0.1:3306', 'db', 'table', 'usr', 'pwd')
Create the MergeTree table in Clickhouse
CREATE TABLE default.data
(
`entity_id` UInt64,
`object` String,
`property` String,
`value` Float64,
`at` DateTime
)
ENGINE = MergeTree
ORDER BY (entity_id, object, property, value, at)
SETTINGS index_granularity = 8192
Insert data in the MergeTree table
INSERT INTO data SELECT * FROM mysql_data
Query to insert newer data incrementally
INSERT INTO data SELECT * FROM mysql_data WHERE id > lastid
This assumes that lastid is your Clickhouse key field newest value.

Metabase can now be used to JOIN large tables in large data sets and perform well with years worth of web analytics data from platforms like Matomo.

Just keep in mind that Clickhouse is memory hungry as it performs its queries in memory, so make sure that either the hosted or self-hosted Clickhouse database has got enough resources to perform the queries based on the amount of data to be queried in business intelligence.