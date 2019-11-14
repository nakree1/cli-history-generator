# history-generator
SQL command generator for creating user history. Built with Node.js

### Build command
```
npm run build
```

### Usage: 
```
-s <start_date> -t <target_id> -f <filename> --rate_i <min> <max> --rate_s <min> <max>
```

### Options
```
  --help                    Show help                                  [boolean]
  --version                 Show version number                        [boolean]
  -s, --start               Start date. Format YYYY-MM-DD.   [string] [required]
  -t, --target              Target id                        [number] [required]
  -f, --filename            Name for generated file                     [string]
  --rate_i, --importance    [min, max] values for importance             [array]
  --rate_s, --satisfaction  [min, max] values for satisfaction           [array]
```

### Input:
```
./history-generator-app -s 2019-11-01 -t 123 --rate_s 5 1 --rate_i 1 9
```

### Output
#### File 2019-11-01_123.txt
```
...
insert into history_history (created, updated, date, ctru_score, importance, satisfaction,  target_id) values (to_timestamp('2019-11-14', 'YYYY-MM-DD'), to_timestamp('2019-11-14', 'YYYY-MM-DD') , '2019-11-04', 5, 6 , 4, 123);
insert into history_history (created, updated, date, ctru_score, importance, satisfaction,  target_id) values (to_timestamp('2019-11-14', 'YYYY-MM-DD'), to_timestamp('2019-11-14', 'YYYY-MM-DD') , '2019-11-05', 3.5, 5 , 2, 123);
insert into history_history (created, updated, date, ctru_score, importance, satisfaction,  target_id) values (to_timestamp('2019-11-14', 'YYYY-MM-DD'), to_timestamp('2019-11-14', 'YYYY-MM-DD') , '2019-11-06', 4.5, 6 , 3, 123);
...
```
