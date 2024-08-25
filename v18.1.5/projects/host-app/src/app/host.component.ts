import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'host',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {
  title = 'Host Application';
  tagline = 'Welcome from the Host App!!';
}
