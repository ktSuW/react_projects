class TimersDashboard extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={true} />
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render(){
    return (
      <div id="timers">
        <EditableTimer
          title='Learn React'
          project='Web Form'
          elapsed = '8986399'
          runnningSince={null}
          editFormOpen={true}
        />
        <EditableTimer
          title='Learn Japanese'
          project='Nihongo'
          elapsed = '7986399'
          runnningSince={null}
          editFormOpen={false}
        />
      </div>
    );
  }
}



class EditableTimer extends React.Component {
  render(){
    if(this.props.editFormOpen){
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      );
    }else{
      return (
        <Timer
          title={this.props.title}
          project = {this.props.project}
          elapsed={this.props.elapsed}
          runnningSince={this.props.runnningSince}
        />
      );
    }
  }
}

class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>{this.props.project}</div>
          <div className='center aligned description'>
            <h2>{elapsedString}</h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon'></i>
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>Start</div>
      </div>
    );
  }
}
class TimerForm extends React.Component {
  render(){
    const submitText = this.props.title ? 'Update' : 'Create';
    return(
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label htmlFor="">Title</label>
              <input type="text" defaultValue={this.props.title}/>
            </div>
            <div className="field">
              <label htmlFor="">Project</label>
              <input type="text" defaultValue={this.props.project} />
            </div>
            <div className="ui two bottom attached buttons">
              <button className="ui basic blue button">
                {submitText}
              </button>
              <button className="ui basic red button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  render(){
    if(this.props.isOpen){
      return (
        <TimerForm/>
      );
    }else{
      return (
        <div className="ui basic content center aligned segment">
          <button className="ui basic button icon">
            <i className="plus icon"></i>
          </button>
        </div>
      );
    }
  }
}



ReactDOM.render(
  <TimersDashboard/>, document.getElementById('content')
);