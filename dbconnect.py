import MySQLdb

#╔════════════════════════════════════════════════════════════════════════════╗
db = MySQLdb.connect(                                                        #║
    host = '127.0.0.1',                                                      #║
    user = 'root',                                                           #║
    passwd = 'root',                                                         #║
    db = 'dcard',                                                            #║
    port = 3306,                                                             #║
    charset = 'utf8'                                                         #║
)                                                                            #║
try:                                                                         #║
    cursor = db.cursor()                                                     #║
    print("success")                                                         #║
except:                                                                      #║
    print("error")                                                           #║
cursor.execute('SET NAMES utf8mb4')                                          #║
dcard_cursor.execute("SET CHARACTER SET utf8mb4")                            #║
dcard_cursor.execute("SET character_set_connection=utf8mb4")                 #║ 
#╚════════════════════════════════════════════════════════════════════════════╝db_connect