import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from 'src/app/tools/modal/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'ns-profil-user-nft',
  templateUrl: './profil-user-nft.component.html',
  styleUrls: ['./profil-user-nft.component.scss']
})
export class ProfilUserNftComponent {
  constructor(private dialog: MatDialog) {}

  openDeleteConfirmationModal() {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      data: { message: 'Êtes-vous sûr de vouloir supprimer ?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      } else {
      }
    });
  }
}
