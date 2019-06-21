import { EditarComponent } from './editar/editar.component';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

export const TarefaRoutes: Routes = [

    {
        path: '',
        component: ListarTarefaComponent
    },
    {
        path: 'listar',
        component: ListarTarefaComponent
    },
    {
        path: 'cadastrar',
        component: CadastrarComponent
    },
    {
        path: 'editar/:id',
        component: EditarComponent
    },
];