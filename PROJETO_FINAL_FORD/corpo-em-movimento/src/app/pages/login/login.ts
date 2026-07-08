import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  isCadastro = false;
  nome = '';
  email = '';
  senha = '';
  erro = '';

  aceitouTermos = false;
  modalAberto: 'termos' | 'privacidade' | null = null;

  constructor(private router: Router) {}

  alternarModo() {
    this.isCadastro = !this.isCadastro;
    this.erro = '';
  }

  abrirModal(tipo: 'termos' | 'privacidade', event: Event) {
    event.preventDefault();
    this.modalAberto = tipo;
  }

  fecharModal() {
    this.modalAberto = null;
  }

  emailValido(email: string): boolean {
    return email.includes('@') && email.includes('.');
  }

  entrar() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos!';
      return;
    }
    if (!this.emailValido(this.email)) {
      this.erro = 'Digite um email válido com @';
      return;
    }
    this.router.navigate(['/home']);
  }

  cadastrar() {
    if (!this.nome || !this.email || !this.senha) {
      this.erro = 'Preencha todos os campos!';
      return;
    }
    if (!this.emailValido(this.email)) {
      this.erro = 'Digite um email válido com @';
      return;
    }
    if (!this.aceitouTermos) {
      this.erro = 'Você precisa aceitar os Termos de Uso e a Política de Privacidade.';
      return;
    }
    alert('Cadastro realizado com sucesso!');
    this.isCadastro = false;
    this.aceitouTermos = false;
    this.erro = '';
  }
}