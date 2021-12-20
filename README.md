`nodejs` `mongodb` `express` `API-REST` `Dominio deployment`

# Solution: Yaiser Avila Rodríguez
<p>
CRUD REST-API with Nodejs, Express and MongoDB deployed using Clouding.io, nginx and certbot. 
</p>

<hr/>

## Deployment dom: https://yaigenes.cat

<hr/>

## Repo: https://github.com/YaiGenes/node_API_REST.git

<hr/>

## API-CRUD Documentation
<p>
We can test and interact with the API any POSTMAN type app or with VS code pluggins like ThunderClient or REST_Server. 
</p>

### GET
- [get-all](https://yaigenes.cat/api/tasks) --- https://yaigenes.cat/api/tasks
- [get-by-title](https://yaigenes.cat/api/tasks?title=test3) --- https://yaigenes.cat/api/tasks?title=test3
- [get-pagination](https://yaigenes.cat/api/tasks?page=1&size=5) --- https://yaigenes.cat/api/tasks?page=1&size=5
- [get-by-id](https://yaigenes.cat/api/tasks/61bfc706f53ca098e97efb7d) --- https://yaigenes.cat/api/tasks/61bfc706f53ca098e97efb7d
- [get-all-done](https://yaigenes.cat/api/tasks/done) --- https://yaigenes.cat/api/tasks/done

### POST
- [post](https://yaigenes.cat/api/tasks) --- https://yaigenes.cat/api/tasks -> Content-Type: application/json

{
  "title": "test3",
  "description": "this is the test3",
  "done": true
}

### PUT
- [update](http://localhost:5000/api/tasks/61bfc706f53ca098e97efb7d) --- http://localhost:5000/api/tasks/61bfc706f53ca098e97efb7d  -> Content-Type: application/json

{
  "description": "like a frog in the pond"
}

### DELETE

- [delete](https://yaigenes.cat/api/tasks/61bfc6f0f53ca098e97efb79) --- https://yaigenes.cat/api/tasks/61bfc6f0f53ca098e97efb79

<hr/>
<hr/>
<hr/>

