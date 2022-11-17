import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryProps } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  categoryList: CategoryProps[] = [
    {
      label: "Category 1",
      value: "category1"
    },
    {
      label: "Category 2",
      value: "category2"
    },
    {
      label: "Category 3",
      value: "category3"
    },
    {
      label: "Category 4",
      value: "category4"
    },
    {
      label: "Category 5",
      value: "category5"
    }
  ];

  myForm = this.fb.group({
    selectedCategory: [[] as CategoryProps[]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeCheckbox() {
    console.log(this.myForm.value.selectedCategory);
  }

  selectAll() {
    this.myForm.controls.selectedCategory.setValue(this.categoryList)
  }

  deselectAll() {
    this.myForm.controls.selectedCategory.setValue([]);
  }
}
