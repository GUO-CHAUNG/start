import React, { Component } from 'react';
import '../css/to.css';
import Draggable from 'react-draggable'; 

class To extends React.Component {
    state={
        targetLists: [
            { id: 1, name: "html" },
            { id: 2, name: "css" },
            { id: 3, name: "javascript" },
            { id: 4, name: "react" }
          ],
          num:3
    }
    
    render() { 
        return <div className='box'>
            <div className='left'>
                <nav>prepare</nav>
                <div className='ctext'>
                    <div className='imgbox'
                    onClick={()=>{
                        this.state.num++
                        this.state.num=this.state.num>this.state.targetLists.length?3:this.state.num
                        this.setState({
                            num:this.state.num
                        })
                        console.log(this.state.num);
                        
                    }}
                    >
                        <img width='100%' height="100%" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2F53%2Fje%2FQJ8828843288.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660730881&t=9fdfff1ce019e01c6410831feff8873d' alt=''></img>
                        
                    </div>
                    <br></br>
                    
                        {
                            this.state.num==this.state.targetLists.length?this.state.targetLists.map((v,k)=>{
                                return <div key={v.id} style={{
                                    marginTop:'20px'
                                }}>
                                  <Draggable><div> <input style={{
                                      width:'100px'
                                  }}  type='text'/></div></Draggable>
                                </div>
                            }):''
                        }
                    
                     </div>
            </div>
            <div className='center'>
                <nav>learning</nav>
                <div className='ctext'>

                </div>
            </div>
            <div className='right'>
                 <nav>complete</nav>
                 <div className='ctext'>
                     
                 </div>
            </div>
                
           
        </div>;
    }
}
 
export default To;