import { Component, OnInit } from '@angular/core';
import { IsabelatasksService } from '../isabelatasks.service';

@Component({
  selector: 'app-isabelahome',
  templateUrl: './isabelahome.component.html',
  styleUrls: ['./isabelahome.component.css'],
})
export class IsabelahomeComponent implements OnInit {
  constructor(public isabelaTarefas: IsabelatasksService) {}

  ngOnInit() {}
  total = this.isabelaTarefas.getTarefas().length;
}
