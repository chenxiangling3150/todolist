import React,{Component,Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';
class TodoList extends Component{
	constructor(props){
		super(props);
		this.state={
			InputValue:"hello React",
			list:['吃饭','学习','睡觉']
		}
		
	}
	render(){
		return (
			<Fragment>
				<label htmlFor="InputArea">输入内容</label>
				<input 
					id="InputArea" 
					type="text" 
					value={this.state.InputValue}
					onChange={this.handelInput.bind(this)}
				/>
				<button onClick={this.handleSubmit.bind(this)}>
					提交
				</button>
				<ul>
					{
						this.getInfo()
					}
				</ul>
			</Fragment>
		)
	}
	getInfo(){
		return this.state.list.map((item,index)=>{
			return(
				<div>
					<TodoItem 
						content={item}
						index={index}
						deleteItem={this.handleDelete.bind(this)}
					/>
				</div>
			)
		})
	}
	handelInput(e){
		this.setState({
			InputValue:e.target.value
		})
	}
	handleSubmit(){
		this.setState({
			list:[...this.state.list,this.state.InputValue],
			InputValue:''
		})
	}
	handleDelete(index){
		let	list = [...this.state.list];
		list.splice(index,1);
		this.setState({
			list:list
		})
	}
}
export default TodoList;
