import { Body, Controller, Post } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { createTodoDto } from './dtos/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('')
  createTodo(@Body() body: createTodoDto): Promise<string> {
    return this.createTodo(body);
  }
}
