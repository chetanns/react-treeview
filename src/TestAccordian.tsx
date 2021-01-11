import React, {Component, useReducer} from 'react';

interface AccordianProps {
    children: React.ReactNode;
    preview: string;
}

interface AccordianState {
    open: boolean;
}

export default class TestAccordian extends Component<AccordianProps,AccordianState> {

    state = {
        open:false
    }
    
    render() {

        if(this.state.open) {
            return (
                <>
                    {this.props.children}
                    <br/>
                    <div onClick={()=> this.setState({open: false})}>Close</div>
                </>
            );
        }

        return (
            <>
                {this.props.preview}
                <br/>
                <div onClick={()=>this.setState({open:true})}>Open</div>
            </>
        )
        
    }
}