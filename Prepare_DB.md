# Prepairing the Database
```shell
mysql -u root -p --port 8090
```

Do the following as root user

```mysql
create database shoppingappdb;
create user shopAdmin identified with mysql_native_password by 'wrong_password';
use shoppingappdb;
grant all privileges on shoppingappdb.* to 'shopAdmin';
flush privileges;
```
