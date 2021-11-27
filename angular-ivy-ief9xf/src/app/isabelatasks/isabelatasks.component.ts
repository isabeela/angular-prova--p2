import { Component, OnInit } from '@angular/core';
import { IsabelatasksService } from '../isabelatasks.service';

@Component({
  selector: 'app-isabelatasks',
  templateUrl: './isabelatasks.component.html',
  styleUrls: ['./isabelatasks.component.css'],
})
export class IsabelatasksComponent implements OnInit {
  constructor(public isabelaTarefas: IsabelatasksService) {}

  ngOnInit() {}

  input: '';
}
