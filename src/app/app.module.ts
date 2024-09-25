import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ContentComponent } from './components/content/content.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TestComponent } from './components/test/test.component';
import { TarefasComponent } from './components/tarefa/tarefa.component';
import { Tarefa2Component } from './components/tarefa2/tarefa2.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContentComponent,
    RodapeComponent,
    TestComponent,
    TarefasComponent,
    Tarefa2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
