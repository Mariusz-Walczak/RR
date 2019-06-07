import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SectionDataService } from './section-data.service';

describe ('SectionDataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  });

  it ('should be created', () => {
    const service: SectionDataService = TestBed.get (SectionDataService);
    expect (service).toBeTruthy ();
  });

});
