import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IsabelahomeComponent } from './isabelahome/isabelahome.component';
import { IsabelatasksComponent } from './isabelatasks/isabelatasks.component';
import { IsabelatasksService } from './isabelatasks.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'home', component: IsabelahomeComponent },
      { path: 'tarefas', component: IsabelatasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IsabelahomeComponent,
    IsabelatasksComponent,
  ],
  bootstrap: [AppComponent],

  providers: [IsabelatasksService],
})
export class AppModule {}
