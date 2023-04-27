import { Component, OnInit } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  form:any;
  // value = '';
  result = '';


  constructor(private openAiService: OpenAiService, public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      input_text: ['', Validators.required],
    });
  }





  getData() {
    // const text = 'Who is the President of USA?'; // replace with your own input text
    // this.openAiService.getDataFromOpenAI(this.value);
    this.openAiService
      .getDataFromOpenAI(this.form.value.input_text)
      .subscribe((response: string) => {
        this.result = response;
      });
  }
}
