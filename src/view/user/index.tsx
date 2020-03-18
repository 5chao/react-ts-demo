import * as React from 'react';
import axios from 'axios';

class User extends React.Component<any, any> {
    
    public getUserInfo = () => {
        axios.get('/user')
    }

    public render() {
        return (<div>
            User
            <div onClick={this.getUserInfo}>获取用户信息</div>
        </div>)
    }
}

export default User