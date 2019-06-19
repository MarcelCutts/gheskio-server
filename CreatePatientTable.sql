CREATE TABLE patients
(
    [receive_ip] [nvarchar](50) NULL,
    [receive_time] [nvarchar](50) NULL,
    [app_name] [nvarchar](50) NULL,
    [token_id] [nvarchar](50) NULL,
    [event_time] [nvarchar](50) NULL,
    [comments] [nvarchar](50) NULL,
    [event_type] [nvarchar](50) NULL,
    [worker_id] [nvarchar](50) NULL,
    [station_id] [nvarchar](50) NULL,
    [facility_id] [nvarchar](50) NULL
) ON [PRIMARY];


CREATE TABLE patients
(
    id INT PRIMARY KEY IDENTITY (1, 1),
    patient_code NVARCHAR (50) NOT NULL,
    comments NVARCHAR (1024) NOT NULL,
    time_started DATETIME NOT NULL,
    time_finished DATETIME,
    staff_name NVARCHAR (128) NOT NULL,
    station_id NVARCHAR (64) NOT NULL,
    facility_id NVARCHAR (64) NOT NULL
);