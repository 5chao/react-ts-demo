import * as Mock from 'mockjs';

Mock.mock('/info', {
    'list|2': [
        {
            'name': '@city',
            'number|1-100': 100
        }
    ]
})

Mock.mock('/user', () => {
    return {
        'user': '@name',
        'age|18-100': 20,
        'sex': '@sex'
    }
})