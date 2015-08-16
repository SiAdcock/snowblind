'use strict';

import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import compose from 'koa-compose';

let nextId = 1000;
const createTodo = (text) => {
  return {
    text: text,
    id: ++nextId
  };
};
let state = {
  todos: [createTodo('Default Item')]
};

const router = koaRouter()
  .post('/addForm', function *() {
    let todo = createTodo(this.request.body.text);

    state.todos.push(todo);
    this.body = JSON.stringify(todo);
    this.redirect('/');
    this.status = 302;
  })
  .post('/add', function *() {
    let todo = createTodo(this.request.body.text);

    state.todos.push(todo);
    this.body = JSON.stringify(todo);
  })
  .get('/', function *() {
    this.body = JSON.stringify(state.todos);
  });

const app = koa();

app.use(bodyparser())
  .use(router.routes());

export default function() {
  return compose(app.middleware);
}
