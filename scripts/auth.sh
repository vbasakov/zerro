
curl -X POST 'https://api.zenmoney.ru/oauth2/authorize/?client_id=g61164be3dd7521a6511ce97adc6bb&redirect_uri=http://localhost:3000&response_type=code'    \
   -H 'Content-Type: application/json'    \
   -d '{ "authType": "password", "username": "fsdg","password": "sdfgsdfg"}'


#curl 'https://api.zenmoney.ru/oauth2/authorize/?client_id=g61164be3dd7521a6511ce97adc6bb&redirect_uri=http://localhost:3000&response_type=code'
