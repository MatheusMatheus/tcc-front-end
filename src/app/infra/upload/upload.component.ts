import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from 'primeng';
import {AbstractControleValueAccessor} from '../AbstractControleValueAccessor';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [MessageService]
})
export class UploadComponent extends AbstractControleValueAccessor implements OnInit {

  uploadedFiles: any[] = [];

  @Input()
  label ?: string;

  constructor(private messageService: MessageService) {
    super();
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  ngOnInit(): void {
  }

}
