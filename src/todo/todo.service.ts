import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { createTodoDto } from './dtos/todo.dto';

@Injectable()
export class TodoService {
  constructor(private primaService: PrismaService) {}

  createTodo = async (todoData: createTodoDto): Promise<string> => {
    const todo = await this.primaService.todo.findUnique({
      where: {
        title: todoData.title,
      },
    });

    if (todo) {
      throw new HttpException(
        {
          message: 'This title has been taken',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const res = await this.primaService.todo.create({
      data: todoData,
    });

    return res.id;
  };
}
