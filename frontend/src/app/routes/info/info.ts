import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.scss',
})
export class Info {
  about =
    'mapjam.net is an open-source platform for hosting MapJam maps and efficiently managing community voting.';
  host = 'To apply for an admin account, you first must meet certain qualifications.';
}
