import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { Status } from "../entities/task.entity";

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    @IsEnum([Status.Pending, Status.Completed], {message: "Status should be 0 or 1"})
    status: Status;
}
