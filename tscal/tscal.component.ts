import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tscal',
  templateUrl: './tscal.component.html',
  styleUrls: ['./tscal.component.scss']
})
export class TscalComponent implements OnInit {

  firstNumber: string = "";
  secondNumber: string = "";
  isOperatorClicked: boolean = false;
  display: string = "";
  selectedOperator = ""

  constructor() { }

  ngOnInit(): void {
  }

  PressNumber(val:string) {

    if (this.isOperatorClicked) {
      this.secondNumber += val;
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += val;
      this.display = this.firstNumber;
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
      console.log(this.secondNumber)
  }


  DivideOne()
  {
    let x = 1/parseInt(this.display);
    this.display = x.toString();
    this.firstNumber = this.display;

  }

  square()
  {
    let x= parseInt(this.display) * parseInt(this.display);
    this.display= x.toString();
    this.firstNumber = this.display;
  }

  squareRoot()
  {
    let x= Math.sqrt(parseInt(this.display) );
    this.display= x.toString();
    this.firstNumber = this.display;
  }


  PressOperator(val:any) {
    this.isOperatorClicked = true;
    this.display = val;
    this.selectedOperator = val;
  }


   pressplus_minus(){



let num = parseInt(this.display)
if(num < 0)
{
  num = Math.abs(num);
  this.display = num.toString();
}
else
{
  this.display = "-"+ num.toString();
}
this.setdisplayvalue();

}








  Calculate() {
    let first = parseFloat(this.firstNumber);
    let second = parseFloat(this.secondNumber)
    let res = 0;
    if (this.selectedOperator == "+") {
      res = first + second
    }
    else if(this.selectedOperator == "-")
    {
      res = first - second

    }
    else if(this.selectedOperator == "*")
    {
      res = first * second

    }
    else if(this.selectedOperator == "/")
    {
      res = first / second

    }
    this.display = res.toString()
    this.isOperatorClicked = false;
    this.firstNumber = this.display;
    this.secondNumber = ""

  }

  clear() {

    this.firstNumber = "";
    this.secondNumber = "";
    this.display = "0"
    this.isOperatorClicked = false;
    this.selectedOperator = ""
  }

  allClear() {

    this.display = '';

  }
  backspace()
  {
    let len = this.display.length
    this.display =  this.display.substring(0, len- 1)
    if(this.display.length == 0)
    {
      if(this.isOperatorClicked)
      {
      this.secondNumber = "";
      }
      else
      {
        this.firstNumber = "";
      }
    }
    else{
      this.setdisplayvalue();
    }

  }
setdisplayvalue()
{
  if(this.isOperatorClicked)
      {
      this.secondNumber = this.display;
      }
      else
      {
        this.firstNumber = this.display;
      }
}

}

