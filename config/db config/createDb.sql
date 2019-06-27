
-- Database  Tow Ducktivity



-- Create user Table

CREATE TABLE users (

  id SERIAL PRIMARY KEY,
  user_name VARCHAR(30),
  email VARCHAR(30),
  user_password VARCHAR(30)
)

-- Create the  emoloyee table 

CREATE TABLE employees (

  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30) NOT NULL,
  date_of_birth DATE,
);

-- Create Customer Table

CREATE TABLE customers (

  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  cust_address VARCHAR(100),
  cust_city VARCHAR(30),
  cust_state VARCHAR(2),
  cust_zip VARCHAR(5)
  cell_number VARCHAR(12),
  cust_email VARCHAR(64)
);


-- Creat Billto table

CREATE TABLE bill_to (

  id SERIAL PRIMARY KEY,
  acc_name VARCHAR(30),
  acc_address VARCHAR(64),
  phone VARCHAR(20),
  contact_person VARCHAR(30)
);

-- Services Performed Table

CREATE TABLE services (

  id SERIAL PRIMARY KEY,
  services VARCHAR(30),
  rate DECIMAL(6,2)
);

-- Call table

CREATE TABLE calls (

  id SERIAL PRIMARY KEY,

);