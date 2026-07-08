import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TreinosService, Treino } from '../../services/treinos.services';

@Component({
  selector: 'app-treino-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treino-detalhe.html',
  styleUrl: './treino-detalhe.css'
})
export class TreinoDetalhe {
  treino: Treino | undefined;
  nivelAtivo: 'Iniciante' | 'Intermediário' | 'Avançado' = 'Iniciante';
  niveis: ('Iniciante' | 'Intermediário' | 'Avançado')[] = ['Iniciante', 'Intermediário', 'Avançado'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private treinosService: TreinosService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.treino = this.treinosService.getTreinoPorId(id);
    }
  }

  selecionarNivel(nivel: 'Iniciante' | 'Intermediário' | 'Avançado') {
    this.nivelAtivo = nivel;
  }

  exerciciosDoNivel() {
    if (!this.treino) return [];
    return this.treino.exercicios[this.nivelAtivo];
  }

  voltar() {
    this.router.navigate(['/treinos']);
  }

  abrirVideo(video?: string) {
    if (video) window.open(video, '_blank');
  }

  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }
}