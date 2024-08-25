import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'remote',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './remote-app.component.html',
  styleUrl: './remote-app.component.scss'
})
export class RemoteComponent {
  title = 'Remote App';
  tagline = 'Welcome from the Remote App';
}
