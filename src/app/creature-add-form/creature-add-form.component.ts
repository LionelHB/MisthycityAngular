import { Component } from '@angular/core';


@Component({
  selector: 'ns-creature-add-form',
  templateUrl: './creature-add-form.component.html',
  styleUrls: ['./creature-add-form.component.scss']
})
export class CreatureAddFormComponent {
  creatureName: string = ''; 
  creatureStory: string = ''; 

  submitForm() {
    console.log('Nom de la créature :', this.creatureName);
    console.log('Histoire de la créature :', this.creatureStory);

    this.creatureName = '';
    this.creatureStory = '';
  }
}
