import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick = () => {
    this.sendRequest({
      name: `${this.name.value ? this.name.value : "EllisDon-Rogers-Center"}`,
      "aliases": [
        "string"
      ],
      "description": `${this.desc.value ? this.desc.value : "string"}`,
      "project_type": `${this.type.value ? this.type.value : "Civil"}`,
      "meta_data": {
        "data_category": "Toronto-Downtown"
      }
    })
  }

  sendRequest = (data) => {
    console.log('sending:', data);
    $.ajax({
      type: "POST",
      url: "http://localhost:3333/v1/projects",
      dataType: "json",
      data: data,
      success: function(res){
        console.log('success:', res);
      },
      error: function(err) {
        console.log('error:', err);
      }
    });
  }

  render() {
    return (
      <div className="main">
        <div className="main__content">
          <input type="text" ref={r => this.name = r} placeholder="name"/><br/>
          <input type="text" ref={r => this.desc = r} placeholder="description"/><br/>
          <input type="text" ref={r => this.type = r} placeholder="project type"/><br/>
          <button onClick={this.handleClick}>Send Request</button>
        </div>
      </div>
    );
  }
}
 
export default App;
