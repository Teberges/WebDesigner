import { Component } from '@angular/core';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefasComponent {
  tarefas: Tarefa[] = [
    { descricao: 'Estudar Nada', concluida: false },
    { descricao: 'Fazer compras na Loja', concluida: true },
    { descricao: 'Ler um Desenho', concluida: false },
    { descricao: 'Praticar exercícios', concluida: true },
    { descricao: 'Cozinhar', concluida: false }
  ];

  alternarConcluida(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}

