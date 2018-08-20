import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	render(){
		const {content,test,index}= this.props;
		return(
			<li key={index} onClick={this.handleClick}>
				{test}-{content}
			</li>
		)
	}
	handleClick(){
		const {deleteItem,index} = this.props;
		deleteItem(index);
		alert(this.props.index);
	}
}
TodoItem.propTypes = {
	test:PropTypes.string.isRequired,
	content:PropTypes.string,
	deleteItem:PropTypes.func,
	index:PropTypes.number
}
TodoItem.defaultProps = {
	test:"hello world"
}
export default TodoItem;