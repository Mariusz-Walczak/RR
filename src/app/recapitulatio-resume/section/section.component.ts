import { Component, OnInit, Input } from '@angular/core';
import { SectionDataService } from '../shared/providers/section-data.service';
import { DataResponse } from '../shared/interfaces/data-response';

@Component ({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: [ './section.component.scss' ]
})
export class SectionComponent implements OnInit {

  public response;
  private displayedColumns: string[] = [];
  @Input() serviceName: string;

  constructor (private sectionData: SectionDataService) {
  }

  ngOnInit () {
    if (this.serviceName) {
      this.sectionData.getData (this.serviceName).subscribe ((data) => {
        this.response = { ...data };
        if (this.response.type === 'table') {
          this.getTableData ();
        }
      });
    }
  }

  private getTableData () {
    const response = Object.keys(this.response.config);
    for (const key of response ) {
      this.displayedColumns.push (key);
    }
  }

}
