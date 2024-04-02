# encoding: utf-8

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources="/*")

@app.route("/")
def hello_flask():
    return "<h1>hello, Flask!</h1>"

# 获取本地联调测试数据
@app.route("/dev-api/code", methods=["GET"])
def getdevData():
    data = {
      "code": 200,
      "msg": '操作成功',
      "data": { 
        "name": "Sestid",
        "sex": "male",
        "age": 18,
      }
    }
    # time.sleep(20)#延迟
    return data

# 账号密码登录
@app.route("/dev-api/auth/login", methods=["POST"])
def login():
    data = {
      "code": 200,
      "msg": None,
      "data": {
        "access_token": "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2tleSI6ImE3MzJiNTAxLWJiNDEtNGJmNC1iYjdlLWJkOGI4ZTc1MGM4OSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.hRZkr9lDIZWzleMWjpZTzIhH_gebopFii4hsOlmxOGoldVwghRksSFr6T_sswmLStUY_UvV_X9GzmuNK6U8qtA",
        "permissions": ["*:*:*"],
        "expires_in": 720,
        "user": {
          "createBy": "admin",
          "createTime": "2023-04-12 03:00:23",
          "updateBy": None,
          "updateTime": None,
          "remark": "管理员",
          "userId": 1,
          "deptId": None,
          "userName": "admin",
          "nickName": "admin",
          "ancestors": None,
          "email": "sestid@163.com",
          "phonenumber": "15888888888",
          "sex": "man",
          "avatar": "",
          "password": "$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2",
        }
      }
    }

    # time.sleep(20)#延迟
    return data

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8002, threaded=True)
