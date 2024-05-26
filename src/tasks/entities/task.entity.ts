export enum Status {
    Pending = 0,
    Completed = 1
}

export class Task {
    id: number;
    description: string;
    status: Status
}
