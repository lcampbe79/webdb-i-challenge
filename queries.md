# Database Queries

## Find all customers with postal code 1010
```
SELECT * FROM [Customers]
Where PostalCode = '1010';
```

## Find the phone number for the supplier with the id 11
```
SELECT Phone FROM [Suppliers]
where SupplierID = 11;
```

## List first 10 orders ever places, descending by the order date
```
SELECT * FROM [Orders]
where OrderDate order by OrderDate desc
limit 10;
```

## Find all customers that live in London, Madrid, or Brazil
```
SELECT * FROM [Customers]
where country = 'Brazil' or city = 'London' or city = 'Madrid'
```

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
```
insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country) 
values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')
```

## Update Bilbo Baggins record so that the postal code changes to "11122"
```
--UPDATE Customers SET PostalCode = '11122'
select * from Customers
where ContactName = "Bilbo Baggins"
```

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
```
--returns 69
SELECT Distinct City FROM [Customers]
SELECT count (Distinct City) FROM [Customers] adds the count
```

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
```
--11 records
SELECT SupplierName FROM Suppliers WHERE LENGTH(SupplierName) > 20
SELECT * FROM Suppliers WHERE LENGTH(SupplierName) > 20 //gives all columns
```
