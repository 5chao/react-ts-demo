import React from 'react';
import { Button } from 'antd';
import Tesseract from 'tesseract.js';

class ImgTest extends React.Component<any, any> {


  public testImg = () => {
      console.log('|------<>---')
      Tesseract.recognize(require('../../asserts/images/textDemo.png') ,
        'eng',
        { logger: m => console.log('|----progress-', m) }
      ).then(({ data: { text } }) => {
        console.log(text);
      }).catch(err => {
        console.log('|---err---', err)
      })
  }

   public render() {
       return (<div>
           <Button type="primary" onClick={this.testImg}>图片识别</Button>
       </div>)
   }
}

export default ImgTest