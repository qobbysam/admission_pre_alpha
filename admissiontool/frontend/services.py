

def getContentVerify(request, token): 

    user_info = {
        'name': str(request.user),
        'address': "address information",
        'position': "position" ,
        'avatar': "https://url",
    }

    token = 'Authorization:' + str(token)

    expireAt = "time now plus 50 mins or what we will set"

    message = "message"

    code = 0

    one_permission = {
        'id': 'admin',
        'operation': ['add', 'edit', 'delete']
    }
    permissions = [one_permission,]

    one_role = {
        'id': 'admin',
        'operations': ['add', 'edit', 'delete']
    }

    roles = [one_role,]

    
    content = {
            'code': code,
            'user': user_info,
            'token': token,
            'expireAt': expireAt,
            'message': message,
            'permissions': permissions,
            'roles': roles

        }



    return content