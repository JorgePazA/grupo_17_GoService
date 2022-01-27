module.exports = {
  "development": {
    "username": "franAdmin",
    "password": "Adrian12234..",
    "database": "GoService",
    "host": "45.79.201.214",
    "dialect": "mysql",
    "port": "3306"
  },
  "test": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": "mysql"
  }
}
