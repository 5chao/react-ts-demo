import React, { MouseEvent } from 'react';
import Editor from 'for-editor';
import axios from 'axios';
import Header from './components/header' ;
import { Button } from 'antd';
import List from './components/list';


interface IProps {
    title?: string,
    content?: string
}

interface IState {
    value: string,
    count: number
}

class Home extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {
            value: '',
            count: 0
        }
    }

    public componentWillMount(): void {
        axios.get('/info')
    }

    public clickHandle = (e: MouseEvent): void => {
        axios.get('/info').then((res: any) => {
            console.log('|--res--', res)
        })
    }

    public handleChange = (val: any): void => {
        this.setState({
            value: val
        })
    }

    public render() {
        const {value} = this.state
        return (<div>
            <Header />
            Home{this.props.title}
            <div>
            <Button type="primary">点击</Button>
            </div>
           <div>
               {[1, 2, 3, 4].map((item, i) => {
                   return <List key={i} onClick={this.clickHandle}><span>{item}</span></List>
               })}
           </div>
           <div style={{width:800}}>
            <Editor value={value} onChange={this.handleChange} />
           </div>
        </div>)
    }
}

export default Home