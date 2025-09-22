# Module 3 Quiz (10 questions)

1) A simple local database ideal for prototyping is…  
A. Oracle  B. SQLite  C. DynamoDB  D. Bigtable

2) A good reason to keep a Data Access Layer (DAL) is…  
A. To hide errors  B. To increase coupling  C. To swap storage/adapters  D. To remove tests

3) CSV import should…  
A. Trust all fields  B. Validate rows and report errors  C. Drop invalid silently  D. Modify the schema

4) An index on `created_at` and `segment` helps…  
A. Rendering CSS  B. Faster filtering  C. Lower token costs  D. Remove latency

5) T/F: Domain logic (like scoring) should be pure and independent of the DB.

6) T/F: SQLite can live in a single file and is fine for small single-user apps.

7) Which is the best response for partial import failures?  
A. 200 with a summary of successes/errors  
B. 500 with stack trace  
C. 204 no content  
D. 302 redirect

8) To support text search you can…  
A. Fetch everything and filter on client always  
B. Add a `LIKE` query on message  
C. Store only numbers  
D. Disable search

9) In tests, it’s best to…  
A. Use production DB  B. Use a temp DB per run  C. Skip DB tests  D. Only unit test

10) DAL boundaries should be…  
A. Leaky  B. Hard-coded singletons  C. Passed in/injected  D. Duplicated
