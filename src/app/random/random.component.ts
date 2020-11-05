import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  public ckEditor = ClassicEditor;
  editorForm: FormGroup;
  content: string;

  editorStyle = {
    height: '250px',
    width: '800px',
    backgroundColor: '#ffffff'
  }

  config = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'] 
    ]
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editorForm = this.fb.group({
      editor: ['<p>Hola a todos</p>', []]
    })
  }

  onSubmit(): void {
    this.content = this.editorForm.get('editor').value;
    console.log(this.content);
  }

}
