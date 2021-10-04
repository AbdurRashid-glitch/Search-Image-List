import React, { Component } from 'react'

class SearchInput extends Component {

     /*// to get the user Input
    onInputChange(event){
        console.log(event.target.value)

    }*/
    state = {entry: ''}

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
        
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className='field'>
                        <div className='ui massive icon input' >

                        <input placeholder='Search..'  type="text" 
                        onChange={(event)=>this.setState({entry:event.target.value})}
                        value={this.state.entry}
                        />

                        <i className='search icon' ></i>
                        </div>


                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SearchInput;