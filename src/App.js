import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var n = 1;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {  merge: false,
                    firstMergeCell: "",
                    cols: 1,
                    rows: 1,
                    tr: [[{value: " ", id: Date.now()}]]
                  };
  }

  createTable(){
    var tr =[];
    for (var i = 0; i < parseInt(document.getElementById('cols').value); i++) {
      var td =[];
      for (var j = 0; j < parseInt(document.getElementById('rows').value); j++) {        
       td.push( { value: " ", id: n++})
      }
      tr.push(td);
    }
    this.setState({tr: tr,
                  cols: parseInt(document.getElementById('cols').value),
                  rows: parseInt(document.getElementById('rows').value)});
  }

  addColumn(){
    this.setState({cols:this.state.cols+1});
    var tr = this.state.tr;
    console.log(tr[this.state.cols-1]);
    tr[this.state.cols] = [];
    for (var i = 0; i < this.state.rows; i++) {
      tr[this.state.cols].push({ value: " ", id: n++});
    }
    this.setState({tr: tr });    
  }

  addRow(){
    this.setState({rows: this.state.rows+1});
    var tr = this.state.tr;
    for (var i = 0; i < this.state.cols; i++) {
      tr[i].push({ value: " ", id: n++});
    }
    this.setState({tr: tr });
  }

  merge(){
    this.setState({merge: true})
  }

  mergeCells(el){
    if(this.state.merge){
      if(this.state.firstMergeCell){
        e
      } else{
        this.setState({firstMergeCell: el.id })
      }
    }
  }

  render() {
    return (
      <div className="App">
          <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="title">React - Create - Table - App</h1>
            <hr/>
          </header>
          <main className="main">
          <input type="number" id="cols"/>
          X
          <input type="number" id="rows"/>
          <input type="button" value="create table" onClick={this.createTable.bind(this)}/>
          <section className="actions">
            <button id="addRow" onClick={this.addRow.bind(this)}>Add Column</button>
            <button id="addCol" onClick={this.addColumn.bind(this)}>Add Row</button>
            <button id="merge" onClick={this.merge.bind(this)}>Merge cells</button>
            <button id="split">Split cell</button>
          </section>
          <table className='table'>
          <tbody>
             {this.state.tr.map((tr,i) =>
              (
                <tr className="tr" key={i}>
                  {tr.map((td,j) =>(
                    <td className="tb" key={td.id} 
                      onClick={this.mergeCells(td)}>
                      <textarea cols="15" rows="5"></textarea>
                    </td>
                  ))}
                </tr>
              )
             )}  
          </tbody>
      </table>
      </main>
      </div>
    );
  }
}

export default App;
