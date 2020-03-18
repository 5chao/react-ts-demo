import React, { MouseEvent } from 'react';
import axios from 'axios';
import Header from './components/header' ;
import { Button } from 'antd';
import List from './components/list';


interface IProps {
    title?: string,
    content?: string
}

interface IState {
    count: number
}

class Home extends React.Component<IProps, IState> {
    public componentWillMount(): void {
        axios.get('/info')
    }

    public clickHandle = (e: MouseEvent): void => {
        axios.get('/info').then((res: any) => {
            console.log('|--res--', res)
        })
    }

    public render() {
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
        </div>)
    }
}

export default Home