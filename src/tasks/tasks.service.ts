import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task[] {
    console.log(createTaskDto)
    let task = {
      ...createTaskDto,
      id: Date.now(),
    };
    this.tasks.push(task);
    return this.tasks;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, ...updateTaskDto } : task,
    );
    return this.findOne(id);
  }

  remove(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.findAll();
  }
}
