import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component{
	constructor(props){
		super(props);
		this.state={
			InputValue:"hello",
			addArrayList:['吃饭','学习','休息','强身','修身养性']
		}
		this.InputChange = this.InputChange.bind(this);
		this.addArrayList = this.addArrayList.bind(this);
		this.deleteArrayList = this.deleteArrayList.bind(this);
	}
	render(){
		return(
			<Fragment>
				<input type="text" 
						value={this.state.InputValue}
						onChange={this.InputChange}
				/>
				 <button onClick={this.addArrayList}>提交</button>
				 <ul>
					
					{
						this.getTodoItem()
					}
				 </ul>
			</Fragment>
		)
	}
	InputChange(e){
		const value = e.target.value;
		this.setState(()=>({
			InputValue:value
		}));
	}
	addArrayList(){
		this.setState((prevState)=>({
			addArrayList:[...prevState.addArrayList,prevState.InputValue],
			InputValue:' '
		}))
	}
	deleteArrayList(index){
		this.setState((prevState)=>{
			const addArrayList = [...prevState.addArrayList];
			addArrayList.splice(index,1);
			return {addArrayList}
		})
	}
	getTodoItem(){
		return this.state.addArrayList.map((item,index)=>{
			return (
				<div key={index}>
					<TodoItem 
						eventEmit={this.deleteArrayList}
						index={index}
						content={item}
					/>
				</div>
			)
		})
	}
}
export default TodoList;