import { Injectable } from '@angular/core';

interface Lista {
  id: number;
  name: String;
}

@Injectable()
export class IsabelatasksService {
  constructor() {}

  private list: Lista[] = [];

  getTarefas() {
    return this.list;
  }

  addTarefas(text: String) {
    this.getTarefas().push({
      id: new Date().getTime(),
      name: text,
    });
  }

  removerTarefas(id: number) {
    const tarefas = this.getTarefas();
    tarefas.splice(tarefas.indexOf(tarefas.find((el) => el.id == id))), 1;
  }
}
