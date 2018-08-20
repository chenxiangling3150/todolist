import React,{Component,Fragment} from 'react';
class TodoItem extends Component{
	constructor(props){
		super(props);
		this.handelClick=this.handelClick.bind(this);
	}
	render(){
		const {content} = this.props;
		return(
			<Fragment>
				<li  onClick={this.handelClick}>
					{content}
				</li>
			</Fragment>
		)
	}
	handelClick(){
		const {eventEmit,index} = this.props;
		eventEmit(index)
	}
}
export default TodoItem;